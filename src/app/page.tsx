// HOME PAGE
import {
    Hero,
    TrustedSection,
    PurposeAndPassion,
    Milestone,
    Services,
    Pricing,
    Testimonials,
} from "@/components/Home";
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
        </div>
    );
}
