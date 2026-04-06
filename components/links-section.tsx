import { ArrowUpRight, FileText, Guitar, Github, Linkedin, Mail } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { externalLinks } from "@/lib/site-content";

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  resume: FileText,
  guitar: Guitar,
} as const;

export function LinksSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {externalLinks.map((link, index) => {
        const Icon = iconMap[link.kind];
        const isGuitar = link.kind === "guitar";
        const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto:");

        return (
          <AnimatedSection key={link.label} delay={index * 0.05}>
            <a
              href={link.href}
              aria-label={`${link.label} link`}
              className={`block h-full ${isGuitar ? "group" : ""}`}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
            >
              <Card
                className={`h-full overflow-hidden transition-colors ${isGuitar ? "relative isolate" : ""}`}
              >
                {isGuitar ? (
                  <>
                    <div
                      aria-hidden="true"
                      className="absolute inset-[-28%] opacity-80 blur-[72px] transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at 22% 26%, rgba(120,84,255,0.95), transparent 28%), radial-gradient(circle at 80% 72%, rgba(70,146,255,0.75), transparent 30%), radial-gradient(circle at 52% 50%, rgba(238,92,180,0.58), transparent 40%)",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-[-10%] opacity-55 blur-[36px] transition-opacity duration-300 group-hover:opacity-70"
                      style={{
                        background:
                          "radial-gradient(circle at 25% 35%, rgba(170,116,255,0.55), transparent 30%), radial-gradient(circle at 70% 65%, rgba(92,164,255,0.42), transparent 32%)",
                      }}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-black/22" />
                  </>
                ) : null}
                <CardContent className="relative z-10 flex h-full items-center justify-between gap-4 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-foreground">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.value}</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground transition-colors group-hover:text-foreground">
                    <ArrowUpRight className="size-4" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
