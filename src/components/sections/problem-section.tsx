"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";
import Card from "../ui/card";

interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

const painPoints: PainPoint[] = [
  {
    icon: "🏃",
    title: "Contractor took advance and disappeared for 2 weeks",
    description:
      "No accountability, no timeline, no one to call. Your money is gone and so is the contractor.",
  },
  {
    icon: "💸",
    title: "Quote was ₹8L, final bill was ₹12L",
    description:
      "Hidden costs, extra charges, and surprise additions that inflate your budget by 40-50%.",
  },
  {
    icon: "📅",
    title: "Project promised in 45 days, took 4 months",
    description:
      "You're paying rent elsewhere while your new home gathers dust and broken promises.",
  },
  {
    icon: "🎨",
    title: "Painter started before carpenter finished — paint got scratched",
    description:
      "No coordination between trades. Every fix creates a new problem.",
  },
  {
    icon: "😤",
    title: "You became the unpaid project manager",
    description:
      "Chasing contractors, coordinating schedules, resolving disputes — all while doing your real job.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Sound Familiar?"
          subtitle="If you've heard these horror stories (or lived them), you're not alone."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {painPoints.map((point, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-red-100 bg-red-50/30 hover:border-red-200 transition-colors">
                <div className="text-3xl mb-3">{point.icon}</div>
                <h3 className="text-base font-semibold text-[#1A1A2E] mb-2">
                  &ldquo;{point.title}&rdquo;
                </h3>
                <p className="text-sm text-gray-600">{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-12 text-center text-lg font-medium text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          This is the standard experience for{" "}
          <span className="font-bold text-[#1A1A2E]">88% of Indian homeowners</span>.
          We&apos;re here to fix it.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
