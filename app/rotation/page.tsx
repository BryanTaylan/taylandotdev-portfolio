import IridescenceBackground from "@/components/backgrounds/IridescenceBackground";
import { ListeningPanel } from "@/components/listening-panel";
import { PageShell } from "@/components/page-shell";

export default function RotationPage() {
  return (
    <PageShell>
      <div className="relative min-h-screen bg-black">
        <IridescenceBackground />
        <div className="relative z-10">
          <section className="pb-24 pt-3">
            <div className="container">
              <div className="mx-auto max-w-4xl space-y-10">
                <div className="space-y-3">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/80">
                    Rotation
                  </p>
                  <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    What I&apos;ve been listening to lately.
                  </h1>
                </div>

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/55 p-6 sm:p-8">
                  <div className="relative z-10">
                    <ListeningPanel />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
