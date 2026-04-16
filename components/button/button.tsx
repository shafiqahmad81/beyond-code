import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function Button({
  text,
  icon,
  href,
  onClick,
}: ButtonProps) {
  const content = (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-3 rounded-full bg-white px-4 sm:px-6 py-2 text-sm font-semibold text-black hover:text-white shadow-lg cursor-pointer hover:bg-[linear-gradient(90.45deg,#00D1FF_-368.58%,#FF09F4_40.43%,#2D7FFF_174.52%)] transition-all duration-300 group"
    >
      {text}

      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
        <span className="transition-transform duration-1000 group-hover:-rotate-45">
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