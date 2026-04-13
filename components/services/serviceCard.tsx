import Image, { StaticImageData } from "next/image";

type ServiceCardProps = {
  image: StaticImageData | string;
  title: string;
  description: string;
};

export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-[linear-gradient(180deg,#252525_0%,#050505_100%)] px-4 md:px-6 pt-4 md:pt-6 pb-7 md:pb-14 rounded-[5px]">
      {/* Image */}
      <div className="mb-6 sm:mb-9 max-w-14 sm:max-w-18.5">
        <Image
          src={image}
          alt={title}
          width={74}
          height={65}
        />
      </div>

      {/* Title */}
      <h5 >
        {title}
      </h5>

      {/* Description */}
      <p className="mt-3 sm:mt-5 text-[#A0A0A0]">
        {description}
      </p>
    </div>
  );
}