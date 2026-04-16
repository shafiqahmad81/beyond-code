"use client";

import { motion } from "framer-motion";
import technologyBg from "../../assets/img/technology-bg.png"
import TechCard from "./techCard";
export default function Technology() {
  const techStacks = [
    {
      title: "AI & Backend",
      items: ["Python", "PyTorch", "Django", "Flask"],
    },
    {
      title: "Data Infrastructure",
      items: ["MongoDB", "Elasticsearch", "Vector databases", "Redis"],
    },
    {
      title: "Cloud & Deployment",
      items: [
        "AWS",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "AWS Lambda",
        "AWS S3",
      ],
    },
  ];
  return (
    <section id="technology" className="pt-7 md:pt-14 pb-20 md:pb-29.5 bg-[linear-gradient(180deg,#050505_0%,#252525_100%)]">
      <div className="container">
        

        <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="sm:text-center max-w-135.75 mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-5"
      >
        Technology Stack
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Beyond Code systems are built using modern AI and cloud infrastructure.
      </motion.p>
    </motion.div>
    

            <div className="grid sm:grid-cols-3 gap-5 relative mt-12 md:px-10 xl:px-63">
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 right-0 w-80 sm:w-120 md:w-150 lg:w-215 h-100 sm:h-120 md:h-140 lg:h-170.5 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${technologyBg.src})` }}>
          </div>
      {techStacks.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.15,
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <TechCard title={item.title} items={item.items} />
        </motion.div>
      ))}
    </div>
      </div>
    </section>
  );
}






