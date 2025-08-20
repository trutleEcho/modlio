import {Navigation} from "@/components/navigation";
import {HeroSection} from "@/components/hero-section";
import {AboutSection} from "@/components/about-section";
import {ContactSection} from "@/components/contact-section";
import {Footer} from "@/components/footer";
import {AnimatedBackground, GridBackground} from "@/components/animated-background";
import ServicesSection from "@/components/services-section";

export default function Home() {
    return (
        <div className="relative min-h-screen">
            {/* Animated Background */}
            <AnimatedBackground/>
            <GridBackground/>

            {/* Navigation */}
            <Navigation/>

            {/* Main Content */}
            <main id="main-content" className="relative z-10 py-18" role="main">
                <HeroSection/>
                <AboutSection/>
                <ServicesSection/>
                <ContactSection/>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}

