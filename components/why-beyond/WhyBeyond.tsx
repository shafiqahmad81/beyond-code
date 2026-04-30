"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Image1 from "../../assets/img/problem.svg";
import Image2 from "../../assets/img/common.svg";
import Image3 from "../../assets/img/ai.svg";
import Image4 from "../../assets/img/our-solution.svg";
export default function WhyBeyond() {
    return (
        <section id="why-us" className="pb-7 md:pb-14">
            <div className="container">
                <div className="bg-[linear-gradient(180deg,rgba(53,37,74,0)_14.27%,#100C29_100%)] rounded-[20px] py-8 lg:py-18.75 px-5 sm:px-10 lg:px-26.5">
                    <motion.h2
                        className="sm:text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Most Systems Fail Here
                    </motion.h2>

                    <motion.div className="grid grid-cols-4 gap-8 xl:gap-17 mt-10 lg:mt-21.75">

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div>
                                <div className="relative">
                                    <div className="absolute left-0 -top-6 h-20 md:h-28.5 w-20 md:w-28.5 rounded-[100px] bg-[linear-gradient(115.33deg,#00D1FF_-174.52%,#FF09F4_89.43%,#2D7FFF_368.58%)] opacity-50 blur-[48px]"></div>
                                    <div className="max-w-10 md:max-w-16">
                                        <Image
                                            src={Image1}
                                            alt="real-problem"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>
                                <h5 className="mt-3 sm:mt-6 mb-2 sm:mb-5">The Problem</h5>
                                <p>Institutions don’t fail because of technology. They fail because nothing is connected.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div>
                                <div className="relative">
                                    <div className="absolute left-0 sm:-left-6 -top-6 h-20 md:h-28.5 w-20 md:w-28.5 rounded-[100px] bg-[linear-gradient(115.33deg,#00D1FF_-174.52%,#2D7FFF_89.43%,#2D7FFF_368.58%)] opacity-50 blur-[48px]"></div>
                                    <div className="max-w-10 md:max-w-16">
                                        <Image
                                            src={Image2}
                                            alt="real-problem"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>
                                <h5 className="mt-3 sm:mt-6 mb-2 sm:mb-5">Common Industry Problems</h5>
                                <p>Dashboards without execution</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div>
                                <div className="relative">
                                    <div className="absolute left-0 sm:-left-6 -top-6 h-20 md:h-28.5 w-20 md:w-28.5 rounded-[100px] bg-[linear-gradient(115.33deg,#FF09F4_-174.52%,#9747FF_89.43%,#9747FF_368.58%)] opacity-50 blur-[48px]"></div>
                                    <div className="max-w-10 md:max-w-16">
                                        <Image
                                            src={Image3}
                                            alt="real-problem"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>
                                <h5 className="mt-3 sm:mt-6 mb-2 sm:mb-5">AI without integration</h5>
                                <p>Automation without control</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div>
                                <div className="relative">
                                    <div className="absolute left-0 sm:-left-6 -top-6 h-20 md:h-28.5 w-20 md:w-28.5 rounded-[100px] bg-[linear-gradient(115.33deg,#00D1FF_-174.52%,#05E388_89.43%,#2D7FFF_368.58%)] opacity-50 blur-[48px]"></div>
                                    <div className="max-w-10 md:max-w-16">
                                        <Image
                                            src={Image4}
                                            alt="real-problem"
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>
                                <h5 className="mt-3 sm:mt-6 mb-2 sm:mb-5">Our Solution</h5>
                                <p>We build systems that run operations end-to-end</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}



