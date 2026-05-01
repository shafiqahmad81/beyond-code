"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Headphones, Menu, X } from "lucide-react";
import heroBgTop from "../../assets/img/banner-bg-top.svg";
import heroBg from "../../assets/img/banner-bg.jpg";
import Link from "next/link";
import FeatureCard from "../card/featureCard";
import Button from "../button/button";
import GradientButton from "../button/GradientButton";
import GradientBgWhite from "../button/GradientBgWhite";
import Image from "next/image";
import fasterIcon from "../../assets/img/faster.svg";
import lessIcon from "../../assets/img/less.svg";
import realIcon from "../../assets/img/real-time.svg";
import StatItem from "../card/featureCard";
export default function HeroSection() {
        const stats = [
            {
            icon: fasterIcon,
            value: "70%",
            label: "Faster Preparation",
            },
            {
            icon: lessIcon,
            value: "85%",
            label: "Less Manual Reporting",
            },
            {
            icon: realIcon,
            value: "Real-Time",
            label: "Operational Visibility",
            },
        ];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navItems = [
        { label: 'About', href: '/about' },
        { label: 'Why Us', href: '/why-us' },
        { label: 'Systems', href: '/systems' },
        { label: 'Services', href: '/services' },
        { label: 'Technology', href: '/technology' },
        { label: 'Process', href: '/process' },
        { label: 'Case Study', href: '/case-study' },
        { label: 'Contact', href: '/contact' },
    ];

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
                
                {/* Hero Content */}
                <div className="container overflow-hidden ">
                    <div className="space-y-7.5 max-w-166.5 pt-8 md:pt-16 xl:pt-27.25 relative">

                        <motion.h1 className=" tracking-[-0.01em] font-bold"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            Operational <span className="text-[#FF09F4]"> Intelligence </span>for Institutional Systems
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
                            Run your operations. Not just your reports.
                        </motion.h5>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-lg sm:text-xl leading-7.5 font-normal text-[#B2B2B2] mt-7 max-w-224.5"
                        >
                            Systems that connect execution, reporting, and decision-making in one controlled layer.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="mt-10 flex flex-wrap items-center gap-4"
                        >
                            <div>
                                <GradientBgWhite 
                                    text="Request a Consultation"
                                />
                            </div>

                            <Button
                                text="Explore Systems"
                                href="#"
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="container mt-16 sm:mt-20 md:mt-24 lg:mt-30">
                    <div className="w-full max-w-186.25 flex items-center justify-between flex-wrap gap-4">
                        
                         {stats.map((item, index) => (
                            <StatItem
                            key={index}
                            icon={item.icon}
                            value={item.value}
                            label={item.label}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

