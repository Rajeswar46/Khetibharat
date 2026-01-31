import { Header } from '@/app/components/Header';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';
import { PageHero } from '@/app/components/shared/PageHero';
import { PageSection } from '@/app/components/shared/PageSection';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/app/utils/animations';
import { Building2, Users, Briefcase, Handshake } from 'lucide-react';

export function PartnersPage() {
    const governmentPartners = [
        "Ministry of Agriculture & Farmers Welfare",
        "National Mission for Sustainable Agriculture (NMSA)",
        "Maharashtra Agriculture Department",
        "Karnataka Horticulture Department",
        "NABARD (National Bank for Agriculture and Rural Development)",
        "NITI Aayog"
    ];

    const ngoPartners = [
        "Bharatiya Agro Industries Foundation (BAIF)",
        "PRADAN (Professional Assistance for Development Action)",
        "Digital Green",
        "Swaminathan Research Foundation",
        "Centre for Sustainable Agriculture (CSA)",
        "Watershed Organisation Trust (WOTR)"
    ];

    const corporatePartners = [
        "Reliance Fresh Retail Network",
        "Spencer's Retail Outlets",
        "Flipkart Supermart",
        "Amazon Fresh India",
        "Local Food Co-operative Chains",
        "Organic India Pvt. Ltd."
    ];

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
                background="light"
            />

            {/* Introduction */}
            <PageSection background="white">
                <motion.div className="max-w-4xl mx-auto text-center" variants={fadeUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A] mb-6">
                        Collaboration for Systemic Change
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        KhetiBharat's impact is possible through strategic partnerships with government bodies, NGOs, research institutions, and corporate partners who share our vision of sustainable, transparent, and farmer-centric agriculture.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Together, we're building an integrated ecosystem that benefits every stakeholder—from soil to plate.
                    </p>
                </motion.div>
            </PageSection>

            {/* Government Partners */}
            <PageSection background="gradient">
                <motion.div className="text-center mb-12" variants={fadeUp}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Building2 className="w-8 h-8 text-[#0B6B3A]" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A]">
                            Government Partners
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Policy support, funding, and official recognition from national and state bodies
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12"
                    variants={staggerContainer}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {governmentPartners.map((partner, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-[#0B6B3A]/5 to-transparent border border-gray-100"
                                variants={fadeUp}
                                whileHover={{ scale: 1.03, borderColor: "#0B6B3A" }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                                <p className="text-gray-800 font-medium text-sm">
                                    {partner}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </PageSection>

            {/* NGO Partners */}
            <PageSection background="white">
                <motion.div className="text-center mb-12" variants={fadeUp}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Users className="w-8 h-8 text-[#FF6A00]" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A]">
                            NGO & Institutional Partners
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        On-ground implementation, farmer training, and research collaboration
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-5xl mx-auto bg-gradient-to-br from-[#FFF9F1] to-[#FFE6C7] rounded-2xl shadow-xl p-8 sm:p-12"
                    variants={staggerContainer}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ngoPartners.map((partner, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100"
                                variants={fadeUp}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="w-2 h-2 rounded-full bg-[#0B6B3A]" />
                                <p className="text-gray-800 font-medium text-sm">
                                    {partner}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </PageSection>

            {/* Corporate Partners */}
            <PageSection background="light">
                <motion.div className="text-center mb-12" variants={fadeUp}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Briefcase className="w-8 h-8 text-[#7A2E1D]" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A]">
                            Corporate & Retail Partners
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Market access, distribution channels, and consumer reach
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12"
                    variants={staggerContainer}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {corporatePartners.map((partner, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-[#7A2E1D]/5 to-transparent border border-gray-100"
                                variants={fadeUp}
                                whileHover={{ scale: 1.03, borderColor: "#7A2E1D" }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                                <p className="text-gray-800 font-medium text-sm">
                                    {partner}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </PageSection>

            {/* Become a Partner CTA */}
            <PageSection background="white">
                <motion.div
                    className="max-w-4xl mx-auto bg-gradient-to-br from-[#0B6B3A] to-[#095730] rounded-3xl shadow-2xl p-8 sm:p-12 text-white text-center"
                    variants={fadeUp}
                >
                    <Handshake className="w-16 h-16 mx-auto mb-6 text-[#FFE6C7]" />

                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Become a Partner
                    </h2>

                    <p className="text-lg text-white/90 leading-relaxed mb-8">
                        Join us in transforming India's agricultural ecosystem. Whether you're a government body, NGO, research institution, corporate entity, or retail chain—there are multiple ways to collaborate for shared impact.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="/contact"
                            className="bg-[#FF6A00] text-white px-10 py-4 rounded-full font-semibold text-lg btn-premium relative overflow-hidden"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Express Interest
                        </motion.a>

                        <motion.a
                            href="mailto:partnerships@khetibharat.org"
                            className="bg-white text-[#0B6B3A] px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Email Partnerships Team
                        </motion.a>
                    </div>
                </motion.div>
            </PageSection>
            <FinalCTA />
            <Footer />
        </>
    );
}
