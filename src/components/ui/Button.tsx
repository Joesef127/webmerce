import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
}

export default function Button({
  children,
  variant = "filled",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-1.5 sm:gap-2 font-medium rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm",
    md: "px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-6 md:py-3 md:text-lg",
    lg: "px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl",
  };
  
  const iconSizeStyles = {
    sm: "w-4 h-4 sm:w-4.5 sm:h-4.5",
    md: "w-4 h-4 sm:w-5 sm:h-5",
    lg: "w-5 h-5 sm:w-6 sm:h-6",
  };
  
  const variantStyles = {
    filled: "btn-primary",
    outline: "btn-outline",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className={iconSizeStyles[size]} />}
      {children}
      {Icon && iconPosition === "right" && <Icon className={iconSizeStyles[size]} />}
    </button>
  );
}
