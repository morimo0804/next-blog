import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";
import Category from "@/app/_components/Category";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <main>
      <div className="text-center">
        <p className="mb-[50px] inline-block border-b-8 border-double border-black text-[20px] font-bold">
          カテゴリー:
          <Category category={category} />
        </p>
      </div>
      <NewsList news={news} />
    </main>
  );
}
