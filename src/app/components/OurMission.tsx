import { motion } from "framer-motion";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { fadeUp, staggerContainer } from "@/app/utils/animations";

export function OurMission() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const cards = [
    {
      title: "Farmers Face Crisis",
      desc:
        "Fragile incomes, crop risk, mounting debt, and price uncertainty threaten farmer livelihoods across India.",
      icon: "/images/a.png",
    },
    {
      title: "Food Safety Concerns",
      desc:
        "Families worry about chemicals, adulteration, and rising food prices with no clear source visibility.",
      icon: "/images/b.png",
    },
    {
      title: "Broken Supply Chains",
      desc:
        "Multiple middlemen, hidden margins, and complex chains prevent fair pricing and transparency.",
      icon: "/images/c.png",
    },
    {
      title: "Startups Struggle",
      desc:
        "Agri startups find it hard to move beyond pilots into real adoption at village level.",
      icon: "/images/d.png",
    },
  ];

  return (
    <section ref={ref as any} className="py-16 sm:py-20 lg:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.p
            className="text-sm font-bold text-gray-800 mb-3"
            variants={fadeUp}
          >
            <h2> Our Mission</h2>
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-[36px] lg:text-[44px] font-bold text-[#fd4d02] mb-6"
            variants={fadeUp}
          >
            Why KhetiBharat Exists
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed font-medium"
            variants={fadeUp}
          >
            India's food system is under pressure. KhetiBharat is designed
            to fix the broken links and create a sustainable, transparent
            ecosystem.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              }}
              className="
                group relative rounded-2xl p-8 text-center bg-white
                transition-all duration-300
                shadow-[0_8px_24px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.06)]
                hover:bg-[#0B6B3A]
                hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]
              "
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:invert">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Title */}
              <h3
                className="
                  text-xl font-bold mb-4 text-gray-900
                  transition-colors duration-300
                  group-hover:text-white
                "
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-sm leading-relaxed text-gray-600
                  transition-colors duration-300
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
