import { Headphones } from "lucide-react";
import GradientButton from "../button/GradientButton";
import SystemCard from "./systemCard";
import ourCoreBg from "../../assets/img/our-core-bg.png";
import learnImage from "../../assets/img/learn.png";
import Image from "next/image";

export default function OurCore() {
    return (
        <section className="py-7 md:py-14">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap gap-5 pb-6 md:pb-12">
                    <h2>Our Core Systems</h2>
                    <div>
                        <GradientButton
                            text="Book for consultation"
                            icon={<Headphones className="h-4 w-4" />}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5 relative">
                    <div className="absolute top-[66%] sm:top-[63%] left-1/2 -translate-y-1/2 -translate-x-1/2 right-0 w-75 sm:w-136.75 h-75 sm:h-135.25 bg-cover bg-top bg-no-repeat z-30"
                            style={{ backgroundImage: `url(${ourCoreBg.src})` }}>
                        </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                        <SystemCard
                            badge="System 1"
                            title="Agentic Institutional Intelligence"
                            description="An integrated operational intelligence platform designed for real-time institutional decision support."
                            capabilitiesTitle="Capabilities"
                            capabilities={[
                                "Operational intelligence assistant",
                                "Reporting intelligence interface",
                                "Workflow intelligence models",
                                "Decision support models",
                                "Document management integration",
                                "ERP and operational database connectivity",
                            ]}
                            impactTitle="Impact"
                            impact={[
                                "50–70% faster executive decision preparation",
                                "60–80% faster information retrieval",
                                "70–90% reduction in manual data retrieval",
                                "Up to 60% improved institutional responsiveness",
                            ]}
                        />
                        <SystemCard
                            badge="System 2"
                            title="Institutional Policy-Linked Reporting"
                            description="A structured reporting infrastructure that connects reports directly to institutional policies."
                            capabilitiesTitle="Key Features"
                            capabilities={[
                                "Automated report generation",
                                "Policy and clause linking",
                                "Intelligent compliance tracking",
                                "Structured document workflows",
                            ]}
                            impactTitle="Impact"
                            impact={[
                                "80% faster report preparation",
                                "85% reduction in manual reporting work",
                                "Up to 15× faster report generation",
                            ]}
                        />
                    </div>
                    <div className="relative rounded-[10px] p-px " style={{
                        background: "linear-gradient(45deg, #FFFFFF 14.29%, rgba(255, 255, 255, 0.2) 32.14%, rgba(230, 242, 255, 0.1) 50%, rgba(255, 255, 255, 0.15) 67.86%, rgba(255, 255, 255, 0.6) 85.71%)"
                        }}>
                        <div className="rounded-[10px] bg-[#222222]">
                            <div className="p-5 lg:p-10 text-white">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                                    <div className="w-full sm:max-w-148.75">
                                        <h2>Institutional Impact</h2>
                                        <h3 className="text-xl sm:text-2xl lg:text-[30px] font-bold md:leading-10 mt-7.5">Operational Transformation</h3>
                                        <p className="text-base sm:text-lg lg:text-xl md:leading-8 font-normal text-[#C1C1C1]">Manual reporting → Automated reporting systemsFragmented knowledge → Integrated intelligence systemsDelayed decisions → Real-time operational insight</p>
                                        <h5 className=" mt-7.5">Results</h5>
                                        <ul className="text-base lg:text-[22px] lg:leading-8 text-[#C1C1C1] list-disc pl-6 mt-5">
                                            <li>Reduced operational delays</li>
                                            <li>Increased reporting accuracy</li>
                                            <li>Improved institutional visibility</li>
                                            <li>Faster executive decision cycles</li>
                                        </ul>
                                    </div>
                                    <div className="sm:max-w-151.25">
                                        <Image 
                                            src={learnImage}
                                            alt="learnImage"
                                            width={605}
                                            height={450}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}







