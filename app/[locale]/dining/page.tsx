"use client";
import HotelDining from "@/components/dining/dining";
import Heading from "@/components/heading/heading";
import RestaurantCard from "@/components/restaurant-card/restaurant-card";
import { queries } from "@/sdk/graphql/cms";
import { usePosts } from "@/sdk/queries/cms";
import { IPost } from "@/types/cms";
import { useQuery } from "@apollo/client";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
export default function Dining() {
  const locale = useLocale();
  const { posts } = usePosts({
    language: locale,
    tagIds: ["MN2F0CRukGM5ui08xP6ko"],
  });
  console.log("posts :>> ", posts);
  const t = useTranslations("restran");
  return (
    <div className="container min-h-screen space-y-10 px-4 py-20">
      <Heading title={t("Restaurant & Bar")} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts?.map((post, index) => (
          <RestaurantCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
}
