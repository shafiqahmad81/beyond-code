"use client";

import { motion } from "framer-motion";
import { useMessages } from "next-intl"
import Image from "next/image";
import OurMissionImage from "../../assets/img/mission-image.png";

export default function OurMission() {

   const messages = useMessages();

   const mission = messages.mission as {
    sections: {
      title: string;
      description: string;
      list?: string[];
    }[];
  };

  return (
    <section id="about" className="bg-black py-16 text-white lg:py-32 overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center gap-9 md:flex-row">

          <motion.div
            className="relative w-full max-w-189 group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={OurMissionImage}
              alt="Robot Hand"
              width={756}
              height={756}
              className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            className="max-w-120.25 space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
             {mission.sections.map((section, index) => (
              <div key={index} className="space-y-3">

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold md:leading-[44.8px] sm:text-[32px]"
                >
                  {section.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-base font-normal leading-[25.2px] text-[#B2B2B2] sm:text-lg"
                >
                  {section.description}
                </motion.p>

                {/* List */}
                {section.list && (
                  <motion.ul
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="list-inside pl-3 list-disc text-base font-normal leading-[25.2px] text-[#B2B2B2] sm:text-lg"
                  >
                    {section.list.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}