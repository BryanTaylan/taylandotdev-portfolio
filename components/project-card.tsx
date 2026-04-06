"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ProjectCardProps = {
  title: string;
  description: string;
  summary?: string;
  bullets?: readonly string[];
  tags: readonly string[];
  accent: string;
  award?: string;
  awardContext?: string;
  links?: {
    devpost?: string;
  };
};

export function ProjectCard({
  title,
  description,
  summary,
  bullets,
  tags,
  accent,
  award,
  awardContext,
  links,
}: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
      <Card className="group h-full overflow-hidden">
        <CardContent className="grid h-full gap-5 p-5 md:grid-cols-[280px_minmax(0,1fr)] md:items-start md:p-6">
          <div
            className="relative h-full min-h-[210px] overflow-hidden rounded-[1.35rem] border border-white/10 p-5"
            style={{ background: accent }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/70">
                <span>Project</span>
                {award ? (
                  <span
                    className="inline-flex items-center gap-1 rounded-full border bg-white/[0.02] px-3 py-1 text-[10px] font-medium tracking-[0.18em]"
                    style={{
                      borderColor: "#C9A24A",
                      color: "#C9A24A",
                    }}
                  >
                    <Award className="size-3" />
                    Winner
                  </span>
                ) : null}
              </div>
              <div className="space-y-2">
                <h3 className="max-w-sm text-xl font-semibold leading-tight text-white">
                  {title}
                </h3>
                {award ? (
                  <p className="max-w-sm text-sm leading-6 text-white/85">
                    {award}
                    {awardContext ? ` • ${awardContext}` : ""}
                  </p>
                ) : summary ? (
                  <p className="max-w-sm text-sm leading-6 text-white/80">{summary ?? description}</p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-4">
            <div className="space-y-1.5">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
            </div>
            {bullets?.length ? (
              <ul className="grid gap-2 text-sm leading-6 text-muted-foreground">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 5).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            {award && links?.devpost ? (
              <div className="mt-auto flex flex-wrap gap-3">
                <Button asChild size="sm" variant="outline">
                  <a href={links.devpost} aria-label={`${title} Devpost link`}>
                    <ArrowUpRight className="size-4" />
                    Devpost
                  </a>
                </Button>
              </div>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
