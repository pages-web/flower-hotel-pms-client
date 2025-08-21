"use client";
import Heading from "@/components/heading/heading";
import ServiceCard from "@/components/service-card/service-card";
import { queries } from "@/sdk/graphql/cms";
import { IPost } from "@/types/cms";
import { useQuery } from "@apollo/client";

export default function Dining() {
  const { data } = useQuery(queries.posts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      tagIds: ["7cqjtUTEqwuL0R2nB9gyz"],
    },
  });
  const posts: IPost[] = data?.cmsPosts;

  return (
    <div className="container min-h-screen space-y-10 px-4 py-20">
      <Heading title="Services" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts?.slice(0, 5).map((post) => (
          <ServiceCard post={post} key={post._id} />
        ))}

        {/* Хэрэв яг 6 grid item хэрэгтэй бол → хоосон box нэмнэ */}
        {posts && posts.length === 5 && <div className="hidden md:block" />}
      </div>
    </div>
  );
}
