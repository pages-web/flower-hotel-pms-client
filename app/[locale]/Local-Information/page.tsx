"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const t = useTranslations("Meet");
  const tt = useTranslations("Header");
  const params = useParams();

  const locations = [
    {
      href: `/${params.locale}/optional-tour-2/`,
      img: "/images/-4606271830357144564_800_x_500.jpg",
      title: t("op"),
      desc: t("desc"),
    },
    {
      href: `/${params.locale}/optional-tour/`,
      img: "/images/-4606271830357144564_800_x_500.jpg",
      title: t("opt"),
      desc: t("descs"),
    },
  ];

  return (
    <div id="content" className="block">
      {/* Header Section */}
      <div className="relative h-[800px] md:h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{
            backgroundImage:
              'url("/images/-6719503348464027447_1920_x_1278.jpg")',
          }}
        />
        <div className="relative z-10 text-center text-white">
          <img
            src="/images/stamp-white.png"
            alt="Stamp"
            className="mx-auto mb-4 w-20 h-20 object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-bold">{tt("loc")}</h2>
        </div>
      </div>

      {/* Locations Section */}
      <section className="container mx-auto px-4 py-10 space-y-10">
        {locations.map((loc, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-6 items-center">
            {/* Image */}
            <a
              href={loc.href}
              className="block overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={loc.img}
                alt={loc.title}
                className="w-full h-65 object-cover"
              />
            </a>

            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                <a
                  href={loc.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {loc.title}
                </a>
              </h3>
              <p className="text-gray-600 mb-4">{loc.desc}</p>
              <a
                href={loc.href}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                {t("more")}
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
