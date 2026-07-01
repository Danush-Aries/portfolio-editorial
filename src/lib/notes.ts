export type Note = {
  slug: string;
  title: string;
  dek: string;
  date: string; // ISO
  readingTime: string;
  body: string;
};

export const NOTES: Note[] = [
  {
    slug: "why-agents-need-tools",
    title: "Why agents need tools",
    dek: "An agent without a tool surface is just a chatbot with better prose. The thesis of everything I ship.",
    date: "2026-06-11",
    readingTime: "6 min read",
    body: `An agent is only as useful as the surface it can touch. Give a model access to a browser, a shell, an email inbox, and a filesystem — you get a colleague. Give it none of those — you get a smart intern with their hands tied.

The last two years of AI product work have been a slow, expensive realization of this. The models are strong enough. The prompts are debuggable. What's missing, almost every time, is the tool layer — the careful, boring work of describing to the model what it can do, and giving it clean, deterministic ways to do it.

I build tools first, models second. When I sit down to design an agent, I start by asking: what verbs does this agent need? Read email. Run a query. Post a Slack message. Call an internal API. Then I build those verbs as MCP tools or function-calling schemas, test each in isolation, and only then let the model orchestrate.

The best AI products of 2026 aren't the ones with the smartest models. They're the ones with the most surgical tool layer. Anthropic's Computer Use is a tool call. Claude Code is a tool call. Even RAG — the least glamorous acronym in the industry — is a tool call. The pattern is clear.

If you're hiring for an AI-native team and you want people who understand this: I'm your guy.`,
  },
  {
    slug: "red-teaming-your-own-agent",
    title: "Red-teaming your own agent",
    dek: "Every agent I ship gets attacked by me first. Here's the loop I run before anyone else sees it.",
    date: "2026-05-30",
    readingTime: "8 min read",
    body: `Before an agent leaves my laptop, it has to survive me trying to break it. This isn't optional. This is the loop.

Step one: the jailbreak pass. I try every known prompt-injection trick — indirect injection through retrieved documents, encoded payloads, role-play framing, "ignore previous instructions" in twelve languages. If the agent has a system prompt, I try to exfiltrate it. If it has tools, I try to make it call them on my behalf against another user.

Step two: the tool-abuse pass. What happens if the model decides to send 10,000 emails? What if it deletes the wrong file? What if it calls an expensive API in a loop? Every tool gets rate-limited, sandboxed, and reversibility-checked. Destructive actions require an explicit confirm step.

Step three: the eval harness. I write ~50 adversarial prompts targeting the specific failure modes of this agent — the ones that would embarrass me in production. These become CI. Every commit runs them. Regressions get flagged before I open a PR.

Step four: honest reporting. When the agent fails a case, I don't quietly patch the prompt. I document the failure, the fix, and the residual risk. Because the next attacker will be someone else, and they will be smarter.

This is the throughline of my portfolio. I build the AI, I break the AI, I ship with the AI. The break step is what makes the ship step responsible.`,
  },
  {
    slug: "vibe-coding-a-manifesto",
    title: "Vibe-coding: a manifesto",
    dek: "Vibe-coding isn't a shortcut. It's an engineering discipline where the human sets taste and the model does the typing.",
    date: "2026-05-14",
    readingTime: "4 min read",
    body: `Vibe-coding gets dismissed as "just prompting the AI to write your code." That framing is wrong, and it's holding the discipline back.

Real vibe-coding is closer to how a director works with a cinematographer. The director has taste — knows the shot they want, why it matters, how it fits the story. The cinematographer has the technique — knows the lens, the light, the mechanics of getting the image on film. Neither can do the other's job. Together, they ship.

When I vibe-code, I bring taste and system architecture. I know what I want the code to do, how it should behave under load, what the API contract is, what the failure modes are. The model brings velocity and pattern-matching. It knows the idiomatic way to write a FastAPI endpoint faster than I can type it.

The discipline is in the interface. You have to give the model enough context to make good decisions. You have to review every diff. You have to catch the moments where the model is confidently wrong. You have to hold the shape of the whole system in your head, because the model can only see the current file.

Done right, vibe-coding is not a shortcut. It's the highest-leverage form of engineering I've ever practiced. I ship five products a year now. Before Claude Code, that number was one.`,
  },
];

export function getNote(slug: string): Note | undefined {
  return NOTES.find((n) => n.slug === slug);
}
