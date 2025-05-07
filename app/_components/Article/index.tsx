import Image from "next/image";
import Link from "next/link";
import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1>{data.title}</h1>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      {data.content && (
        <div
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        />
      )}
    </main>
  );
}
