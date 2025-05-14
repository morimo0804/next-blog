import Image from "next/image";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import Category from "@/app/_components/Category";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import LoopBooks from "@/app/_components/LoopBooks";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <main>
      <div className="max-w-[1000px] w-[90%] mx-auto">
        <h2 className="text-center mt-[100px] mb-[60px]">
          <Image
            src="/blog.svg"
            alt="ブログ"
            width={300}
            height={0}
            className="mx-auto pl-[30px]"
          />
        </h2>
        <div className="text-center">
          <p className="mb-[50px] inline-block border-b-8 border-double border-black text-[20px] font-bold">
            カテゴリー:
            <Category category={category} />
          </p>
        </div>
        <NewsList news={news} />
        <Pagination
          totalCount={totalCount}
          basePath={`/news/category/${category.id}`}
        />
      </div>
      <LoopBooks />
    </main>
  );
}
