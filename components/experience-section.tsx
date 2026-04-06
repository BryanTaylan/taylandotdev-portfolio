import { AnimatedSection } from "@/components/animated-section";
import { experienceItems } from "@/lib/site-content";

export function ExperienceSection() {
  return (
    <div className="space-y-5">
      {experienceItems.map((item, index) => (
        <AnimatedSection
          key={`${item.company}-${item.role}-${item.period}`}
          delay={index * 0.08}
        >
          <div className="grid gap-5 rounded-[1.75rem] border border-white/8 bg-card/40 p-5 backdrop-blur md:grid-cols-[190px_minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start md:p-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/80">
                {item.period}
              </p>
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.company} • {item.location}
                </p>
              </div>
            </div>
            <ul className="grid gap-2 text-sm leading-6 text-muted-foreground">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
