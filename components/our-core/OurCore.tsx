"use client";

import { motion } from "framer-motion";
import GradientButton from "../button/GradientButton";
import SystemCard from "./systemCard";
import learnImage from "../../assets/img/our-cor.png";
import Image from "next/image";
import coreData from "@/data/en.json";

export default function OurCore() {
  const { title, button, systems, whatChanges } = coreData.core;
  return (
    <section id="systems" className="py-7 md:py-14 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5 pb-6 md:pb-12">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <GradientButton
              text={button}
            />
          </motion.div>
        </div>

        <div className="relative flex flex-col gap-5">

          <div className="absolute top-[65%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-80 sm:w-130 md:w-136 h-75 sm:h-130 md:h-135 opacity-30 blur-[162px] sm:rotate-30 z-20">
            <div className="w-full max-w-106 h-105 bg-[#FCE172] absolute top-0 right-0 mix-blend-saturation rounded-full"></div>
            <div className="w-full max-w-106 h-105 bg-[#FF09F4] absolute bottom-0 left-0 mix-blend-saturation rounded-full"></div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <SystemCard
                  badge={system.badge}
                  title={system.title}
                  description={system.description}
                  capabilitiesTitle={system.capabilitiesTitle}
                  capabilities={system.capabilities}
                  impactTitle={system.impactTitle}
                  impact={system.impact}
                />
              </motion.div>
            ))}
          </div>

          {/* IMPACT BOX */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-[10px] p-px"
            style={{
              background:
                "linear-gradient(45deg, #FFFFFF 14.29%, rgba(255, 255, 255, 0.2) 32.14%, rgba(230, 242, 255, 0.1) 50%, rgba(255, 255, 255, 0.15) 67.86%, rgba(255, 255, 255, 0.6) 85.71%)",
            }}
          >
            <div className="bg-[#010005] rounded-[10px]">
              <div className="rounded-[10px] bg-[#222222]/0">
                <div className="text-white ">
                  <div className="pl-5 lg:pl-10 flex flex-col items-center justify-between gap-5 sm:gap-10 sm:flex-row">

                    {/* TEXT */}
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="py-5 lg:py-10 w-full max-w-83.75 order-2 sm:order-1"
                    >

                      <h5 className="sm:mt-7.5">{whatChanges.title}</h5>
                      <ul className="mt-5 list-disc pl-9 text-base text-[#C1C1C1] lg:text-[22px] lg:leading-8">
                        {whatChanges.items.map((item, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.7, 
                              delay: 0.1 + i * 0.2,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* IMAGE */}
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="w-full sm:max-w-211 group rounded-[10px] overflow-hidden order-1 sm:order-2"
                    >
                      <Image
                        src={learnImage}
                        alt="learnImage"
                        width={844}
                        height={563}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}