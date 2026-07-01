"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({
  filename,
  code,
  language = "typescript",
}: {
  filename?: string;
  code: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="my-8 overflow-hidden rounded-md border border-white/[0.06] bg-ink">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-3.5 py-2">
        <div className="font-mono text-[11px] uppercase tracking-widest text-white/45">
          {filename ?? language}
        </div>
        <button
          type="button"
          onClick={copy}
          className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-widest text-white/40 transition-colors hover:text-accent"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-[1.6] text-white/85">
        <code>{code}</code>
      </pre>
    </div>
  );
}
