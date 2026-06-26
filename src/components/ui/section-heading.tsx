import React from "react";
import clsx from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "center",
  className,
}) => {
  return (
    <div
      className={clsx(
        "mb-12",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      <h2 className="text-3xl font-bold text-[#1A1A2E] md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
