"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StatusPill from "./StatusPill";
import AccentLink from "@/components/primitives/AccentLink";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -90]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative pt-[12vh] pb-16 md:pt-[18vh]"
    >
      {/* rotated vol caption */}
      <div className="pointer-events-none absolute right-2 top-[22vh] hidden -rotate-90 origin-right font-mono text-[10px] uppercase tracking-[0.28em] text-white/25 md:block">
        Portfolio / Vol. II / 2026
      </div>

      <motion.div style={{ y }}>
        <StatusPill />

        <h1 className="mt-8 font-display font-medium leading-[0.95] tracking-[-0.02em] text-text text-[clamp(3.5rem,9vw,8rem)]">
          I build the AI,
          <br />
          I break the AI,
          <br />
          <span className="text-accent">I ship</span> with the AI.
        </h1>

        <p className="mt-10 max-w-[52ch] font-sans text-[17px] leading-[1.5] text-white/70">
          Dhanush Shankar — full-stack agent engineer working at the seam of AI,
          security, and product. Currently at GITAM Bangalore, shipping from a
          bedroom in Bangalore.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[17px]">
          <AccentLink href="#work">Read the work</AccentLink>
          <AccentLink href="mailto:danushankar3@gmail.com">
            danushankar3@gmail.com
          </AccentLink>
        </div>
      </motion.div>

      <div className="mt-[240px] h-px w-full bg-gradient-to-r from-accent/40 via-accent/15 to-transparent" />
    </section>
  );
}
