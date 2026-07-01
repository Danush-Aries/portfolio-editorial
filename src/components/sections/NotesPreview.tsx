import Link from "next/link";
import SectionHeading from "@/components/primitives/SectionHeading";
import { NOTES } from "@/lib/notes";

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default function NotesPreview() {
  const latest = NOTES.slice(0, 3);
  return (
    <section id="notes" className="scroll-mt-24 pt-32">
      <SectionHeading index="04" title="Notes" />
      <ul className="space-y-8">
        {latest.map((n) => (
          <li key={n.slug}>
            <Link href={`/notes/${n.slug}`} className="group block">
              <div className="font-display text-[20px] font-medium leading-tight tracking-tight text-text transition-colors group-hover:text-accent">
                {n.title}
              </div>
              <div className="mt-1.5 text-[14px] leading-snug text-white/60">
                {n.dek}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-white/40">
                {fmt(n.date)} · {n.readingTime}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Link
          href="/notes"
          className="accent-underline font-mono text-[12px] uppercase tracking-widest text-white/70"
        >
          All notes →
        </Link>
      </div>
    </section>
  );
}
