import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import ButtonLink from "./_components/ButtonLink";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "地元紹介",
      category: {
        name: "学校",
      },
      publishedAt: "2025/05/04",
      createdAt: "2025/05/04",
    },
    {
      id: "2",
      title: "地元紹介",
      category: {
        name: "学校",
      },
      publishedAt: "2025/05/04",
      createdAt: "2025/05/04",
    },
    {
      id: "3",
      title: "地元紹介",
      category: {
        name: "学校",
      },
      publishedAt: "2025/05/04",
      createdAt: "2025/05/04",
    },
  ],
};

export default function Home() {
  const slicData = data.contents.slice(0, 6);

  return (
    <main>
      <section className={styles.top}>
        <div>
          <h1>リコレブック</h1>
        </div>
      </section>
      <section className={styles.news}>
        <h2>
          <Image src="/blog.svg" alt="ブログ" width={258} height={71} />
        </h2>
        <ul>
          {slicData.map((article) => (
            <li key={article.id} className={styles.post}>
              <Image src="/no-image.png" alt="" width={420} height={270} />
              <dl className="mt-3 space-y-1">
                <dt className="text-lg font-bold">{article.title}</dt>
                <dd className="text-sm">{article.category.name}</dd>
                <dd className="text-sm">{article.publishedAt}</dd>
              </dl>
            </li>
          ))}
        </ul>
        <ButtonLink href="/news">記事一覧へ</ButtonLink>
      </section>
    </main>
  );
}
