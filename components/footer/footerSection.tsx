"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { MouseEvent } from "react";
import Image from "next/image";
import aiImage from "../../assets/img/footer-bg.png";
import data from "@/data/en.json";

export default function Footer() {
    const { footer } = data;
    const smoothScroll = (
        e: MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        if (id.startsWith("/#")) {
            e.preventDefault();

            const section = document.getElementById(id.replace("/#", ""));
            if (!section) return;

            const offset = 50;

            const top =
                section.getBoundingClientRect().top +
                window.pageYOffset -
                offset;

            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }
    };

    return (
        <footer>
            <div className="container">
                <div className="lg:px-27.25 -mb-27.5 relative z-20">
                    <div className="bg-[#020411] border border-[#B074FF] rounded-4xl flex flex-col md:flex-row items-center justify-between gap-5 overflow-hidden pl-5 lg:pl-8 xl:pl-16 pt-5 md:pt-0">
                        <div className="w-full md:max-w-88.75 space-y-4 lg:space-y-7.5">

                            <motion.h3
                                className="text-2xl sm:text-3xl md:text-4xl md:leading-12 font-extrabold will-change-transform "
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {footer.hero.titlePart} <span className="bg-[linear-gradient(90deg,#FF09F4_0%,#00D1FF_100%)] bg-clip-text text-transparent">{footer.hero.titleHighlight}</span>
                            </motion.h3>
                            {/* <p className="text-sm sm:text-lg font-normal sm:leading-6 text-[#FFFFFF]">Test the system in your environment before scaling.</p> */}

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="text-sm sm:text-lg font-normal sm:leading-6 text-[#FFFFFF]"
                            >
                                {footer.hero.subtitle}
                            </motion.p>

                            <motion.div className="bg-[linear-gradient(90deg,#FF09F4_0%,#00D1FF_100%)] p-px pr-0.5 rounded-full w-fit"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <button
                                    className="bg-black hover:bg-white transition-all duration-500 rounded-full px-4 sm:px-6 py-2 lg:py-3 text-sm sm:text-lg font-semibold sm:leading-5 text-white hover:text-black flex items-center gap-5.5 cursor-pointer group will-change-transform jami-link jami-link--arrowed"

                                >
                                    <span>{footer.hero.buttonText}</span>


                                    <svg
                                        className="arrow-icon-con size-7 sm:size-8.25"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                    >
                                        <g
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                        >
                                            {/* Circle */}
                                            <circle className="arrow-icon--circle-con" cx="16" cy="16" r="15.12" />

                                            {/* Centered icon */}
                                            <g transform="translate(9,8) scale(0.8)">
                                                <path
                                                    fill="#000000"
                                                    stroke="#000000"
                                                    strokeWidth=".2"
                                                    d="M9 2.15a7.6 7.6 0 0 1 7.6 7.6V15a.85.85 0 0 1-.85.85H13.5a2.35 2.35 0 0 1-2.35-2.35V12a2.35 2.35 0 0 1 2.35-2.35h1.398a5.899 5.899 0 0 0-11.795 0H4.5A2.35 2.35 0 0 1 6.85 12v1.5a2.35 2.35 0 0 1-2.35 2.35H2.25A.85.85 0 0 1 1.4 15V9.75A7.6 7.6 0 0 1 9 2.15Zm4.5 9.2a.65.65 0 0 0-.65.65v1.5a.65.65 0 0 0 .65.65h1.4v-2.8zm-10.4 2.8h1.4a.65.65 0 0 0 .65-.65V12a.65.65 0 0 0-.65-.65H3.1z"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </motion.div>

                        </div>
                        <div className="w-full md:max-w-156 group">

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Image
                                    src={aiImage}
                                    alt="AI"
                                    width={624}
                                    height={500}
                                    className="transition-transform duration-500 group-hover:scale-105"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[linear-gradient(180deg,#050505_15%,#160036_100%)]">
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
                                {footer.companyDescription}
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
                                    {footer.company.title}
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
                                    {footer.company.links.map((item, index) => (
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

                            {/* Use Cases */}
                            <div>

                                <motion.h6
                                    className="text-base font-bold leading-4.5 text-white md:text-lg"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    {footer.useCases.title}
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
                                    {footer.useCases.links.map((item, index) => (
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
                                    {footer.resources.links.map((item, index) => (
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
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Link
                                        href="/privacy-policy"
                                        className="text-sm leading-3 transition-all hover:text-white/50"
                                    >
                                        {footer.bottom.privacy}
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <Link
                                        href="/terms-of-use"
                                        className="text-sm leading-3 transition-all hover:text-white/50"
                                    >
                                        {footer.bottom.terms}
                                    </Link>
                                </motion.div>
                            </motion.ul>

                            <motion.p
                                className="text-sm text-white font-light text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {footer.bottom.copyright}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}


