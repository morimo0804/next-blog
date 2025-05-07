import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <div className="mb-20 grid gap-20 md:grid-cols-2">
      {news.map((article) => (
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
            <h3 className="text-xl font-bold leading-none mt-4">
              {article.title}
            </h3>
            {/* <p className="text-base leading-relaxed text-gray-700">
            {article.content?.slice(0, 60)}...
          </p> */}
            <p className="text-sm font-semibold">
              <Date date={article.publishedAt ?? article.createdAt} />
            </p>
          </Link>
        </article>
      ))}
    </div>
  );
}
