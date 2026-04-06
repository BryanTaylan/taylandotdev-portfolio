"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    title: "Agentic Nuclear Reactor",
    date: "March 2026",
    image: "/agentic-reactor-blog.jpeg",
    imageAlt: "Agentic Nuclear Reactor team after winning at HackUSF",
    preview:
      "In March 2026, we worked on Agentic Nuclear Reactor at HackUSF, and it was honestly one of the coolest projects I’ve been a part of.",
    content:
      "In March 2026, we worked on Agentic Nuclear Reactor at HackUSF, and it was honestly one of the coolest projects I’ve been a part of. The idea originally came from Patrick, and he was planning on going solo, but since it was going to be his first hackathon, I really wanted him to experience it as part of a team, so the four of us, me, Kai, Patrick, and Dawn, ended up building it together. One thing that stood out right away was that it was only a 24-hour hackathon instead of the usual 36, which was kind of weird at first but actually made the whole experience feel more focused, and the sleep schedule wasn’t nearly as bad as usual. We were also in the same room as Adrian, Michael, Jason, and Carlos, which made the whole thing even more fun, it honestly felt like a big hangout, and I think it brought all of us closer together while we were building. As we kept working, there was this feeling in the back of my mind that this project was actually something special, and I remember thinking we had a real shot at winning 1st overall. During judging, we got approached by 16 judges, which was honestly insane and not something I had experienced before, and it made everything feel even more real. When we actually ended up winning, it was just pure excitement, especially knowing how much effort everyone put in and how well everything came together. It was also really cool getting to work alongside my girlfriend during the hackathon, which made the whole experience even more memorable. Overall, it was one of those projects that just clicked, and it definitely made me even more excited for the next hackathon.",
  },
  {
    title: "When One Door Closes Another Opens",
    date: "January 2026",
    image: "/one-door-blog.png",
    imageAlt: "A candid moment between Bryan and a teammate",
    preview:
      "I ran for Treasurer because it was a position I had my eyes on for a while, and I really wanted the opportunity to take on more responsibility within the club.",
    content:
      "I ran for Treasurer because it was a position I had my eyes on for a while, and I really wanted the opportunity to take on more responsibility within the club. Going into the election, I felt good about it, especially since I was leading during preliminaries, which made it feel like things were lining up the way I had hoped. But when it came time for the final vote, I ended up losing to Jason, who is now our current Treasurer. Honestly, though, it’s hard to be upset about it because we had one of the closest elections in Knight Hacks history, and it really showed how strong the candidates were across the board. Jason absolutely deserved it, and I know the Treasurer position is in good hands. It was definitely disappointing in the moment, especially after putting in the effort and seeing things go well early on, but it also gave me a chance to step back and think about how else I could still contribute in a meaningful way. That ended up leading me to becoming Sponsorship Director, which turned out to be an opportunity I didn’t originally plan for but am really glad I took. It’s been a different kind of responsibility, but one that’s helped me grow in new ways and stay involved at a deeper level. Looking back, not getting the role I initially wanted ended up opening a different door that I probably wouldn’t have considered otherwise.",
  },
  {
    title: "Winning with Systema",
    date: "October 2025",
    image: "/systema-blog.jpg",
    imageAlt: "Systema team after winning in October 2025",
    preview:
      "In October 2025, I built Systema with my teammates Nick, Harry, and Ethan, and it honestly ended up being one of the most memorable projects I’ve worked on.",
    content:
      "In October 2025, I built Systema with my teammates Nick, Harry, and Ethan, and it honestly ended up being one of the most memorable projects I’ve worked on. I mainly focused on integrating the Gemini API, especially for grading submissions and handling live proctoring, which was really cool to see working in real time. For most of the project, things were moving pretty fast, but everything got super stressful right near the end when we ran into a huge merge conflict about two hours before submission. It was one of those moments where it felt like everything might just break after all the work we put in, and we were all scrambling trying to figure out what went wrong and how to fix it without losing important pieces of the project. It was definitely chaotic, but we managed to pull it together just in time and actually get a working version submitted. At that point, we were just happy we didn’t completely crash at the finish line, so when Systema ended up winning, it was honestly kind of surreal. It made everything feel worth it, especially knowing how close we were to not even having something stable to show.",
  },
  {
    title: "Joining the Dev Team",
    date: "September 2025",
    image: "/dev-team-blog.png",
    imageAlt: "Knight Hacks developer team announcement graphic",
    preview:
      "In September 2025, I applied to join the dev team, and honestly, I completely misunderstood what the application was asking for.",
    content:
      "In September 2025, I applied to join the dev team, and honestly, I completely misunderstood what the application was asking for. The task was supposed to be building a small page inside the club’s monorepo, but instead I went off and built my own full portfolio page from scratch. At the time, I just thought I was supposed to show what I could build, so I leaned into it and treated it like a real project. Looking back, it was definitely not what they were expecting, but it ended up working out in a way I didn’t expect. Because I went a bit overboard and built something more complete, I ended up getting accepted onto the team. It was one of those moments where doing more than asked actually paid off. I’m really excited to keep learning, improve as a developer, and contribute to real projects with the team going forward.",
  },
];

export function BlogList() {
  const [activePost, setActivePost] = useState<(typeof posts)[number] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!activePost) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePost(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePost]);

  return (
    <>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <AnimatedSection key={post.title} delay={index * 0.07}>
            <Card>
              <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
                <div className="max-w-2xl space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-foreground/80">
                    {post.date}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">{post.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{post.preview}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePost(post)}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Read More
                  <ArrowRight className="size-4" />
                </button>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {activePost ? (
                <>
                  <motion.div
                    className="fixed inset-0 z-[190] bg-black/94 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <button
                      type="button"
                      aria-label="Close blog post"
                      className="absolute inset-0"
                      onClick={() => setActivePost(null)}
                    />
                  </motion.div>
                  <motion.div
                    className="fixed inset-0 z-[200] overflow-y-auto px-4 py-6 sm:px-6 sm:py-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: 12 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="relative mx-auto w-full max-w-2xl pt-16 sm:pt-20"
                    >
                      <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-[rgba(0,0,0,0.92)]"
                        />
                        <div className="relative z-10 space-y-6 p-6 sm:space-y-8 sm:p-8">
                          <div className="flex items-start justify-between gap-5">
                            <div className="space-y-2">
                              <p className="font-mono text-xs uppercase tracking-[0.24em] text-foreground/85">
                                {activePost.date}
                              </p>
                              <h2 className="max-w-[16ch] text-2xl font-semibold tracking-tight text-foreground sm:text-[2rem]">
                                {activePost.title}
                              </h2>
                            </div>
                            <Button
                              type="button"
                              size="icon"
                              variant="outline"
                              onClick={() => setActivePost(null)}
                              aria-label="Close blog post"
                              className="shrink-0"
                            >
                              <X className="size-4" />
                            </Button>
                          </div>

                          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02]">
                            {activePost.image ? (
                              <div className="relative aspect-[16/9] w-full">
                                <Image
                                  src={activePost.image}
                                  alt={activePost.imageAlt ?? "Blog post image"}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, 640px"
                                />
                              </div>
                            ) : (
                              <div className="flex min-h-[220px] items-center justify-center">
                                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                                  Photo Placeholder
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="max-w-none">
                            <p className="max-w-[66ch] text-sm leading-7 text-foreground/88 sm:text-[15px] sm:leading-8">
                              {activePost.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}
