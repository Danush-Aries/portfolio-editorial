import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, PROJECTS } from "@/lib/projects";
import CaseStudyLayout from "@/components/work/CaseStudyLayout";
import DropCap from "@/components/prose/DropCap";
import PullQuote from "@/components/prose/PullQuote";
import CodeBlock from "@/components/prose/CodeBlock";
import Diagram from "@/components/prose/Diagram";

type Params = { slug: string };

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.pitch,
  };
}

const CASE_STUDIES: Record<string, React.ReactNode> = {
  jarvis: (
    <>
      <DropCap>
        Jarvis started as one Bash script and a keyboard shortcut. The first
        version could do exactly two things: transcribe what I said into a
        text file, and pipe that file into Claude. It was ugly. It worked. Within
        a week I was using it to draft emails, plan pentest engagements, and
        talk through debugging problems while pacing around the room.
      </DropCap>

      <p>
        Two things became obvious almost immediately. First, voice-first interfaces
        change how you use an AI — you edit less, iterate more, and end up with
        drafts that sound like you. Second, the interesting engineering wasn&apos;t
        in the AI. It was in the surface: the daemon that had to survive sleep/wake
        cycles, the launchd plist that had to survive OS updates, the audio
        pipeline that had to work whether I was on AirPods, wired headphones, or
        the internal mic.
      </p>

      <h2>Architecture</h2>

      <Diagram figure="Fig. 01" caption="Jarvis event loop, macOS runtime">
        <svg
          viewBox="0 0 640 200"
          className="w-full max-w-xl"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Jarvis event loop diagram"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.25">
            <rect x="20" y="70" width="120" height="60" rx="6" />
            <rect x="190" y="70" width="120" height="60" rx="6" />
            <rect x="360" y="70" width="120" height="60" rx="6" />
            <rect x="510" y="70" width="110" height="60" rx="6" />
            <path d="M140 100 L190 100" markerEnd="url(#arrow)" />
            <path d="M310 100 L360 100" markerEnd="url(#arrow)" />
            <path d="M480 100 L510 100" markerEnd="url(#arrow)" />
          </g>
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0 0 L8 4 L0 8" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </marker>
          </defs>
          <g fill="currentColor" fontFamily="monospace" fontSize="10" textAnchor="middle">
            <text x="80" y="105">hotkey</text>
            <text x="250" y="105">whisper</text>
            <text x="420" y="105">claude</text>
            <text x="565" y="105">action</text>
          </g>
        </svg>
      </Diagram>

      <p>
        A launchd agent boots the daemon at login. A global hotkey (⌥ + Space, held)
        starts recording. Audio streams into a local whisper.cpp process. The
        transcript hits Claude via the Anthropic SDK — or, on the Claude Max path,
        via a headless Claude Code session so I don&apos;t burn my own API budget.
        The response is either spoken back (via macOS system TTS) or executed as
        a shell command, depending on how the request is framed.
      </p>

      <h2>Decisions</h2>

      <PullQuote attribution="Jarvis design principle #1">
        Every tool is deterministic and reversible. The model is the only
        source of ambiguity in the loop.
      </PullQuote>

      <p>
        The model is not allowed to run arbitrary shell commands. It calls into
        a small, curated set of Python tools — <code>open_url</code>,
        <code>send_gmail_draft</code>, <code>append_to_note</code>,
        <code>run_pentest_recipe</code>. Every tool is a pure function of its
        inputs; every side effect is logged. If Jarvis does something I didn&apos;t
        expect, I can replay the exact transcript and see which tool call
        produced the surprise.
      </p>

      <CodeBlock
        filename="jarvis/tools/append_to_note.py"
        language="python"
        code={`def append_to_note(vault: str, note: str, body: str) -> ToolResult:
    """Append body to a note in the Obsidian vault. Idempotent by (vault, note, sha)."""
    path = Path(vault).expanduser() / f"{note}.md"
    sha = hashlib.sha256(body.encode()).hexdigest()[:12]
    if sha in _seen(path):
        return ToolResult(ok=True, note="already appended")
    with path.open("a", encoding="utf-8") as fh:
        fh.write(f"\\n\\n<!-- {sha} -->\\n{body.strip()}\\n")
    return ToolResult(ok=True, note=f"appended {len(body)} chars")`}
      />

      <h2>Outcome</h2>

      <p>
        Jarvis is now my daily driver for anything longer than a two-line
        thought. I dictate essays, code reviews, and pentest reports through it.
        The v2 launch added a full MCP server so other Claude clients can call
        into the same tool surface — which meant my desktop Claude, my phone
        Claude, and my terminal Claude all shared the same brain.
      </p>
    </>
  ),
  breachintel: (
    <>
      <DropCap>
        BreachIntel is a personal dark-web monitoring rig I built after watching
        one too many corporate breaches leak on paste sites hours before the
        official disclosure. The thesis was simple: if I can poll fourteen open
        feeds and correlate them, I&apos;ll see the same signal a threat intel
        team sees, only cheaper and slightly slower.
      </DropCap>

      <p>
        The v1 was a spaghetti of six cron jobs and a SQLite database. It worked
        but sent me duplicate alerts every time two feeds carried the same dump.
        The v2 rewrite collapsed everything into a single FastAPI service with a
        Redis-backed queue, a canonicalization step, and a dedup layer keyed on
        the SHA of the plaintext leak content.
      </p>

      <Diagram figure="Fig. 01" caption="BreachIntel ingestion pipeline">
        <svg
          viewBox="0 0 640 220"
          className="w-full max-w-xl"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="BreachIntel pipeline"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.25">
            <rect x="20" y="20" width="120" height="40" rx="6" />
            <rect x="20" y="90" width="120" height="40" rx="6" />
            <rect x="20" y="160" width="120" height="40" rx="6" />
            <rect x="200" y="90" width="120" height="40" rx="6" />
            <rect x="380" y="90" width="120" height="40" rx="6" />
            <rect x="540" y="90" width="80" height="40" rx="6" />
            <path d="M140 40 L200 110" markerEnd="url(#a)" />
            <path d="M140 110 L200 110" markerEnd="url(#a)" />
            <path d="M140 180 L200 110" markerEnd="url(#a)" />
            <path d="M320 110 L380 110" markerEnd="url(#a)" />
            <path d="M500 110 L540 110" markerEnd="url(#a)" />
          </g>
          <defs>
            <marker id="a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0 0 L8 4 L0 8" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </marker>
          </defs>
          <g fill="currentColor" fontFamily="monospace" fontSize="10" textAnchor="middle">
            <text x="80" y="45">feed A</text>
            <text x="80" y="115">feed B</text>
            <text x="80" y="185">feed …N</text>
            <text x="260" y="115">queue</text>
            <text x="440" y="115">dedup</text>
            <text x="580" y="115">alert</text>
          </g>
        </svg>
      </Diagram>

      <p>
        Duplicate alerts dropped by roughly 60% on the first day. False-positive
        rate held — the canonicalization step normalizes whitespace, quote style,
        and email casing before hashing, which catches the "same dump, different
        formatting" case without collapsing genuinely different leaks.
      </p>

      <h2>What I would change</h2>
      <p>
        Move the dedup layer to a probabilistic set at scale. SHA works fine at
        14 feeds; at 40 feeds the memory pressure will show. I&apos;ll swap to a
        Bloom filter with a periodic full rebuild when I get there.
      </p>
    </>
  ),
  "cve-advisor": (
    <>
      <DropCap>
        CVE Advisor started as a hackathon submission and became the tool I
        actually use to decide which vulnerabilities are worth reading about on
        any given day. It takes an NVD feed, fans out enrichment through a
        Claude-backed pipeline, and produces a ranked list of the disclosures
        most likely to matter to me this week.
      </DropCap>

      <p>
        The core insight: severity scores are noise. A 9.8 CVSS on an
        end-of-life router in a market I don&apos;t operate in is a 0 for me.
        A 6.4 in a library I have deployed in production is a fire drill. The
        model job is not to score exploitability from scratch — it&apos;s to
        combine the numeric score with the exploit-in-the-wild signal, the
        prevalence of the affected version, and my own asset inventory.
      </p>

      <h2>Prompting strategy</h2>

      <p>
        Every CVE gets a two-stage triage. Stage one is a fast Sonnet call that
        classifies the disclosure into one of four buckets: <code>ignore</code>,
        <code>watch</code>, <code>patch-this-week</code>, or <code>fire</code>.
        Stage two only runs on <code>fire</code> — a longer Opus call with the
        full advisory, my asset list, and the request to produce a paragraph
        explaining why this matters and what to do first.
      </p>

      <PullQuote>
        Two-stage triage is how you spend Opus budget on the disclosures that
        actually deserve it.
      </PullQuote>

      <h2>What&apos;s next</h2>
      <p>
        A public read-only feed at /advisor.json so friends can point their own
        alerting at it. The private mode stays private — my asset list is not
        something I want to publish.
      </p>
    </>
  ),
  "computer-use-agent": (
    <>
      <DropCap>
        This one is Claude driving a virtual desktop. A Docker container with
        Xvfb, a browser, and a screenshot pipe. The model sees a PNG of the
        screen, chooses coordinates, and clicks. It&apos;s the closest thing I
        have to an intern who can operate legacy internal software with no
        API.
      </DropCap>

      <p>
        The interesting failure modes are not the ones people talk about.
        Yes, the model occasionally mis-clicks by 30 pixels. Yes, it sometimes
        thinks a spinner is a button. The failures that actually cost me time
        are the ones where the model is technically correct but slow: it will
        redo an OCR-heavy step every turn instead of caching the layout.
      </p>

      <h2>Loop</h2>

      <CodeBlock
        filename="agent/loop.py"
        language="python"
        code={`while not task.done:
    screenshot = capture()
    action = claude.decide(screenshot, task, history)
    result = execute(action)
    history.append((action, result))
    if len(history) > MAX_TURNS:
        raise TurnLimit()`}
      />

      <p>
        The history buffer is the load-bearing part. Give the model enough
        prior turns and it stops re-solving the layout every step; give it too
        many and the context runs out mid-task. I settled on 12 turns as the
        sweet spot for the kind of tasks I run.
      </p>

      <h2>What it&apos;s good for</h2>
      <p>
        Anything internal, unlogged, and screen-shaped. Reformatting a report
        in an ancient Windows app. Reconciling entries between two dashboards
        that don&apos;t talk to each other. Not for anything you&apos;d put on
        a customer-facing critical path.
      </p>
    </>
  ),
  "customer-support-agent": (
    <>
      <DropCap>
        A production-shaped RAG chat with citations, extended thinking, and a
        support-flow guardrail. The premise: most support conversations are 90%
        answerable from the docs, but the last 10% is where you either build
        trust or lose the customer. This agent is designed to handle the 90%
        cleanly and hand off the 10% with full context.
      </DropCap>

      <p>
        Every model answer includes inline citations pointing to the specific
        doc section it came from. If the model can&apos;t find a citation, it
        is instructed to say so and offer an escalation path — rather than
        confabulating.
      </p>

      <PullQuote>
        Extended thinking + explicit citations is the cheapest hallucination
        insurance you can buy.
      </PullQuote>

      <h2>Guardrails</h2>
      <ul>
        <li>Refund policy is a tool call, not a prompt sentence.</li>
        <li>Discount codes are pulled from a signed allow-list at answer time.</li>
        <li>PII in transcripts is redacted before it hits the vector store.</li>
        <li>Every escalation writes a Linear ticket with the redacted transcript.</li>
      </ul>

      <h2>Result</h2>
      <p>
        On the training set of 400 historical tickets, the agent resolves ~72%
        without escalation. The 28% that do escalate arrive at a human with a
        clean summary, the customer context, and the specific policy point at
        issue — which is how you actually save agent time in production.
      </p>
    </>
  ),
  "llm-fragility-lab": (
    <>
      <DropCap>
        The Fragility Lab is where I break the models I use in production
        before someone else does. It&apos;s half a test harness, half a
        methodology — a codified version of the red-team loop I run against
        every agent before shipping.
      </DropCap>

      <p>
        The lab has three components: an attack library (jailbreaks,
        prompt-injection payloads, encoded exploits), a target harness that
        exercises a target endpoint under those attacks, and an eval that
        scores each attack on whether the target refused, complied, or
        partially-complied.
      </p>

      <h2>Attack classes</h2>
      <ul>
        <li>Direct instruction override (&quot;ignore previous&quot;).</li>
        <li>Indirect injection via retrieved documents.</li>
        <li>Encoded payloads (base64, homoglyph, split-token).</li>
        <li>Role-play framing (&quot;pretend you are DAN&quot;).</li>
        <li>Tool-abuse escalation (&quot;now that you have shell, …&quot;).</li>
      </ul>

      <h2>Reporting</h2>

      <CodeBlock
        filename="lab/report.py"
        language="python"
        code={`report = {
    "target": target.id,
    "attack_class": attack.klass,
    "attack_id": attack.id,
    "outcome": outcome,            # refused | complied | partial
    "residual_risk": score,        # 0.0 - 1.0
    "notes": notes,
}
persist(report)`}
      />

      <p>
        Every finding lands in a persistent store. Regressions show up in CI
        the next time I touch the target. This is the loop that lets me claim,
        with a straight face, that I&apos;ve red-teamed my own agents before
        shipping them.
      </p>
    </>
  ),
};

export default async function WorkPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const body = CASE_STUDIES[slug];
  return <CaseStudyLayout project={project}>{body}</CaseStudyLayout>;
}
