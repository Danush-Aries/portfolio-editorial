import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export default function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("prose-editorial", className)}>{children}</div>
  );
}
