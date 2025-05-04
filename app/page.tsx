import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import NewsList from "./_components/NewsList";
import ButtonLink from "./_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

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
        <NewsList news={slicData} />
        <ButtonLink href="/news">記事一覧へ</ButtonLink>
      </section>
    </main>
  );
}
