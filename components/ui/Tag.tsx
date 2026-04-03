import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "ghost";
}

export function Tag({ children, className, variant = "default" }: TagProps) {
  const variants = {
    default:
      "border border-border bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground hover:border-accent/30",
    accent:
      "border border-accent/25 bg-accent/8 text-accent font-semibold",
    ghost:
      "border-transparent bg-transparent text-muted-foreground hover:text-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-all duration-150",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
