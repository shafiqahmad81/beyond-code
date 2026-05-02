import Link from "next/link";
import termsData from "@/data/en.json";

/* ================= TYPES ================= */

type ExtraSection = {
  title: string;
  list: string[];
};

type Section = {
  title: string;
  content?: string[];
  list?: string[];
  note?: string | string[];
  subTitle?: string;
  extra?: ExtraSection[];
  email?: string;
};

type TermsType = {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: Section[];
};

/* ================= COMPONENT ================= */

export default function TermsPage() {
  const terms: TermsType = termsData.terms;

  return (
    <section className="pt-30 sm:pt-40 lg:pt-50 pb-8 sm:pb-16 lg:pb-32.5">
      <div className="container">
        <div className="w-full max-w-312.75 mx-auto space-y-4 sm:space-y-7.5">

          {/* HEADER */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-14 mb-2.5 sm:mb-5 text-white">
              {terms.title}
            </h1>

            <p>{terms.lastUpdated}</p>

            {terms.intro?.map((item: string, i: number) => (
              <p key={i}>{item}</p>
            ))}
          </div>

          {/* SECTIONS */}
          {terms.sections?.map((section: Section, i: number) => (
            <div key={i}>
              <h5>{section.title}</h5>

              {/* CONTENT */}
              {section.content?.map((text: string, idx: number) => (
                <p key={idx} className="my-3 sm:my-4">
                  {text}
                </p>
              ))}

              {/* SUBTITLE */}
              {section.subTitle && (
                <h6 className="text-sm sm:text-base sm:leading-5 text-white font-bold my-3 sm:my-4">
                  {section.subTitle}
                </h6>
              )}

              {/* LIST */}
              {section.list?.length ? (
                <ul className="list-disc pl-6 mt-1">
                  {section.list.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {/* EXTRA */}
              {section.extra?.map((ex: ExtraSection, idx: number) => (
                <div key={idx}>
                  <p className="my-3 sm:my-4">{ex.title}</p>
                  <ul className="list-disc pl-6 mt-1">
                    {ex.list.map((li: string, liIdx: number) => (
                      <li key={liIdx}>{li}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* NOTE */}
              {section.note &&
                (Array.isArray(section.note) ? (
                  section.note.map((n: string, idx: number) => (
                    <p key={idx} className="mt-3 sm:mt-4">
                      {n}
                    </p>
                  ))
                ) : (
                  <p className="mt-3 sm:mt-4">{section.note}</p>
                ))}

              {/* EMAIL */}
              {section.email && (
                <p>
                  Email:{" "}
                  <Link href={`mailto:${section.email}`}>
                    {section.email}
                  </Link>
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}