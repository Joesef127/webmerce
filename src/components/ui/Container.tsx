import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
}

export default function Container({
  children,
  className = "",
  size = "lg",
}: ContainerProps) {
  const sizeStyles = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    full: "max-w-7xl",
  };

  return (
    <div className={`container mx-auto ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
}
