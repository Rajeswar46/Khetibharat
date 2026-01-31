import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { StatsBar } from '@/app/components/StatsBar';
import { WhoWeAre } from '@/app/components/WhoWeAre';
import { OurMission } from '@/app/components/OurMission';
import { OurProcess } from '@/app/components/OurProcess';
import { BenefitsImpact } from '@/app/components/BenefitsImpact';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';

export function HomePage() {
    return (
        <>
            <Header />
            <HeroSection />
            <StatsBar />
            <WhoWeAre />
            <OurMission />
            <OurProcess />
            <BenefitsImpact />
            <FinalCTA />
            <Footer />
        </>
    );
}
