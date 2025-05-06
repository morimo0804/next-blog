import Image from "next/image";
import Link from "next/link";
import styles from "./not-found.module.css";
import ButtonLink from "./_components/ButtonLink";

export default function NotFound() {
  return (
    <section className="bg-white py-10 md:py-[90px]">
      <div className="max-w-[1366px] w-[90%] mx-auto">
        <div
          className={`relative mb-[120px] border-[8px] md:border-[11px] border-[#c96659] p-5 text-center ${styles.outerBox}`}
        >
          <div
            className={`relative border-[6px] border-[#c96659] p-[30px] md:p-[100px] flex flex-col md:flex-row items-center justify-around ${styles.innerBox}`}
          >
            <h1 className="mb-[50px] md:mb-0 md:mr-[70px]">
              <Image
                src="/title404.svg"
                alt="リコレブック"
                width={500}
                height={0}
                className="w-[400px] md:w-[500px]"
              />
            </h1>
            <Image
              src="/text404.svg"
              alt=""
              width={350}
              height={0}
              className="w-[350px] md:w-[38%] md:ml-[70px]"
            />
          </div>
        </div>

        <ButtonLink href="/">トップページへ</ButtonLink>
      </div>
    </section>
  );
}
