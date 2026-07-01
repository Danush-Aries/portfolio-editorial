export default function PullQuote({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="my-10 border-l-2 border-accent pl-6">
      <blockquote className="font-display text-[1.6rem] italic leading-[1.25] text-text">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest text-white/40">
          — {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
