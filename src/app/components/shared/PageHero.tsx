
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/app/utils/animations';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    breadcrumb?: { label: string; href: string }[];
    background?: 'gradient' | 'white' | 'light';
}

export function PageHero({ title, subtitle, breadcrumb, background = 'gradient' }: PageHeroProps) {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

    const bgClass = {
        gradient: 'bg-gradient-to-b from-[#FFF9F1] to-[#FFE6C7]',
        white: 'bg-white',
        light: 'bg-gray-50'
    }[background];

    return (
        <section ref={ref as any} className={`${bgClass} pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    {/* Breadcrumb */}
                    {breadcrumb && (
                        <motion.nav
                            className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6"
                            variants={fadeUp}
                        >
                            {breadcrumb.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    {index > 0 && <span className="text-gray-400">/</span>}
                                    <a href={item.href} className="hover:text-[#0B6B3A] transition">
                                        {item.label}
                                    </a>
                                </div>
                            ))}
                        </motion.nav>
                    )}

                    {/* Title */}
                    <motion.h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B6B3A] mb-4 sm:mb-6"
                        variants={fadeUp}
                    >
                        {title}
                    </motion.h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <motion.p
                            className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
                            variants={fadeUp}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
