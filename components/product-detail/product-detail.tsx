"use client";

import Accommodation from "@/app/[locale]/accommodation/page";
import ProductDetailImages from "./product-detail-images";
import { IPost } from "@/types/cms";
import { useTranslations } from "next-intl";

const ProductDetail = ({ ...post }: IPost) => {
  const attachments = post.images && [...post.images, post.thumbnail];
  const t = useTranslations("restran");

  // Одоогийн өдөр, сар авах
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0"); // 2 оронтой болгох
  const month = today.toLocaleString("en-US", { month: "short" }); // Jan, Feb, May гэх мэт

  const currentDate = `${day}/${month}`;

  return (
    <div className="container min-h-screen py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-900">{post?.title}</h1>
          </div>

          {/* Images */}
          <ProductDetailImages attachments={attachments} />

          {/* Overview */}
          <div className="flex flex-col gap-4 rounded-2xl shadow-md bg-white p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {t("Overview")}
            </h3>
            <p
              className="text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post?.content }}
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-full">
          <h3 className="text-xl font-semibold mb-5 border-b pb-2">
            {t("ab")}
          </h3>
          <ul className="space-y-6">
            {/* Summer Price */}
            <li className="p-5 rounded-2xl shadow-md bg-gray-50">
              <div className="flex items-center justify-between">
                <strong className="text-lg">Зуны үнэ:</strong>
                <span className="text-sm text-gray-500">{currentDate}</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-black">₮185,000</h4>
                  <span className="text-sm text-gray-600">{t("single")}</span>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-black">₮220,000</h4>
                  <span className="text-sm text-gray-600">{t("Double")}</span>
                </div>
              </div>
              <p className="text-xs italic text-gray-500 mt-3">Нэг өдөр</p>
            </li>

            {/* Winter Price */}
            <li className="p-5 rounded-2xl shadow-md bg-gray-50">
              <div className="flex items-center justify-between">
                <strong className="text-lg">Өвлийн үнэ:</strong>
                <span className="text-sm text-gray-500">{currentDate}</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-black">₮140,000</h4>
                  <span className="text-sm text-gray-600">{t("single")}</span>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-black">₮165,000</h4>
                  <span className="text-sm text-gray-600">{t("Double")}</span>
                </div>
              </div>
              <p className="text-xs italic text-gray-500 mt-3">Нэг өдөр</p>
            </li>
          </ul>

          {/* Info Section */}
          <div className="mt-6 bg-gray-50 p-4 rounded-xl text-sm text-gray-600 flex items-start gap-3">
            <span className="text-gray-500 text-lg">ℹ️</span>
            <p>{t("sity")}</p>
          </div>
        </div>
      </div>
      <Accommodation />
    </div>
  );
};

export default ProductDetail;
