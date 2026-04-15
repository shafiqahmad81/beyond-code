import { ArrowRight, Headphones, Phone } from "lucide-react";
import Button from "../button/button";
import GradientButton from "../button/GradientButton";
import phoneIcon from "../../assets/img/phone.png";
import maileIcon from "../../assets/img/maile.png";
import locationIcon from "../../assets/img/location.png";
import instagramIcon from "../../assets/img/instagram.png";
import facebookIcon from "../../assets/img/facebook.png";
import tiktokIcon from "../../assets/img/tiktok.png";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-7 md:py-14">
      <div className="container">
        <div className="bg-[linear-gradient(270deg,#FCE172_0%,#9747FF_100%)] rounded-3xl p-0.5">
          <div className="bg-black rounded-3xl">
            <div className="flex flex-col md:flex-row gap-6 justify-between bg-[#222222]/50 rounded-3xl">
              {/* Left panel */}
              <div className="w-full md:max-w-82 flex flex-col justify-between rounded-[20px] pt-10 md:pt-21 md:pb-18 pl-5 lg:pl-14 text-white">
                <div>
                  <p className="text-2xl sm:text-[28px] font-semibold sm:leading-9 text-white max-w-70.5"><span className="text-[#636363]">Book a consultation </span>unlock operational intelligence.</p>

                  <div className="mt-7 inline-block">
                    <GradientButton 
                      text="Book for consulation"
                      icon={<Headphones className="h-4 w-4" />}
                    />
                  </div>
                </div>

                <div className="space-y-6 md:space-y-12 mt-6 md:mt-0">
                  <div>
                    <h5 className="mb-3">Contact Details</h5>
                    <div className="space-y-1 text-white/80">
                      <a href="tel:+966000115666" className="flex items-center gap-3 text-white">
                        <div className="w-full max-w-4.75">
                          <Image
                            src={phoneIcon}
                            alt="phoneIcon"
                            width={19}
                            height={19}
                          />
                        </div>
                        +966 000 115666
                      </a>
                      <a href="mailto:info@beyondcode.ae" className="flex items-center gap-3 text-white">
                        <div className="w-full max-w-4.75">
                          <Image
                            src={maileIcon}
                            alt="maileIcon"
                            width={19}
                            height={19}
                          />
                        </div>
                        info@beyondcode.ae
                      </a>
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-full max-w-4.75">
                          <Image
                            src={locationIcon}
                            alt="phoneIcon"
                            width={19}
                            height={19}
                          />
                        </div>
                        Abu Dhabi, UAE
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-2xl font-semibold">Social links</h3>
                    <div className="flex gap-3">
                      <Link
                        href="https://instagram.com"
                        target="_blank"
                      >
                        <Image
                          src={instagramIcon}
                          alt="Instagram"
                          className="h-8 sm:h-12 w-8 sm:w-12 object-contain"
                        />
                      </Link>

                      <Link
                        href="https://facebook.com"
                        target="_blank"
                      >
                        <Image
                          src={facebookIcon}
                          alt="Facebook"
                          className="h-8 sm:h-12 w-8 sm:w-12 object-contain"
                        />
                      </Link>

                      <Link
                        href="https://tiktok.com"
                        target="_blank"
                      >
                        <Image
                          src={tiktokIcon}
                          alt="TikTok"
                          className="h-8 sm:h-12 w-8 sm:w-12 object-contain"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="p-4 lg:p-7 w-full md:max-w-182.75">
                <div className="rounded-[18px] bg-[#1A1A1A]/50 px-5 lg:px-14.5 pt-5 lg:pt-14 pb-5 lg:pb-11 text-white">
                  <span className="inline-block rounded-full border border-white px-4 py-2 sm:py-3 text-sm sm:text-lg font-normal sm:leading-6 text-white">
                    Contact Us
                  </span>

                  <h2 className="mt-7">
                    Let’s discuss how we can transform your operations with intelligent systems.
                  </h2>

                  <form className="mt-12 space-y-6 lg:space-y-10">
                    <div>
                      <label className="mb-4 block text-sm sm:text-base leading-5 text-[#515151] font-semibold">Full Name</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full text-sm sm:text-base text-[#BFBFBF] sm:leading-6 border-b border-white/20 bg-transparent pb-3 outline-none placeholder:text-[#BFBFBF]"
                      />
                    </div>

                    <div>
                      <label className="mb-4 block text-sm sm:text-base leading-5 text-[#515151] font-semibold">Email</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full text-sm sm:text-base text-[#BFBFBF] sm:leading-6 border-b border-white/20 bg-transparent pb-3 outline-none placeholder:text-[#BFBFBF]"
                      />
                    </div>

                    <div>
                      <label className="mb-4 block text-sm sm:text-base leading-5 text-[#515151] font-semibold">Message</label>
                      <textarea
                        rows={1}
                        placeholder="Tell more about your idea"
                        className="w-full text-sm sm:text-base text-[#BFBFBF] sm:leading-6 border-b border-white/20 bg-transparent pb-3 outline-none placeholder:text-[#BFBFBF]"
                      />
                    </div>

                    <Button 
                      text="Send Message"
                      icon= {<ArrowRight className="h-4 w-4" />}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







