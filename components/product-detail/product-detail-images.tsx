import Image from "@/components/ui/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { IAttachment } from "@/types/products";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import FixedImage from "./product-detail-fixed-image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

const ProductDetailImages = ({
  attachments,
}: {
  attachments: IAttachment[];
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <div className="lg:hidden">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {attachments.map((attachment, index) => (
              <CarouselItem key={index} className="aspect-square overflow-hidden rounded-sm">
                <FixedImage src={attachment.url} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="hidden lg:block">
        {attachments.length >= 4 && (
          <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg space-x-3 max-h-[500px]"
          >
            <FixedImage defaultSize={50} src={attachments[0].url} />

            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical" className="space-y-3">
                <FixedImage defaultSize={50} src={attachments[1].url} />

                <ResizablePanel defaultSize={50}>
                  <ResizablePanelGroup
                    direction="horizontal"
                    className="space-x-3"
                  >
                    {attachments.slice(2, 4).map((attachment, index) => (
                      <FixedImage
                        key={index}
                        defaultSize={50}
                        src={attachment.url}
                      />
                    ))}
                  </ResizablePanelGroup>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
        {attachments.length === 3 && (
          <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg space-x-3 max-h-[500px]"
          >
            <FixedImage defaultSize={50} src={attachments[0].url} />

            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical" className="space-y-3">
                <FixedImage defaultSize={50} src={attachments[1].url} />
                <FixedImage defaultSize={50} src={attachments[2].url} />
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
        {attachments.length === 2 && (
          <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg space-x-3 max-h-[500px]"
          >
            <FixedImage defaultSize={50} src={attachments[0].url} />
            <FixedImage defaultSize={50} src={attachments[1].url} />
          </ResizablePanelGroup>
        )}
        {attachments.length === 1 && (
          <div className="max-h-[700px] rounded-sm overflow-hidden flex items-center">
            <FixedImage src={attachments[0].url} />
          </div>
        )}
      </div>
    </>
  );
};
export default ProductDetailImages;
