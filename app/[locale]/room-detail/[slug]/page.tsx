"use client";
import ProductDetail from "@/components/product-detail/product-detail";
import { BreadcrumbsLayout } from "../../breadcrumbs-layout";
import { type Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { IPageProps } from "@/types";
import { useQuery } from "@apollo/client";
import { queries } from "@/sdk/graphql/cms";
import { IPost } from "@/types/cms";
import ScreenLoading from "@/components/screenLoading/screenLoading";

const RoomDetail = ({ params }: IPageProps) => {
  const slug = params.slug;

  const { data, loading } = useQuery(queries.postDetail, {
    variables: { id: slug },
  });

  const post: IPost = data?.cmsPost;

  if (loading) {
    return <ScreenLoading />;
  }
  return (
    <div className="container min-h-screen py-20">
      <ProductDetail {...post} />
    </div>
  );
};
export default RoomDetail;
