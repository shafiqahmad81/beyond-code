import Image from "next/image";
import aiImage from "../../assets/img/ai.png"
import { ArrowRight, Headphones } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section>
        <div className="container">
            <div className="lg:px-27.25 -mb-27.5 relative z-20">
                <div className="bg-[linear-gradient(90deg,#FC00FF_0%,#00DBDE_100%)] py-5 lg:pl-12 px-5.5 rounded-2xl md:rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-5">
                    <div className="w-full md:max-w-lg">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl md:leading-9 font-extrabold ">Transform Your Operations with Intelligence</h3>
                        <button className="bg-black rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold sm:leading-5 text-white flex items-center gap-2 cursor-pointer mt-4 sm:mt-7">
                            <span>Book for Consultation</span> <span className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full text-black flex items-center justify-center"><Headphones className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5" /> </span>
                        </button>
                    </div>
                    <div className="w-full md:max-w-102.75 flex items-center justify-center">
                        <Image 
                            src={aiImage}
                            alt="AI"
                            width={411}
                            height={232}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-linear-to-b from-[#050505] from-15% to-[#561EAB]">
            <div className="container">
                <div className="lg:px-27.25 pb-10 sm:pb-20 lg:pb-28.75 pt-35 sm:pt-50 lg:pt-61.5 flex flex-col sm:flex-row justify-between gap-5">
                    <div className="w-full max-w-69">
                        <h4>Beyond Code</h4>
                        <p className="text-white/80 mt-3 sm:mt-5">AI operational intelligence infrastructure for institutional execution and reporting automation.</p>
                    </div>
                    <div className="flex justify-between w-full max-w-140.5 gap-5">
                        <div>
                            <h6 className="text-base md:text-lg font-bold leading-4.5 text-white">Company</h6>
                            <ul className="mt-4 space-y-1.5 sm:space-y-3">
                                <li> <Link href="#" className="text-sm sm:text-[15px] sm:leading-4 transition-all hover:text-white/50">About</Link> </li>
                                <li> <Link href="#" className="text-sm sm:text-[15px] sm:leading-4 transition-all hover:text-white/50">Why Us</Link> </li>
                                <li> <Link href="#" className="text-sm sm:text-[15px] sm:leading-4 transition-all hover:text-white/50">Systems</Link> </li>
                                <li> <Link href="#" className="text-sm sm:text-[15px] sm:leading-4 transition-all hover:text-white/50">Services</Link> </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-base md:text-lg font-bold leading-4.5 text-white">Use Cases</h6>
                            <ul className="mt-4 space-y-1.5 sm:space-y-3">
                                <li> <Link href="#" className="text-sm sm:text-[15px] sm:leading-4 transition-all hover:text-white/50">Technology</Link> </li>
                                <li> <Link href="#" className="text-sm sm:text-[15px] sm:leading-4 transition-all hover:text-white/50">Process</Link> </li>
                                <li> <Link href="#" className="text-sm sm:text-[15px] sm:leading-4 transition-all hover:text-white/50">Case Study</Link> </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-base md:text-lg font-bold leading-4.5 text-white">Resources</h6>
                            <ul className="mt-4 space-y-1.5 sm:space-y-3">
                                <li> <Link href="#" className="text-sm sm:text-[15px] sm:leading-4 transition-all hover:text-white/50">Leadership</Link> </li>
                                <li> <Link href="#" className="text-sm sm:text-[15px] sm:leading-4 transition-all hover:text-white/50">FAQs</Link> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/30">
                <div className="container">
                    <div className="lg:px-27.25 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">
                        <ul className="flex flex-wrap items-center gap-6 sm:gap-10">
                            <li> <Link href="#" className="text-sm leading-3 transition-all hover:text-white/50">Privacy Policy</Link> </li>
                            <li> <Link href="#" className="text-sm leading-3 transition-all hover:text-white/50">Terms of Use</Link> </li>
                        </ul>
                        <p className="text-sm text-white font-light text-center">© 2024 Beyond Code. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  );
}


