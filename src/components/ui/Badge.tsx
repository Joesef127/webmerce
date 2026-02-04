import { LucideIcon } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "default" | "overlay";
  className?: string;
}

export default function Badge({ 
  children, 
  icon: Icon, 
  variant = "default",
  className = "" 
}: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full font-medium text-[var(--color-primary)]";
  
  const variantClasses = {
    default: "gap-2 px-4 py-2 bg-[var(--color-primary)]/10 dark:bg-[var(--color-primary)]/20 text-xs sm:text-sm",
    overlay: "gap-2 px-2 py-2 bg-[var(--color-primary)]/20 backdrop-blur-sm border border-[var(--color-primary)]/30 text-xs sm:text-sm md:text-base"
  };

  const responsiveClasses = `gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm ${variantClasses[variant]}`;

  return (
    <div className={`${baseClasses} ${responsiveClasses} ${className}`}>
      {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5" />}
      <span className="leading-tight">{children}</span>
    </div>
  );
}
