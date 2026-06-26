"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";
import Card from "../ui/card";

interface TrustCard {
  icon: string;
  title: string;
  description: string;
}

const trustCards: TrustCard[] = [
  {
    icon: "📊",
    title: "Transparent Pricing",
    description:
      "Itemized BOQ before any work begins. No surprise additions, no hidden charges.",
  },
  {
    icon: "🔒",
    title: "Milestone Payments",
    description:
      "Your money is released only on verified progress. Never pay for unfinished work.",
  },
  {
    icon: "📸",
    title: "Daily Photo Updates",
    description:
      "See exactly what's happening at your home without chasing anyone.",
  },
  {
    icon: "🛡️",
    title: "1-Year Warranty",
    description:
      "Workmanship guarantee on every project. If something breaks, we fix it — free.",
  },
  {
    icon: "✅",
    title: "Vetted Professionals",
    description:
      "4-stage verification for every contractor. Background check, skill test, past work review.",
  },
  {
    icon: "📄",
    title: "Your Home Passport",
    description:
      "Digital record of every material, spec, and warranty installed. Yours forever.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const TrustSignals: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Built Different From Day One"
          subtitle="Every process designed to protect your time, money, and peace of mind."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {trustCards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card animated className="h-full">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="text-base font-semibold text-[#1A1A2E] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;
