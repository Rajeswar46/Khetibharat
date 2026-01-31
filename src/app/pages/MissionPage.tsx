import { Header } from '@/app/components/Header';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';
import { PageHero } from '@/app/components/shared/PageHero';
import { PageSection } from '@/app/components/shared/PageSection';
import { ContentCard } from '@/app/components/shared/ContentCard';
import { motion } from 'framer-motion';
import { fadeUp } from '@/app/utils/animations';
import { Leaf, Heart, Shield } from 'lucide-react';

export function MissionPage() {
    const principles = [
        {
            icon: <Leaf className="w-7 h-7" />,
            title: "Soil Health First",
            description: "Rebuilding India's soil through natural farming practices that restore microbial diversity, improve water retention, and increase carbon sequestration for future generations."
        },
        {
            icon: <Heart className="w-7 h-7" />,
            title: "Farmer Dignity & Income",
            description: "Ensuring fair prices, reducing debt dependency, and creating sustainable livelihoods for farming families through direct market access and transparent pricing."
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: "Food Safety & Traceability",
            description: "Guaranteeing chemical-free, nutritious food for every family with complete farm-to-plate transparency, quality certification, and insurance-backed safety."
        }
    ];

    const impactGoals = [
        { number: "1 Million+", label: "Farmers Transitioning to Nature Farming by 2030" },
        { number: "5 Million", label: "Acres of Chemical-Free Farmland" },
        { number: "10 Million", label: "Families Accessing Safe, Traceable Food" },
        { number: "100%", label: "Transparency from Soil to Plate" }
    ];

    return (
        <>
            <Header />

            {/* Page Hero */}
            <PageHero
                title="Our Mission"
                subtitle="Building a sustainable, transparent, and dignified agriculture ecosystem for India"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'Our Mission', href: '/mission' }
                ]}
            />

            {/* Mission Overview */}
            <PageSection background="white">
                <motion.div className="max-w-4xl mx-auto text-center" variants={fadeUp}>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="block w-12 h-[2px] bg-[#7A2E1D]" />
                        <p className="text-sm font-semibold tracking-wide text-gray-900">
                            Our Vision
                        </p>
                        <span className="block w-12 h-[2px] bg-[#7A2E1D]" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FF6A00] mb-8">
                        Transforming India's Food System Through Nature Farming
                    </h2>

                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            India's agriculture stands at a critical juncture. Decades of chemical-intensive farming have degraded soil health, trapped farmers in debt cycles, and compromised the safety of our food supply. KhetiBharat exists to reverse this trajectory.
                        </p>
                        <p>
                            We envision an India where nature farming is the norm—where healthy soil produces nutritious food, where farmers earn dignified incomes, and where every family knows exactly where their food comes from. This is not just agriculture; this is a national movement for sustainability, health, and fairness.
                        </p>
                        <p className="font-semibold text-[#0B6B3A]">
                            Our mission is to build a transparent, insured bridge connecting farmers directly to families, eliminating middlemen, restoring soil health, and creating a resilient food system for the next generation.
                        </p>
                    </div>
                </motion.div>
            </PageSection>

            {/* Core Principles */}
            <PageSection background="light">
                <motion.div className="text-center mb-12" variants={fadeUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A] mb-4">
                        Our Core Principles
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Three foundational pillars guide every decision we make
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {principles.map((principle, index) => (
                        <ContentCard
                            key={index}
                            icon={principle.icon}
                            title={principle.title}
                            description={principle.description}
                        />
                    ))}
                </div>
            </PageSection>

            {/* Impact Goals */}
            <PageSection background="white">
                <motion.div className="text-center mb-12" variants={fadeUp}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A] mb-4">
                        Our 2030 Impact Goals
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Measurable targets driving our work toward a sustainable future
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactGoals.map((goal, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0B6B3A] to-[#095730] text-white"
                            variants={fadeUp}
                            whileHover={{ scale: 1.05, y: -4 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-4xl sm:text-5xl font-bold mb-3">
                                {goal.number}
                            </div>
                            <div className="text-sm sm:text-base text-white/90 leading-relaxed">
                                {goal.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </PageSection>

            {/* Call to Action
            <PageSection background="gradient">
                <motion.div
                    className="max-w-4xl mx-auto text-center bg-white rounded-3xl shadow-2xl p-8 sm:p-12"
                    variants={fadeUp}
                >
                    <Globe className="w-16 h-16 mx-auto mb-6 text-[#FF6A00]" />

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Join the Movement
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Whether you're a farmer seeking sustainable practices, a family wanting safe food, or an organization committed to positive change—there's a place for you in the KhetiBharat ecosystem.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="/contact"
                            className="bg-[#FF6A00] text-white px-8 py-3 rounded-full font-semibold btn-premium relative overflow-hidden"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Get Involved
                        </motion.a>

                        <motion.a
                            href="/initiatives"
                            className="bg-[#0B6B3A] text-white px-8 py-3 rounded-full font-semibold btn-premium relative overflow-hidden"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Explore Our Initiatives
                        </motion.a>
                    </div>
                </motion.div>
            </PageSection> */}
            <FinalCTA />
            <Footer />
        </>
    );
}
