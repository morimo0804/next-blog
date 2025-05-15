import type { Metadata } from "next";
import { notFound, useSearchParams } from "next/navigation";
import Image from "next/image";
import { getNewsDetail } from "@/app/_libs/microcms";
import CategoryList from "@/app/_components/CategoryList";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import LoopBooks from "@/app/_components/LoopBooks";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams?.dk,
  });

  const stripHTML = (html: string) => html.replace(/<[^>]+>/g, "");
  const plainText = stripHTML(data.content || "");
  const description = plainText.slice(0, 100);

  return {
    title: data.title,
    description,
    openGraph: {
      title: data.title,
      description,
      images: [data?.thumbnail?.url ?? ""],
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);

  return (
    <main>
      <div className="max-w-[1100px] w-[90%] mx-auto md:flex md:flex-row md:gap-[100px]">
        <div className="md:w-2/3">
          <Article data={data} />
          <div className="mb-[120px] text-center">
            <ButtonLink href="/news">記事一覧へ</ButtonLink>
          </div>
        </div>

        <aside className="md:mt-[120px] mb-[120px] md:mb-0 md:w-1/3 space-y-[80px]">
          <section>
            <h2 className="text-center mb-[30px]">
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
          <section>
            <h2 className="text-center mb-[30px]">
              <Image
                src="/profile.svg"
                alt="プロフィール"
                width={300}
                height={0}
                className="mx-auto pl-[30px]"
              />
            </h2>
            <div className="bg-[#cae3ea] border-[10px] border-double border-black p-12">
              <Image
                src="/iconImage@3.png"
                alt=""
                width={222}
                height={222}
                className="w-[180px] md:w-[222px] mx-auto mb-[20px]"
              />
              <ul className="text-center">
                <li className="text-[20px] font-bold mb-[15px]">森茂 勇斗</li>
                <li>2005年8月4日生まれ</li>
                <li className="inline-block mt-[30px] mb-[40px] text-left">
                  動物が好きで犬を飼っています。
                  <br />
                  Webデザイン学科でWebサイト制作の勉強を頑張っています。
                </li>
                <li>
                  <ButtonLink href="/contact">お問い合わせ</ButtonLink>
                </li>
              </ul>
            </div>
          </section>
        </aside>
      </div>
      <LoopBooks />
    </main>
  );
}
