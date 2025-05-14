import Image from "next/image";
import { getNewsList } from "../_libs/microcms";
import NewsList from "../_components/NewsList";
import Pagination from "../_components/Pagination";
import { NEWS_LIST_LIMIT } from "../_constants";
import LoopBooks from "@/app/_components/LoopBooks";

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <main>
      <section className="max-w-[1000px] w-[90%] mx-auto">
        <h2 className="text-center mt-[100px] mb-[60px]">
          <Image
            src="/blog.svg"
            alt="ブログ"
            width={300}
            height={0}
            className="mx-auto pl-[30px]"
          />
        </h2>
        <NewsList news={news} />
        <Pagination totalCount={totalCount} />
      </section>
      <LoopBooks />
    </main>
  );
}
