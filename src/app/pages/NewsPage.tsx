import { Header } from '@/app/components/Header';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';
import { PageHero } from '@/app/components/shared/PageHero';
import { PageSection } from '@/app/components/shared/PageSection';
import { motion } from 'framer-motion';
import { fadeUp } from '@/app/utils/animations';
import { Calendar, ArrowRight, Newspaper, Radio, FileText, Users } from 'lucide-react';

export function NewsPage() {
    const newsItems = [
        {
            category: "announcement",
            icon: <Newspaper className="w-5 h-5" />,
            date: "January 15, 2025",
            title: "KhetiBharat Expands to 10 New Districts Across Maharashtra",
            excerpt: "In partnership with the Maharashtra State Agriculture Department, we're bringing nature farming training and market access to 5,000 additional farming families.",
            link: "#"
        },
        {
            category: "media",
            icon: <Radio className="w-5 h-5" />,
            date: "January 8, 2025",
            title: "Featured in The Hindu: Building Trust Through Transparency",
            excerpt: "National coverage highlighting our innovative farm-to-family traceability platform and its impact on consumer confidence in organic produce.",
            link: "#"
        },
        {
            category: "press",
            icon: <FileText className="w-5 h-5" />,
            date: "December 20, 2024",
            title: "Press Release: Insurance Partnership with National Crop Insurance Corporation",
            excerpt: "Comprehensive crop protection now available to all certified nature farmers, reducing financial risk and encouraging sustainable practice adoption.",
            link: "#"
        },
        {
            category: "event",
            icon: <Users className="w-5 h-5" />,
            date: "December 10, 2024",
            title: "National Nature Farming Summit 2024 Concludes Successfully",
            excerpt: "Over 500 farmers, policymakers, and agriculture experts gathered in Delhi to discuss scaling natural farming practices across India.",
            link: "#"
        },
        {
            category: "announcement",
            icon: <Newspaper className="w-5 h-5" />,
            date: "November 25, 2024",
            title: "1 Million Meals Delivered Through Direct Farm Connections",
            excerpt: "Milestone achievement in connecting urban families with fresh, chemical-free produce directly from certified nature farmers.",
            link: "#"
        },
        {
            category: "media",
            icon: <Radio className="w-5 h-5" />,
            date: "November 18, 2024",
            title: "Recognized by Ministry of Agriculture as Model Platform",
            excerpt: "KhetiBharat's integrated approach featured in national policy discussions on sustainable agriculture and farmer income enhancement.",
            link: "#"
        },
        {
            category: "press",
            icon: <FileText className="w-5 h-5" />,
            date: "November 5, 2024",
            title: "Quarterly Impact Report: 15,000 Acres Transitioned to Nature Farming",
            excerpt: "Third quarter results show significant growth in farmer enrollment, soil health improvements, and market penetration across target regions.",
            link: "#"
        },
        {
            category: "event",
            icon: <Users className="w-5 h-5" />,
            date: "October 28, 2024",
            title: "Farmer Training Camps Reach 25 Villages in Karnataka",
            excerpt: "Hands-on workshops covering composting, natural pest control, and market linkages benefit over 1,200 farming families.",
            link: "#"
        }
    ];

    const categoryColors = {
        announcement: "bg-[#FF6A00] text-white",
        media: "bg-[#0B6B3A] text-white",
        press: "bg-[#7A2E1D] text-white",
        event: "bg-blue-600 text-white"
    };

    return (
        <>
            <Header />

            {/* Page Hero */}
            <PageHero
                title="News & Media"
                subtitle="Latest updates, announcements, and media coverage"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'News & Media', href: '/news' }
                ]}
                background="light"
            />

            {/* News Grid */}
            <PageSection background="white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.article
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Category Badge */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className={`${categoryColors[item.category as keyof typeof categoryColors]} px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5`}>
                                    {item.icon}
                                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                </span>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B6B3A] transition">
                                {item.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {item.excerpt}
                            </p>

                            {/* Read More */}
                            <a
                                href={item.link}
                                className="inline-flex items-center gap-2 text-[#FF6A00] font-semibold hover:gap-3 transition-all"
                            >
                                Read More
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.article>
                    ))}
                </div>
            </PageSection>

            {/* Media Kit CTA
            <PageSection background="gradient">
                <motion.div
                    className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center"
                    variants={fadeUp}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Media Inquiries & Press Kit
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        For interviews, press releases, high-resolution images, and official statements, please contact our media relations team.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="mailto:media@khetibharat.org"
                            className="bg-[#0B6B3A] text-white px-8 py-3 rounded-full font-semibold btn-premium relative overflow-hidden"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Contact Media Team
                        </motion.a>

                        <motion.a
                            href="#"
                            className="bg-white border-2 border-[#0B6B3A] text-[#0B6B3A] px-8 py-3 rounded-full font-semibold hover:bg-[#0B6B3A] hover:text-white transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Download Press Kit
                        </motion.a>
                    </div>
                </motion.div>
            </PageSection> */}
            <FinalCTA />
            <Footer />
        </>
    );
}
