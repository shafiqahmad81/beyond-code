import Link from "next/link";
import { ReactNode } from "react";

type GradientButtonProps = {
  icon: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function WithoutContentButton({
  icon,
  className = "",
  href,
  onClick,
}: GradientButtonProps) {
  const content = (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(115.33deg,#00D1FF_-174.52%,#FF09F4_89.43%,#2D7FFF_368.58%)] px-4 sm:px-6 py-2 text-sm font-semibold text-white shadow-lg cursor-pointer ${className}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
        {icon}
      </span>
    </button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}