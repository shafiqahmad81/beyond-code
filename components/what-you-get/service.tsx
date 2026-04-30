"use client";

import { motion } from "framer-motion";
import serviceImage1 from "../../assets/img/ai-assistants.svg";
import serviceImage2 from "../../assets/img/get-operational.svg";
import serviceImage3 from "../../assets/img/get-enterprise.svg";
import serviceImage4 from "../../assets/img/get-workflow.svg";
import serviceImage5 from "../../assets/img/upload.svg";
import Image from "next/image";

export default function GetSection() {

  return (
    <section id="services" className="py-7 md:py-14">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className=" pb-6 md:pb-12"
        >
          {/* LEFT TEXT */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            What You Get
          </motion.h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2 h-full">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="pt-4 xl:pt-5.25 pl-4 xl:pl-5.25 pb-4 xl:pb-7 pr-4 xl:pr-6.25 border border-[#B074FF] rounded-[10px] relative h-full">
              <div className="bg-[#FF09F4]/10 blur-2xl absolute inset-0"></div>
              <div className="w-full max-w-16 xl:max-w-17.5 mb-7 sm:mb-8.5 relative z-10">
                <Image
                  src={serviceImage1}
                  alt="service Image1"
                  width={70}
                  height={70}
                />
              </div>
              <div className="space-y-3 sm:space-y-5 relative z-10">
                <h5 className="text-lg md:text-xl xl:text-[1.5rem] xl:leading-[2.1rem]">AI Assistants</h5>
                <div className="w-15.5 h-1 rounded-full bg-[#9747FF]"></div>
                <p>Internal assistants trained on your systems, embedded into workflows</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="pt-4 xl:pt-5.25 pl-4 xl:pl-5.25 pb-4 xl:pb-7 pr-4 xl:pr-6.25 border border-[#9747FF] rounded-[10px] relative h-full">
              <div className="bg-[#2D7FFF]/10 blur-2xl absolute inset-0"></div>
              <div className="w-full max-w-16 xl:max-w-17.5 mb-7 sm:mb-8.5">
                <Image
                  src={serviceImage2}
                  alt="service Image2"
                  width={70}
                  height={70}
                />
              </div>
              <div className="space-y-3 sm:space-y-5">
                <h5 className="text-lg md:text-xl xl:text-[1.5rem] xl:leading-[2.1rem]">Operational Intelligence</h5>
                <div className="w-15.5 h-1 rounded-full bg-[#2D7FFF]"></div>
                <p>Track execution in real time</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="pt-4 xl:pt-5.25 pl-4 xl:pl-5.25 pb-4 xl:pb-7 pr-4 xl:pr-6.25 border border-[#08E4FF] rounded-[10px] relative h-full">
              <div className="bg-[#68DEC1]/10 blur-2xl absolute inset-0"></div>
              <div className="w-full max-w-16 xl:max-w-17.5 mb-7 sm:mb-8.5">
                <Image
                  src={serviceImage3}
                  alt="service Image3"
                  width={70}
                  height={70}
                />
              </div>
              <div className="space-y-3 sm:space-y-5">
                <h5 className="text-lg md:text-xl xl:text-[1.5rem] xl:leading-[2.1rem]">Enterprise Reporting Infrastructure</h5>
                <div className="w-15.5 h-1 rounded-full bg-[#00D1FF]"></div>
                <p>Reports that generate automatically</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="pt-4 xl:pt-5.25 pl-4 xl:pl-5.25 pb-4 xl:pb-7 pr-4 xl:pr-6.25 border border-[#2DE55E] rounded-[10px] relative h-full">
              <div className="bg-[#2DE55E]/10 blur-2xl absolute inset-0"></div>
              <div className="w-full max-w-16 xl:max-w-17.5 mb-7 sm:mb-8.5">
                <Image
                  src={serviceImage4}
                  alt="service Image4"
                  width={70}
                  height={70}
                />
              </div>
              <div className="space-y-3 sm:space-y-5">
                <h5 className="text-lg md:text-xl xl:text-[1.5rem] xl:leading-[2.1rem]">Workflow Automation</h5>
                <div className="w-15.5 h-1 rounded-full bg-[#2DE55E]"></div>
                <p>Processes that run without manual coordination</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="pt-4 xl:pt-5.25 pl-4 xl:pl-5.25 pb-4 xl:pb-7 pr-4 xl:pr-6.25 border border-[#EDA509] rounded-[10px] relative h-full">
              <div className="bg-[#EDA509]/10 blur-2xl absolute inset-0"></div>
              <div className="w-full max-w-16 xl:max-w-17.5 mb-7 sm:mb-8.5">
                <Image
                  src={serviceImage5}
                  alt="service Image5"
                  width={70}
                  height={70}
                />
              </div>
              <div className="space-y-3 sm:space-y-5">
                <h5 className="text-lg md:text-xl xl:text-[1.5rem] xl:leading-[2.1rem]">Full System Deployment</h5>
                <div className="w-15.5 h-1 rounded-full bg-[#EDA509]"></div>
                <p>Built directly into your environment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




