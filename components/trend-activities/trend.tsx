"use client";
import { Link } from "@/i18n/routing";
import Image from "../ui/image";
import { IPost } from "@/types/cms";
import { useTranslations, useLocale } from "next-intl";
import { usePosts } from "@/sdk/queries/cms";

export default function Trend() {
  const locale = useLocale();
  const { posts } = usePosts({
    language: locale,
    tagIds: ["7cqjtUTEqwuL0R2nB9gyz"],
  });
  const t = useTranslations("restran");

  if (!posts || posts.length === 0) {
    return (
      <div className="container py-8">
        <h2 className="text-displaysm md:text-displaymd font-normal mb-8">
          {t("services")}
        </h2>
        <p className="text-center text-gray-500">
          Одоогоор үйлчилгээний мэдээлэл алга байна.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h2 className="text-displaysm md:text-displaymd font-normal mb-8">
        {t("services")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Link
            key={post._id || index}
            href={`/services/${post._id}`}
            className={index === 1 ? "lg:col-span-2" : ""}
          >
            <div className="h-full bg-white group transition-all rounded-xl shadow hover:shadow-lg">
              <div className="h-[200px] overflow-hidden flex items-center">
                <Image
                  src={post.thumbnail?.url || "/placeholder.jpg"}
                  width={600}
                  height={600}
                  alt={post.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <div className="space-y-2 py-7 px-4">
                <h3 className="text-textmd md:text-textxl font-bold line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-textsm md:text-textmd line-clamp-4 text-black/60">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
