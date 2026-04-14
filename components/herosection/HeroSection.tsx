"use client";

import { useState } from "react";
import { ArrowRight, Globe, Headphones, Menu, X } from "lucide-react";
import heroBgTop from "../../assets/img/hero-bg-top.png";
import heroBg from "../../assets/img/hero-bg.jpg";
import Link from "next/link";
import FeatureCard from "../card/featureCard";
import Button from "../button/button";
import GradientButton from "../button/GradientButton";
import Header from "../header/header";
export default function HeroSection() {
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
        <section className="relative">
            {/* Background image */}
            
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{ backgroundImage: `url(${heroBg.src})` }}
            > 
                <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black"></div>
            </div>

            <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-105 bg-cover bg-top bg-no-repeat"
                    style={{ backgroundImage: `url(${heroBgTop.src})` }}>
                </div>

                {/* HEADER SECTION */}
                
                <Header />

                {/* HEADER SECTION END */}

                {/* Hero Content */}
                <div className="mx-auto max-w-245.5 pt-8 md:pt-16 xl:pt-27.25 text-center relative z-20">
                    <h1> Operational
                        <span className="bg-linear-to-r from-[#fa9df5] to-[#FF09F4] bg-clip-text text-transparent"> Intelligence </span> and <span className="bg-linear-to-r from-[#FCE172] to-[#ffa4fa] bg-clip-text text-transparent"> AI Systems </span> for Institutional Environments
                    </h1>

                    <p className="text-lg sm:text-xl leading-7.5 font-normal text-[#B2B2B2] mt-7 max-w-224.5">
                        Enhancing execution, reporting, and decision-making through structured intelligence systems - delivering clarity, control, and measurable operational impact.
                    </p>


                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <div>
                            <GradientButton 
                                text="Request a Consultation"
                                icon={<Headphones className="h-4 w-4" />}
                            />
                        </div>
                        <Button
                            text="Explore Our Systems"
                            icon={<ArrowRight className="h-4 w-4" />}
                            href="#"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-6 mt-16 lg:mt-32 lg:px-27.5">
                        <FeatureCard 
                            text="Reduce preparation time by up to 70%"
                        />
                        <FeatureCard 
                            text="Reduce preparation time by up to 70%"
                        />
                        <FeatureCard 
                            text="Reduce preparation time by up to 70%"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

