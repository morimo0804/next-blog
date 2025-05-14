import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";
import LoopBooks from "@/app/_components/LoopBooks";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
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
        <div className="pb-[80px]">
          <SearchField />
        </div>
        <NewsList news={news} />
      </section>
      <LoopBooks />
    </main>
  );
}
