import Image from "next/image";
import Link from "next/link";
import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import styles from "./index.module.css";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <section className="mt-[120px] mb-[80px]">
        <h1 className="text-2xl md:text-4xl font-bold mb-[40px]">
          {data.title}
        </h1>

        <ul className="flex items-center mb-[20px] font-bold">
          <li className="p-2 border-[3px] border-black bg-white transition-transform duration-300 hover:scale-110 text-lg md:text-xl">
            <Link href={`/news/category/${data.category.id}`}>
              <Category category={data.category} />
            </Link>
          </li>
          <li className="ml-4 md:ml-10 text-base md:text-lg">
            <Date date={data.publishedAt ?? data.createdAt} />
          </li>
        </ul>

        {data.thumbnail ? (
          <div className="mb-[60px]">
            <Image
              src={data.thumbnail.url}
              alt=""
              width={data.thumbnail.width}
              height={data.thumbnail.height}
              className="w-full h-auto"
            />
          </div>
        ) : (
          <div className="mb-[60px]">
            <Image
              src="/no-image.png"
              alt="no image"
              width={420}
              height={270}
              className="w-full h-auto"
            />
          </div>
        )}

        <article
          className={`${styles.content} border-b-4 border-black mb-[80px] prose max-w-none prose-img:mb-[40px] prose-p:mb-[40px] prose-a:underline`}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </section>
    </main>
  );
}
