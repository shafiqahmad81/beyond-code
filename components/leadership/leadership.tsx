import { ArrowRight } from "lucide-react";
import Button from "../button/button";
import leadershipImage1 from "../../assets/img/ceo.png";
import leadershipImage2 from "../../assets/img/technology-officer.png";
import leadershipImage3 from "../../assets/img/operation-officer.png";
import leadershipBg from "../../assets/img/leadership-bg.png";
import LeadershipCard from "./leadershipCard";

type LeadershipSectionProps = {
  showButton?: boolean;
};

export default function LeadershipSection({
  showButton = true,
}: LeadershipSectionProps) {
  return (
    <section className="py-7 md:py-14">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-10 relative">
          <div
            className="absolute -left-10 md:-left-40 top-24 w-80 md:w-134.25 h-80 md:h-132.75 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${leadershipBg.src})` }}
          ></div>

          <div className="w-full lg:max-w-93 relative z-20">
            <h2 className="mb-3 sm:mb-5">Leadership</h2>

            <div className="text-base sm:text-xl text-[#C1C1C1] font-normal sm:leading-7 space-y-4 sm:space-y-8 mb-5 sm:mb-10">
              <p>
                Leadership at Beyond Code combines deep operational expertise
                with advanced AI and system engineering capabilities.
              </p>
              <p>
                The team focuses on building structured intelligence systems
                aligned with real institutional environments.
              </p>
            </div>

            {showButton && (
              <Button
                text="Contact us"
                icon={<ArrowRight className="h-4 w-4" />}
                href="/contact-us"
              />
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-7.5 w-full lg:max-w-211.25">
            <LeadershipCard
              image={leadershipImage1}
              name="Reem Aljneibi"
              role="Founder & CEO"
              designation="Operational Intelligence and Systems Strategist"
            />
            <LeadershipCard
              image={leadershipImage2}
              name="Mohammed Alyafaei"
              role="Chief Technology Officer"
              designation="Intelligent Systems and AI Infrastructure Architect"
            />
            <LeadershipCard
              image={leadershipImage3}
              name="Yasir Arafat"
              role="Chief Operation Officer"
              designation="Intelligent Systems and AI Infrastructure Architect"
            />
          </div>
        </div>
      </div>
    </section>
  );
}