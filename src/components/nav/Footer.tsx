"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const BUILD_HASH = (process.env.NEXT_PUBLIC_BUILD_HASH ?? "local").slice(0, 7);

export default function Footer() {
  const [utc, setUtc] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const hh = String(now.getUTCHours()).padStart(2, "0");
      const mm = String(now.getUTCMinutes()).padStart(2, "0");
      setUtc(`${hh}:${mm} UTC`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-white/[0.05] bg-bg/50">
      <div className="mx-auto grid w-full max-w-[720px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-3 md:px-0">
        <div>
          <div className="font-mono-meta mb-3">Contact</div>
          <div className="space-y-1.5 text-[14px] text-white/70">
            <a
              href="mailto:danushankar3@gmail.com"
              className="accent-underline block"
            >
              danushankar3@gmail.com
            </a>
            <a
              href="https://github.com/Danush-Aries"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline block"
            >
              github.com/Danush-Aries
            </a>
          </div>
        </div>
        <div>
          <div className="font-mono-meta mb-3">Elsewhere</div>
          <div className="space-y-1.5 text-[14px] text-white/70">
            <a
              href="https://www.linkedin.com/in/danushankar/"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline block"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/dhanush_shankar"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline block"
            >
              Twitter / X
            </a>
            <Link href="/notes" className="accent-underline block">
              Notes
            </Link>
          </div>
        </div>
        <div>
          <div className="font-mono-meta mb-3">Colophon</div>
          <div className="space-y-1.5 text-[14px] text-white/70">
            <Link href="/colophon" className="accent-underline block">
              Full colophon
            </Link>
            <div className="font-mono text-[11px] text-white/40">
              {utc || "— UTC"} · {BUILD_HASH}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[720px] px-6 pb-10 md:px-0">
        <div className="font-mono text-[11px] uppercase tracking-widest text-white/30">
          © {new Date().getFullYear()} Dhanush Shankar — set in Fraunces &amp;
          Inter, printed in the dark.
        </div>
      </div>
    </footer>
  );
}
