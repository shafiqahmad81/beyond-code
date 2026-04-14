
import ourCoreBg from "../../assets/img/our-core-bg.png";
import SecurityCard from "./securityCard";

export default function SecuritySection() {
    return (
        <section className="py-7 md:py-14 ">
            <div className="container">
                <div className="text-center">
                    <h2 className="mb-5">Security & Infrastructure Ownership</h2>
                    <p className="text-base sm:text-xl font-normal sm:leading-7 text-[#C1C1C1] max-w-135.75 mx-auto">Beyond Code systems are built using modern AI and cloud infrastructure.</p>
                </div>

                <div className="flex flex-col gap-5 relative mt-6 sm:mt-12">
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-80 sm:w-150 md:w-172.5 h-75 sm:h-140 md:h-172.5 bg-cover bg-top bg-no-repeat z-30"
                            style={{ backgroundImage: `url(${ourCoreBg.src})` }}>
                        </div>
                    <div className="grid sm:grid-cols-2 gap-5 lg:px-34.75">
                        <SecurityCard
                            title="Beyond Code systems ensure:"
                            capabilities={[
                                "Full institutional data ownership",
                                "Infrastructure controlled by the entity",
                                "Secure internal deployment environments",
                                "Governance-aligned system architecture",
                            ]}
                        />
                        <SecurityCard
                            title="Beyond Code provides:"
                            capabilities={[
                                "Intelligence software",
                                "Deployment support",
                                "System configuration",
                                "Maintenance and updates",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}







