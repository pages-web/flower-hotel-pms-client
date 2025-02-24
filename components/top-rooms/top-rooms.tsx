"use client";
import ProductCard from "@/components/product-card/product-card";
import { currentConfigAtom } from "@/store/config";
import { ICategory } from "@/types/products";
import { useQuery } from "@apollo/client";
import { useAtom, useAtomValue } from "jotai";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { queries } from "@/sdk/graphql/cms";
import { IPost } from "@/types/cms";
import { Link } from "@/i18n/routing";

export default function Rooms({ posts }: { posts: IPost[] }) {
  const router = useRouter();
  console.log(posts, "psotststs");

  return (
    <div className="container">
      <div className="flex justify-between">
        <h2 className="text-displaysm md:text-displaymd font-normal mb-8">
          Top Trending Hotel Rooms Views
        </h2>
        <Link href={"/accommodation"}>
          <Button variant={"link"}>View all</Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts?.map((post, index) => {
          if (index > 2) return null;
          return <ProductCard key={index} {...post} />;
        })}
      </div>
    </div>
  );
}
