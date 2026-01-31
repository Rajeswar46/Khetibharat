import { motion } from 'framer-motion';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/app/utils/animations';

export function OurMission() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const cards = [
    {
      title: "Farmers Face Crisis",
      desc:
        "Fragile incomes, crop risk, mounting debt, and price uncertainty threaten farmer livelihoods across India.",
      icon: "1.2.png",
    },
    {
      title: "Food Safety Concerns",
      desc:
        "Families worry about chemicals, adulteration, and rising food prices with no clear source visibility.",
      icon: "1.3.png",
    },
    {
      title: "Broken Supply Chains",
      desc:
        "Multiple middlemen, hidden margins, and complex chains prevent fair pricing and transparency.",
      icon: "1.4.png",
    },
    {
      title: "Startups Struggle",
      desc:
        "Agri startups find it hard to move beyond pilots into real adoption at village level.",
      icon: "1.5.png",
    },
  ];

  return (
    <section ref={ref as any} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.p
            className="text-sm font-semibold text-gray-800 mb-3 text-xl font-bold mb-4"
            variants={fadeUp}
          >
            Our Mission
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-[36px] lg:text-[44px] font-bold text-[#fd4d02] mb-6"
            variants={fadeUp}
          >
            Why KhetiBharat Exists
          </motion.h2>
          <motion.p
            className="text-lg text-gray-800 leading-relaxed font-semibold"
            variants={fadeUp}
          >
            India's food system is under pressure. KhetiBharat is designed
            to fix the broken links and create a sustainable, transparent
            ecosystem.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="
                group relative rounded-2xl p-8 text-center
                bg-white 
                transition-all duration-300
                shadow-[0_45px_45px_rgba(0,0,0,0.18)]
                hover:bg-[#0B6B3A] hover:shadow-2xl
                hover-lift

              "
              variants={fadeUp}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center hover:invert-[1]">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 object-contain transition duration-300"
                  loading="eager"
                />
              </div>

              {/* Title */}
              <h3
                className="
                  text-xl font-bold mb-4 text-gray-900
                  transition duration-300
                  group-hover:text-white
                "
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-sm leading-relaxed text-gray-600
                  transition duration-300
                  group-hover:text-white/90
                "
              >
                {card.desc}
              </p>

              {/* Bottom Green Strip */}
              <div className="absolute left-0 bottom-0 w-full h-[6px] bg-[#0B6B3A] rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
