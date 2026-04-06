import { AnimatedSection } from "@/components/animated-section";

export function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title?: string;
  description?: string;
}) {
  return (
    <AnimatedSection>
      <div className="max-w-xl space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/80">
          {eyebrow}
        </p>
        {title ? (
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className="text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </AnimatedSection>
  );
}
