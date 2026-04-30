"use client";

import { motion } from "framer-motion";
import Button from "../button/button";
import serviceImage1 from "../../assets/img/intelligence.svg";
import serviceImage2 from "../../assets/img/operational.svg";
import serviceImage3 from "../../assets/img/automation.svg";
import serviceImage4 from "../../assets/img/custom-intelligence.svg";
import ServiceCard from "./serviceCard";
import Image from "next/image";

export default function Service() {

  //   const services = [
  //   {
  //     image: serviceImage1,
  //     title: "Intelligence & Predictive Systems",
  //     description:
  //       "Powered by LLM and machine learning systems, predictive analytics, and organizational knowledge intelligence.",
  //   },
  //   {
  //     image: serviceImage2,
  //     title: "Operational Intelligence Systems",
  //     description:
  //       "From real-time monitoring to intelligent dashboards and operational data insights - built for complete operational control.",
  //   },
  //   {
  //     image: serviceImage3,
  //     title: `Automation </br> Systems`,
  //     description:
  //       "From automated reporting to workflow automation and AI-powered assistants — built to streamline and scale operations.",
  //   },
  //   {
  //     image: serviceImage4,
  //     title: "Custom Intelligence Development",
  //     description:
  //       "Agentic AI systems, autonomous operational intelligence platforms, and custom enterprise system development.",
  //   },
  // ];
  return (
    <section id="services" className="py-7 md:py-14">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-between flex-wrap gap-5 pb-6 md:pb-12"
        >
          {/* LEFT TEXT */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Services & Expertise
          </motion.h2>

          {/* RIGHT BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              text="Contact us"
              href="/contact-us"
            />
          </motion.div>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 h-full">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="pt-5.5 px-6.5 pb-10 border border-[#B074FF] rounded-[10px] relative h-full">
              <div className="bg-[#FF09F4]/10 blur-2xl absolute inset-0"></div>
              <div className="w-full max-w-16 lg:max-w-20 mb-7 sm:mb-8.5">
                <Image
                  src={serviceImage1}
                  alt="service Image1"
                  width={80}
                  height={70}
                />
              </div>
              <div className="space-y-3 sm:space-y-5">
                <h5>Intelligence & Predictive Systems</h5>
                <div className="w-15.5 h-1 rounded-full bg-linear-to-r from-[#7545F3] to-[#FCE172]"></div>
                <p>Make decisions faster with built-in intelligence</p>
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
            <div className="pt-5.5 px-6.5 pb-10 border border-[#9747FF] rounded-[10px] relative h-full">
              <div className="bg-[#2D7FFF]/10 blur-2xl absolute inset-0"></div>
              <div className="w-full max-w-16 lg:max-w-21.5 mb-7 sm:mb-8.5">
                <Image
                  src={serviceImage2}
                  alt="service Image2"
                  width={86}
                  height={70}
                />
              </div>
              <div className="space-y-3 sm:space-y-5">
                <h5>Operational Intelligence Systems</h5>
                <div className="w-15.5 h-1 rounded-full bg-linear-to-r from-[#7545F3] to-[#FCE172]"></div>
                <p>See what’s happening across your operations in real time</p>
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
            <div className="pt-5.5 px-6.5 pb-10 border border-[#68DEC1] rounded-[10px] relative h-full">
              <div className="bg-[#68DEC1]/10 blur-2xl absolute inset-0"></div>
              <div className="w-full max-w-16 lg:max-w-20 mb-7 sm:mb-8.5">
                <Image
                  src={serviceImage3}
                  alt="service Image3"
                  width={70}
                  height={70}
                />
              </div>
              <div className="space-y-3 sm:space-y-5">
                <h5>Automation <br /> Systems</h5>
                <div className="w-15.5 h-1 rounded-full bg-linear-to-r from-[#7545F3] to-[#FCE172]"></div>
                <p>Remove manual work from core processes</p>
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
            <div className="pt-5.5 px-6.5 pb-10 border border-[#EDA509] rounded-[10px] relative h-full">
              <div className="bg-[#EDA509]/10 blur-2xl absolute inset-0"></div>
              <div className="w-full max-w-16 lg:max-w-20 mb-7 sm:mb-8.5">
                <Image
                  src={serviceImage4}
                  alt="service Image4"
                  width={80}
                  height={70}
                />
              </div>
              <div className="space-y-3 sm:space-y-5">
                <h5>Custom Intelligence Development</h5>
                <div className="w-15.5 h-1 rounded-full bg-linear-to-r from-[#7545F3] to-[#FCE172]"></div>
                <p>Built around how your organization actually operates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




