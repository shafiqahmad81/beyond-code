import { ArrowRight } from "lucide-react";
import GradientButton from "../button/GradientButton";
import ProcessCard from "./processCard";

export default function Implementation() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-5 pb-6 md:pb-12">
          <div>
            <h2>Implementation Process</h2>
            <p className="text-base sm:text-xl sm:leading-7 font-normal text-[#C1C1C1] mt-3">Beyond Code follows a 4-stage deployment methodology.</p>
          </div>
          <div>
            <GradientButton
              text="Learn More"
              icon={<ArrowRight className="h-4 w-4" />}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
          <ProcessCard 
            number={1}
            title="Diagnose"
            description="Assess workflows, reporting structures, and operational gaps."
          />
          <ProcessCard 
            number={2}
            title="Structure"
            description="Design governance logic and system architecture."
          />
          <ProcessCard 
            number={3}
            title="Engineer"
            description="Develop AI systems and intelligence infrastructure."
          />
          <ProcessCard 
            number={4}
            title="Deploy"
            description="Deploy and configure systems within institutional environments."
          />
        </div>
      </div>
    </section>
  );
}


