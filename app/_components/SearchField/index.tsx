"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/news/search?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8">
      <div className="flex items-center gap-2">
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get("q") ?? undefined}
          placeholder="キーワードを入力"
          className="flex-grow border-2 border-black px-4 py-2 text-left"
        />
        <button
          type="submit"
          className="w-[100px] text-[#cb5a44] bg-white border-2 border-[#cb5a44] px-4 py-2 font-bold hover:scale-110 transition-transform duration-300"
        >
          検索
        </button>
      </div>
    </form>
  );
}

export default function SearchField() {
  return (
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  );
}
