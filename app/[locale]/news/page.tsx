"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const t = useTranslations("Header");
  const params = useParams();

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
          <h2 className="text-3xl md:text-4xl font-bold">{t("news")}</h2>
        </div>
      </div>

      {/* News Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="space-y-10">
          {/* Item 1 */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <a
              href={`/${params.locale}/welcome-to-j-karaoke/`}
              className="block overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform"
            >
              <img
                alt="Welcome to J Karaoke"
                src="/images/2631542189143840594_1050_x_500.jpg"
                className="w-full h-64 object-cover"
              />
            </a>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                <a
                  href={`/${params.locale}/welcome-to-j-karaoke/`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {t("welc")}
                </a>
              </h4>
              <p className="text-gray-600 mb-4">{t("j")}</p>
              <a
                href={`/${params.locale}/welcome-to-j-karaoke/`}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                {t("information")}
              </a>
            </div>
          </div>

          {/* Item 2 */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <a
              href={`/${params.locale}/eco-friendly-hotel/`}
              className="block overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform"
            >
              <img
                alt="Eco-friendly hotel"
                src="/images/-8654223224160323167_1050_x_500.png"
                className="w-full h-64 object-cover"
              />
            </a>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                <a
                  href={`/${params.locale}/eco-friendly-hotel/`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {t("eco")}
                </a>
              </h4>
              <p className="text-gray-600 mb-4">{t("in")}</p>
              <a
                href={`/${params.locale}/eco-friendly-hotel/`}
                className="inline-block bg-white text-red px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                {t("information")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
