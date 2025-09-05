"use client";
import Heading from "@/components/heading/heading";
import ServiceCard from "@/components/service-card/service-card";
import { IPost } from "@/types/cms";
import { useLocale } from "next-intl"; // locale авахын тулд
import { usePosts } from "@/sdk/queries/cms";

export default function Meetings() {
  const locale = useLocale();

  const { posts } = usePosts({
    language: locale,
    tagIds: ["vjKZEAB00rv11CsyvXGIT"],
  });

  return (
    <div className="container min-h-screen space-y-10 px-4 py-20">
      <Heading title="Meetings & Events" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts?.map((post: IPost, index: number) => (
          <ServiceCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
}
