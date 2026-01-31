import { Check } from "lucide-react";
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { fadeUp, slideInLeft, staggerContainer } from '@/app/utils/animations';

export function WhoWeAre() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const points = [
    "Direct farmer-to-family connections without middlemen",
    "Transparent, insured bridge from soil to plate",
    "Nature farming led by committed farmers",
    "Fair earnings for farmers, safer food for families",
    "Stronger local communities and sustainable growth",
  ];

  return (
    <section ref={ref as any} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">

          {/* LEFT – CIRCULAR IMAGE */}
          <motion.div
            className="flex justify-center mb-10 lg:mb-0"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={slideInLeft}
          >
            <div
              className="
                w-64 h-64
                sm:w-80 sm:h-80
                lg:w-[480px] lg:h-[480px]
                rounded-full
                overflow-hidden
                parallax-container
              "
            >
              <img
                src="/images/circle.png"
                alt="Farmers using technology"
                className="w-full h-full object-cover parallax-image"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT – CONTENT */}
          <motion.div
            className="max-w-xl mx-auto lg:mx-0"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >

            {/* Section Label */}
            <motion.div
              className="flex items-center gap-4 mb-4"
              variants={fadeUp}
            >
              <span className="block w-12 h-[2px] bg-[#7A2E1D]" />
              <p className="text-sm font-semibold tracking-wide text-gray-900">
                Who We Are
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-[42px] leading-tight font-bold text-[#fd4d02] mb-6"
              variants={fadeUp}
            >
              What is KhetiBharat?
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-gray-700 leading-relaxed mb-6"
              variants={fadeUp}
            >
              KhetiBharat is an integrated nature-farming ecosystem that directly
              connects farmers and families, with Mitras, startups, SHGs,
              Schools, and local markets all working together in one integrated
              transparent model.
            </motion.p>

            {/* Bullet Points */}
            <motion.div
              className="space-y-4 mb-6"
              variants={fadeUp}
            >
              {points.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{
                    delay: 0.4 + index * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#0B6B3A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Closing Paragraph */}
            <motion.p
              className="text-gray-700 leading-relaxed"
              variants={fadeUp}
            >
              Instead of long chains of brokers, hidden margins, and chemical-heavy
              farming, KhetiBharat builds a clear system where fairness, dignity,
              traceability, and sustainability come first.
            </motion.p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
