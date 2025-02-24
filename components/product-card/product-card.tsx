"use client";

import { Star } from "lucide-react";
import Image from "../ui/image";
import { Link } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { ICategory, IProduct } from "@/types/products";
import { useQuery } from "@apollo/client";
import { queries } from "@/sdk/graphql/rooms";
import { Button } from "../ui/button";
import { IPost } from "@/types/cms";

const ProductCard = ({ ...post }: IPost) => {
  return (
    <Link href={`/room-detail/${post._id}`}>
      <div className="h-full bg-white shadow-lg group transition-all md:hover:shadow-2xl md:hover:-translate-y-2">
        <div className="h-[300px]">
          {post.thumbnail?.url && (
            <Image
              src={post.thumbnail?.url}
              width={600}
              height={600}
              className="h-full"
            />
          )}
        </div>

        <div className="space-y-2 p-4 md:p-7">
          <h3 className="text-textmd md:text-textxl">{post.title}</h3>
          <p className="text-textsm md:text-textmd font-bold">
            {parseInt(post.videoUrl).toLocaleString()}₮
          </p>
          <Button className="font-bold">Detail</Button>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
