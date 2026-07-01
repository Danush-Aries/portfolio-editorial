export type Project = {
  index: string;
  slug: string;
  name: string;
  pitch: string;
  year: string;
  tech: string[];
  repo: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    slug: "jarvis",
    name: "Jarvis",
    pitch:
      "Personal AI co-pilot: macOS daemon + voice-first mode over Whisper, driven by Claude Code.",
    year: "2026",
    tech: ["Claude Code", "Whisper", "launchd", "Python", "MCP"],
    repo: "https://github.com/Danush-Aries/jarvis",
  },
  {
    index: "02",
    slug: "breachintel",
    name: "BreachIntel",
    pitch:
      "14-feed dark-web OSINT terminal — polls breach dumps through a single FastAPI queue.",
    year: "2026",
    tech: ["FastAPI", "Python", "Redis", "Tor", "OSINT"],
    repo: "https://github.com/Danush-Aries/breachintel",
  },
  {
    index: "03",
    slug: "cve-advisor",
    name: "CVE Advisor",
    pitch:
      "LLM-driven CVE triage sandbox — ranks disclosures by exploit likelihood and blast radius.",
    year: "2026",
    tech: ["Claude", "NVD API", "TypeScript", "Next.js"],
    repo: "https://github.com/Danush-Aries/cve-advisor",
  },
  {
    index: "04",
    slug: "computer-use-agent",
    name: "Computer-Use Agent",
    pitch:
      "Claude drives a virtual desktop — sees the screen, moves the mouse, ships the task.",
    year: "2026",
    tech: ["Claude", "Docker", "Xvfb", "PyAutoGUI"],
    repo: "https://github.com/Danush-Aries/computer-use-agent",
  },
  {
    index: "05",
    slug: "customer-support-agent",
    name: "Customer-Support Agent",
    pitch:
      "RAG chat with inline citations and extended thinking — production-ready support flow.",
    year: "2026",
    tech: ["Claude", "RAG", "Next.js", "Vercel"],
    repo: "https://github.com/Danush-Aries/customer-support-agent",
  },
  {
    index: "06",
    slug: "llm-fragility-lab",
    name: "LLM Fragility Lab",
    pitch:
      "Adversarial testing methodology for production LLMs — jailbreak, prompt-injection, and eval harness.",
    year: "2026",
    tech: ["Python", "Claude", "OpenAI", "pytest"],
    repo: "https://github.com/Danush-Aries/llm-fragility-lab",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
