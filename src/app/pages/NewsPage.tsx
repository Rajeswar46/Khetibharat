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
        }
    ];

    const pgsNews = [
        {
            title: "Permanent Suspension of Regional Council - regarding",
            link: "https://pgsindia-ncof.gov.in/news/details/61"
        },
        {
            title: "Circular RC Performance",
            link: "https://pgsindia-ncof.gov.in/news/details/60"
        },
        {
            title: "Authorization of Regional councils for Natural Farming Certification",
            link: "https://pgsindia-ncof.gov.in/news/details/59"
        },
        {
            title: "Authorization of Regional councils for Organic Farming Certification",
            link: "https://pgsindia-ncof.gov.in/news/details/58"
        },
        {
            title: "Suspension of Regional Councils",
            link: "https://pgsindia-ncof.gov.in/news/details/57"
        },
        {
            title: "Authorized NF RCs for Natural Farming Certification System",
            link: "https://pgsindia-ncof.gov.in/news/details/56"
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

            <PageHero
                title="News & Media"
                subtitle="Latest updates, announcements, and media coverage"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'News & Media', href: '/news' }
                ]}
                background="gradient"
            />

            {/* ================= MAIN NEWS GRID ================= */}
            <PageSection background="white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.article
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className={`${categoryColors[item.category as keyof typeof categoryColors]} px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5`}>
                                    {item.icon}
                                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B6B3A] transition">
                                {item.title}
                            </h3>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                {item.excerpt}
                            </p>

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

            {/* ================= PGS NEWS SECTION ================= */}
            <PageSection>
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={fadeUp}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        PGS India News
                    </h2>

                    <div className="space-y-6">
                        {pgsNews.map((news, index) => (
                            <motion.a
                                key={index}
                                href={news.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block border-b border-gray-300 pb-4 group hover:bg-gray-50 p-4 rounded-lg transition"
                                whileHover={{ x: 6 }}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#0B6B3A] transition">
                                        {news.title}
                                    </h3>

                                    <ArrowRight className="w-5 h-5 text-[#FF6A00] group-hover:translate-x-1 transition" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </PageSection>

            <FinalCTA />
            <Footer />
        </>
    );
}
