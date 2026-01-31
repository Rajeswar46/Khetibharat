import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/app/utils/animations';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[620px] sm:min-h-[680px] lg:h-[760px] overflow-hidden">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="pre.jpeg"
          alt="Farmers with bullocks in green fields"
          className="
            w-full h-full
            object-cover
            object-[center_65%]
          "
        />

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-white/10"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="
          relative
          z-10
          max-w-[1440px]
          mx-auto
          px-4 sm:px-6
          pt-28 sm:pt-36 lg:pt-44
          text-center
        "
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-[40px] lg:text-[70px] leading-tight font-bold text-[#0B6B3A] "
          variants={fadeUp}
        >
          From Farmer to Family
        </motion.h1>
        <motion.h2
          className="text-3xl sm:text-[40px] lg:text-[70px] leading-tight font-bold text-[#fd4d02]"
          variants={fadeUp}
        >
          Clean, Sertified, Transparent.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg lg:text-[28px] font-bold text-gray-900 max-w-6xl mx-auto mb-6"
          variants={fadeUp}
        >
          Building India's most trusted farmer to family food ecosystem.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center justify-center gap-3 sm:gap-5"
          variants={fadeUp}
        >
          <motion.button
            className="
              bg-[#fd4d02] text-white
              px-6 py-2.5 sm:px-10 sm:py-3
              text-sm sm:text-base
              rounded-full font-semibold
              btn-premium
              relative overflow-hidden
            "
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Buy Products
          </motion.button>

          <motion.a
            href="https://agrivalah.com/vendor/registration"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#0B6B3A] text-white
              px-6 py-2.5 sm:px-10 sm:py-3
              text-sm sm:text-base
              rounded-full font-semibold
              inline-flex items-center justify-center
              btn-premium
              relative overflow-hidden
            "
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Become a Partner
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
