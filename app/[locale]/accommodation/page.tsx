"use client";
import AccommodationLayout from "./accommodation-layout";
import ProductCard from "@/components/product-card/product-card";
import { usePosts } from "@/sdk/queries/cms";
import { useLocale } from "next-intl";

const Accommodation = () => {
  const locale = useLocale();

  const { posts } = usePosts({
    language: locale,
    clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
    tagIds: ["gwNn-3QevRDYw0fkMh5ny"],
  });
  console.log(" locale :>> ", locale);
  console.log("posts :>> ", posts);
  return (
    <AccommodationLayout>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts?.map((post, index) => (
          <ProductCard {...post} key={index} />
        ))}
      </div>
    </AccommodationLayout>
  );
};

export default Accommodation;
