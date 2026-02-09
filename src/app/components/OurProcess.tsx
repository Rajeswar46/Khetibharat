import { motion } from 'framer-motion';
import { useState } from "react";
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/app/utils/animations';


const processItems = [
  {
    id: 1,
    title: "CYANO BREW — Energy & Community Footfall Zone",
    desc:
      "Certified natural farm produce ensuring transparency, trust, and better income for farmers through verified PGS-India standards.",
  },
  {
    id: 2,
    title: "CYANOVEDA — Certified Farm Produce Products Store",
    desc: "Natural health and wellness products sourced directly from farmer ecosystems.",
  },
  {
    id: 3,
    title: "CRENNIS — Natural & Bio Agri Inputs Zone",
    desc: "Eco-friendly agricultural inputs improving soil health and crop yield.",
  },
  {
    id: 4,
    title: "KHETI ZONE — Farm Services + Farmer Support Desk",
    desc: "A rural-urban connection space encouraging community engagement.",
  },
  {
    id: 5,
    title: "KHETIBHARAT MARKET — Certified Daily Vegetables / Fruits",
    desc: "Infrastructure for quality improvement and better market value.",
  },
  {
    id: 6,
    title: "PGS INDIA / NMNF ZONE — Certification + Training + Awareness",
    desc: "Marketplace (Offline & Online Stores with geo tagging)",
  },
  {
    id: 7,
    title: "REST ’N’ FRESH — Comfort & Hygiene Experience Zone",
    desc: "Direct-to-consumer fresh produce markets.",
  },
  {
    id: 8,
    title: "Value Add & Processing Zone Services — Farm Produce",
    desc: "(Grading, Cleaning, Sorting, Packing, Branding, & Dispatch support.)",
  },
  {
    id: 9,
    title: "Agri & Horticuture Waste to Organic Manure Production Unit",
    desc: "Agri-linked investment opportunities with transparency.",
  },
  // {
  //   id: 10,
  //   title: "Rest Lounge with Clean Toilets",
  //   desc: "Basic infrastructure improving dignity and comfort.",
  // },
];

export function OurProcess() {
  const [activeId, setActiveId] = useState(1);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref as any} className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.p
            className="text-sm font-medium text-gray-700 mb-2"
            variants={fadeUp}
          >
            <h2> Market Place</h2>
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-[#fd4d02]"
            variants={fadeUp}
          >
            Online / Offline Hub
          </motion.h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12
         items-start">

          {/* LEFT – Interactive List */}
          <div className="space-y-1">
            {processItems.map((item) => {
              const isActive = activeId === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`
                    cursor-pointer
                    rounded-2xl
                    transition-all
                    duration-300
                    p-2
                    pl-6
                    ${isActive
                      ? "bg-[#0B6B3A] text-white shadow-lg"
                      : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50"
                    }
                  `}
                >
                  <div className="flex gap-3">
                    <span
                      className={`
                        font-semibold
                        ${isActive ? "text-white" : "text-gray-500"}
                      `}
                    >
                      {item.id}.
                    </span>

                    <div>
                      <h3 className="font-semibold text-base">
                        {item.title}
                      </h3>

                      {isActive && (
                        <p className="text-sm mt-2 text-white/90">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT – Illustration Image */}
          <div className="flex justify-center">
            <img
              src="/images/Frame.png"
              alt="KhetiBharat Marketplace Ecosystem"
              className="w-full max-w-xl object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
