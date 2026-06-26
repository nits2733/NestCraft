'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const PROJECT_TYPES = [
  'Full Home Interior',
  'Modular Kitchen',
  'Single Room Renovation',
  'Painting & Wall Finishes',
  'Carpentry & Wardrobes',
  'Electrical & Lighting',
  'Plumbing & Waterproofing',
  'Home Maintenance (AMC)',
  'Other',
];

const WHATSAPP_NUMBER = '916205121214';

function buildWhatsAppURL(data: {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}) {
  const lines = [
    `🏠 *NestCraft — New Inquiry*`,
    `━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `👤 *Customer Details*`,
    `• Name: ${data.name}`,
    `• Phone: ${data.phone}`,
    data.email ? `• Email: ${data.email}` : '',
    ``,
    data.projectType ? `🏡 *Project Info*` : '',
    data.projectType ? `• Type: ${data.projectType}` : '',
    data.projectType ? `` : '',
    data.message ? `💬 *Message*` : '',
    data.message ? `${data.message}` : '',
    data.message ? `` : '',
    `━━━━━━━━━━━━━━━━━━━━━`,
    `📅 Submitted on: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}`,
  ]
    .filter((line) => line !== '')
    .join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s+\-()]/g, '').replace(/^91/, ''))) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const url = buildWhatsAppURL(formData);
      window.open(url, '_blank');
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hi NestCraft! I am interested in interior design services for my home in Ranchi. Please get in touch.'
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-orange-50">
        {/* Hero */}
        <section className="py-16 md:py-20 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Let&apos;s Talk About Your Home
            </h1>
            <p className="text-lg text-slate-300">
              Free consultation, zero pressure. Tell us about your project and
              we&apos;ll get back within 24 hours.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">
                    Send Us a Message
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          projectType: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                    >
                      <option value="">Select project type</option>
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      rows={4}
                      placeholder="Tell us about your project — flat size, rooms, timeline, anything helpful..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors"
                  >
                    Send Message via WhatsApp
                  </button>
                  <p className="text-xs text-center text-slate-500">
                    Clicking will open WhatsApp with your message pre-filled. We&apos;ll respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Address</p>
                    <p className="text-slate-800">Boreya, Ranchi, Jharkhand, India</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Phone</p>
                    <a href="tel:+916205121214" className="text-slate-800 hover:text-emerald-700 transition-colors">
                      +91 62051 21214
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Email</p>
                    <a href="mailto:singhviveksingh022030105@gmail.com" className="text-slate-800 hover:text-emerald-700 transition-colors break-all">
                      singhviveksingh022030105@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Working Hours
                    </p>
                    <p className="text-slate-800">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-slate-800">Sunday: By appointment</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">📍</div>
                <p className="font-medium text-emerald-800">
                  Serving all of Ranchi & nearby areas
                </p>
                <p className="text-sm text-emerald-700 mt-1">
                  Kanke • Argora • Harmu • Bariatu • Doranda • Hinoo • Namkum
                </p>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-center"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
