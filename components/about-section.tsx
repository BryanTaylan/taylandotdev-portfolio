import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { education, skills } from "@/lib/site-content";

export function AboutSection() {
  return (
    <AnimatedSection>
      <Card className="h-full">
        <CardContent className="p-6 sm:p-7">
          <div className="grid gap-4 xl:grid-cols-[0.85fr_1.65fr]">
            <div className="rounded-[1.5rem] border border-dashed border-white/12 bg-white/[0.02] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-foreground/80">
                Education
              </p>
              <div className="mt-3 space-y-2">
                <p className="text-base font-medium text-foreground">{education.school}</p>
                <p className="text-sm text-muted-foreground">{education.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {education.gpa} • {education.graduation}
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/8 bg-secondary/25 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-foreground/80">
                Core Skills
              </p>
              <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                {[
                  ...skills.languages,
                  ...skills.frameworks,
                  ...skills.tools,
                ].map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
