import { ArrowRight } from "lucide-react";
import Button from "../button/button";
import serviceImage1 from "../../assets/img/predictive-system.png";
import serviceImage2 from "../../assets/img/operational-system.png";
import serviceImage3 from "../../assets/img/automation-system.png";
import serviceImage4 from "../../assets/img/development-system.png";
import ServiceCard from "./serviceCard";

export default function Service() {
  return (
    <section className="py-7 md:py-14">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-5 pb-6 md:pb-12">
            <h2>Services & Expertise</h2>
            <div>
                <Button
                    text="Contact us"
                    icon={<ArrowRight className="h-4 w-4" />}
                    href="/contact-us"
                />
            </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          
          <ServiceCard
            image={serviceImage1}
            title="Intelligence & Predictive Systems"
            description="Powered by LLM and machine learning systems, predictive analytics, and organizational knowledge intelligence."
          />
          <ServiceCard
            image={serviceImage2}
            title="Operational Intelligence Systems"
            description="From real-time monitoring to intelligent dashboards and operational data insights - built for complete operational control."
          />
          <ServiceCard
            image={serviceImage3}
            title="Automation Systems"
            description="From automated reporting to workflow automation and AI-powered assistants — built to streamline and scale operations."
          />
          <ServiceCard
            image={serviceImage4}
            title="Custom Intelligence Development"
            description="Agentic AI systems, autonomous operational intelligence platforms, and custom enterprise system development."
          />
        </div>
      </div>
    </section>
  );
}




