"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const t = useTranslations("Meet");
  const tt = useTranslations("Header");
  const params = useParams();

  const offers = [
    {
      href: `/${params.locale}/happy-new-year-2017/`,
      img: "/images/-4526759844500056810_1050_x_450.jpg",
      title: t("happy"),
      text: t("txt"),
    },
    {
      href: `/${params.locale}/happy-valentines-day/`,
      img: "/images/-992067526353350923_950_x_400.jpg",
      title: t("val"),
      text: t("txtt"),
    },
  ];

  return (
    <div id="content" className="block">
      {/* Header Section */}
      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: 'url("/images/download-3.jpg")' }}
        />
        <div className="relative z-10 text-center text-white">
          <img
            src="/images/stamp-white.png"
            alt="Stamp"
            className="mx-auto mb-4 w-20 h-20 object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-bold">{tt("spe")}</h2>
        </div>
      </div>

      {/* Offers Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Link key={index} href={offer.href}>
              <div className="bg-white shadow-lg rounded-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
                {/* Image */}
                <div className="w-full h-60 md:h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={offer.img}
                    alt={offer.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="p-5 md:p-7 flex flex-col justify-between flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {offer.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-gray-500 line-clamp-3">
                    {offer.text}
                  </p>
                  <span className="mt-auto inline-block bg-primary text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-primary-dark transition">
                    {t("Detail")}
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
