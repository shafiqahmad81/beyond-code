import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CaseStudyCardProps = {
  image: StaticImageData | string;
  title: string;
  description: string;
  href: string;
};

export default function CaseStudyCard({
  image,
  title,
  description,
  href,
}: CaseStudyCardProps) {
  return (
    <div className="space-y-4 sm:space-y-7 flex flex-col items-center sm:items-start">
      {/* Image */}
      <div className="w-full max-w-110 mx-auto">
        <Image
          src={image}
          alt={title}
          width={440}
          height={405}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="text-center sm:text-start">
        <h5>{title}</h5>

        <p className="mt-2 sm:mt-3.5 line-clamp-2 text-[#C1C1C1]">
          {description}
        </p>
      </div>

      {/* Button */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full bg-[#353535] py-1.5 pl-5 pr-2.5 text-sm font-semibold text-white sm:text-base sm:leading-5"
      >
        <span>Learn More</span>

        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#5B5B5B]">
          <ArrowRight className="h-3 w-3" />
        </span>
      </Link>
    </div>
  );
}