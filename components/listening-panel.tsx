"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type Track = {
  name: string;
  artist: string;
  album: string | null;
  image: string | null;
  nowPlaying: boolean;
  playedAt: string | null;
};

type Artist = {
  name: string;
  playcount: string | null;
};

type Album = {
  name: string;
  artist: string;
  playcount: string | null;
  image: string | null;
};

type ListeningResponse =
  | {
      ok: true;
      username: string;
      current: Track | null;
      tracks: Track[];
      topArtists: Artist[];
      topAlbums: Album[];
    }
  | {
      ok: false;
      error: string;
    };

function TrackRow({ track, featured = false }: { track: Track; featured?: boolean }) {
  return (
    <div
      className={`surface-line rounded-[1.5rem] border border-white/10 bg-black/45 ${
        featured ? "p-5 sm:p-6" : "p-4"
      }`}
    >
      <div className="flex items-start gap-4">
        {track.image ? (
          <img
            src={track.image}
            alt={`${track.name} album art`}
            className={`rounded-2xl object-cover ${
              featured ? "size-20 sm:size-24" : "size-14"
            }`}
          />
        ) : (
          <div
            className={`rounded-2xl border border-white/10 bg-white/[0.03] ${
              featured ? "size-20 sm:size-24" : "size-14"
            }`}
          />
        )}
        <div className="min-w-0 space-y-1">
          <p className={`${featured ? "text-lg sm:text-xl" : "text-sm"} font-medium text-foreground`}>
            {track.name}
          </p>
          <p className={`${featured ? "text-sm" : "text-xs"} text-muted-foreground`}>
            {track.artist}
          </p>
          {track.album ? (
            <p className={`${featured ? "text-sm" : "text-xs"} text-muted-foreground/80`}>
              {track.album}
            </p>
          ) : null}
          {!track.nowPlaying && track.playedAt ? (
            <p className="pt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground/70">
              {track.playedAt}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function MetaCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="surface-line rounded-[1.75rem] border border-white/10 bg-black/45 p-5 sm:p-6">
      <div className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-foreground/80">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
}

function ArtistList({ artists }: { artists: Artist[] }) {
  if (!artists.length) {
    return <p className="text-sm text-muted-foreground">No listening activity this week.</p>;
  }

  return (
    <div className="grid gap-3">
      {artists.map((artist, index) => (
        <div
          key={artist.name}
          className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3"
        >
          <div className="min-w-0 space-y-1">
            <p className="text-sm font-medium text-foreground">
              {index + 1}. {artist.name}
            </p>
          </div>
          {artist.playcount ? (
            <p className="shrink-0 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {artist.playcount} plays
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function AlbumList({ albums }: { albums: Album[] }) {
  if (!albums.length) {
    return <p className="text-sm text-muted-foreground">No listening activity this week.</p>;
  }

  return (
    <div className="grid gap-3">
      {albums.map((album, index) => (
        <div
          key={`${album.name}-${album.artist}-${index}`}
          className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3"
        >
          {album.image ? (
            <img
              src={album.image}
              alt={`${album.name} album art`}
              className="size-12 rounded-xl object-cover"
            />
          ) : (
            <div className="size-12 rounded-xl border border-white/10 bg-white/[0.03]" />
          )}
          <div className="min-w-0 space-y-1">
            <p className="text-sm font-medium text-foreground">{album.name}</p>
            <p className="text-xs text-muted-foreground">{album.artist}</p>
            {album.playcount ? (
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground/75">
                {album.playcount} plays
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ListeningPanel() {
  const [state, setState] = useState<{
    loading: boolean;
    data: ListeningResponse | null;
  }>({
    loading: true,
    data: null,
  });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch("/api/lastfm/recent", { cache: "no-store" });
        const data = (await response.json()) as ListeningResponse;

        if (!cancelled) {
          setState({ loading: false, data });
        }
      } catch {
        if (!cancelled) {
          setState({
            loading: false,
            data: {
              ok: false,
              error: "Unable to load music right now.",
            },
          });
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  if (state.loading) {
    return (
      <div className="space-y-5">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/80">Rotation</p>
          <p className="text-sm text-muted-foreground">Loading recent listening…</p>
        </div>
        <div className="grid gap-4">
          <div className="h-32 animate-pulse rounded-[1.5rem] border border-white/8 bg-white/[0.03]" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="h-56 animate-pulse rounded-[1.5rem] border border-white/8 bg-white/[0.03]" />
            <div className="h-56 animate-pulse rounded-[1.5rem] border border-white/8 bg-white/[0.03]" />
          </div>
          <div className="h-20 animate-pulse rounded-[1.5rem] border border-white/8 bg-white/[0.03]" />
          <div className="h-20 animate-pulse rounded-[1.5rem] border border-white/8 bg-white/[0.03]" />
        </div>
      </div>
    );
  }

  if (!state.data || !state.data.ok) {
    return (
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/80">Rotation</p>
        <p className="max-w-lg text-sm leading-7 text-muted-foreground">
          {state.data?.error ?? "Listening activity is unavailable right now."}
        </p>
      </div>
    );
  }

  const current = state.data.current;
  const remaining = state.data.tracks.slice(1, 5);
  const topArtists = state.data.topArtists.slice(0, 5);
  const topAlbums = state.data.topAlbums.slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/80">
          {current?.nowPlaying ? "Now Playing" : "Recently Played"}
        </p>
      </div>

      {current ? (
        <TrackRow track={current} featured />
      ) : (
        <div className="surface-line rounded-[1.5rem] border border-white/10 bg-black/45 p-5 sm:p-6">
          <p className="text-sm text-muted-foreground">No listening activity this week.</p>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <MetaCard title="Top Artists">
          <ArtistList artists={topArtists} />
        </MetaCard>
        <MetaCard title="Top Albums">
          <AlbumList albums={topAlbums} />
        </MetaCard>
      </div>

      {remaining.length ? (
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Recent Tracks
          </p>
          <div className="grid gap-3">
            {remaining.map((track) => (
              <TrackRow
                key={`${track.name}-${track.artist}-${track.playedAt ?? "now"}`}
                track={track}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Recent Tracks
          </p>
          <p className="text-sm text-muted-foreground">No listening activity this week.</p>
        </div>
      )}
    </div>
  );
}
