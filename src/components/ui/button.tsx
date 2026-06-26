"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
  href,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-[#0D6B4E] text-white hover:bg-[#0a5740] focus:ring-[#0D6B4E]",
    secondary:
      "border-2 border-[#C9A55C] text-[#C9A55C] hover:bg-[#C9A55C] hover:text-white focus:ring-[#C9A55C]",
    ghost:
      "text-[#1A1A2E] hover:bg-[#1A1A2E]/5 focus:ring-[#1A1A2E]",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg",
  };

  const combinedClassName = clsx(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};

export default Button;
