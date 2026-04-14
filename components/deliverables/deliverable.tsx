import Image from "next/image";
import deliverableImage from "../../assets/img/deliverables.png"
export default function DeliverableSection() {
  return (
    <section className="bg-black text-white py-10 sm:py-16 lg:py-32">
      <div className="container ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:px-9">
          {/* Left Image */}
          <div className="relative max-w-151.25">
            <Image
              src={deliverableImage} 
              alt="deliverable Image"
              width={605}
              height={677}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="max-w-151.25">
            
            <div>
              <h2>Deliverables</h2>
              <p className="text-base sm:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-2 sm:mt-3">When institutions work with Beyond Code, they receive:</p>
            </div>

            <div className=" divide-y divide-[#4A4A4A] space-y-3 sm:space-y-5 mt-10 sm:mt-16">
                <div className="pb-3 sm:pb-5 last:pb-0">
                    <h5>AI Assistants</h5>
                    <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">Secure internal assistants trained on institutional data.</p>
                </div>
                <div className="pb-3 sm:pb-5 last:pb-0">
                    <h5>Operational Intelligence Systems</h5>
                    <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">Real-time monitoring and execution tracking.</p>
                </div>
                <div className="pb-3 sm:pb-5 last:pb-0">
                    <h5>Enterprise Reporting Infrastructure</h5>
                    <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">Automated report generation and executive dashboards.</p>
                </div>
                <div className="pb-3 sm:pb-5 last:pb-0">
                    <h5>Workflow Automation</h5>
                    <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">Structured operational execution systems.</p>
                </div>
                <div className="pb-3 sm:pb-5 last:pb-0">
                    <h5>Full System Deployment</h5>
                    <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">Integration with existing infrastructure and institutional systems.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


