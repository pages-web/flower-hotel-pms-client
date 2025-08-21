"use client";
import HotelDining from "@/components/dining/dining";
import Heading from "@/components/heading/heading";
import RestaurantCard from "@/components/restaurant-card/restaurant-card";
import ServiceCard from "@/components/service-card/service-card";
import { queries } from "@/sdk/graphql/cms";
import { IPost } from "@/types/cms";
import { useQuery } from "@apollo/client";

export default function Meetings() {
  const { data } = useQuery(queries.posts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      tagIds: ["vjKZEAB00rv11CsyvXGIT"],
    },
  });
  const posts: IPost[] = data?.cmsPosts;

  return (
    <div className="container min-h-screen space-y-10 px-4 py-20">
      <Heading title="Meetings & Events" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts?.map((post, index) => (
          <ServiceCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
}
