import Link from "next/link";
import { getNewsList } from "@/app/_libs/microcms";
import { Category } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export default async function CategoryList() {
  const { contents: newsList } = await getNewsList({ limit: NEWS_LIST_LIMIT });

  const categoryCountMap = new Map<
    string,
    { category: Category; count: number }
  >();

  newsList.forEach((news) => {
    const category = news.category;
    if (category) {
      const existing = categoryCountMap.get(category.id);
      if (existing) {
        existing.count += 1;
      } else {
        categoryCountMap.set(category.id, { category, count: 1 });
      }
    }
  });

  const categoriesWithCount = Array.from(categoryCountMap.values());

  return (
    <div className="my-12 text-center">
      <ul className="flex flex-wrap justify-center gap-4">
        {categoriesWithCount.map(({ category, count }) => (
          <li key={category.id}>
            <Link href={`/news/category/${category.id}`}>
              <span className="inline-block font-bold text-lg  hover:scale-110 transition-transform duration-300">
                {category.name}（{count}）
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
