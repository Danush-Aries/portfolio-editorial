"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import { NOTES } from "@/lib/notes";

export default function CommandK() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 pt-[15vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[#141416] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Command label="Command palette">
          <Command.Input
            placeholder="Jump to work, notes, section…"
            className="w-full border-b border-white/[0.06] bg-transparent px-4 py-3.5 font-mono text-[13px] text-text placeholder:text-white/30 focus:outline-none"
          />
          <Command.List className="max-h-80 overflow-y-auto p-2 font-mono text-[12px]">
            <Command.Empty className="px-3 py-4 text-white/40">
              No matches.
            </Command.Empty>
            <Command.Group
              heading="Sections"
              className="mb-2 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-white/40"
            >
              <Item onSelect={() => go("/#work")}>Work</Item>
              <Item onSelect={() => go("/#about")}>About</Item>
              <Item onSelect={() => go("/#now")}>Now</Item>
              <Item onSelect={() => go("/#notes")}>Notes</Item>
              <Item onSelect={() => go("/#contact")}>Contact</Item>
              <Item onSelect={() => go("/colophon")}>Colophon</Item>
            </Command.Group>
            <Command.Group
              heading="Work"
              className="mb-2 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-white/40"
            >
              {PROJECTS.map((p) => (
                <Item key={p.slug} onSelect={() => go(`/work/${p.slug}`)}>
                  {p.name}{" "}
                  <span className="ml-2 text-white/40">— {p.pitch.slice(0, 40)}…</span>
                </Item>
              ))}
            </Command.Group>
            <Command.Group
              heading="Notes"
              className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-white/40"
            >
              {NOTES.map((n) => (
                <Item key={n.slug} onSelect={() => go(`/notes/${n.slug}`)}>
                  {n.title}
                </Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}

function Item({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="cursor-pointer rounded-md px-3 py-2 text-white/80 data-[selected=true]:bg-white/[0.04] data-[selected=true]:text-accent"
    >
      {children}
    </Command.Item>
  );
}
