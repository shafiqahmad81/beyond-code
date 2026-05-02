"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations();

  const contact = t.raw("contact");

  return (
    <section className="pb-7 md:pb-14 pt-30 sm:pt-40 lg:pt-50">
      <div className="container">
        <div className="bg-[linear-gradient(270deg,#FCE172_0%,#9747FF_100%)] rounded-3xl p-0.5">
          <div className="bg-black rounded-3xl">
            <div className="flex flex-col md:flex-row gap-6 justify-between bg-[#222222]/50 rounded-3xl">

              {/* LEFT */}
              <div className="w-full md:max-w-82 flex flex-col justify-between rounded-[20px] pt-10 md:pt-21 md:pb-18 pl-5 lg:pl-14 text-white">

                <div>
                  <motion.p
                    className="text-2xl sm:text-[28px] font-semibold sm:leading-9 text-white max-w-70.5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[#636363]">
                      {contact.left.highlight}{" "}
                    </span>
                    {contact.left.title}
                  </motion.p>

                  <motion.div
                    className="mt-7 inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <GradientButton text={contact.left.buttonText} />
                  </motion.div>
                </div>

                {/* CONTACT DETAILS */}
                <div className="space-y-6 md:space-y-12 mt-6 md:mt-0">

                  <div>
                    <motion.h5
                      className="mb-3"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {contact.contactDetails.title}
                    </motion.h5>

                    <div className="space-y-1 text-white/80">

                      {/* Phone */}
                      <div className="flex items-center gap-3 text-white">
                        <Image src={phoneIcon} alt="phone" width={19} height={19} />
                        <Link href="tel:+966000115666">
                          {contact.contactDetails.phone}
                        </Link>
                      </div>

                      {/* Email */}
                      <div className="flex items-center gap-3 text-white">
                        <Image src={maileIcon} alt="email" width={19} height={19} />
                        <Link href="mailto:info@beyondcode.ae">
                          {contact.contactDetails.email}
                        </Link>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-3 text-white">
                        <Image src={locationIcon} alt="location" width={19} height={19} />
                        {contact.contactDetails.location}
                      </div>

                    </div>
                  </div>

                  {/* SOCIAL */}
                  <div>
                    <h3 className="mb-4 text-2xl font-semibold">
                      {contact.socialTitle}
                    </h3>

                    <div className="flex gap-3">
                      {[
                        { href: "https://instagram.com", icon: instagramIcon },
                        { href: "https://facebook.com", icon: facebookIcon },
                        { href: "https://tiktok.com", icon: tiktokIcon }
                      ].map((item, i) => (
                        <Link key={i} href={item.href} target="_blank">
                          <Image src={item.icon} alt="social" className="h-8 w-8 sm:h-12 sm:w-12" />
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* RIGHT FORM */}
              <div className="py-4 lg:py-7 pr-4 lg:pr-7 w-full md:max-w-182.75">
                <div className="rounded-[18px] bg-[#1A1A1A]/60 px-5 lg:px-14.5 pt-5 lg:pt-14 pb-5 lg:pb-11 text-white">

                  <span className="inline-block rounded-full border border-white px-4 py-2 text-sm">
                    {contact.form.titleBadge}
                  </span>

                  <h2 className="mt-7">{contact.form.title}</h2>

                  <form className="mt-12 space-y-6">

                    {contact.form.fields.map((field: any, i: number) => (
                      <div key={i}>
                        <label className="mb-4 block text-sm text-[#515151] font-semibold">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full border-b border-white/20 bg-transparent pb-3 outline-none text-[#BFBFBF]"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="mb-4 block text-sm text-[#515151] font-semibold">
                        {contact.form.messageLabel}
                      </label>

                      <textarea
                        rows={1}
                        placeholder={contact.form.messagePlaceholder}
                        className="w-full border-b border-white/20 bg-transparent pb-3 outline-none text-[#BFBFBF]"
                      />
                    </div>

                    <Button
                      text={contact.form.buttonText}
                      icon={<ArrowRight className="h-4 w-4" />}
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