"use client";

import { MapPin, Star } from "lucide-react";
import Image from "../ui/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
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
import { Button } from "../ui/button";
import Link from "next/link";

const ExtraDetail = ({ ...post }: IPost) => {
  const attachments = post.images && [...post.images, post.thumbnail];

  return (
    <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-20">
      <Carousel>
        <CarouselContent>
          {attachments.map((attachment, index) => (
            <CarouselItem key={index}>
              <Image
                src={attachment.url}
                width={600}
                height={600}
                className="w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div>
        <div className="w-fit space-y-2">
          <h1 className="text-displayxs lg:text-displaymd">{post?.title}</h1>
        </div>

        <div className="flex flex-col gap-6 shadow-lg shaodw p-7 mt-10">
          <p
            className="text-textsm"
            dangerouslySetInnerHTML={{ __html: post?.content }}
          ></p>
        </div>
        <Link href="/contact" className="py-4">
          <Button className="w-full mt-10 py-4">Захиалах</Button>
        </Link>
      </div>
    </div>
  );
};
export default ExtraDetail;
