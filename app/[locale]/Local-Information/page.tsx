"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePostLists } from "@/sdk/queries/cms";

export default function LocalInformation() {
  const t = useTranslations("restran");
  const tt = useTranslations("Header");
  const locale = useLocale();

  // ✅ зөв destructure — error-г авсангүй
  const { postList, loading } = usePostLists({
    categoryIds: ["I8xunbl7dgdxVqkFzBgRT"],
  });

  return (
    <div id="content" className="block">
      {/* Header Section */}
      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{
            backgroundImage:
              'url("/images/-6719503348464027447_1920_x_1278.jpg")',
          }}
        />
        <div className="relative z-10 text-center text-white">
          <Image
            src="/images/stamp-white.png"
            alt="Stamp"
            width={80}
            height={80}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("Local Information")}
          </h2>
        </div>
      </div>

      {/* Locations Section */}
      <section className="container mx-auto px-4 py-10">
        {loading && (
          <p className="text-center text-gray-500">{t("Loading")}...</p>
        )}
        {!loading && postList?.posts.length === 0 && (
          <p className="text-center text-gray-500">{t("No data found")}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postList?.posts?.map((item: any, index: number) => (
            <Link key={index} href={`/${locale}/news/${item._id}`}>
              <div className="bg-white shadow-lg rounded-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
                {/* Image */}
                <div className="w-full h-60 md:h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={`https://flowerhotel.api.erxes.io/api/read-file?key=${item.thumbnail?.url}`}
                    alt={item.title || "News"}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="p-5 md:p-7 flex flex-col justify-between flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-gray-500 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Button className="mt-auto bg-primary text-white hover:bg-primary-dark font-semibold">
                    {t("Detail")}
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
