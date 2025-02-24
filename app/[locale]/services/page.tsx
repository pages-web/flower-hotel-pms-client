"use client";
import HotelDining from "@/components/dining/dining";
import Heading from "@/components/heading/heading";
import RestaurantCard from "@/components/restaurant-card/restaurant-card";
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

      <div className="flex flex-col gap-6">
        {posts?.map((post, index) => (
          <RestaurantCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
}
