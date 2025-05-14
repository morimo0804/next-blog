"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchField from "../SearchField";
import styles from "./index.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-[17px] bg-[#cb5a44]">
      <div className="flex justify-between items-center max-w-[1366px] w-[90%] mx-auto">
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
                <Link
                  href="/news"
                  onClick={() => setIsOpen(false)}
                  className="text-white text-[25px] font-bold hover:scale-110 transition-transform duration-300 block px-[70px]"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#area-1"
                  onClick={() => setIsOpen(false)}
                  className="text-white text-[25px] font-bold hover:scale-110 transition-transform duration-300 block px-[70px]"
                >
                  category
                </Link>
              </li>
              <li>
                <Link
                  href="/#area-2"
                  onClick={() => setIsOpen(false)}
                  className="text-white text-[25px] font-bold hover:scale-110 transition-transform duration-300 block px-[70px]"
                >
                  profile
                </Link>
              </li>
              <li>
                <SearchField onSubmit={() => setIsOpen(false)} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
