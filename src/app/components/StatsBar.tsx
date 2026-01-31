import { motion } from 'framer-motion';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/app/utils/animations';

export function StatsBar() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  const stats = [
    { value: '10M+', label: 'Happy Community' },
    { value: '25%', label: 'Organic Land Commitment' },
    { value: '25%', label: 'Farmers Registered' },
    { value: '100%', label: 'Transparent Pricing' },
  ];

  return (
    <div ref={ref as any} className="bg-[#0B6B3A] py-8 sm:py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center text-[#7dd51f]"
              variants={fadeUp}
            >
              <motion.div
                className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs sm:text-sm font-bold text-white/90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
