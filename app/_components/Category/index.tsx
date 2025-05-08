import type { Category } from "@/app/_libs/microcms";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return <>{category.name}</>;
}
