import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isLeft = align === "left";

  return (
    <div
      className={cn(
        "mb-16 md:mb-20 flex flex-col",
        isLeft ? "items-start text-left" : "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">
          <span className="w-5 h-px bg-accent" />
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "text-4xl md:text-5xl font-bold tracking-tight gradient-text",
          subtitle ? "mb-5" : "mb-0"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground font-medium leading-relaxed",
            isLeft ? "max-w-2xl" : "max-w-3xl"
          )}
        >
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          "mt-6 h-px w-16 bg-accent-gradient rounded-full",
          isLeft ? "" : ""
        )}
      />
    </div>
  );
}
