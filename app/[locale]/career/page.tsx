"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("career");

  return (
    <div id="content" className="flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px]">
        <Image
          src="/images/download-3.jpg"
          alt="Career Header"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Image
            src="/images/stamp-white.png"
            alt="Flower Hotel Logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            {t("Career")}
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <section className="w-full bg-gray-50 py-12">
        <article className="max-w-4xl mx-auto px-6 text-gray-800 leading-relaxed">
          <p className="mb-6 text-lg">{t("mongolia")}</p>

          <h3 className="text-xl font-semibold mb-4">Нээлттэй ажлын байр</h3>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>Давхарын жижүүр</li>
            <li>Зочин хүлээн авах</li>
            <li>Мужаан</li>
            <li>Зөөгч</li>
          </ol>
          <p className="mb-4">
            Ажилд хүсэл болон нээлттэй ажилын байрны талаар доорх анкетаар{" "}
            <span className="text-blue-700 font-medium">
              mn_flowerhotel@yahoo.co.jp
            </span>{" "}
            хаягаар и-мэйлээр илгээх болон{" "}
            <span className="font-medium">11-458330</span> утсаар лавлана уу.
          </p>

          <h3 className="text-xl font-semibold mb-4">
            Бүрдүүлэх үндсэн материал
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>1 хувь цээж зураг (сүүлийн 3 сард авхуулсан)</li>
            <li>Диплом, мэргэжлийн үнэмлэхний хуулбар</li>
            <li>Иргэний үнэмлэхний хуулбар</li>
            <li>Цагдаагийн тодорхойлолт</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
