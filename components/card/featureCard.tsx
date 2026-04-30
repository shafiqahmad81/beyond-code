import Image, { StaticImageData } from "next/image";

type StatItemProps = {
  icon: StaticImageData | string;
  value: string;
  label: string;
};

export default function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex items-center gap-3.75">
      <div className="w-full max-w-10 sm:max-w-12.5">
        <Image
          src={icon}
          alt={label}
          width={50}
          height={50}
        />
      </div>

      <div>
        <h5>{value}</h5>
        <p className="font-sans text-sm sm:text-base sm:leading-5 font-normal text-white sm:mt-2.5">
          {label}
        </p>
      </div>
    </div>
  );
}