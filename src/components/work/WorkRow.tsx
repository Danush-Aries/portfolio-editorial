"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/lib/projects";

export default function WorkRow({ project }: { project: Project }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={`/work/${project.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="group block border-b border-white/[0.05] py-6 transition-colors hover:bg-white/[0.015] focus:bg-white/[0.02] focus:outline-none"
    >
      <div className="grid grid-cols-[2.25rem_1fr_auto_1.25rem] items-baseline gap-4">
        <div className="font-mono text-[11px] uppercase tracking-widest text-white/40">
          {project.index}
        </div>
        <div className="min-w-0">
          <div className="font-display text-[22px] font-medium leading-tight tracking-tight text-text transition-colors group-hover:text-accent">
            {project.name}
          </div>
          <div className="mt-1.5 text-[14.5px] leading-snug text-white/60">
            {project.pitch}
          </div>
        </div>
        <div className="font-mono text-[11px] uppercase tracking-widest text-white/40">
          {project.year}
        </div>
        <ChevronRight
          className="h-4 w-4 text-white/25 transition-all group-hover:translate-x-0.5 group-hover:text-accent"
          aria-hidden
        />
      </div>

      <motion.div
        initial={false}
        animate={{
          height: hover ? "auto" : 0,
          opacity: hover ? 1 : 0,
        }}
        transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
        className="overflow-hidden"
      >
        <div className="ml-[2.6rem] mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10.5px] uppercase tracking-widest text-white/40">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
