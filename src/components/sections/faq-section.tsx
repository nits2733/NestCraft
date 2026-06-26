"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/section-heading";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How is NestCraft different from hiring a local contractor?",
    answer:
      "Local contractors are skilled at their trade but have no system for project management, cost control, or quality assurance. NestCraft gives you a single point of accountability — we coordinate all trades, lock in pricing upfront with an itemized BOQ, provide daily photo updates, and back everything with a 1-year warranty. You get the quality of a premium design firm with the transparency of a tech company.",
  },
  {
    question: "What if I already have a designer?",
    answer:
      "Great — we work with your designer too. NestCraft can handle pure execution (converting designs into reality) while your designer retains creative control. We'll coordinate material sourcing, contractor scheduling, and quality checks. Many clients come to us with a design but no one to execute it reliably.",
  },
  {
    question: "Do you serve areas outside Ranchi city?",
    answer:
      "Currently, we serve all areas within Ranchi municipal limits and nearby townships (Kanke, Namkum, Ratu, Ormanjhi, etc.). We're expanding to Jamshedpur and Dhanbad soon. If you're in a nearby area, reach out — we may be able to accommodate your project.",
  },
  {
    question: "What's included in the free consultation?",
    answer:
      "A 30-minute call (or in-person visit for Ranchi residents) where we understand your space, requirements, and budget. You'll get a preliminary scope of work, rough cost estimate, and timeline — no obligation, no pushy sales. If we're not the right fit, we'll tell you honestly.",
  },
  {
    question: "How do milestone payments work?",
    answer:
      "Your total project cost is broken into 4-5 milestones (e.g., Design Approval, Material Delivery, Carpentry Completion, Final Handover). You release payment for each milestone only after verifying the work is complete and meets quality standards. This protects you from paying for unfinished or substandard work.",
  },
  {
    question: "What if I'm not happy with the quality?",
    answer:
      "Every milestone has a quality inspection checklist. If work doesn't meet the agreed standard, we redo it at our cost before that milestone is marked complete. Post-handover, our 1-year warranty covers any workmanship defects. We also conduct a 30-day and 90-day follow-up to catch any issues early.",
  },
  {
    question: "What is a Home Passport?",
    answer:
      "Your Home Passport is a digital document we create for every project. It contains every material spec (paint brand, shade, batch), vendor warranty cards, electrical/plumbing diagrams, and maintenance schedules. If you ever need a repair, sell the home, or want to replicate a finish — everything is in one place. Think of it as a service manual for your home.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FDF8F0] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Questions? We've Got Answers."
          subtitle="Everything you need to know before getting started."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-gray-200 bg-white overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-[#1A1A2E] pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 text-xl text-[#0D6B4E] transition-transform duration-200 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
