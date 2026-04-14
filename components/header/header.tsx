"use client";

import Link from "next/link";
import { Globe, Menu, X, Headphones } from "lucide-react";
import { useState } from "react";
import GradientButton from "../button/GradientButton";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);










  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Why Us", href: "/services" },
    { label: "Systems", href: "/contact" },
    { label: "Services", href: "/contact" },
    { label: "Technology", href: "/contact" },
    { label: "Process", href: "/contact" },
    { label: "Case Study", href: "/contact" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="w-full  ">
      <div className="mx-auto max-w-368 px-4 py-4 sm:py-6">
          <div className="rounded-full bg-[#1A1A1A] bg-blend-lighten"  >
                  <div className="flex items-center justify-between px-6 sm:px-10 py-2 sm:py-4 backdrop-blur-[10px] rounded-full" style={{boxShadow: "inset 0px 0px 5px rgba(242, 242, 242, 0.5), inset 0px 0px 0px 0px #999999, inset 2px 2px 1px -2px #B3B3B3, inset -2px -2px 1px -2px #B3B3B3, inset 3px 3px 0px -3px rgba(0, 0, 0, 0.5)"}}>
                  
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

                      <button
                          className="flex lg:hidden items-center justify-center p-2 rounded-full text-white hover:bg-white/10 transition"
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      >
                          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                      </button>
                  </div>
              </div>
          </div>
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

                  <div className="mt-4 flex items-center gap-3 text-sm text-white/90">
                      <span className="font-medium">EN</span>
                      <Globe className="h-4 w-4" />
                      <span className="text-white/60">AR</span>
                  </div>
              </nav>
          )}
      </div>
  </header>
  );
}