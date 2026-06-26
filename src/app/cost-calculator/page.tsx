'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const FLAT_TYPES = ['1BHK', '2BHK', '3BHK', '4BHK', 'Villa'] as const;

const ROOMS = [
  'Living Room',
  'Bedroom',
  'Kitchen',
  'Bathroom',
  'Dining Room',
  'Balcony',
  'Pooja Room',
  'Home Office',
  'Entire Home',
  'Other',
] as const;

const QUALITY_LEVELS = [
  {
    id: 'essential',
    label: 'Essential',
    description: 'Functional & budget-friendly',
    rateMin: 400,
    rateMax: 600,
  },
  {
    id: 'premium',
    label: 'Premium',
    description: 'Balanced quality & aesthetics',
    rateMin: 600,
    rateMax: 900,
  },
  {
    id: 'luxury',
    label: 'Luxury',
    description: 'Top-tier materials & finishes',
    rateMin: 900,
    rateMax: 1500,
  },
] as const;

const ROOM_PERCENTAGES: Record<string, number> = {
  'Living Room': 20,
  Bedroom: 15,
  Kitchen: 25,
  Bathroom: 8,
  'Dining Room': 10,
  Balcony: 3,
  'Pooja Room': 4,
  'Home Office': 10,
  'Entire Home': 100,
  Other: 5,
};

type QualityId = (typeof QUALITY_LEVELS)[number]['id'];

interface FormData {
  flatType: string;
  carpetArea: number;
  rooms: string[];
  quality: QualityId;
  name: string;
  phone: string;
  email: string;
}

/**
 * Format a number in Indian numbering system.
 * Examples:
 *   85000     → "₹85,000"
 *   205000    → "₹2.05 Lakh"
 *   1250000   → "₹12.5 Lakh"
 *   15000000  → "₹1.5 Crore"
 */
function formatIndianPrice(amount: number): string {
  if (amount >= 10000000) {
    // Crore
    const crore = amount / 10000000;
    const formatted = crore % 1 === 0 ? crore.toFixed(0) : crore.toFixed(1).replace(/\.0$/, '');
    return `₹${formatted} Crore`;
  }
  if (amount >= 100000) {
    // Lakh
    const lakh = amount / 100000;
    const formatted = lakh % 1 === 0 ? lakh.toFixed(0) : lakh.toFixed(1).replace(/\.0$/, '');
    return `₹${formatted} Lakh`;
  }
  // Under 1 Lakh — use Indian comma format
  return `₹${amount.toLocaleString('en-IN')}`;
}

