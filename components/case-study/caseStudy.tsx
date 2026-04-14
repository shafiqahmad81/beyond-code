import { ArrowRight } from "lucide-react";
import GradientButton from "../button/GradientButton";
import Image from "next/image";
import caseStudyImage1 from "../../assets/img/system-capability.png";
import caseStudyImage2 from "../../assets/img/integration.png";
import caseStudyImage3 from "../../assets/img/operational.png";
import Link from "next/link";
import CaseStudyCard from "./caseStudyCard";

export default function CaseStudySection() {
  return (
    <section className="py-7 lg:py-14 bg-[linear-gradient(180deg,#050505_0%,#252525_100%)]">
      <div className="container ">
        <div className="flex items-center justify-between flex-wrap gap-5 pb-6 md:pb-12">
          <div>
            <h2>Pilot Program / Case Study</h2>
            <p className="text-base sm:text-xl sm:leading-7 font-normal text-[#C1C1C1] mt-3">Institutions can start with a controlled pilot deployment to validate</p>
          </div>
          <div>
            <GradientButton
              text="View All"
              icon={<ArrowRight className="h-4 w-4" />}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-y-10 gap-x-5">
            <CaseStudyCard
                image={caseStudyImage1}
                title="System capability"
                description="Evaluates the system’s ability to deliver core intelligence functions, including data processing, automation..."
                href="#"
            />
            <CaseStudyCard
                image={caseStudyImage2}
                title="Integration Readiness"
                description="Assesses how seamlessly the system can integrate with existing infrastructure, including ERP systems, databases..."
                href="#"
            />
            <CaseStudyCard
                image={caseStudyImage3}
                title="Operational Impact"
                description="Measures the system’s effectiveness in improving execution, reducing manual workload, enhancing visibilit..."
                href="#"
            />
        </div>
      </div>
    </section>
  );
}



