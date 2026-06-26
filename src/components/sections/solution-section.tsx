"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Tell Us Your Vision",
    description: "Share your budget, style preferences, and timeline. We listen first.",
    icon: "💬",
  },
  {
    number: 2,
    title: "Get a Transparent Plan",
    description:
      "3D design + itemized BOQ with no hidden costs. You approve before a single nail is hammered.",
    icon: "📋",
  },
  {
    number: 3,
    title: "We Handle Everything",
    description:
      "Our vetted team executes while you track progress daily via photo updates.",
    icon: "🔨",
  },
  {
    number: 4,
    title: "Move Into Your Dream Home",
    description: "On time, within budget, with a 1-year warranty on all workmanship.",
    icon: "🏡",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const SolutionSection: React.FC = () => {
  return (
    <section className="bg-[#FDF8F0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="One Company. Zero Chaos."
          subtitle="From vision to move-in, we manage every detail so you don't have to."
        />

        <motion.div
          className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting line (desktop only) */}
          <div className="absolute top-16 left-[12.5%] right-[12.5%] hidden h-0.5 bg-gradient-to-r from-[#0D6B4E]/20 via-[#0D6B4E]/40 to-[#0D6B4E]/20 lg:block" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#0D6B4E] text-white text-xl font-bold shadow-lg">
                {step.number}
              </div>

              <div className="mt-2 text-2xl">{step.icon}</div>

              <h3 className="mt-3 text-lg font-semibold text-[#1A1A2E]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 max-w-[250px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
