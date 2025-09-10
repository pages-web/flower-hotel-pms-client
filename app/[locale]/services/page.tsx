"use client";

import Heading from "@/components/heading/heading";
import ServiceCard from "@/components/service-card/service-card";
import { IPost } from "@/types/cms";
import { usePosts } from "@/sdk/queries/cms";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
export default function Dining() {
  const locale = useLocale();

  // Custom hook ашиглаж постуудыг татах
  const { posts } = usePosts({
    language: locale,
    tagIds: ["7cqjtUTEqwuL0R2nB9gyz"],
  });
  const t = useTranslations("restran");
  return (
    <div className="container min-h-screen space-y-10 px-4 py-20">
      <Heading title={t("services")} />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts?.slice(0, 5).map((post: IPost) => (
          <ServiceCard key={post._id} post={post} />
        ))}

        {/* Хэрэв яг 6 grid item хэрэгтэй бол → хоосон box нэмнэ */}
        {posts && posts.length === 5 && <div className="hidden md:block" />}
      </div>
    </div>
  );
}
