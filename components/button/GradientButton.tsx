import Link from "next/link";
import { ReactNode } from "react";

type GradientButtonProps = {
  text: string;
  icon: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function GradientButton({
  text,
  icon,
  className = "",
  href,
  onClick,
}: GradientButtonProps) {
  const content = (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(115.33deg,#00D1FF_-174.52%,#FF09F4_89.43%,#2D7FFF_368.58%)] px-4 sm:px-6 py-2 text-sm font-semibold text-white shadow-lg cursor-pointer hover:bg-[linear-gradient(90.45deg,#00D1FF_-368.58%,#FF09F4_40.43%,#2D7FFF_174.52%)] transition-all duration-500 group ${className}`}
    >
      <span>{text}</span>

      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-all">
        <span className="transition-transform duration-500 group-hover:-rotate-45">
          {icon}
        </span>
      </span>
    </button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}