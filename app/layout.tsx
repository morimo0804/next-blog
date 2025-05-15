import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://next-blog-0804.vercel.app/"),
  title: {
    template: "%s | リコレブック",
    default: "リコレブック",
  },
  description: "本をテーマにしたブログサイト",
  openGraph: {
    title: "リコレブック",
    description: "本をテーマにしたブログサイト",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://next-blog-0804.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={zenKakuGothicNew.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
