"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/button";

const trustSignals = [
  "₹5L–₹20L Projects",
  "45-Day Delivery",
  "1-Year Warranty",
  "Zero Hidden Costs",
];

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FDF8F0] via-white to-[#0D6B4E]/5 py-20 md:py-28 lg:py-36">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQgMjJjMy0xNCAyLTI2LTE1LTM2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwRDZCNEUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold leading-tight text-[#1A1A2E] sm:text-4xl md:text-5xl lg:text-6xl">
            Just got your keys in Ranchi?{" "}
            <span className="text-[#0D6B4E]">
              Don&apos;t let contractors ruin your dream home.
            </span>
          </h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            One company. One contact. Beautiful interiors — on time, within
            budget, with a 1-year quality guarantee.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Button variant="primary" size="lg" href="/contact">
              Get Free Home Assessment
            </Button>
            <Button variant="ghost" size="lg" href="/how-it-works">
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Signals Strip */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            {trustSignals.map((signal, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 md:text-base"
              >
                <span className="h-2 w-2 rounded-full bg-[#0D6B4E]" />
                {signal}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
