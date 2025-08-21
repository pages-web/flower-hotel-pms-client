"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const t = useTranslations("Meet");
  const tt = useTranslations("Header");
  const params = useParams();

  // Special offers list
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
        <div className="space-y-10">
          {offers.map((offer, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-6 items-center">
              {/* Image */}
              <a
                href={offer.href}
                className="block overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform"
              >
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-full h-64 object-cover"
                />
              </a>

              {/* Text */}
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  <a
                    href={offer.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {offer.title}
                  </a>
                </h4>
                <p className="text-gray-600 mb-4">{offer.text}</p>
                <a
                  href={offer.href}
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  More information
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
