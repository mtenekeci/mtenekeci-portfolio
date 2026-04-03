import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  type = "button",
  disabled,
  className,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-sm",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-border bg-transparent hover:bg-secondary text-foreground",
    ghost: "bg-transparent hover:bg-secondary text-foreground",
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (href) {
    const isExternal = !href.startsWith("#") && !href.startsWith("/");
    return (
      <a
        href={href}
        className={combinedClassName}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
}
