"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

type SubSection = {
    title: string;
    content?: string;
    list?: string[];
    note?: string;
};

type Section = {
    title: string;
    content?: string | string[];
    intro?: string;
    list?: string[];
    subSections?: SubSection[];
    note?: string;
    email?: string;
};

export default function PrivacyPolicy() {
    const t = useTranslations("privacy");

    // NOTE: we still read structured JSON from messages
    const sections = t.raw("sections") as Section[];

    return (
        <section className="pt-30 sm:pt-40 lg:pt-50 pb-32.5">
            <div className="w-full max-w-312.75 mx-auto space-y-8">

                {/* HEADER */}
                <div>
                    <h1 className="text-3xl md:text-5xl text-white">
                        {t("title")}
                    </h1>

                    <p className="mt-2 text-white/70">
                        {t("lastUpdated")}
                    </p>

                    <p className="mt-4 text-white/80">
                        {t("description")}
                    </p>
                </div>

                {/* SECTIONS */}
                {sections?.map((section, index) => (
                    <div key={index} className="space-y-3">

                        <h5 className="text-white font-semibold text-lg">
                            {section.title}
                        </h5>

                        {/* string content */}
                        {typeof section.content === "string" && (
                            <p>{section.content}</p>
                        )}

                        {/* array content */}
                        {Array.isArray(section.content) &&
                            section.content.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                        {/* intro */}
                        {section.intro && (
                            <p>{section.intro}</p>
                        )}

                        {/* list */}
                        {section.list && (
                            <ul className="list-disc pl-6 space-y-1">
                                {section.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {/* sub sections */}
                        {section.subSections &&
                            section.subSections.map((sub, i) => (
                                <div key={i} className="mt-4 space-y-2">

                                    <h6 className="text-white font-semibold">
                                        {sub.title}
                                    </h6>

                                    {sub.content && (
                                        <p>{sub.content}</p>
                                    )}

                                    {sub.list && (
                                        <ul className="list-disc pl-6 space-y-1">
                                            {sub.list.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {sub.note && (
                                        <p className="text-white/70">
                                            {sub.note}
                                        </p>
                                    )}
                                </div>
                            ))}

                        {/* note */}
                        {section.note && (
                            <p className="text-white/70">
                                {section.note}
                            </p>
                        )}

                        {/* email */}
                        {section.email && (
                            <p>
                                Email:{" "}
                                <Link
                                    
                                    href={`mailto:${section.email}`}
                                >
                                    {section.email}
                                </Link>
                            </p>
                        )}
                    </div>
                ))}

            </div>
        </section>
    );
}