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
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.post}>
          <Image src="/no-image.png" alt="" width={420} height={270} />
          <dl className="mt-3 space-y-1">
            <dt className="text-lg font-bold">{article.title}</dt>
            <Category category={article.category} />
            <Date date={article.publishedAt ?? article.createdAt} />
          </dl>
        </li>
      ))}
    </ul>
  );
}
