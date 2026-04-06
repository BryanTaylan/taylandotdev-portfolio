import { NextResponse } from "next/server";

const LASTFM_ENDPOINT = "https://ws.audioscrobbler.com/2.0/";
// Requires these server-side environment variables in Vercel:
// LASTFM_API_KEY
// LASTFM_USERNAME
export const dynamic = "force-dynamic";
const TOP_LIST_LIMIT = 5;
const RECENT_TRACK_LIMIT = 20;
const SEVEN_DAYS_IN_SECONDS = 7 * 24 * 60 * 60;

type LastFmImage = {
  "#text": string;
  size: string;
};

type LastFmTrack = {
  name: string;
  artist: {
    "#text": string;
  };
  album?: {
    "#text": string;
  };
  image?: LastFmImage[];
  date?: {
    uts?: string;
    "#text"?: string;
  };
  "@attr"?: {
    nowplaying?: string;
  };
};

type LastFmArtist = {
  name: string;
  playcount?: string;
};

type LastFmAlbum = {
  name: string;
  playcount?: string;
  artist?: {
    name?: string;
  };
  image?: LastFmImage[];
};

type NormalizedTrack = {
  name: string;
  artist: string;
  album: string | null;
  image: string | null;
  nowPlaying: boolean;
  playedAt: string | null;
  playedAtUts: number | null;
};

function getAlbumArt(images?: LastFmImage[]) {
  return [...(images ?? [])].reverse().find((image) => image["#text"])?.["#text"] ?? null;
}

function asArray<T>(value: T | T[] | null | undefined) {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function normalizeTrack(track: LastFmTrack): NormalizedTrack {
  const playedAtUts = Number(track.date?.uts);

  return {
    name: track.name,
    artist: track.artist?.["#text"] ?? "Unknown artist",
    album: track.album?.["#text"] || null,
    image: getAlbumArt(track.image),
    nowPlaying: track["@attr"]?.nowplaying === "true",
    playedAt: track.date?.["#text"] ?? null,
    playedAtUts: Number.isFinite(playedAtUts) ? playedAtUts : null,
  };
}

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME;

  if (!apiKey || !username) {
    return NextResponse.json(
      {
        ok: false,
        error: "Last.fm is not configured.",
      },
      { status: 200 },
    );
  }

  const baseParams = {
    user: username,
    api_key: apiKey,
    format: "json",
  } as const;

  const recentParams = new URLSearchParams({
    ...baseParams,
    method: "user.getrecenttracks",
    limit: String(RECENT_TRACK_LIMIT),
  });

  const topArtistsParams = new URLSearchParams({
    ...baseParams,
    method: "user.gettopartists",
    period: "7day",
    limit: String(TOP_LIST_LIMIT),
  });

  const topAlbumsParams = new URLSearchParams({
    ...baseParams,
    method: "user.gettopalbums",
    period: "7day",
    limit: String(TOP_LIST_LIMIT),
  });

  try {
    const [recentResponse, topArtistsResponse, topAlbumsResponse] = await Promise.all([
      fetch(`${LASTFM_ENDPOINT}?${recentParams.toString()}`, { cache: "no-store" }),
      fetch(`${LASTFM_ENDPOINT}?${topArtistsParams.toString()}`, { cache: "no-store" }),
      fetch(`${LASTFM_ENDPOINT}?${topAlbumsParams.toString()}`, { cache: "no-store" }),
    ]);

    if (!recentResponse.ok || !topArtistsResponse.ok || !topAlbumsResponse.ok) {
      throw new Error("Last.fm request failed.");
    }

    const [recentData, topArtistsData, topAlbumsData] = await Promise.all([
      recentResponse.json(),
      topArtistsResponse.json(),
      topAlbumsResponse.json(),
    ]);

    const rawTracks = asArray(recentData?.recenttracks?.track);
    const tracks = rawTracks.filter(
      (track): track is LastFmTrack =>
        Boolean(track && typeof track.name === "string" && track.name.trim()),
    );

    const normalizedTracks = tracks.map(normalizeTrack);
    const weekAgoUts = Math.floor(Date.now() / 1000) - SEVEN_DAYS_IN_SECONDS;
    const weeklyTracks = normalizedTracks.filter(
      (track) => track.nowPlaying || (track.playedAtUts !== null && track.playedAtUts >= weekAgoUts),
    );
    const currentTrack =
      normalizedTracks.find((track) => track.nowPlaying) ??
      weeklyTracks.find((track) => !track.nowPlaying) ??
      null;
    const orderedTracks = currentTrack
      ? [currentTrack, ...weeklyTracks.filter((track) => track !== currentTrack)]
      : weeklyTracks;

    const rawArtists = asArray(topArtistsData?.topartists?.artist);
    const topArtists = rawArtists
      .filter(
        (artist): artist is LastFmArtist =>
          Boolean(artist && typeof artist.name === "string" && artist.name.trim()),
      )
      .map((artist: LastFmArtist) => ({
        name: artist.name,
        playcount: artist.playcount ?? null,
      }))
      .slice(0, TOP_LIST_LIMIT);

    const rawAlbums = asArray(topAlbumsData?.topalbums?.album);
    const topAlbums = rawAlbums
      .filter(
        (album): album is LastFmAlbum =>
          Boolean(album && typeof album.name === "string" && album.name.trim()),
      )
      .map((album: LastFmAlbum) => ({
        name: album.name,
        artist: album.artist?.name ?? "Unknown artist",
        playcount: album.playcount ?? null,
        image: getAlbumArt(album.image),
      }))
      .slice(0, TOP_LIST_LIMIT);

    return NextResponse.json({
      ok: true,
      username,
      current: currentTrack,
      tracks: orderedTracks,
      topArtists,
      topAlbums,
    });
  } catch (error) {
    console.error("Last.fm route failed", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Unable to load music right now.",
      },
      { status: 200 },
    );
  }
}
