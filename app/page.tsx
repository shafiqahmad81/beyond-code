import CaseStudySection from "@/components/case-study/caseStudy";
import ConsultationSection from "@/components/consultation/consultationSection";
import ControlStays from "@/components/control-stays/controlStays";
import DeploymentSection from "@/components/deployment/deployment";
import FAQSection from "@/components/faq-section/faqSection";
import Footer from "@/components/footer/footerSection";
import Header from "@/components/header/header";
import HeroSection from "@/components/herosection/HeroSection";
import Implementation from "@/components/gets-builds/getsBuilds";
import LeadershipSection from "@/components/leadership/leadership";
import OurCore from "@/components/our-core/OurCore";
import OurMission from "@/components/our-mission/OurMission";
import Service from "@/components/services/service";
import Technology from "@/components/technology/technology";
import GetSection from "@/components/what-you-get/get";
import WhyBeyond from "@/components/why-beyond/WhyBeyond";


export default function HomePage() {
  return (
    <main className=" scroll-smooth bg-[#050505]">

      <Header />
      <HeroSection />
      <OurMission />
      <WhyBeyond />
      <OurCore />
      <Service />
      <Technology />
      <GetSection />
      <Implementation />
      <DeploymentSection />
      <ControlStays />
      <LeadershipSection />
      <CaseStudySection />
      <FAQSection />
      <ConsultationSection />
      <Footer />

    </main>
  );
}