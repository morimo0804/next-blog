"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-[17px] bg-[#cb5a44]">
      <div className="flex justify-between items-center max-w-[1366px] w-[84.61%] mx-auto">
        <Link href="/">
          <Image
            src="/headerIcon.svg"
            alt=""
            width={60}
            height={60}
            className="relative z-[9998] transition-transform duration-300 hover:scale-110"
          />
        </Link>

        <div
          className={`${styles.openbtn} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={styles.bar1}></span>
          <span className={styles.bar2}></span>
          <span className={styles.bar3}></span>
        </div>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <div className="flex items-center justify-center h-full">
            <ul className="text-center space-y-6">
              <li>
                <a
                  href="#area-1"
                  className="text-white text-[25px] font-bold hover:scale-110 transition-transform block px-[70px]"
                >
                  blog
                </a>
              </li>
              <li>
                <a
                  href="#area-2"
                  className="text-white text-[25px] font-bold hover:scale-110 transition-transform block px-[70px]"
                >
                  category
                </a>
              </li>
              <li>
                <a
                  href="#area-3"
                  className="text-white text-[25px] font-bold hover:scale-110 transition-transform block px-[70px]"
                >
                  profile
                </a>
              </li>
              <li>
                <form className="mt-8">
                  <input
                    type="text"
                    placeholder="検索..."
                    className="p-2 border rounded w-full max-w-[300px]"
                  />
                  <button
                    type="submit"
                    className="mt-2 bg-white text-[#cb5a44] px-4 py-1 rounded font-bold cursor-pointer"
                  >
                    検索
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
