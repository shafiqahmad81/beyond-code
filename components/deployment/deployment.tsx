"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import deploymentImage from "../../assets/img/built-environment.png";
import data from "@/data/en.json";
export default function DeploymentSection() {
  const { deployment } = data;
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
                {deployment.title}
              </motion.h2>
            </div>

            <div className="divide-y divide-[#4A4A4A] space-y-3 sm:space-y-5 mt-5 sm:mt-8 md:mt-16">

              {deployment.items.map((itemData, index) => (
                <motion.div
                  key={itemData.title}
                  className="pb-3 sm:pb-5 last:pb-0"
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={item}
                >
                  <h5>{itemData.title}</h5>

                  <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">
                    {itemData.description}
                  </p>
                </motion.div>
              ))}

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


