import React from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Services from "@/components/site/Services";
import ManualTesting from "@/components/site/ManualTesting";
import QAConsulting from "@/components/site/QAConsulting";
import AutomationEngineering from "@/components/site/AutomationEngineering";
import FrameworkEngineering from "@/components/site/FrameworkEngineering";
import IdealEngagements from "@/components/site/IdealEngagements";
import HowIWork from "@/components/site/HowIWork";
import Deliverables from "@/components/site/Deliverables";
import Industries from "@/components/site/Industries";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import ConsultationDialog from "@/components/site/ConsultationDialog";
import AIAssistant from "@/components/site/AIAssistant";

const Landing = () => {
  return (
    <main data-testid="landing-page" className="relative overflow-x-hidden bg-white text-emerald-950 font-sans">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <ManualTesting />
      <QAConsulting />
      <AutomationEngineering />
      <FrameworkEngineering />
      <IdealEngagements />
      <HowIWork />
      <Deliverables />
      <Industries />
      <Contact />
      <Footer />
      <ConsultationDialog />
      <AIAssistant />
    </main>
  );
};

export default Landing;
