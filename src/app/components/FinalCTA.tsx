import { motion } from 'framer-motion';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { fadeUp, scaleIn, staggerContainer } from '@/app/utils/animations';

export function FinalCTA() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.25 });

  return (
    <section
      ref={ref as any}
      className="
        relative
        w-full
        overflow-hidden
        bg-no-repeat
        bg-cover
        bg-[position:center_bottom]
        bg-[url('/footer.jpeg')]
        py-24
      "
    >
      {/* ❌ Overlay removed for clear image */}

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 flex justify-center">
        <motion.div
          className="
            bg-black
            rounded-3xl sm:rounded-[42px]
            px-6 py-10
            sm:px-12 sm:py-16
            text-center
            max-w-4xl
            w-full
          "
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={scaleIn}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                font-bold
                text-[#fd4d02]
                mb-4
              "
            >
              Join the KhetiBharat Ecosystem Today
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
                text-sm
                sm:text-base
                md:text-lg
                text-white/90
                mb-8
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              Be part of a transparent, safe, and insured bridge that connects
              farmers directly to families while promoting sustainable nature
              farming.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                className="
                  bg-[#fd4d02]
                  text-white
                  px-10
                  py-3
                  rounded-full
                  font-medium
                  min-h-[48px]
                "
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                Buy Products
              </motion.button>

              <motion.button
                className="
                  bg-[#0B6B3A]
                  text-white
                  px-10
                  py-3
                  rounded-full
                  font-medium
                  min-h-[48px]
                "
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                Become a Partner
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
