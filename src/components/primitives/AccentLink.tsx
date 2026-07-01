import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Props = ComponentPropsWithoutRef<typeof Link> & {
  external?: boolean;
};

export default function AccentLink({
  className,
  external,
  children,
  ...rest
}: Props) {
  const extraProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      {...rest}
      {...extraProps}
      className={cn(
        "accent-underline inline text-text hover:text-accent transition-colors",
        className,
      )}
    >
      {children}
    </Link>
  );
}
