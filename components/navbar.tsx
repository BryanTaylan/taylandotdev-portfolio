"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const content = (
    <div className="container pt-4">
      <div className="mx-auto max-w-[52rem]">
        <div className="surface-line rounded-[1.8rem] border border-white/10 bg-background/72 px-5 py-3.5 backdrop-blur-2xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="shrink-0 font-mono text-xs uppercase tracking-[0.3em] text-foreground"
            >
              {profile.name}
            </Link>
            <div className="hidden items-center gap-3 md:flex">
              <nav className="flex items-center gap-1 rounded-full border border-white/8 bg-black/15 p-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition-colors hover:text-foreground",
                      pathname === item.href
                        ? "bg-white/10 text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button asChild size="sm">
                <Link href="/Taylan_Bryan.pdf" target="_blank">
                  Resume
                </Link>
              </Button>
            </div>
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/15 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
          <AnimatePresence initial={false}>
            {menuOpen ? (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-4 space-y-3 border-t border-white/8 pt-4">
                  <nav className="grid gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "rounded-2xl px-4 py-3 text-sm transition-colors hover:text-foreground",
                          pathname === item.href
                            ? "bg-white/10 text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <Button asChild className="w-full" size="sm">
                    <Link href="/Taylan_Bryan.pdf" target="_blank">
                      Resume
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  if (!mounted) {
    return <header className="fixed inset-x-0 top-0 z-50">{content}</header>;
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {content}
    </motion.header>
  );
}
