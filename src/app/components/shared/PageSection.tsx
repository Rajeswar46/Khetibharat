import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { staggerContainer } from '@/app/utils/animations';

interface PageSectionProps {
    children: ReactNode;
    background?: 'white' | 'light' | 'gradient';
    className?: string;
}

export function PageSection({ children, background = 'white', className = '' }: PageSectionProps) {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

    const bgClass = {
        white: 'bg-white',
        light: 'bg-gray-50',
        gradient: 'bg-gradient-to-b from-[#FFF9F1] to-[#FFE6C7]'
    }[background];

    return (
        <section ref={ref as any} className={`${bgClass} py-12 sm:py-16 lg:py-20 ${className}`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
                <motion.div
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
