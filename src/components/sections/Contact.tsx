import SectionHeading from "@/components/primitives/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pt-32">
      <SectionHeading index="05" title="Contact" />
      <h2 className="font-display text-[clamp(2.2rem,6vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-text">
        The fastest way to reach me
        <br />
        <span className="text-accent">is email.</span>
      </h2>
      <p className="mt-8 text-[18px]">
        <a
          href="mailto:danushankar3@gmail.com"
          className="accent-underline text-text"
        >
          danushankar3@gmail.com
        </a>
      </p>
      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-widest text-white/50">
        <li>
          <a
            href="https://github.com/Danush-Aries"
            target="_blank"
            rel="noopener noreferrer"
            className="accent-underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/danushankar/"
            target="_blank"
            rel="noopener noreferrer"
            className="accent-underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="/resume.pdf" className="accent-underline">
            Resume (PDF)
          </a>
        </li>
        <li>
          <span className="text-white/40">Signal — on request</span>
        </li>
      </ul>
    </section>
  );
}
