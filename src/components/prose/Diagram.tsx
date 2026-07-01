import type { ReactNode } from "react";

export default function Diagram({
  figure,
  caption,
  children,
}: {
  figure: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-10 rounded-md border border-white/[0.06] bg-surface/40 p-6">
      <div className="flex items-center justify-center overflow-x-auto py-2 text-white/80">
        {children}
      </div>
      <figcaption className="mt-4 border-t border-white/[0.05] pt-3 font-mono text-[11px] uppercase tracking-widest text-white/50">
        {figure} · {caption}
      </figcaption>
    </figure>
  );
}
