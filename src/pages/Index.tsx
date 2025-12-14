import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Technicians from "@/components/sections/Technicians";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Technicians />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
