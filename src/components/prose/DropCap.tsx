import type { ReactNode } from "react";

export default function DropCap({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 text-[17px] leading-[1.7] text-white/85 [&::first-letter]:float-left [&::first-letter]:mr-2.5 [&::first-letter]:mt-1 [&::first-letter]:font-display [&::first-letter]:text-[80px] [&::first-letter]:font-medium [&::first-letter]:leading-[0.85] [&::first-letter]:text-accent">
      {children}
    </p>
  );
}
