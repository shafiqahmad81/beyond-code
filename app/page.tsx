import HeroSection from "@/components/herosection/HeroSection";
import OurCore from "@/components/our-core/OurCore";
import OurMission from "@/components/our-mission/OurMission";
import Service from "@/components/services/service";
import Technology from "@/components/technology/technology";
import WhyBeyond from "@/components/why-beyond/WhyBeyond";




export default function HomePage() {
  return (
    <main className=" scroll-smooth">

      <HeroSection />
      <OurMission />
      <WhyBeyond />
      <OurCore />
      <Service />
      <Technology />

    </main>
  );
}