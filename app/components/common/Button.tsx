import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/utils/cn";

type VisualProps = PropsWithChildren<{
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}>;

type LinkButtonProps = VisualProps & { to: string };
type NativeButtonProps = VisualProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: never };
type Props = LinkButtonProps | NativeButtonProps;

const styles = {
  primary: "bg-meadow-900 text-white hover:bg-meadow-950",
  secondary: "border border-gold-600/60 bg-white text-meadow-950 hover:bg-ivory",
  ghost: "text-meadow-950 hover:bg-sage-50",
};

export function Button(props: Props) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition",
    styles[props.variant ?? "primary"],
    props.className,
  );

  if ("to" in props && props.to) {
    const { to, children } = props;
    return <Link to={to} className={classes}>{children}</Link>;
  }

  const { children, className: _className, variant: _variant, ...buttonProps } = props as NativeButtonProps;
  return <button {...buttonProps} className={classes}>{children}</button>;
}
