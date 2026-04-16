"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CaseStudyCardProps = {
  image: StaticImageData | string;
  title: string;
  description: string;
  href: string;
};

export default function CaseStudyCard({
  image,
  title,
  description,
  href,
}: CaseStudyCardProps) {
  return (
    <div className="space-y-4 sm:space-y-7 flex flex-col items-center sm:items-start">
      {/* Image */}
      <div className="w-full max-w-110 mx-auto group">
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          
          <Image
            src={image}
            alt={title}
            width={440}
            height={405}
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="text-center sm:text-start">
        <motion.h5
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {title}
        </motion.h5>

        <motion.p
          className="mt-2 sm:mt-3.5 line-clamp-2 text-[#C1C1C1]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Button */}
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full bg-[#353535] hover:bg-white hover:text-black transition-all duration-500 py-1.5 pl-5 pr-2.5 text-sm font-semibold text-white sm:text-base sm:leading-5 group"
        >
          <span>Learn More</span>

          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#5B5B5B] text-white transition-all duration-1000 group-hover:text-white group-hover:-rotate-45">
            <ArrowRight className="h-3 w-3" />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}