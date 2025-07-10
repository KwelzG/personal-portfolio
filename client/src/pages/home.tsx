import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import JourneyTimeline from "@/components/journey-timeline";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import DigitalVault from "@/components/digital-vault";
import LiveFeed from "@/components/live-feed";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <JourneyTimeline />
      <AboutSection />
      <ProjectsSection />
      <DigitalVault />
      <LiveFeed />
      <ContactSection />
      <Footer />
    </div>
  );
}
