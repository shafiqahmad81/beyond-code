"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../button/button";
import leadershipImage1 from "../../assets/img/ceo.png";
import leadershipImage2 from "../../assets/img/technology-officer.png";
import leadershipImage3 from "../../assets/img/operation-officer.png";
import leadershipBg from "../../assets/img/leadership-bg.png";
import iconCeo from "../../assets/img/operational-intelligence.svg";
import iconChief1 from "../../assets/img/systems-architecture.svg";
import iconChief2 from "../../assets/img/oparational-system.svg";
import Image from "next/image";


export default function LeadershipSection() {

  const items = [
    "Built by operators who understand how institutions actually run.",
    "We design systems that transition seamlessly from structure to execution within real-world environments.",
  ];

  return (
    <section id="leadership" className="py-7 md:py-14 bg-[#050505]">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-5 relative">
          
          <div className="absolute -left-10 md:-left-40 top-40 w-80 md:w-134.25 h-80 md:h-115 opacity-30 blur-[90px]">
            <div className="w-full max-w-105 h-105 bg-[#FCE172] absolute top-0 right-0 mix-blend-luminosity rounded-full"></div>
            <div className="w-full max-w-105 h-105 bg-[#9747FF] absolute bottom-0 left-0 mix-blend-luminosity rounded-full"></div>
          </div>

          <div className="w-full lg:max-w-72 relative z-20">
            <motion.h2
              className="mb-3 sm:mb-5 bg-[linear-gradient(90.95deg,#F4ECFF_0.82%,#FFFFFF_59.54%,#B074FE_93.54%)] bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              
            >
              Leadership
            </motion.h2>

            <div className="text-base sm:text-xl text-[#C1C1C1] font-normal sm:leading-7 space-y-4 sm:space-y-8 mb-5 sm:mb-10">

              {items.map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <div className="w-fit bg-[linear-gradient(270deg,#FCE172_0%,#9747FF_100%)] rounded-full p-px">
                  <button
                    className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1C1C1C] px-4 sm:px-5 py-2 sm:py-3 text-sm lg:text-lg lg:leading-5 font-semibold text-white cursor-pointer hover:bg-[linear-gradient(90.45deg,#00D1FF_-368.58%,#FF09F4_40.43%,#2D7FFF_174.52%)] transition-all duration-500 group jami-link jami-link--arrowed "
                  >
                    <span>Start the Conversation</span>

                    <a className="jami-link--arrowed">
                      <svg
                        className="arrow-icon border border-white group-hover:border-white size-6 sm:size-8 bg-[#1C1C1C] rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <g
                          fill="none"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                        >
                          <circle
                            className="arrow-icon--circle-extra"
                            cx="16"
                            cy="16"
                            r="15.12"
                          />
                          <path
                            stroke="#FFFFFF" /* arrow always white */
                            d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                          />
                        </g>
                      </svg>
                    </a>
                  </button>
                </div>
              </motion.div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3.75 w-full lg:max-w-228.75">

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
              className="relative"
            >
                <div className="absolute inset-0 bg-[#9747FF]/5 blur-[111px]"></div>
                  <div className="flex flex-col items-center border border-[#9747FF] rounded-[10px] px-3 md:px-5 pt-4 pb-5.5 relative z-10 h-full">
                    {/* Fixed image size */}
                    <div className="relative w-full max-w-63.25 min-h-57.75 xl:min-h-75.75 overflow-hidden group">
                      <Image
                        src={leadershipImage1}
                        alt="leadership Image1"
                        width={253}
                        height={303}
                        className="object-cover transition-transform duration-500 group-hover:scale-105 h-full"
                      />
                    </div>
              
                    <div className="text-start">
                      <h6 className="mt-4 sm:mt-7 text-lg lg:text-xl xl:text-2xl xl:leading-[2.1rem] font-bold">Reem Aljneibi</h6>
              
                      <p className="mt-1 text-base xl:text-lg font-normal text-[#9747FF] lg:leading-7">
                        Founder & CEO 
                      </p>
              
                      <p className="mt-2 sm:mt-4 text-sm xl:text-base font-normal text-[#C1C1C1] lg:leading-7">
                        Operational Intelligence Systems
                      </p>
                      <div className="mt-5">
                        <Image 
                          src={iconCeo}
                          alt="icon Ceo"
                          width={38}
                          height={38}
                        />
                      </div>
                    </div>
                  </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#045BE4]/5 blur-[111px]"></div>
                  <div className="flex flex-col items-center border border-[#2D7FFF] rounded-[10px] px-3 md:px-5 pt-4 pb-5.5 relative z-10 h-full">
                    {/* Fixed image size */}
                    <div className="relative w-full max-w-63.25 min-h-57.75 xl:min-h-75.75 overflow-hidden group">
                      <Image
                        src={leadershipImage2}
                        alt="leadership Image2"
                        width={253}
                        height={303}
                        className="object-cover transition-transform duration-500 group-hover:scale-105 h-full"
                      />
                    </div>
              
                    <div className="text-start">
                      <h6 className="mt-4 sm:mt-7 text-lg lg:text-xl xl:text-2xl xl:leading-[2.1rem] font-bold">Mohammed Alyafaei</h6>
              
                      <p className="mt-1 text-base xl:text-lg font-normal text-[#2D7FFF] lg:leading-7">
                        Chief Technology Officer
                      </p>
              
                      <p className="mt-2 sm:mt-4 text-sm xl:text-base font-normal text-[#C1C1C1] lg:leading-7">
                        Systems Architecture and AI Infrastructure 
                      </p>
                      <div className="mt-5">
                        <Image 
                          src={iconChief1}
                          alt="icon Chief1"
                          width={38}
                          height={38}
                        />
                      </div>
                    </div>
                  </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#F6CC20]/5 blur-[111px]"></div>
                  <div className="flex flex-col items-center border border-[#FCE172] rounded-[10px] px-3 md:px-5 pt-4 pb-5.5 relative z-10 h-full">
                    {/* Fixed image size */}
                    <div className="relative w-full max-w-63.25 min-h-57.75 xl:min-h-75.75 overflow-hidden group">
                      <Image
                        src={leadershipImage3}
                        alt="leadership Image3"
                        width={253}
                        height={303}
                        className="object-cover transition-transform duration-500 group-hover:scale-105 h-full"
                      />
                    </div>
              
                    <div className="text-start">
                      <h6 className="mt-4 sm:mt-7 text-lg lg:text-xl xl:text-2xl xl:leading-[2.1rem] font-bold">Yasir Arafat</h6>
              
                      <p className="mt-1 text-base xl:text-lg font-normal text-[#9747FF] lg:leading-7">
                        Chief Operation Officer
                      </p>
              
                      <p className="mt-2 sm:mt-4 text-sm xl:text-base font-normal text-[#C1C1C1] lg:leading-7">
                        Operational Systems & Execution
                      </p>
                      <div className="mt-5">
                        <Image 
                          src={iconChief2}
                          alt="icon Chief2"
                          width={38}
                          height={38}
                        />
                      </div>
                    </div>
                  </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}