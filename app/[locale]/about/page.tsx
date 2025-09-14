"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("about");

  return (
    <div id="content" className="flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full">
        <Image
          src="/images/about.png"
          alt="About header"
          width={1050}
          height={500}
          priority
          className="w-full h-auto object-contain rounded-b-3xl shadow-lg"
        />
      </div>

      {/* Content Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16">
        <article className="w-full px-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("About Us")}
          </h2>

          {/* Main text */}
          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
            {t("bestt")}
            {t("180")}
            {t("ourr")}
          </p>
          {/* Sub texts */}
          {/* <div className="mt-8 text-base md:text-lg text-gray-600 space-y-6">
            <p className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition"></p>
            <p className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition"></p>
          </div> */}
        </article>
      </section>
    </div>
  );
}
