"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("Header");
  const params = useParams();
  const locale = params?.locale as string;

  const newsItems = [
    {
      href: `/${locale}/eco-friendly-hotel/`,
      img: "/images/-8654223224160323167_1050_x_500.png",
      title: t("eco"),
      text: t("in"),
    },
    // Дахин нэмэлт news item-уудыг энд нэмэх боломжтой
  ];

  return (
    <div id="content" className="block">
      {/* Header Section */}
      <div className="relative h-[300px] md:h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: 'url("/images/download-3.jpg")' }}
        />
        <div className="relative z-10 text-center text-white">
          <Image
            src="/images/stamp-white.png"
            alt="Stamp"
            width={80}
            height={80}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-bold">{t("news")}</h2>
        </div>
      </div>

      {/* News Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="bg-white shadow-lg rounded-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
                {/* Image */}
                <div className="w-full h-64 md:h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="p-5 md:p-7 flex flex-col justify-between flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-gray-500 line-clamp-3 mb-4">
                    {item.text}
                  </p>
                  <span className="mt-auto inline-block bg-primary text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-primary-dark transition">
                    {t("information")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
