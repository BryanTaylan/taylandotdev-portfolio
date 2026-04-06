import Link from "next/link";

import { profile } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/8 pb-10 pt-6">
      <div className="container flex justify-end text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <Link
            href="/Taylan_Bryan.pdf"
            target="_blank"
            className="transition-colors hover:text-foreground"
          >
            Resume
          </Link>
          <Link href="/blog" className="transition-colors hover:text-foreground">
            Blog
          </Link>
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
}
