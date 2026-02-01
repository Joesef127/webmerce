import React, { JSX } from "react";

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function Heading({
  children,
  level,
  gradient = false,
  className = "",
  align = "left",
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseStyles = {
    1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight",
    2: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
    3: "text-2xl sm:text-3xl md:text-4xl font-bold leading-snug",
    4: "text-xl sm:text-2xl md:text-3xl font-bold leading-snug",
    5: "text-lg sm:text-xl md:text-2xl font-bold",
    6: "text-base sm:text-lg md:text-xl font-bold",
  };
  
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Tag
      className={`font-heading ${baseStyles[level]} ${alignStyles[align]} ${
        gradient ? "heading-gradient" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
