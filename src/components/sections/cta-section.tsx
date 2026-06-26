"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import Button from "../ui/button";

const WHATSAPP_NUMBER = '916205121214';

interface FormData {
  name: string;
  phone: string;
  flatType: string;
  budgetRange: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  flatType?: string;
  budgetRange?: string;
}

const flatTypes = ["1BHK", "2BHK", "3BHK", "4BHK"];
const budgetRanges = [
  "Under ₹5L",
  "₹5–10L",
  "₹10–15L",
  "₹15–25L",
  "₹25L+",
];

function buildWhatsAppURL(data: FormData) {
  const lines = [
    `🏠 *NestCraft — New Consultation Request*`,
    `━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `👤 *Customer Details*`,
    `• Name: ${data.name}`,
    `• Phone: ${data.phone}`,
    ``,
    `🏡 *Project Info*`,
    `• Flat Type: ${data.flatType}`,
    `• Budget Range: ${data.budgetRange}`,
    data.message ? `` : '',
    data.message ? `💬 *Additional Notes*` : '',
    data.message ? `${data.message}` : '',
    ``,
    `━━━━━━━━━━━━━━━━━━━━━`,
    `📅 Submitted on: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}`,
  ]
    .filter((line) => line !== '')
    .join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    flatType: "",
    budgetRange: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    if (!formData.flatType) {
      newErrors.flatType = "Please select your flat type";
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = "Please select your budget range";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const url = buildWhatsAppURL(formData);
      window.open(url, '_blank');
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <section className="bg-[#0D6B4E] py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You, {formData.name}!
            </h2>
            <p className="text-lg text-white/80">
              Your message has been sent via WhatsApp. Our team will respond
              within 24 hours to schedule your free home assessment.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[#0D6B4E] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            title="Planning Your Home Interiors in Ranchi?"
            subtitle="Get a free consultation and transparent cost estimate. No commitments, no contractor calls."
            className="[&_h2]:text-white [&_p]:text-white/70"
          />

          <motion.form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-xl md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Name"
                name="name"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />

              <Input
                label="Phone"
                name="phone"
                type="tel"
                placeholder="10-digit mobile number"
                required
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />

              {/* Flat Type Select */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="flatType"
                  className="text-sm font-medium text-[#1A1A2E]"
                >
                  Flat Type<span className="text-red-500 ml-0.5">*</span>
                </label>
                <select
                  id="flatType"
                  name="flatType"
                  value={formData.flatType}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2.5 text-[#1A1A2E] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0D6B4E]/30 focus:border-[#0D6B4E] ${
                    errors.flatType ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select flat type</option>
                  {flatTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.flatType && (
                  <p className="text-sm text-red-500">{errors.flatType}</p>
                )}
              </div>

              {/* Budget Range Select */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="budgetRange"
                  className="text-sm font-medium text-[#1A1A2E]"
                >
                  Budget Range<span className="text-red-500 ml-0.5">*</span>
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2.5 text-[#1A1A2E] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0D6B4E]/30 focus:border-[#0D6B4E] ${
                    errors.budgetRange ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budgetRange && (
                  <p className="text-sm text-red-500">{errors.budgetRange}</p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <Textarea
                label="Message (optional)"
                name="message"
                placeholder="Tell us about your project — rooms to do, style preferences, timeline..."
                value={formData.message}
                onChange={handleChange}
                rows={3}
              />
            </div>

            <div className="mt-6">
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Get My Free Assessment
              </Button>
            </div>

            <p className="mt-4 text-center text-xs text-gray-500">
              Your details will be sent via WhatsApp. We&apos;ll call you within 24 hours. No spam, ever.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
