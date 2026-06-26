"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";
import Card from "../ui/card";
import Button from "../ui/button";

interface Service {
  icon: string;
  title: string;
  description: string;
  priceHint: string;
}

const services: Service[] = [
  {
    icon: "🎨",
    title: "Interior Design & Space Planning",
    description: "Complete 2D/3D layouts optimized for your lifestyle and space.",
    priceHint: "₹50K–₹2L",
  },
  {
    icon: "🍳",
    title: "Modular Kitchen",
    description: "Factory-finished, durable kitchens designed to Indian cooking needs.",
    priceHint: "₹1.5L–₹5L",
  },
  {
    icon: "🖌️",
    title: "Painting & Wall Finishes",
    description: "Premium paints, textures, and wallpapers with flawless execution.",
    priceHint: "₹30K–₹2L",
  },
  {
    icon: "🪵",
    title: "Carpentry & Wardrobes",
    description: "Custom wardrobes, TV units, shoe racks, and storage solutions.",
    priceHint: "₹1L–₹4L",
  },
  {
    icon: "💡",
    title: "Electrical & Lighting",
    description: "Smart wiring, concealed points, and ambient lighting design.",
    priceHint: "₹50K–₹2L",
  },
  {
    icon: "🏗️",
    title: "Flooring & Tiling",
    description: "Vitrified, marble, wooden — sourced and installed to perfection.",
    priceHint: "₹1L–₹3L",
  },
  {
    icon: "🚿",
    title: "Plumbing & Waterproofing",
    description: "Leak-proof bathrooms and kitchens with branded fittings.",
    priceHint: "₹50K–₹1.5L",
  },
  {
    icon: "🔧",
    title: "Home Maintenance (AMC)",
    description: "Annual care plan for post-handover repairs and upkeep.",
    priceHint: "₹10K–₹30K/yr",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

const ServicesOverview: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Everything Your Home Needs. One Platform."
          subtitle="From design to maintenance — we handle the full lifecycle of your home interiors."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card animated className="h-full">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-base font-semibold text-[#1A1A2E] mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {service.description}
                </p>
                <span className="inline-block rounded-full bg-[#0D6B4E]/10 px-3 py-1 text-xs font-medium text-[#0D6B4E]">
                  {service.priceHint}
                </span>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg" href="/services">
            Explore All Services →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
