"use client";

import { Button } from "../ui/button";
import { IPost } from "@/types/cms";
import Image from "../ui/image";
import { useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { usePosts } from "@/sdk/queries/cms";
import { useTranslations } from "next-intl";

interface OfferProps {
  posts?: IPost[]; // Гаднаас дамжуулж болох массив
  offers?: Array<{
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  }>; // pageOffers ашиглах боломжтой
  title?: string;
  description?: string;
}

export default function Offer({
  posts,
  offers,
  title,
  description,
}: OfferProps) {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("restran");

  // Гаднаас ирсэн posts байхгүй бол дотоодоос fetch хийнэ
  const { posts: fetchedPosts } = usePosts({
    language: locale,
    tagIds: ["MN2F0CRukGM5ui08xP6ko"],
  });

  const displayPosts = posts ?? fetchedPosts;

  // Хэрэв offers дамжуулсан бол түүнийг харуулна
  if (offers && offers.length > 0) {
    return (
      <div className="container py-8">
        {title && (
          <h2 className="text-displaysm md:text-displaymd font-normal mb-8">
            {title}
          </h2>
        )}
        {description && <p className="mb-12 text-black/60">{description}</p>}

        <div className="space-y-16">
          {offers.map((offer, index) => (
            <section
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12`}
            >
              <div className="md:w-1/2">
                <Image
                  src={offer.imageSrc}
                  alt={offer.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-[600px] object-cover rounded-lg"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center gap-4">
                <h2 className="text-displaymd font-semibold">{offer.title}</h2>
                <p className="text-textlg text-black/40">{offer.description}</p>
                <Button
                  className="w-fit"
                  variant="outline"
                  onClick={() => console.log("View more clicked")}
                >
                  {t("View more")}
                </Button>
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }

  // Хэрэв posts байхгүй бол мэдээлэл алга гэж харуулна
  if (!displayPosts || displayPosts.length === 0) {
    return (
      <div className="container py-8">
        <h2 className="text-displaysm md:text-displaymd font-normal mb-8">
          {t("restauran")}
        </h2>
        <p className="text-center text-gray-500">
          Одоогоор мэдээлэл байхгүй байна.
        </p>
      </div>
    );
  }
  // Posts-ийг харуулах хэсэг
  return (
    <div className="container py-8">
      {title && (
        <h2 className="text-displaysm md:text-displaymd font-normal mb-8">
          {title}
        </h2>
      )}
      {description && <p className="mb-12 text-black/60">{description}</p>}

      <div className="space-y-16">
        {displayPosts.slice(0, 3).map((post, index) => (
          <section
            key={post._id || index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 md:gap-12`}
          >
            <div className="md:w-1/2">
              <Image
                src={post.thumbnail?.url || "/placeholder.jpg"}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h2 className="text-displaymd font-semibold">{post.title}</h2>
              <p className="text-textlg text-black/40">{post.excerpt}</p>
              <Button
                className="w-fit"
                variant="outline"
                onClick={() => router.push(`/dining/${post._id}`)}
              >
                {t("View more")}
              </Button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
