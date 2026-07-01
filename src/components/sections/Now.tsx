import SectionHeading from "@/components/primitives/SectionHeading";

const ITEMS = [
  {
    date: "2026-06-24",
    text: "Shipped Jarvis v2 — added a macOS launchd daemon and voice-first mode over Whisper. Zero-API-key path via Claude Max now works end-to-end.",
  },
  {
    date: "2026-06-18",
    text: "Rewrote the BreachIntel dark-web monitor to poll 14 feeds through a single FastAPI queue. Cut duplicate alerts by 60%.",
  },
  {
    date: "2026-06-11",
    text: "Started a weekly essay habit at /notes. First one — “Why agents need tools” — up now.",
  },
  {
    date: "2026-06-02",
    text: "Reading Designing Data-Intensive Applications (Kleppmann) and re-reading the Anthropic tool-use cookbook for the fifth time.",
  },
  {
    date: "2026-05-28",
    text: "Open to Summer 2026 internships. AI/ML, LLM infra, or red-team roles. Remote or Bangalore.",
  },
];

export default function Now() {
  return (
    <section id="now" className="scroll-mt-24 pt-32">
      <SectionHeading index="03" title="Now" meta="Updated July 2026" />
      <ul className="space-y-5">
        {ITEMS.map((it) => (
          <li key={it.date} className="grid grid-cols-[7rem_1fr] gap-4">
            <span className="pt-1 font-mono text-[11.5px] tabular-nums text-white/45">
              {it.date}
            </span>
            <span className="text-[15.5px] leading-[1.6] text-white/85">
              {it.text}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-8 font-mono text-[10.5px] uppercase tracking-widest text-white/30">
        Inspired by{" "}
        <a
          href="https://nownownow.com"
          target="_blank"
          rel="noopener noreferrer"
          className="accent-underline"
        >
          nownownow.com
        </a>
      </p>
    </section>
  );
}
