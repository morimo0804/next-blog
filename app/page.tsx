import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import ButtonLink from "./_components/ButtonLink";
import PickupSlider from "@/app/_components/PickupSlider";
import NewsList from "./_components/NewsList";
import CategoryList from "./_components/CategoryList";
import LoopBooks from "./_components/LoopBooks";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  const pickupPosts = data.contents.filter((post) => post.pickup).slice(0, 3);

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
      <section className="max-w-[900px] w-[90%] mx-auto pb-[150px]">
        <h2 className="text-center mb-[60px]">
          <Image
            src="/pickup.svg"
            alt="ピックアップ"
            width={300}
            height={0}
            className="mx-auto pl-[30px]"
          />
        </h2>
        <PickupSlider posts={pickupPosts} />
      </section>
      <section
        className={`${styles.news} max-w-[1100px] w-[90%] mx-auto pb-[150px]`}
      >
        <h2 className="text-center mb-[60px]">
          <Image
            src="/blog.svg"
            alt="ブログ"
            width={300}
            height={0}
            className="mx-auto pl-[30px]"
          />
        </h2>
        <NewsList news={data.contents} />
        <div className="text-center">
          <ButtonLink href="/news">記事一覧へ</ButtonLink>
        </div>
      </section>
      <section
        id="area-1"
        className="max-w-[1100px] w-[90%] mx-auto pb-[150px]"
      >
        <h2 className="text-center mb-[60px]">
          <Image
            src="/category.svg"
            alt="カテゴリー"
            width={300}
            height={0}
            className="mx-auto pl-[30px]"
          />
        </h2>
        <CategoryList />
      </section>
      <section
        id="area-2"
        className={`${styles.profile} max-w-[1100px] w-[90%] mx-auto pb-[150px]`}
      >
        <h2 className="text-center mb-[60px]">
          <Image
            src="/profile.svg"
            alt="プロフィール"
            width={300}
            height={0}
            className="mx-auto pl-[30px]"
          />
        </h2>
        <div className="bg-[#cae3ea] border-[10px] border-double border-black p-12 md:flex md:items-center md:justify-center">
          <Image
            src="/iconImage@3.png"
            alt=""
            width={222}
            height={222}
            className="w-[180px] md:w-[222px] md:mr-[100px] mx-auto md:mx-0"
          />
          <ul className="mt-[35px] md:mt-0 text-center">
            <li className="text-[20px] font-bold mb-[15px]">森茂 勇斗</li>
            <li>2005年8月4日生まれ</li>
            <li className="inline-block mt-[30px] mb-[40px] text-left">
              動物が好きで犬を飼っています。
              <br />
              Webデザイン学科でWebサイト制作の勉強を頑張っています。
            </li>
            <li>
              <div className="text-center">
                <ButtonLink href="/contact">お問い合わせ</ButtonLink>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <LoopBooks />
    </main>
  );
}
