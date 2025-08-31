import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const logoSizes = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
};

const textSizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Logo SVG */}
      <div
        className={cn(
          "from-primary to-highlight flex items-center justify-center rounded-lg bg-gradient-to-br",
          logoSizes[size]
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-3/4 w-3/4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Synko Logo - A cube-like 3D shape formed by stacked layers"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <span className={cn("font-display text-fg font-bold", textSizes[size])}>
          Synko
        </span>
      )}
    </div>
  );
}
