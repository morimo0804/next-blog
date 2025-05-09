import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";

type Props = {
  totalCount: number;
  basePath?: string;
};

export default function Pagination({ totalCount, basePath = "/news" }: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );

  return (
    <nav className="my-10">
      <ul className="flex justify-center gap-2">
        {pages.map((p) => (
          <li
            key={p}
            className="transition-all duration-300 hover:bg-[#cb5a44] hover:text-white"
          >
            <Link
              href={`${basePath}/p/${p}`}
              className="block px-4 py-2 text-2xl font-bold"
            >
              {p}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
