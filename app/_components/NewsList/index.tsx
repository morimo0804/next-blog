// import Image from "next/image";
// import Link from "next/link";
// import styles from "./index.module.css";

// import Category from "../Category";
// import Date from "../Date";
// import { News } from "@/app/_libs/microcms";

// type Props = {
//   news: News[];
// };

// export default function NewsList({ news }: Props) {
//   if (news.length === 0) {
//     return <p>記事がありません。</p>;
//   }

//   return (
//     <ul>
//       {news.map((article) => (
//         <li key={article.id} className={styles.post}>
//           <Image src="/no-image.png" alt="" width={420} height={270} />
//           <dl className="mt-3 space-y-1">
//             <dt className="text-lg font-bold">{article.title}</dt>
//             <Category category={article.category} />
//             <Date date={article.publishedAt ?? article.createdAt} />
//           </dl>
//         </li>
//       ))}
//     </ul>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <div className="mb-20 grid gap-20 md:grid-cols-2">
      {news.map((article) => (
        <article key={article.id} className={`${styles.post} space-y-4`}>
          <Link href={`/news/${article.id}`}>
            <Image
              src="/no-image.png"
              alt=""
              width={420}
              height={270}
              className="w-full h-auto"
            />
            <h3 className="text-xl font-bold leading-none mt-4">
              {article.title}
            </h3>
            {/* <p className="text-base leading-relaxed text-gray-700">
            {article.content?.slice(0, 60)}...
          </p> */}
            <p className="text-sm font-semibold">
              <Date date={article.publishedAt ?? article.createdAt} />
            </p>
          </Link>
        </article>
      ))}
    </div>
  );
}
