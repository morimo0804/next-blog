import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <a
      href={href}
      className="inline-block w-[150px] py-[13px] rounded-[25px] text-center font-bold leading-none text-white bg-[#cb5a44] hover:scale-110 transition-transform duration-300"
    >
      {children}
    </a>
  );
}
