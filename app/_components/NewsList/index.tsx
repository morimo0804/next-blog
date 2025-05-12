import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default async function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p className="py-[120px] text-center text-lg">記事がありません。</p>;
  }

  const { convert } = await import("html-to-text");

  return (
    <div className="mb-[80px] grid gap-20 md:grid-cols-2">
      {news.map((article) => {
        const plainText =
          convert(article.content || "", { wordwrap: false }).slice(0, 60) +
          "...";

        return (
          <article key={article.id} className={`${styles.post} space-y-4`}>
            <Link href={`/news/${article.id}`}>
              {article.thumbnail?.url ? (
                <Image
                  src={article.thumbnail.url}
                  alt=""
                  width={article.thumbnail?.width}
                  height={article.thumbnail?.height}
                />
              ) : (
                <Image
                  src="/no-image.png"
                  alt=""
                  width={420}
                  height={270}
                  className="w-full h-auto"
                />
              )}
              <h3 className="text-xl font-bold leading-none border-b border-[#333] mt-[20px] mb-[25px] pb-[10px]">
                {article.title}
              </h3>
              <p className="text-base text-justify mb-[20px] leading-loose">
                {plainText}
              </p>
              <p className="text-sm font-semibold">
                <Date date={article.publishedAt ?? article.createdAt} />
              </p>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
