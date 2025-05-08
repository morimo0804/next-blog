import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);

  return (
    <main>
      <div className="max-w-[1000px] w-[90%] mx-auto">
        <Article data={data} />
        <ButtonLink href="/news">記事一覧へ</ButtonLink>
      </div>
    </main>
  );
}
