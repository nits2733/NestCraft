"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  animated = false,
}) => {
  const cardClasses = clsx(
    "rounded-2xl bg-white border border-gray-100 p-6 shadow-sm",
    className
  );

  if (animated) {
    return (
      <motion.div
        className={cardClasses}
        whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.08)" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
