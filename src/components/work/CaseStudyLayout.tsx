import Link from "next/link";
import type { ReactNode } from "react";
import { PROJECTS, type Project } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function CaseStudyLayout({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) {
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  return (
    <article className="pt-4">
      <div className="mb-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-white/50 hover:text-accent"
        >
          <ArrowLeft className="h-3 w-3" /> All work
        </Link>
      </div>

      <header className="border-b border-white/[0.06] pb-8">
        <div className="font-mono text-[11px] uppercase tracking-widest text-white/40">
          {project.index} / Case study · {project.year}
        </div>
        <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.02em] text-text">
          {project.name}
        </h1>
        <p className="mt-4 max-w-[62ch] text-[16.5px] leading-[1.55] text-white/70">
          {project.pitch}
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-white/45">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="accent-underline inline-flex items-center gap-1.5 text-white/80"
          >
            Source <ExternalLink className="h-3 w-3" />
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline inline-flex items-center gap-1.5 text-white/80"
            >
              Live <ExternalLink className="h-3 w-3" />
            </a>
          ) : null}
        </div>
      </header>

      <div className="prose-editorial mt-12">{children}</div>

      <nav className="mt-24 grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-8">
        <div>
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group block text-left"
            >
              <div className="font-mono text-[10.5px] uppercase tracking-widest text-white/40">
                <ArrowLeft className="mr-1 inline h-3 w-3" /> Previous
              </div>
              <div className="mt-1 font-display text-[18px] font-medium text-white/85 group-hover:text-accent">
                {prev.name}
              </div>
            </Link>
          ) : null}
        </div>
        <div>
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group block text-right"
            >
              <div className="font-mono text-[10.5px] uppercase tracking-widest text-white/40">
                Next <ArrowRight className="ml-1 inline h-3 w-3" />
              </div>
              <div className="mt-1 font-display text-[18px] font-medium text-white/85 group-hover:text-accent">
                {next.name}
              </div>
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  );
}
