import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <a
      href={href}
      className="block w-[150px] py-[13px] rounded-[25px] text-center font-bold leading-none text-white bg-[#cb5a44] transition-all duration-400 hover:scale-115"
    >
      {children}
    </a>
  );
}
