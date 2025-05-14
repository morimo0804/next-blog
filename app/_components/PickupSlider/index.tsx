"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  posts: {
    id: string;
    title: string;
    thumbnail?: { url: string };
  }[];
};

// カスタム矢印
function PrevArrow(props: any) {
  const { onClick } = props;
  return <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick} />;
}

function NextArrow(props: any) {
  const { onClick } = props;
  return <div className={`${styles.arrow} ${styles.next}`} onClick={onClick} />;
}

export default function PickupSlider({ posts }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // ← 追加
    autoplaySpeed: 4000, // ← 追加（ミリ秒：4秒ごとにスライド）
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <ul className={styles.dots}>{dots}</ul>
    ),
    customPaging: () => <button className={styles.dot} />,
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings} className={styles.slider}>
        {posts.map((post) => (
          <div key={post.id} className={styles.sliderItem}>
            <Link href={`/news/${post.id}`}>
              <Image
                src={post.thumbnail?.url || "/no-image.png"}
                alt={post.title}
                width={800}
                height={500}
                className="w-full aspect-[4/3] md:aspect-[3/2] object-cover"
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
