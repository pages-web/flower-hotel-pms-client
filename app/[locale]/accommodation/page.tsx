"use client";
import { useAtomValue } from "jotai";
import AccommodationLayout from "./accommodation-layout";
import ProductCard from "@/components/product-card/product-card";
import { currentConfigAtom } from "@/store/config";
import { useQuery } from "@apollo/client";
import { ICategory } from "@/types/products";
import { queries } from "@/sdk/graphql/cms";
import { IPost } from "@/types/cms";

const Accommodation = () => {
  const { data } = useQuery(queries.posts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      tagIds: ["gwNn-3QevRDYw0fkMh5ny"],
    },
  });
  const posts: IPost[] = data?.cmsPosts;

  return (
    <AccommodationLayout>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts?.map((post, index) => {
          return <ProductCard {...post} key={index} />;
        })}
      </div>
    </AccommodationLayout>
  );
};
export default Accommodation;
