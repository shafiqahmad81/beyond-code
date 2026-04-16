"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { MouseEvent } from "react";
import Image from "next/image";
import aiImage from "../../assets/img/ai.png"
import { Headphones } from "lucide-react";

export default function Footer() {

    const smoothScroll = (
        e: MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        if (id.startsWith("#")) {
            e.preventDefault();

            const section = document.getElementById(id.replace("#", ""));
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    };

    return (
        <section>
            <div className="container">
                <div className="lg:px-27.25 -mb-27.5 relative z-20">
                    <div className="bg-[linear-gradient(90deg,#FC00FF_0%,#00DBDE_100%)] py-5 lg:pl-12 px-5.5 rounded-2xl md:rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-5">
                        <div className="w-full md:max-w-lg">
                            <motion.h3
                                className="text-2xl sm:text-3xl md:text-4xl md:leading-9 font-extrabold"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Transform Your Operations with Intelligence
                            </motion.h3>

                            <motion.button
                                className="bg-black hover:bg-white transition-all duration-500 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold sm:leading-5 text-white hover:text-black flex items-center gap-2 cursor-pointer mt-4 sm:mt-7 group"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <span>Book for Consultation</span>

                                <span className="w-6 sm:w-8 h-6 sm:h-8 bg-white group-hover:bg-black rounded-full text-black group-hover:text-white flex items-center justify-center transition-transform duration-500 group-hover:-rotate-45">
                                    <Headphones className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5" />
                                </span>
                            </motion.button>
                        </div>
                        <div className="w-full md:max-w-102.75 flex items-center justify-center group">

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Image
                                    src={aiImage}
                                    alt="AI"
                                    width={411}
                                    height={232}
                                    className="transition-transform duration-500 group-hover:scale-105"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-linear-to-b from-[#050505] from-15% to-[#561EAB]">
                <div className="container">
                    <div className="lg:px-27.25 pb-10 sm:pb-20 lg:pb-28.75 pt-35 sm:pt-50 lg:pt-61.5 flex flex-col sm:flex-row justify-between gap-5">
                        <div className="w-full max-w-69">

                            <motion.h4
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Link href="/">Beyond Code</Link>
                            </motion.h4>

                            <motion.p
                                className="text-white/80 mt-3 sm:mt-5"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                AI operational intelligence infrastructure for institutional execution and reporting automation.
                            </motion.p>
                        </div>
                        <div className="flex w-full max-w-140.5 justify-between gap-5">
                            {/* Company */}
                            <div>

                                <motion.h6
                                    className="text-base font-bold leading-4.5 text-white md:text-lg"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    Company
                                </motion.h6>

                                <motion.ul
                                    className="mt-4 space-y-1.5 sm:space-y-3"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={{
                                        hidden: {},
                                        show: {
                                            transition: {
                                                staggerChildren: 0.1,
                                            },
                                        },
                                    }}
                                >
                                    {[
                                        { label: "About", href: "#about", target: "#about" },
                                        { label: "Why Us", href: "#why-us", target: "#why-us" },
                                        { label: "Systems", href: "#system", target: "#systems" },
                                        { label: "Services", href: "#service", target: "#services" },
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                show: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={(e) => smoothScroll(e, item.target)}
                                                className="text-sm transition-all hover:text-white/50 sm:text-[15px]"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>

                            {/* Use Cases */}
                            <div>

                                <motion.h6
                                    className="text-base font-bold leading-4.5 text-white md:text-lg"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    Use Cases
                                </motion.h6>


                                <motion.ul
                                    className="mt-4 space-y-1.5 sm:space-y-3"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={{
                                        hidden: {},
                                        show: {
                                            transition: {
                                                staggerChildren: 0.1,
                                            },
                                        },
                                    }}
                                >
                                    {[
                                        { label: "Technology", href: "#technology", target: "#technology" },
                                        { label: "Process", href: "#process", target: "#process" },
                                        { label: "Case Study", href: "/case-study", target: null },
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                show: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={(e) => item.target && smoothScroll(e, item.target)}
                                                className="text-sm transition-all hover:text-white/50 sm:text-[15px]"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <motion.h6
                                    className="text-base font-bold leading-4.5 text-white md:text-lg"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    Resources
                                </motion.h6>


                                <motion.ul
                                    className="mt-4 space-y-1.5 sm:space-y-3"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={{
                                        hidden: {},
                                        show: {
                                            transition: {
                                                staggerChildren: 0.1,
                                            },
                                        },
                                    }}
                                >
                                    {[
                                        { label: "Leadership", href: "#leadership", target: "#leadership" },
                                        { label: "FAQs", href: "#faq", target: "#faq" },
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                show: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={(e) => smoothScroll(e, item.target)}
                                                className="text-sm transition-all hover:text-white/50 sm:text-[15px]"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/30">
                    <div className="container">
                        <div className="lg:px-27.25 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">

                            <motion.ul
                                className="flex flex-wrap items-center gap-6 sm:gap-10"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={{
                                    hidden: {},
                                    show: {
                                        transition: {
                                            staggerChildren: 0.1,
                                        },
                                    },
                                }}
                            >
                                {[
                                    { label: "Privacy Policy", href: "/privacy-policy" },
                                    { label: "Terms of Use", href: "/terms-of-use" },
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: { opacity: 1, y: 0 },
                                        }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="text-sm leading-3 transition-all hover:text-white/50"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.p
                                className="text-sm text-white font-light text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                © 2024 Beyond Code. All rights reserved.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}


