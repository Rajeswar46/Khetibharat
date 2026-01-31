import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/app/utils/animations';

interface ContentCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    image?: string;
    className?: string;
}

export function ContentCard({ title, description, icon, image, className = '' }: ContentCardProps) {
    return (
        <motion.div
            className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift ${className}`}
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Icon/Image */}
            {icon && (
                <div className="w-14 h-14 rounded-full bg-[#0B6B3A]/10 flex items-center justify-center mb-6 text-[#0B6B3A]">
                    {icon}
                </div>
            )}
            {image && (
                <div className="mb-6 rounded-xl overflow-hidden">
                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                </div>
            )}

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
