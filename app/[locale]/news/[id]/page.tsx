"use client";
import ProductDetail from "@/components/product-detail/product-detail";
import { BreadcrumbsLayout } from "../../breadcrumbs-layout";
import { type Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { IPageProps } from "@/types";
import { useQuery } from "@apollo/client";
import { queries } from "@/sdk/graphql/cms";
import { IPost } from "@/types/cms";
import ScreenLoading from "@/components/screenLoading/screenLoading";
import ExtraDetail from "@/components/extra-detail/extra-detail";
import { usePostDetail } from "@/sdk/queries/cms";
import { useLocale } from "next-intl";

const RoomDetail = ({ params }: IPageProps) => {
  const locale = useLocale();
  const slug = params.id;
  const { post, loading } = usePostDetail(slug, locale);
  console.log("post :>> ", post);
  if (loading) {
    return <ScreenLoading />;
  }
  return (
    <div className="container min-h-screen py-20">
      <div>
        <div className="w-fit space-y-2">
          <h1 className="text-displayxs lg:text-displaymd">{post?.title}</h1>
        </div>

        <div className="flex flex-col gap-6 shadow-lg shaodw p-7 mt-10">
          <p
            className="text-textsm"
            dangerouslySetInnerHTML={{ __html: post?.content }}
          ></p>
        </div>
      </div>
    </div>
  );
};
export default RoomDetail;
