"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "12+", label: "Projects in Pipeline" },
  { value: "25+", label: "Verified Contractors" },
  { value: "~20%", label: "Average Savings vs Market" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const SocialProof: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#FDF8F0] to-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Join 50+ Ranchi Homeowners Already on Our Waitlist"
          subtitle="We're new — and that's exactly why early customers get our best attention, pricing, and priority."
        />

        {/* Stats Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-2xl bg-white border border-gray-100 p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-bold text-[#0D6B4E] md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Placeholder */}
        <motion.div
          className="mt-16 mx-auto max-w-2xl rounded-2xl border border-dashed border-[#C9A55C]/40 bg-[#C9A55C]/5 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-4xl mb-4">&ldquo;</div>
          <p className="text-gray-600 italic">
            Our first project is currently underway. This space will feature a
            real story from a real Ranchi homeowner — no fake testimonials, ever.
          </p>
          <p className="mt-4 text-sm font-medium text-[#C9A55C]">
            — Coming soon from our first customer
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default SocialProof;
