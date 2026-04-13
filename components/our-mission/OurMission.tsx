import Image from "next/image";
import OurMissionImage from "../../assets/img/mission.png"
export default function OurMission() {
  return (
    <section className="bg-black text-white py-16 lg:py-32">
      <div className="container ">
        <div className="max-w-254.5 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Image */}
          <div className="relative max-w-117.25">
            <Image
              src={OurMissionImage} 
              alt="Robot Hand"
              width={469}
              height={534}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8 max-w-120.25">
            
            {/* Who We Are */}
            <div>
              <h2 className="text-2xl md:text-[32px] leading-[44.8px] font-bold mb-3 sm:mb-5">Who We Are</h2>
              <p className="text-base sm:text-lg font-normal leading-[25.2px] text-[#B2B2B2]">
                Beyond Code is an operational intelligence company that develops
                <span className="font-bold"> AI-powered institutional systems</span> designed to improve execution,
                reporting, and decision-making.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-2xl md:text-[32px] leading-[44.8px] font-bold mb-3 sm:mb-5">Our Mission</h2>
              <p className="text-base sm:text-lg font-normal leading-[25.2px] text-[#B2B2B2]">
                To close the gap between <span className="font-bold">AI adoption and operational readiness</span> by
                building systems that integrate directly into institutional
                workflows.
              </p>
            </div>

            {/* Our Approach */}
            <div>
              <h2 className="text-2xl md:text-[32px] leading-[44.8px] font-bold mb-3 sm:mb-5">Our Approach</h2>
              <p className="text-base sm:text-lg font-normal leading-[25.2px] text-[#B2B2B2]">Systems are designed to align with:</p>
              <ul className="list-disc list-inside text-base sm:text-lg font-normal leading-[25.2px] text-[#B2B2B2]">
                <li>Institutional governance structures</li>
                <li>Existing operational workflows</li>
                <li>Reporting frameworks</li>
                <li>Infrastructure environments</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


