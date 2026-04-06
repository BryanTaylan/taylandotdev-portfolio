"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, FileText, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/site-content";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const heroHighlights = profile.highlights.filter(
    (highlight) => highlight !== "2 award-winning projects",
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-1 sm:pb-20 sm:pt-2">
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.72fr)] lg:items-start">
          <div className="w-full max-w-2xl">
            {mounted ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm text-foreground/90 backdrop-blur-xl"
                >
                  <Sparkles className="size-4 text-foreground/80" />
                  <span className="font-medium">Software Engineer</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.2 }}
                  className="space-y-3"
                >
                  <h1 className="max-w-none text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.03em] text-foreground sm:text-[3.2rem] lg:text-[3.8rem]">
                    <span className="text-foreground/96">Hi, I&apos;m Bryan.</span>
                  </h1>
                  <div className="max-w-lg">
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      {heroHighlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-2"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mt-6 flex flex-col gap-4 sm:flex-row"
                >
                  <Button asChild size="lg">
                    <Link href="#projects">
                      View Projects
                      <ArrowDownRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/Taylan_Bryan.pdf" target="_blank">
                      Resume
                      <FileText className="size-4" />
                    </Link>
                  </Button>
                </motion.div>
              </>
            ) : (
              <>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm text-foreground/90 backdrop-blur-xl">
                  <Sparkles className="size-4 text-foreground/80" />
                  <span className="font-medium">Software Engineer</span>
                </div>
                <div className="space-y-3">
                  <h1 className="max-w-none text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.03em] text-foreground sm:text-[3.2rem] lg:text-[3.8rem]">
                    <span className="text-foreground/96">Hi, I&apos;m Bryan.</span>
                  </h1>
                  <div className="max-w-lg">
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      {heroHighlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-2"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="#projects">
                      View Projects
                      <ArrowDownRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/Taylan_Bryan.pdf" target="_blank">
                      Resume
                      <FileText className="size-4" />
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
          <div className="hidden lg:flex lg:justify-end">
            <div className="relative aspect-[4/5] w-[240px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] xl:w-[280px]">
              <Image
                src="/bryan-hero.jpg"
                alt="Bryan Taylan"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 360px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
