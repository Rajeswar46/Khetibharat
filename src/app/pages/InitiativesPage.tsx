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
            title: "CYANO BREW",
            description: " Energy & Community Footfall Zone Purpose: Create a daily habit loop (morning/evening visits) What runs here: Coffee / Tea, Health Drinks – Spirulina Integrated, Super Foods – Spirulina Integrated, Health Shot Bar (spirulina / millet / buttermilk shots), Juice / Thick Shakes / Milkshakes, Traditional Organic Healthy Soups, Organic Millet Snacks, Organic Processed Foods Why it matters: Footfall → cross-sales into Market & CyanoVeda Investor value: High-frequency small-ticket conversions, strong retention"
        },
        {
            icon: <GraduationCap className="w-7 h-7" />,
            title: "CYANOVEDA",
            description: " Health & Certified Products Store Purpose: Household essentials + wellness trust at scaleWhat runs here: Direct Certified Farm Produce Products. Other Certified Products, Spices, Millets, Pulses & Cold Pressed Oils, Spirulina innovations (powder, jelly candy, processed foods), Personal care: Spirulina Soaps, Shampoo, Hair Oil, KhetiBharat Club (membership + loyalty) Why it matters: Recurring monthly household spend + trust-building Government value: Nutrition and safe food access for communities Investor value: Repeat retail margins + predictable demand"
        },
        {
            icon: <Link2 className="w-7 h-7" />,
            title: "CRENNIS",
            description: "Natural & Bio Agri Inputs Zone Purpose: Make nature farming easy, reliable, repeatable What runs here: Organic Bio-Stimulation + Natural Growth Promoters, Natural Pest Controls + Plant Protection, Natural Manures + Waste decomposers (G Biome etc.), Local BRC Produced Organic Inputs, Traditional Seeds, Nursery plants & Tissue Culture, Processed Soil / Cocopeat (terrace + farming support), Other Bio/Organic Products Why it matters: Farmers return frequently → high retention Government value: Scalable transition to low-chemical systems Investor value: Seasonal repeat cycles + strong farmer stickiness"
        },
        {
            icon: <Smartphone className="w-7 h-7" />,
            title: "KHETHI ZONE",
            description: "Farm Services + Farmer Support Desk Purpose: A single-window farmer support system Core services: Drone Services, Tractor Services, Farm Machinery services, Govt Schemes & Facilities support, Insurance, Solar Service, Finance Services with NBFCs, Input Credit / BNPL enablement, WhatsApp Ordering + Click & Collect + Delivery support (hub layer) Why it matters: Converts “visitors” into enrolled farmers through practical help Investor value: Service revenue + commissions + strong partnerships"
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: "KHETIBHARAT MARKET",
            description: "Daily Certified Vegetables, Fruits & Perishables Purpose: Daily essentials = daily footfall What runs here: Certified Vegetables, Certified Fruits, Certified Perishable Products, Subscription pickup: Daily Fresh Basket, Fresh cut fruits / salad options, Live tasting + “Recipe of the Day” conversion point, Institutional supply readiness (schools, hostels, hospitals) Why it matters: Daily repeat customers create predictable cashflow Society value: Safe food habits at community scale Investor value: Volume-driven engine for hub sustainability "
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: "PGS INDIA / NMNF ZONE",
            description: "Nature Certification + Training + Marketplace Enablement Purpose: Turn certification into a farmer advantage, not a burden What runs here: Farmer Registration + onboarding, PGS documentation helpdesk (records, logs, group support), Nature Farming trainings + crop management support, Organic input availability coordination + compliance handholding, Integrated Marketplace: Online store + Offline store, National buyers connectivity + bulk buying services, Processing enablement + end-product packing support Why it matters: Certification + market = premium, stable farmer income Government value: A ready execution layer for natural farming programs Investor value: Network effects (more farmers → more supply → more buyers) "
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: " REST ’N’ FRESH",
            description: "Convenience + Premium Trust Experience Purpose: Make the hub family-friendly & women-friendly What runs here: Clean & silent environment, Neat & clean disinfected toilets, Personalised recliners / rest area, Dress changing rooms Why it matters: Better experience → longer stays → larger basket sizes Investor value: Higher conversion; premium brand perception "
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: "VALUE-ADD & PROCESSING",
            description: "Farmer Income Upgrade + Professional Pack & Brand Purpose: Raise farmer realization, reduce wastage, enable bulk demand What runs here: Cleaning, grading, packing, Labeling support (QR/barcode style), Drying equipment + mini rice mills, Milling services (atta/spice grinding where applicable), “Pack & Brand for Farmers” (small batch brand enablement), Dispatch coordination for bulk buyers Why it matters: Farmers shift from commodity selling to trusted packaged value Government value: Local value chains + rural jobs Investor value: Processing fees + higher-margin vertical growth"
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

            {/* Impact Statement
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
            </PageSection> */}
            <FinalCTA />
            <Footer />
        </>
    );
}
