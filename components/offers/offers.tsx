import { Button } from "../ui/button";
import { IPost } from "@/types/cms";
import Image from "../ui/image";

interface OfferProps {
  offers?: Array<{
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  }>;
  title?: string;
  description?: string;
  posts?: IPost[];
}

export default function Offer({
  offers,
  title,
  description,
  posts,
}: OfferProps) {
  return (
    <div className="container py-8">
      <h2 className="text-displaysm md:text-displaymd font-normal mb-8">
        Restaurant & Bar
      </h2>

      <div className="space-y-16">
        {posts?.map(
          (post, index) =>
            index < 3 && (
              <section
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12`}
              >
                <div className="md:w-1/2">
                  <Image
                    src={post.thumbnail.url}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-[600px] object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center gap-4">
                  <h2 className="text-displaymd font-semibold">{post.title}</h2>
                  <p className="text-textlg text-black/40">{post.excerpt}</p>
                  <Button className="w-fit" variant={"outline"}>
                    View more
                  </Button>
                </div>
              </section>
            )
        )}
      </div>
    </div>
  );
}
