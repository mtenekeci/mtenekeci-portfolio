import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16 md:mb-24 flex flex-col items-center text-center", className)}>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-accent mt-8 rounded-full" />
    </div>
  );
}
