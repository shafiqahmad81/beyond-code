"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import deploymentImage from "../../assets/img/built-environment.png";
export default function DeploymentSection() {
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };
  return (
    <section className=" text-white py-6 sm:py-8 lg:py-14">
      <div className="container ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:max-w-142 order-2 md:order-1">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Built for Your Environment
              </motion.h2>
            </div>

            <div className="divide-y divide-[#4A4A4A] space-y-3 sm:space-y-5 mt-5 sm:mt-8 md:mt-16">

              <motion.div
                className="pb-3 sm:pb-5 last:pb-0"
                custom={0}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={item}
              >
                <h5>Private Cloud Deployment</h5>
                <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">
                  Full control inside your infrastructure
                </p>
              </motion.div>

              <motion.div
                className="pb-3 sm:pb-5 last:pb-0"
                custom={1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={item}
              >
                <h5>On-Premise Deployment</h5>
                <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">
                  Deployed within your internal systems
                </p>
              </motion.div>

              <motion.div
                className="pb-3 sm:pb-5 last:pb-0"
                custom={2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={item}
              >
                <h5>Hybrid Deployment</h5>
                <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">
                  Connects legacy systems with modern intelligence
                </p>
              </motion.div>

            </div>
          </div>
          <motion.div
            className="relative w-full md:max-w-173.5 order-1 md:order-2 group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut" as const,
            }}
          >
            <Image
              src={deploymentImage}
              alt="deployment Image"
              width={694}
              height={518}
              className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


