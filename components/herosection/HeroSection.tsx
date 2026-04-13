"use client";

import { useState } from "react";
import { ArrowRight, Globe, Headphones, Menu, X } from "lucide-react";
import heroBgTop from "../../assets/img/hero-bg-top.png";
import heroBg from "../../assets/img/hero-bg.jpg";
import Link from "next/link";
import GradientButton from "../button/GradientButton";
import FeatureCard from "../card/featureCard";
import Button from "../button/button";
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
        <section className="relative overflow-hidden ">
            {/* Background image */}
            
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{ backgroundImage: `url(${heroBg.src})` }}
            > 
                <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black"></div>
            </div>

            <div className="relative">
                {/* Navbar */}
                <header className="w-full bg-transparent py-4 sm:py-6">
                    <div className="mx-auto max-w-368 px-4">
                        <div className="absolute top-0 left-0 right-0 h-105 bg-cover bg-top bg-no-repeat"
                            style={{ backgroundImage: `url(${heroBgTop.src})` }}>
                        </div>
                        
                        <div className="rounded-full backdrop-blur-[10px] bg-blend-lighten" style={{boxShadow: "inset 0px 0px 5px rgba(242, 242, 242, 0.5), inset 0px 0px 0px 0px #999999, inset 2px 2px 1px -2px #B3B3B3, inset -2px -2px 1px -2px #B3B3B3, inset 3px 3px 0px -3px rgba(0, 0, 0, 0.5)"}} >
                                <div className="flex items-center justify-between px-6 sm:px-10 py-2 sm:py-4 ">
                                
                                <Link href="/">
                                    <h1 className="text-2xl sm:text-[1.938rem] leading-8 font-bold">BC.</h1>
                                </Link>

                                <nav className="hidden gap-6 text-sm text-white/80 lg:flex">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="transition hover:text-white"
                                        >
                                            {item.label}
                                        </Link>

                                    ))}
                                </nav>
                                <div className="flex items-center gap-4">
                                    {/* Language Switch */}
                                    <div className="hidden md:flex items-center gap-3 text-sm text-white/90">
                                        <span className="font-medium">EN</span>
                                        <Globe className="h-4 w-4" />
                                        <span className="text-white/60">AR</span>
                                    </div>

                                    
                                    <div className="hidden sm:block">
                                        <GradientButton
                                            text="Request a Consultation"
                                            icon={<Headphones className="h-4 w-4" />}
                                        />
                                    </div>

                                    {/* Mobile Hamburger */}
                                    <button
                                        className="flex lg:hidden items-center justify-center p-2 rounded-full text-white hover:bg-white/10 transition"
                                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    >
                                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Mobile Menu */}
                        {mobileMenuOpen && (
                            <nav className="lg:hidden mt-4 flex flex-col gap-3 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl shadow-2xl">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="transition hover:text-white"
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                <GradientButton  
                                    text="Request a Consultation"
                                    icon={<Headphones className="h-4 w-4" />}
                                />


                                {/* Mobile Language Switch */}
                                <div className="mt-4 flex items-center gap-3 text-sm text-white/90">
                                    <span className="font-medium">EN</span>
                                    <Globe className="h-4 w-4" />
                                    <span className="text-white/60">AR</span>
                                </div>
                            </nav>
                        )}
                    </div>
                </header>

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

