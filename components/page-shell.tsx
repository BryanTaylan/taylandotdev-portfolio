import type { ReactNode } from "react";

import BeamsBackground from "@/components/backgrounds/BeamsBackground";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <BeamsBackground />
      <Navbar />
      <main className="relative z-10 pt-28 sm:pt-32">{children}</main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
