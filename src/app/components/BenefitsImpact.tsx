import { useState } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { fadeUp, scaleIn, staggerContainer } from '@/app/utils/animations';

export function BenefitsImpact() {
  const [activeTab, setActiveTab] = useState("farmers");
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const tabs = [
    { id: "farmers", label: "For Farmers" },
    { id: "mitras", label: "For Mitras" },
    { id: "communities", label: "For Communities" },
    { id: "startups", label: "For Startups" },
  ];

  const benefits = {
    farmers: [
      "Lower dependence on debt and informal lenders",
      "Predictable demand, income through Mitras & markets",
      "Reduced input costs via nature farming",
      "Identity and trust through farmer-named packs",
      "Access to certification and export pathways",
      "Training in modern practices and market planning",
    ],
    mitras: [
      "Entrepreneurial income opportunity",
      "Local trust-based distribution model",
      "Support farmers and families directly",
      "Low infrastructure investment",
      "Digital + offline business model",
      "Scalable village-level operations",
    ],
    communities: [
      "Access to safe and traceable food",
      "Stronger local food systems",
      "Community-based trust model",
      "Improved health outcomes",
      "Support sustainable agriculture",
      "Economic resilience at village level",
    ],
    startups: [
      "Real-world adoption platform",
      "Access to farmer networks",
      "Lower pilot-to-scale friction",
      "Market validation support",
      "Shared ecosystem growth",
      "Reduced go-to-market cost",
    ],
  };

  return (
    <section ref={ref as any} className="bg-[#0B6B3A] py-12 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.p
            className="text-white text-sm font-medium mb-1"
            variants={fadeUp}
          >
            <h2></h2>
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white"
            variants={fadeUp}
          >
            Benefits
          </motion.h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="
            grid grid-cols-2 gap-4
            sm:flex sm:justify-center sm:gap-6
            mb-10
          "
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-3 rounded-full font-semibold text-sm sm:text-base
                transition-all duration-300
                ${activeTab === tab.id
                  ? "bg-[#fd4d02] text-white"
                  : "bg-transparent text-white border border-white/30"
                }
              `}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={scaleIn}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

              {/* Text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B6B3A] mb-6">
                    {tabs.find(t => t.id === activeTab)?.label}
                  </h3>

                  <div className="space-y-4">
                    {benefits[activeTab as keyof typeof benefits].map((item: string, i: number) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.06,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        <div className="w-6 h-6 mt-0.5 rounded-full bg-[#0B6B3A] flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 text-sm sm:text-base font-medium">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Image */}
              <motion.div
                className="flex justify-center mt-6 lg:mt-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="/images/farmer-illustration.jpg"
                  alt="Benefits illustration"
                  className="w-52 sm:w-64 lg:w-[320px] h-auto object-contain"
                  loading="lazy"
                />
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
