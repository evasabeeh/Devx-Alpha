import {
    Hero,
    TrustedSection,
    PurposeAndPassion,
    Milestone,
    Services,
    Pricing,
    Testimonials,
    Footer,
} from '@/components';
export default function Page() {
    return (
        <div>
            <Hero />
            <TrustedSection />
            <PurposeAndPassion />
            <Milestone />
            <Services />
            <Testimonials />
            <Pricing />
            <Footer />
        </div>
    );
}
