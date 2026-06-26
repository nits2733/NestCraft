"use client";

import React from "react";
import clsx from "clsx";

interface TextareaProps {
  label?: string;
  error?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  placeholder,
  name,
  required = false,
  value,
  onChange,
  className,
  rows = 4,
}) => {
  const id = name || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={clsx("flex flex-col gap-1.5", className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-[#1A1A2E]"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={clsx(
          "w-full rounded-lg border px-4 py-2.5 text-[#1A1A2E] placeholder:text-gray-400 transition-colors duration-200 resize-y",
          "focus:outline-none focus:ring-2 focus:ring-[#0D6B4E]/30 focus:border-[#0D6B4E]",
          error
            ? "border-red-500 focus:ring-red-500/30 focus:border-red-500"
            : "border-gray-300"
        )}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;
