import type { Metadata } from "next";
import SectionHeading from "@/components/primitives/SectionHeading";

export const metadata: Metadata = {
  title: "Colophon",
  description: "Type stack, palette, and toolchain behind the site.",
};

const TYPE = [
  ["Display", "Fraunces (variable, opsz 144, wght 400–600)"],
  ["Body", "Inter (variable, wght 400–600)"],
  ["Mono", "JetBrains Mono (variable, wght 400–500)"],
];

const PALETTE = [
  ["--bg", "#0B0B0C", "Near-ink background"],
  ["--ink", "#050506", "Code-block background"],
  ["--surface", "#141416", "Lifted cards"],
  ["--text", "#F5F1EA", "Warm off-white body"],
  ["--accent", "#E8A24C", "Reading-lamp amber"],
  ["--accent-2", "#8A8078", "Stone grey secondary"],
];

const STACK = [
  ["Framework", "Next.js 16 (App Router, Turbopack)"],
  ["Styling", "Tailwind CSS v4"],
  ["Animation", "Framer Motion 11"],
  ["Icons", "Lucide"],
  ["Palette", "cmdk"],
  ["Analytics", "Vercel Analytics + Speed Insights"],
  ["Host", "Vercel"],
  ["Repo", "github.com/Danush-Aries/portfolio-editorial"],
];

export default function ColophonPage() {
  return (
    <div className="pt-4">
      <SectionHeading index="Vol. II" title="Colophon" meta="How this site is made" />

      <p className="max-w-[62ch] text-[16px] leading-[1.65] text-white/80">
        The site is a personal engineering journal, set in the dark. Every
        element has weight. Nothing shouts. If a hiring manager scrolls three
        screens without reading a project name and still thinks &quot;this
        person has taste,&quot; the design has done its job.
      </p>

      <section className="mt-14">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-white/40">
          Type stack
        </div>
        <dl className="border-t border-white/[0.06]">
          {TYPE.map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-[8rem_1fr] gap-4 border-b border-white/[0.05] py-3"
            >
              <dt className="font-mono text-[11.5px] uppercase tracking-widest text-white/45">
                {k}
              </dt>
              <dd className="text-[14.5px] text-white/85">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-white/40">
          Palette
        </div>
        <dl className="border-t border-white/[0.06]">
          {PALETTE.map(([token, hex, note]) => (
            <div
              key={token}
              className="grid grid-cols-[7rem_6rem_1fr_2rem] items-center gap-4 border-b border-white/[0.05] py-3"
            >
              <dt className="font-mono text-[11.5px] uppercase tracking-widest text-white/45">
                {token}
              </dt>
              <dd className="font-mono text-[12px] tabular-nums text-white/80">
                {hex}
              </dd>
              <dd className="text-[13.5px] text-white/60">{note}</dd>
              <span
                aria-hidden
                className="ml-auto block h-5 w-5 rounded-sm border border-white/10"
                style={{ background: hex }}
              />
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-white/40">
          Build &amp; deploy
        </div>
        <dl className="border-t border-white/[0.06]">
          {STACK.map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-[8rem_1fr] gap-4 border-b border-white/[0.05] py-3"
            >
              <dt className="font-mono text-[11.5px] uppercase tracking-widest text-white/45">
                {k}
              </dt>
              <dd className="text-[14.5px] text-white/85">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14 border-t border-white/[0.06] pt-6">
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-white/50">
          <a
            href="https://github.com/Danush-Aries/portfolio-editorial"
            target="_blank"
            rel="noopener noreferrer"
            className="accent-underline"
          >
            Source repo
          </a>
          <span className="text-white/40">Uptime · 100%</span>
          <span className="text-white/40">
            Deployed via Vercel on push to main
          </span>
        </div>
      </section>
    </div>
  );
}
