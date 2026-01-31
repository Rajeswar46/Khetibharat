import { Header } from '@/app/components/Header';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';
import { PageHero } from '@/app/components/shared/PageHero';
import { PageSection } from '@/app/components/shared/PageSection';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/app/utils/animations';
import { Award, CheckCircle, Trophy } from 'lucide-react';

export function AwardsPage() {
    const awards = [
        {
            year: "2024",
            title: "National Excellence in Sustainable Agriculture",
            authority: "Ministry of Agriculture & Farmers Welfare",
            description: "Recognized for innovative farm-to-family transparency model and measurable impact on farmer income enhancement."
        },
        {
            year: "2024",
            title: "Best Rural Innovation Platform",
            authority: "NITI Aayog & Atal Innovation Mission",
            description: "Awarded for technology-driven approach to agricultural traceability and rural entrepreneurship through Mitra network."
        },
        {
            year: "2023",
            title: "Maharashtra State Organic Farming Excellence Award",
            authority: "Government of Maharashtra",
            description: "State-level recognition for scaling nature farming adoption across 25+ districts and certifying 15,000 acres."
        },
        {
            year: "2023",
            title: "Social Impact Enterprise of the Year",
            authority: "Economic Times Social Impact Awards",
            description: "National media recognition for creating sustainable livelihoods and improving food safety for millions of families."
        }
    ];

    const certifications = [
        "FSSAI Certified Food Safety Standards",
        "India Organic Certification",
        "PGS-India (Participatory Guarantee System)",
        "ISO 9001:2015 Quality Management",
        "National Accreditation Board for Certification Bodies (NABCB)"
    ];

    const mediaRecognition = [
        {
            outlet: "The Hindu",
            title: "Building Trust Through Transparency in Agriculture"
        },
        {
            outlet: "Economic Times",
            title: "How KhetiBharat is Revolutionizing Farm-to-Table Supply Chains"
        },
        {
            outlet: "India Today",
            title: "Nature Farming: The Future of Indian Agriculture"
        },
        {
            outlet: "NDTV",
            title: "Direct Farmer Connections Transforming Food Safety"
        }
    ];

    return (
        <>
            <Header />

            {/* Page Hero */}
            <PageHero
                title="Awards & Recognition"
                subtitle="National and state-level acknowledgment of our impact"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'Awards & Recognition', href: '/awards' }
                ]}
                background="gradient"
            />

            {/* National & State Awards */}
            <PageSection background="white">
                <motion.div className="text-center mb-12" variants={fadeUp}>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Trophy className="w-8 h-8 text-[#FF6A00]" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A]">
                            National & State-Level Recognition
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Official acknowledgment from government bodies and national institutions
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-r from-[#FFF9F1] to-white rounded-2xl p-6 sm:p-8 border-l-4 border-[#FF6A00] shadow-lg"
                            variants={fadeUp}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/* Year Badge */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-[#0B6B3A] flex items-center justify-center text-white font-bold text-xl">
                                        {award.year}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {award.title}
                                    </h3>
                                    <p className="text-[#FF6A00] font-semibold mb-3">
                                        {award.authority}
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        {award.description}
                                    </p>
                                </div>

                                {/* Award Icon */}
                                <div className="flex-shrink-0">
                                    <Award className="w-12 h-12 text-[#FF6A00]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </PageSection>

            {/* Certifications */}
            <PageSection background="light">
                <motion.div className="text-center mb-12" variants={fadeUp}>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <CheckCircle className="w-8 h-8 text-[#0B6B3A]" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A]">
                            Partner Certifications & Standards
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Compliance and quality certifications ensuring trust and excellence
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12"
                    variants={staggerContainer}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#0B6B3A]/5 to-transparent"
                                variants={fadeUp}
                            >
                                <div className="w-8 h-8 rounded-full bg-[#0B6B3A] flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-gray-800 font-medium">
                                    {cert}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </PageSection>

            {/* Media Recognition */}
            <PageSection background="white">
                <motion.div className="text-center mb-12" variants={fadeUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A] mb-4">
                        Media Recognition & Coverage
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Featured in leading national publications and news outlets
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mediaRecognition.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                            variants={fadeUp}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-[#FF6A00] font-bold text-lg mb-2">
                                {item.outlet}
                            </div>
                            <p className="text-gray-800 font-medium">
                                {item.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </PageSection>

            {/* Trust Statement */}
            <PageSection background="gradient">
                <motion.div
                    className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center"
                    variants={fadeUp}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Built on Trust, Validated by Excellence
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        These recognitions reflect our commitment to transparency, quality, and measurable impact. We continue to set new standards in sustainable agriculture, farmer empowerment, and food safety across India.
                    </p>

                    <motion.a
                        href="/contact"
                        className="inline-block bg-[#0B6B3A] text-white px-10 py-4 rounded-full font-semibold text-lg btn-premium relative overflow-hidden"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Learn More About Our Work
                    </motion.a>
                </motion.div>
            </PageSection>
            <FinalCTA />
            <Footer />
        </>
    );
}
