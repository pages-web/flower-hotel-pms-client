"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("Meet");
  const tt = useTranslations("Header");
  const params = useParams();
  const locale = params?.locale as string;

  const locations = [
    {
      href: `/${locale}/optional-tour-2/`,
      img: "/images/-4606271830357144564_800_x_500.jpg",
      title: t("op"),
      desc: t("desc"),
    },
    {
      href: `/${locale}/optional-tour/`,
      img: "/images/-4606271830357144564_800_x_500.jpg",
      title: t("opt"),
      desc: t("descs"),
    },
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold">{tt("loc")}</h2>
        </div>
      </div>

      {/* Locations Section */}
      <section className="container mx-auto px-4 py-10 space-y-10">
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc, index) => (
            <Link key={index} href={loc.href}>
              <div className="bg-white shadow-lg rounded-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
                {/* Image */}
                <div className="w-full h-64 md:h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={loc.img}
                    alt={loc.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text Below Image */}
                <div className="p-5 md:p-7 flex flex-col justify-between flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">
                    {loc.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{loc.desc}</p>
                  <span className="mt-auto inline-block bg-primary text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-primary-dark transition">
                    {t("more")}
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
