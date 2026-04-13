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
      className="flex items-center justify-center gap-3 rounded-full bg-white px-4 sm:px-6 py-2 text-sm font-semibold text-black shadow-lg cursor-pointer"
    >
      {text}

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