"use client";

import { motion } from "framer-motion";
import heroBgTop from "../../assets/img/banner-bg-top.svg";
import heroBg from "../../assets/img/banner-bg.jpg";
import Button from "../button/button";
import GradientBgWhite from "../button/GradientBgWhite";
import fasterIcon from "../../assets/img/faster.svg";
import lessIcon from "../../assets/img/less.svg";
import realIcon from "../../assets/img/real-time.svg";
import StatItem from "../card/featureCard";
import heroData from "@/data/en.json";
export default function HeroSection() {

    const { hero } = heroData;
        

    return (
        <section className="mt-26">
            <div
                className="absolute inset-0 bg-cover bg-top bg-no-repeat z-20"
                style={{ backgroundImage: `url(${heroBg.src})` }}
            >
                
            </div>
            <div className="absolute top-0 left-0 right-0 h-105 bg-cover bg-top bg-no-repeat z-30"
                style={{ backgroundImage: `url(${heroBgTop.src})` }}>
            </div>
            <div className=" absolute top-12 left-0 right-0 w-full h-39.75 bg-[#02020F] blur-xl z-20"></div>

            <div className="relative z-40">
                
                <div className="container overflow-hidden ">
                    <div className="space-y-7.5 max-w-166.5 pt-8 md:pt-16 xl:pt-27.25 relative">

                        <motion.h1 className=" tracking-[-0.01em] font-bold"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Operational <span className="text-[#FF09F4]"> Intelligence </span>for Institutional Systems */}
                            {hero.title.text.split(hero.title.highlight)[0]}
                                <span className="text-[#FF09F4]">{hero.title.highlight}</span>
                            {hero.title.text.split(hero.title.highlight)[1]}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="w-15.5 h-1 rounded-full bg-linear-to-r from-[#7545F3] to-[#FCE172] relative
                            after:absolute after:top-0 after:-right-1.5 after:w-1 after:h-1 after:bg-[#ECA3C1] after:rounded-full after:content-['']"
                            >
                        </motion.div>

                        <motion.h5
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.9 }}
                            transition={{ duration: 1.1, ease: "easeOut" }}
                            className="text-[#B2B2B2]"
                            >
                            {/* Run your operations. Not just your reports. */}
                            {hero.subtitle}
                        </motion.h5>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-lg sm:text-xl leading-7.5 font-normal text-[#B2B2B2] mt-7 max-w-224.5"
                        >
                            {/* Systems that connect execution, reporting, and decision-making in one controlled layer. */}
                            {hero.description}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="mt-10 flex flex-wrap items-center gap-4"
                        >
                            <div>
                                <GradientBgWhite 
                                    text={hero.buttons.primary}
                                />
                            </div>

                            <Button
                                text={hero.buttons.secondary}
                                href="#"
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="container mt-16 sm:mt-20 md:mt-24 lg:mt-30">
                    <div className="w-full max-w-186.25 flex items-center justify-between flex-wrap gap-4">
                        
                        {hero.stats.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2
                                }}
                            >
                                <StatItem
                                icon={
                                    item.icon === "faster"
                                    ? fasterIcon
                                    : item.icon === "less"
                                    ? lessIcon
                                    : realIcon
                                }
                                value={item.value}
                                label={item.label}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

