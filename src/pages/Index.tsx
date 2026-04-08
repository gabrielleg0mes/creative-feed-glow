import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import WhyInvest from "@/components/WhyInvest";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Benefits />
      <Process />
      <Portfolio />
      <WhyInvest />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
};

export default Index;
