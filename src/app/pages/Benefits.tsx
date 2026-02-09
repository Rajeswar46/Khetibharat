import { Header } from '@/app/components/Header';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';
import { PageHero } from '@/app/components/shared/PageHero';
import { PageSection } from '@/app/components/shared/PageSection';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/app/utils/animations';
import { Leaf, Users, ShoppingBasket, ShieldCheck } from 'lucide-react';

export function BenefitsPage() {

    const farmerBenefits = [
        "Certification becomes easy – Documentation helpdesk + group support + training + compliance readiness",
        "Reliable natural inputs through Cyano Crennis with expert guidance",
        "Assured markets – Daily market + subscriptions + institutional supply + bulk buyers",
        "Higher income through value addition, packing, branding & grading",
        "Reduced chemical dependency and lower input risk",
        "Better quality produce → stronger acceptance & pricing power",
        "Stable demand channels (daily + institutional + bulk)",
        "Time saved via single-window services (Khethi Zone + PGS helpdesk)"
    ];

    const consumerBenefits = [
        "Clean, traceable, certified food with origin visibility",
        "Better nutrition for children and elders through safe staples + wellness options",
        "Convenience via subscriptions and daily basket pickups",
        "Healthy lifestyle choices through Cyano Brew + CyanoVeda",
        "Trust through transparency (farmer stories, certification, consistent quality)"
    ];

    const societyBenefits = [
        "Lower chemical load on soil and water, improved biodiversity over time",
        "Local employment via SHG/youth roles in packing, labeling, store operations & services",
        "Reduced food waste through local grading/processing & faster buyer routes",
        "Community awareness on nutrition, soil health & farmer respect",
        "A scalable model strengthening rural economies"
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <PageHero
                title=" Benefits"
                subtitle="Empowering Farmers, Enriching Consumers, Strengthening Society"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'Benefits', href: '/benefits' }
                ]}
                background="gradient"
            />

            {/* Farmers Section */}
            <PageSection background="white">
                <motion.div className="text-center mb-12" variants={fadeUp}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Leaf className="w-8 h-8 text-[#0B6B3A]" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A]">
                            How KhetiBharat Benefits Farmers
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Especially PGS & Nature Certified Farmers – built around our 4 Guarantees
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                >
                    {farmerBenefits.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-r from-[#0B6B3A]/5 to-white p-6 rounded-2xl shadow-md border border-[#0B6B3A]/10"
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-gray-800 font-medium leading-relaxed">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </PageSection>

            {/* Consumers Section */}
            <PageSection background="light">
                <motion.div className="text-center mb-12" variants={fadeUp}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <ShoppingBasket className="w-8 h-8 text-[#FF6A00]" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A]">
                            How KhetiBharat Benefits Consumers
                        </h2>
                    </div>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                >
                    {consumerBenefits.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                        >
                            <p className="text-gray-800 font-medium">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </PageSection>

            {/* Society Section */}
            <PageSection background="white">
                <motion.div className="text-center mb-12" variants={fadeUp}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Users className="w-8 h-8 text-[#0B6B3A]" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B6B3A]">
                            How KhetiBharat Benefits Society
                        </h2>
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                >
                    {societyBenefits.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-[#FFF7ED] to-white p-6 rounded-2xl shadow-md border border-[#FF6A00]/20"
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                        >
                            <p className="text-gray-800 font-medium">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </PageSection>

            {/* Closing Statement
            <PageSection background="gradient">
                <motion.div
                    className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center"
                    variants={fadeUp}
                >
                    <ShieldCheck className="w-12 h-12 text-[#0B6B3A] mx-auto mb-6" />

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        A Transparent, Sustainable, Scalable Model
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        KhetiBharat is more than a marketplace — it is a movement that strengthens rural economies, ensures food safety, empowers farmers, and creates a healthier future for generations.
                    </p>

                    <motion.a
                        href="/contact"
                        className="inline-block bg-[#0B6B3A] text-white px-10 py-4 rounded-full font-semibold text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Join the Movement
                    </motion.a>
                </motion.div>
            </PageSection> */}

            <FinalCTA />
            <Footer />
        </>
    );
}
