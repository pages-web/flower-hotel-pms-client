"use client";

import { MapPin, Star } from "lucide-react";
import Image from "../ui/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProductDetailHeader from "./product-detail-header";
import ProductDetailImages from "./product-detail-images";
import ProductCardRating from "./product-detail-rating";
import ProductDetailDescription from "./product-detail-description";
import { IPost } from "@/types/cms";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  CarouselNext,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "../ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import FixedImage from "./product-detail-fixed-image";

const ProductDetail = ({ ...post }: IPost) => {
  const attachments = post.images && [...post.images, post.thumbnail];

  return (
    <div>
      <div className="w-full flex flex-col gap-10">
        <div className="w-fit space-y-2">
          <h1 className="text-displaymd">{post?.title}</h1>
        </div>
        <ProductDetailImages attachments={attachments} />

        <div className="flex flex-col gap-6 shadow-lg shaodw p-7">
          <h3 className="text-displaysm">Overview</h3>
          <p
            className="text-textsm"
            dangerouslySetInnerHTML={{ __html: post?.content }}
          ></p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
