import Link from "next/link";

export default function Colophon() {
  return (
    <section className="scroll-mt-24 pt-32">
      <p className="text-[14.5px] leading-relaxed text-white/55">
        Built with Next.js 16, Tailwind v4, Fraunces &amp; Inter. Set in the
        dark. Source on{" "}
        <a
          href="https://github.com/Danush-Aries"
          target="_blank"
          rel="noopener noreferrer"
          className="accent-underline"
        >
          GitHub
        </a>
        .{" "}
        <Link href="/colophon" className="accent-underline">
          Full colophon →
        </Link>
      </p>
    </section>
  );
}
