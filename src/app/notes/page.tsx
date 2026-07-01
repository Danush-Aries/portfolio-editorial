import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/primitives/SectionHeading";
import { NOTES } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Essays and short-form writing on agents, AI security, and product craft.",
};

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default function NotesIndex() {
  const byYear = NOTES.reduce<Record<string, typeof NOTES>>((acc, n) => {
    const y = new Date(n.date).getUTCFullYear().toString();
    if (!acc[y]) acc[y] = [];
    acc[y].push(n);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="pt-4">
      <SectionHeading index="Vol. II" title="Notes" meta="Essays, in reverse chronology" />
      <div className="space-y-16">
        {years.map((year) => (
          <div key={year}>
            <div className="mb-6 font-display text-[42px] font-medium text-white/25">
              {year}
            </div>
            <ul className="space-y-8">
              {byYear[year].map((n) => (
                <li key={n.slug}>
                  <Link href={`/notes/${n.slug}`} className="group block">
                    <div className="font-display text-[22px] font-medium leading-tight tracking-tight text-text transition-colors group-hover:text-accent">
                      {n.title}
                    </div>
                    <div className="mt-2 max-w-[62ch] text-[14.5px] leading-snug text-white/60">
                      {n.dek}
                    </div>
                    <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-white/40">
                      {fmt(n.date)} · {n.readingTime}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
