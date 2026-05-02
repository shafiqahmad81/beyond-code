"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import data from "@/data/en.json";

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="rounded-2xl bg-white/5 px-5 sm:px-6 transition-all duration-300">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-4 sm:py-6 text-left cursor-pointer"
      >
        <h6 className="text-base sm:text-lg font-bold text-white/80 sm:leading-7">
          {faq.question}
        </h6>

        <span className="flex items-center justify-center text-white shrink-0">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 sm:pb-6 text-sm sm:text-base leading-7 text-white/40">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const { faq } = data;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#050505] pb-7 sm:pb-14 pt-14 sm:pt-27.5">
      <div className="container">
        <div className="mx-auto max-w-190">

          {/* Title */}
          <motion.h2
            className="mb-6 sm:mb-10 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {faq.title}
          </motion.h2>

          {/* Items */}
          <div className="space-y-4">
            {faq.items.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <FAQItem
                  faq={item}
                  isOpen={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}