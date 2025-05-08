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
      <section className="mt-20 mb-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-12">{data.title}</h1>

        <ul className="flex items-center mb-5 font-bold">
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
          <div className="mb-16">
            <Image
              src={data.thumbnail.url}
              alt=""
              width={data.thumbnail.width}
              height={data.thumbnail.height}
              className="w-full h-auto"
            />
          </div>
        ) : (
          <div className="mb-16">
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
          className={`${styles.content} border-b-4 border-black mb-20 prose max-w-none prose-img:mb-10 prose-p:mb-10 prose-a:underline prose-h2:mb-10 prose-h2:px-5 prose-h2:border-l-[10px] prose-h2:border-r-[10px] prose-h2:border-double prose-h2:border-black prose-h3:mb-10 prose-h3:px-5 prose-h3:border-l-[10px] prose-h3:border-double prose-h3:border-black`}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </section>
    </main>
  );
}
