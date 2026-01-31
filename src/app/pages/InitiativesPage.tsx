import { Header } from '@/app/components/Header';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';
import { PageHero } from '@/app/components/shared/PageHero';
import { PageSection } from '@/app/components/shared/PageSection';
import { ContentCard } from '@/app/components/shared/ContentCard';
import { motion } from 'framer-motion';
import { fadeUp } from '@/app/utils/animations';
import { Sprout, GraduationCap, Link2, Smartphone, Shield } from 'lucide-react';

export function InitiativesPage() {
    const initiatives = [
        {
            icon: <Sprout className="w-7 h-7" />,
            title: "Nature Farming Adoption Program",
            description: "Supporting farmers in transitioning from chemical-intensive agriculture to sustainable nature farming practices. We provide technical guidance, input support, soil testing, and ongoing mentorship to ensure successful adoption and improved yields over time."
        },
        {
            icon: <GraduationCap className="w-7 h-7" />,
            title: "Farmer Training & Certification",
            description: "Comprehensive capacity-building programs covering natural pest management, composting, crop rotation, water conservation, and market linkages. Farmers receive official certification recognized by government bodies and retail partners upon completion."
        },
        {
            icon: <Link2 className="w-7 h-7" />,
            title: "Farm-to-Family Transparency Model",
            description: "Eliminating middlemen through direct connections between farmers and families via community Mitras, schools, and local markets. Every product carries farmer identity, cultivation details, and quality assurance for complete transparency."
        },
        {
            icon: <Smartphone className="w-7 h-7" />,
            title: "Technology & Traceability Platform",
            description: "Digital infrastructure enabling real-time tracking of produce from farm to plate. Families can scan QR codes to view farmer profiles, cultivation practices, harvest dates, quality certifications, and supply chain journey—building trust through technology."
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: "Insurance & Risk Protection",
            description: "Comprehensive crop insurance and income protection schemes designed specifically for nature farmers. We partner with insurance providers to offer affordable coverage against weather, pests, and market volatility, ensuring financial security for farming families."
        }
    ];

    return (
        <>
            <Header />

            {/* Page Hero */}
            <PageHero
                title="Our Initiatives"
                subtitle="Structured programs driving systemic change in Indian agriculture"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'Our Initiatives', href: '/initiatives' }
                ]}
            />

            {/* Introduction */}
            <PageSection background="white">
                <motion.div className="max-w-4xl mx-auto text-center" variants={fadeUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A] mb-6">
                        Building the Foundation for Sustainable Agriculture
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        KhetiBharat's initiatives are designed to address every critical aspect of the agricultural value chain—from soil health and farmer capacity to market access and consumer trust.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Each program is built on proven models, government partnerships, and community participation to ensure scalability and long-term impact across rural India.
                    </p>
                </motion.div>
            </PageSection>

            {/* Initiatives Grid */}
            <PageSection background="light">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {initiatives.map((initiative, index) => (
                        <ContentCard
                            key={index}
                            icon={initiative.icon}
                            title={initiative.title}
                            description={initiative.description}
                        />
                    ))}
                </div>
            </PageSection>

            {/* Impact Statement */}
            <PageSection background="white">
                <motion.div
                    className="max-w-5xl mx-auto bg-gradient-to-br from-[#0B6B3A] to-[#095730] rounded-3xl p-8 sm:p-12 text-white text-center"
                    variants={fadeUp}
                >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                        Integrated Approach, Measurable Results
                    </h3>

                    <p className="text-lg text-white/90 leading-relaxed mb-8">
                        These initiatives work together as a cohesive ecosystem. When farmers adopt nature farming, receive training, access direct markets through technology, and have insurance protection—their incomes rise, soil health improves, and families receive safe food.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">25,000+</div>
                            <div className="text-sm text-white/80">Farmers Enrolled</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">50+</div>
                            <div className="text-sm text-white/80">Districts Covered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">15,000</div>
                            <div className="text-sm text-white/80">Acres Certified</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">100%</div>
                            <div className="text-sm text-white/80">Transparency</div>
                        </div>
                    </div>
                </motion.div>
            </PageSection>

            {/* CTA */}
            <PageSection background="gradient">
                <motion.div className="max-w-4xl mx-auto text-center" variants={fadeUp}>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Ready to Participate?
                    </h3>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Whether you're a farmer, institutional partner, or supporter—explore how you can contribute to India's agricultural transformation.
                    </p>

                    <motion.a
                        href="/contact"
                        className="inline-block bg-[#FF6A00] text-white px-10 py-4 rounded-full font-semibold text-lg btn-premium relative overflow-hidden"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </PageSection>
            <FinalCTA />
            <Footer />
        </>
    );
}
