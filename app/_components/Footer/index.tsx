import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 pb-5 text-right bg-[#cb5a44]">
      <div className="max-w-[1366px] w-[90%] mx-auto">
        <div className="md:flex md:justify-between md:items-start">
          <Image
            src="/footerIcon.svg"
            alt=""
            className="md:w-[206px] md:h-[180px]"
            width={110}
            height={84}
          />
          <nav>
            <ul className="hidden md:flex md:gap-[70px] text-white font-bold text-[30px] transition-all">
              <li>
                <Link
                  href="/news"
                  className="text-white text-[25px] font-bold hover:scale-110 transition-transform duration-300 block"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#area-1"
                  className="text-white text-[25px] font-bold hover:scale-110 transition-transform duration-300 block"
                >
                  category
                </Link>
              </li>
              <li>
                <Link
                  href="/#area-2"
                  className="text-white text-[25px] font-bold hover:scale-110 transition-transform duration-300 block"
                >
                  profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <small className="block mt-4 text-white">
          &copy;2025 hayato morimo
        </small>
      </div>
    </footer>
  );
}
