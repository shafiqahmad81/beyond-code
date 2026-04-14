import FAQSection from "@/components/faq-section/faqSection";
import LeadershipSection from "@/components/leadership/leadership";

export default function AboutUs() {
    return (
        <>
            <section className="py-5 sm:py-10">
                <div className="container">
                    <LeadershipSection />
                    <FAQSection />
                </div>
            </section>
        </>
    );
}