import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import LoopBooks from "./_components/LoopBooks";
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
      <section className="mb-[150px] py-[40px] md:py-[90px] bg-[#90bcb0]">
        <div className="max-w-[1366px] w-[90%] mx-auto">
          <div
            className={`relative text-center p-[20px] border-[8px] md:border-[11px] border-black ${styles.outerBox}`}
          >
            <div
              className={`relative p-[30px] md:p-[70px] border-[6px] border-black flex flex-col md:flex-row items-center justify-around ${styles.innerBox}`}
            >
              <h1 className="mb-[50px] md:mb-0 md:mr-[70px]">
                <Image
                  src="/title.svg"
                  alt="リコレブック"
                  width={500}
                  height={0}
                  className="w-[400px] md:w-[500px]"
                />
              </h1>
              <Image
                src="/mainPicture.svg"
                alt=""
                width={350}
                height={0}
                className="w-[350px] md:w-[38%] md:ml-[70px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="area-1"
        className={`${styles.news} max-w-[1100px] w-[90%] mx-auto`}
      >
        <h2>
          <Image src="/blog.svg" alt="ブログ" width={258} height={71} />
        </h2>
        <NewsList news={slicData} />
        <ButtonLink href="/news">記事一覧へ</ButtonLink>
      </section>
      <LoopBooks />
    </main>
  );
}
