import { ArrowRight } from "lucide-react";
import GradientButton from "../button/GradientButton";
import CaseStudyCard from "./caseStudyCard";
import { CaseStudyData } from "@/data/caseStudy";

export default function CaseStudySection() {
  const caseStudyData = CaseStudyData;
  const caseStudy = caseStudyData.slice(0, 3);
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
              href="/case-study"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-y-10 gap-x-5">
          {caseStudy?.map((item: any) => {
            return (
              <CaseStudyCard
                key={item.id}
                image={item?.image}
                title={item?.title}
                description={item?.description}
                href={`/case-study/${item?.slug}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
