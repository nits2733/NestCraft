import React from "react";
import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "highlight";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
}) => {
  const variantStyles = {
    default: "bg-[#0D6B4E]/10 text-[#0D6B4E]",
    outline: "border border-[#C9A55C] text-[#C9A55C]",
    highlight: "bg-[#C9A55C]/15 text-[#C9A55C]",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
