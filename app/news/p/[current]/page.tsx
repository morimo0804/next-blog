import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import LoopBooks from "@/app/_components/LoopBooks";

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

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
