import Image from "next/image";
import deploymentImage from "../../assets/img/deployment.png";
export default function DeploymentSection() {
  return (
    <section className="bg-black text-white py-6 sm:py-8 lg:py-14">
      <div className="container ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="max-w-160 order-2 md:order-1">
            
            <div>
              <h2>Deployment Models</h2>
            </div>

            <div className=" divide-y divide-[#4A4A4A] space-y-3 sm:space-y-5 mt-8 sm:mt-16">
                <div className="pb-3 sm:pb-5 last:pb-0">
                    <h5>Private Cloud Deployment</h5>
                    <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">Systems deployed within entity-controlled cloud environments.</p>
                </div>
                <div className="pb-3 sm:pb-5 last:pb-0">
                    <h5>On-Premise Deployment</h5>
                    <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">Installed within institutional servers and infrastructure.</p>
                </div>
                <div className="pb-3 sm:pb-5 last:pb-0">
                    <h5>Hybrid Deployment</h5>
                    <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">Combination of institutional infrastructure and cloud environments.</p>
                </div>
                
            </div>
          </div>
          <div className="relative max-w-127 order-1 md:order-2">
            <Image
              src={deploymentImage} 
              alt="deployment Image"
              width={508}
              height={473}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


