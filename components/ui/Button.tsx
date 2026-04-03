import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  id?: string;
}

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  type = "button",
  disabled,
  className,
  id,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95";

  const variants = {
    primary:
      "bg-accent-gradient text-white shadow-md hover:shadow-lg hover:brightness-110 glow-accent-sm",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-accent/40 transition-colors",
    ghost:
      "bg-transparent hover:bg-secondary text-foreground",
  };

  const cls = cn(base, variants[variant], className);

  if (href) {
    const isExternal = !href.startsWith("#") && !href.startsWith("/");
    return (
      <a
        href={href}
        id={id}
        className={cls}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} id={id} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
