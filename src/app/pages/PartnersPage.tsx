import { Header } from '@/app/components/Header';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';
import { PageHero } from '@/app/components/shared/PageHero';
import { PageSection } from '@/app/components/shared/PageSection';
import { motion } from 'framer-motion';
import { fadeUp } from '@/app/utils/animations';
import { Building2 } from 'lucide-react';

export function PartnersPage() {
    return (
        <>
            <Header />

            {/* Page Hero */}
            <PageHero
                title="Our Partners"
                subtitle="Building India's agricultural future together"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'Partners', href: '/partners' }
                ]}
                background="gradient"
            />

            {/* Introduction */}
            <PageSection background="white">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={fadeUp}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A] mb-6">
                        Collaboration for Systemic Change
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        KhetiBharat's impact is possible through strategic partnerships
                        with government bodies, NGOs, research institutions, and
                        corporate partners who share our vision of sustainable,
                        transparent, and farmer-centric agriculture.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Together, we're building an integrated ecosystem that benefits
                        every stakeholder—from soil to plate.
                    </p>
                </motion.div>
            </PageSection>

            {/* Partners Logos Section */}
            <PageSection background="white">
                <motion.div
                    className="text-center mb-12"
                    variants={fadeUp}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Building2 className="w-8 h-8 text-[#0B6B3A]" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A]">
                            Our Partner Network
                        </h2>
                    </div>

                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Trusted by leading institutions, brands, and organizations
                        across India.
                    </p>
                </motion.div>

                {/* Logo Container */}
                <motion.div
                    className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full">
                        <motion.img
                            src="/images/Logos.jpeg"
                            alt="KhetiBharat Partner Logos"
                            className="w-full h-auto object-contain rounded-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </motion.div>
            </PageSection>

            <FinalCTA />
            <Footer />
        </>
    );
}
