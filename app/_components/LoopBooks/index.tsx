import Image from "next/image";
import styles from "./index.module.css";

export default function LoopBooks() {
  return (
    <div className="flex overflow-hidden">
      <ul className={`flex ${styles.loop}`}>
        <li className="w-[1000px]">
          <Image src="/books.png" alt="book" width={1000} height={0} />
        </li>
        <li className="w-[1000px]">
          <Image src="/books.png" alt="book" width={1000} height={0} />
        </li>
      </ul>
      <ul className={`flex ${styles.loop}`}>
        <li className="w-[1000px]">
          <Image src="/books.png" alt="book" width={1000} height={0} />
        </li>
        <li className="w-[1000px]">
          <Image src="/books.png" alt="book" width={1000} height={0} />
        </li>
      </ul>
    </div>
  );
}
