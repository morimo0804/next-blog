import Image from "next/image";
import LoopBooks from "@/app/_components/LoopBooks";

export default function Page() {
  return (
    <main>
      <div className="max-w-[1100px] w-[90%] mx-auto my-[120px]">
        <Image
          src="/contact.svg"
          alt="コンタクト"
          width={300}
          height={0}
          className="mx-auto pl-[30px] mb-[60px]"
        />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdVmE0Joo1AY0J5K0Uy4-Yx9SH1Ks3tGfCn6hcL92saIlpunw/viewform?embedded=true"
          width="100%"
          height="990"
        >
          読み込んでいます…
        </iframe>
      </div>
      <LoopBooks />
    </main>
  );
}