export default function CostCalculatorPage() {
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    flatType: '',
    carpetArea: 0,
    rooms: [],
    quality: 'premium',
    name: '',
    phone: '',
    email: '',
  });

  const totalSteps = 4;

  const handleRoomToggle = (room: string) => {
    setFormData((prev) => {
      // If "Entire Home" is selected, deselect all others
      if (room === 'Entire Home') {
        return {
          ...prev,
          rooms: prev.rooms.includes('Entire Home') ? [] : ['Entire Home'],
        };
      }
      // If selecting another room, remove "Entire Home"
      const withoutEntire = prev.rooms.filter((r) => r !== 'Entire Home');
      return {
        ...prev,
        rooms: withoutEntire.includes(room)
          ? withoutEntire.filter((r) => r !== room)
          : [...withoutEntire, room],
      };
    });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const selectedQuality = QUALITY_LEVELS.find((q) => q.id === formData.quality)!;
  const estimateMin = formData.carpetArea * selectedQuality.rateMin;
  const estimateMax = formData.carpetArea * selectedQuality.rateMax;

  const getRoomBreakdown = () => {
    const totalPercentage = formData.rooms.reduce(
      (sum, room) => sum + (ROOM_PERCENTAGES[room] || 5),
      0
    );
    return formData.rooms.map((room) => {
      const pct = ((ROOM_PERCENTAGES[room] || 5) / totalPercentage) * 100;
      return {
        room,
        percentage: Math.round(pct),
        costMin: Math.round((pct / 100) * estimateMin),
        costMax: Math.round((pct / 100) * estimateMax),
      };
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-orange-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
            What Will Your Home Interiors Cost in Ranchi?
          </h1>
          <p className="text-center text-slate-600 mb-10">
            Get an instant estimate in under 2 minutes — no commitment required.
          </p>

          {!showResults ? (
            <>
              {/* Progress Indicator */}
              <div className="flex items-center justify-center mb-10 gap-2">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div key={i} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                        i + 1 <= step
                          ? 'bg-emerald-700 text-white'
                          : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {i + 1}
                    </div>
                    {i < totalSteps - 1 && (
                      <div
                        className={`w-12 h-1 ${
                          i + 1 < step ? 'bg-emerald-700' : 'bg-slate-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Step 1: Flat Type & Area */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                      Tell us about your home
                    </h2>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">
                        Flat Type
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {FLAT_TYPES.map((type) => (
                          <button
                            key={type}
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, flatType: type }))
                            }
                            className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-colors ${
                              formData.flatType === type
                                ? 'border-emerald-700 bg-emerald-50 text-emerald-700'
                                : 'border-slate-200 hover:border-slate-300 text-slate-600'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Carpet Area (sq ft)
                      </label>
                      <input
                        type="number"
                        value={formData.carpetArea || ''}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            carpetArea: parseInt(e.target.value) || 0,
                          }))
                        }
                        placeholder="e.g. 1200"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Rooms */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                      Which rooms do you want to renovate?
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                      {ROOMS.map((room) => (
                        <button
                          key={room}
                          onClick={() => handleRoomToggle(room)}
                          className={`py-3 px-4 rounded-lg border-2 text-sm font-medium text-left transition-colors ${
                            formData.rooms.includes(room)
                              ? 'border-emerald-700 bg-emerald-50 text-emerald-700'
                              : 'border-slate-200 hover:border-slate-300 text-slate-600'
                          }`}
                        >
                          {room}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Quality */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                      Choose your quality preference
                    </h2>
                    <div className="space-y-4">
                      {QUALITY_LEVELS.map((level) => (
                        <button
                          key={level.id}
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, quality: level.id }))
                          }
                          className={`w-full p-5 rounded-lg border-2 text-left transition-colors ${
                            formData.quality === level.id
                              ? 'border-emerald-700 bg-emerald-50'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-semibold text-slate-900">
                                {level.label}
                              </h3>
                              <p className="text-sm text-slate-500">
                                {level.description}
                              </p>
                            </div>
                            <span className="text-sm font-medium text-emerald-700">
                              ₹{level.rateMin}–₹{level.rateMax}/sqft
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Contact */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                      Almost there! Enter your details to see your estimate
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
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
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
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
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  {step < totalSteps ? (
                    <button
                      onClick={() => setStep((s) => s + 1)}
                      className="px-6 py-3 rounded-lg bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-colors"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="px-6 py-3 rounded-lg bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-colors"
                    >
                      See My Estimate
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* Results */
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Your Estimated Interior Cost
              </h2>
              <p className="text-slate-600 mb-6">
                For a {formData.flatType} • {formData.carpetArea} sq ft •{' '}
                {selectedQuality.label} quality
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8 text-center">
                <p className="text-sm text-emerald-700 font-medium mb-1">
                  Estimated Range
                </p>
                <p className="text-3xl md:text-4xl font-bold text-emerald-700">
                  {formatIndianPrice(estimateMin)} – {formatIndianPrice(estimateMax)}
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  *Approximate estimate. Actual cost depends on design choices &
                  materials.
                </p>
              </div>

              {/* Room Breakdown */}
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Room-wise Breakdown
              </h3>
              <div className="space-y-3 mb-8">
                {getRoomBreakdown().map(({ room, percentage, costMin, costMax }) => (
                  <div
                    key={room}
                    className="flex items-center justify-between py-3 border-b border-slate-100"
                  >
                    <div>
                      <span className="font-medium text-slate-800">{room}</span>
                      <span className="text-sm text-slate-500 ml-2">
                        ({percentage}%)
                      </span>
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {formatIndianPrice(costMin)} – {formatIndianPrice(costMax)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Get Detailed Quote from Our Design Team
                </a>
                <p className="text-sm text-slate-500 mt-3">
                  Our designer will call you within 24 hours with a personalized
                  estimate.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
