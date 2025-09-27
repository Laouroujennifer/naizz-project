import Navbar from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import AgentsSection from '../components/AgentsSection';
import MoreFeatures from '../components/MoreFeatures';
import PricingPlans from '../components/PricingPlans';
import SupportedBy from '../components/SupportedBy';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <AgentsSection />
        <MoreFeatures />
        <PricingPlans />
        <SupportedBy />
        <Footer />
      </main>
    </div>
  );
}