import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";

export function OutsideSection() {
  return (
    <AnimatedSection>
      <div className="max-w-xl">
        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
          Outside of work, I&apos;m usually watching my favorite soccer team Chelsea,
          playing guitar, in the gym, or listening to{" "}
          <Link href="/rotation" className="music-link">
            music
          </Link>
          .
        </p>
      </div>
    </AnimatedSection>
  );
}
