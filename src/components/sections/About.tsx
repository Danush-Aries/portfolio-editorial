import SectionHeading from "@/components/primitives/SectionHeading";

const FACTS: Array<[string, string]> = [
  ["Based", "Bangalore, India"],
  ["Studying", "CSE, GITAM Bangalore"],
  ["Class of", "2026"],
  ["Focus", "AI · security · product"],
  ["Stack", "Python, TS, Next.js, MCP"],
  ["Reading", "DDIA, Anthropic docs"],
  ["Open to", "Summer 2026 interns"],
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-32">
      <SectionHeading index="02" title="About" />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="font-sans text-[16.5px] leading-[1.7] text-white/85 [&::first-letter]:float-left [&::first-letter]:mr-2 [&::first-letter]:mt-1 [&::first-letter]:font-display [&::first-letter]:text-[68px] [&::first-letter]:font-medium [&::first-letter]:leading-[0.85] [&::first-letter]:text-accent">
            I&apos;m Dhanush — a final-year CSE student at GITAM Bangalore,
            class of 2026. I build agents that do things: read your inbox,
            triage a CVE, drive a browser, run a pentest playbook. I don&apos;t
            have a job history; I have five products in production and a habit
            of shipping the version that scares me a little. My work sits at a
            three-way intersection — AI engineering, offensive security, and
            product craft — because I think the most interesting problems are
            the ones where all three collide. If you&apos;re hiring for an
            AI-native team and you want an intern who reads the Anthropic docs
            the way most people read Twitter, I&apos;m your guy.
          </p>
        </div>
        <dl className="border-l border-white/[0.06] pl-6 md:col-span-1">
          {FACTS.map(([k, v]) => (
            <div
              key={k}
              className="flex items-baseline justify-between border-b border-white/[0.05] py-2.5 font-mono text-[11.5px] tabular-nums"
            >
              <dt className="uppercase tracking-widest text-white/40">{k}</dt>
              <dd className="text-white/80">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
