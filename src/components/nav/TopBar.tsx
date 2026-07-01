"use client";

import Link from "next/link";

export default function TopBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/[0.05] bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-12 w-full max-w-[960px] items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-[18px] font-medium tracking-tight text-text hover:text-accent transition-colors"
          aria-label="Home"
        >
          d/s
        </Link>
        <nav className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-white/60">
          <Link href="/#work" className="hover:text-accent transition-colors">
            Work
          </Link>
          <Link href="/notes" className="hover:text-accent transition-colors">
            Notes
          </Link>
          <Link href="/#about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link
            href="/#contact"
            className="hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
