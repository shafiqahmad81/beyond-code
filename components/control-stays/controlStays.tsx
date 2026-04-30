
"use client";

import { motion } from "framer-motion";
import youOwnBg from "../../assets/img/you-own.png";
import weProvideBg from "../../assets/img/we-provide.png";
import Image from "next/image";

export default function ControlStays() {
    const item = {
        hidden: { opacity: 0, y: 50 },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut" as const,
            },
        }),
    };
    return (
        <section className="py-7 md:py-14 ">
            <div className="container">
                <div className="sm:text-center">
                    <motion.h2
                        className="mb-5"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut" as const,
                        }}
                    >
                        Control Stays With You
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-xl font-normal sm:leading-7 text-[#C1C1C1] max-w-135.75 mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut" as const,
                        }}
                    >
                        Your control. Fully maintained.:
                    </motion.p>
                </div>

                <div className="flex flex-col gap-5 relative mt-6 sm:mt-15.25">
                    
                    <div className="grid lg:grid-cols-2 gap-6 lg:px-34.75">

                        <motion.div
                            custom={0}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={item}
                        >
                            <div className="relative mx-auto w-full max-w-147">
                                <Image 
                                    src={youOwnBg} 
                                    alt="You Own Image"
                                    width={588}
                                    height={356} 
                                />
                                
                                <div className=" absolute bottom-3 sm:bottom-15 right-3 sm:right-15">
                                    <h5>You Own</h5>
                                    <ul className="mt-4 list-disc pl-8 space-y-2 text-[#C1C1C1] text-sm sm:text-lg sm:leading-6">
                                        <li>Your data</li>
                                        <li>Your infrastructure</li>
                                        <li>Your deployment</li>
                                    </ul>
                                </div>

                            </div>
                        </motion.div>

                        <motion.div
                            custom={1}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={item}
                        >
                            <div className="relative mx-auto w-full max-w-147">
                                <Image 
                                    src={weProvideBg} 
                                    alt="We Provide Image"
                                    width={588}
                                    height={356} 
                                />
                                <div className=" absolute bottom-3 sm:bottom-15 right-3 sm:right-13">
                                    <h5>We Provide</h5>
                                    <ul className="mt-4 list-disc pl-8 space-y-2 text-[#C1C1C1] text-sm sm:text-lg sm:leading-6">
                                        <li>System architecture</li>
                                        <li>Intelligence layer</li>
                                        <li>Deployment support</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}







