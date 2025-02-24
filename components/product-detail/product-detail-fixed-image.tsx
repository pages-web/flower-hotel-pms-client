import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Image from "../ui/image";
import { ResizablePanel } from "../ui/resizable";

const FixedImage = ({
  src,
  defaultSize,
}: {
  src: string;
  defaultSize?: number;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {defaultSize ? (
          <ResizablePanel
            defaultSize={defaultSize}
            className="overflow-hidden rounded-sm flex items-center"
          >
            <Image
              src={src || "/images/image1.png"}
              width={1000}
              height={600}
              quality={100}
              className="h-full w-full"
            />
          </ResizablePanel>
        ) : (
          <Image
            src={src || "/images/image1.png"}
            width={1000}
            height={600}
            quality={100}
            className="h-full w-full"
          />
        )}
      </DialogTrigger>
      <DialogContent className="p-10">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={src || "/images/image1.png"}
            width={1000}
            height={600}
            quality={100}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FixedImage;
