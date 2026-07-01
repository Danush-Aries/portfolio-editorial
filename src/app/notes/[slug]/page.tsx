import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getNote, NOTES } from "@/lib/notes";
import DropCap from "@/components/prose/DropCap";

type Params = { slug: string };

export async function generateStaticParams() {
  return NOTES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) return {};
  return { title: n.title, description: n.dek };
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default async function NotePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const paragraphs = note.body.split(/\n\n+/);
  const [first, ...rest] = paragraphs;

  return (
    <article className="pt-4">
      <div className="mb-10">
        <Link
          href="/notes"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-white/50 hover:text-accent"
        >
          <ArrowLeft className="h-3 w-3" /> All notes
        </Link>
      </div>

      <header className="border-b border-white/[0.06] pb-8">
        <div className="font-mono text-[11px] uppercase tracking-widest text-white/40">
          {fmt(note.date)} · {note.readingTime}
        </div>
        <h1 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.8rem)] font-medium leading-[1.05] tracking-[-0.02em] text-text">
          {note.title}
        </h1>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.5] text-white/70">
          {note.dek}
        </p>
      </header>

      <div className="prose-editorial mt-12">
        <DropCap>{first}</DropCap>
        {rest.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
