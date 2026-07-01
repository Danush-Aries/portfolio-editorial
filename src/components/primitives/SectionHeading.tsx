import { cn } from "@/lib/cn";

type Props = {
  index: string;
  title: string;
  meta?: string;
  className?: string;
};

export default function SectionHeading({ index, title, meta, className }: Props) {
  return (
    <div className={cn("mb-10 flex items-baseline justify-between border-b border-white/[0.06] pb-3", className)}>
      <div className="font-mono-meta">
        {index} / {title}
        {meta ? <span className="ml-3 text-white/40">— {meta}</span> : null}
      </div>
    </div>
  );
}
