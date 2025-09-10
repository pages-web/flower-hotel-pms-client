"use client";
import { useTranslations } from "next-intl";
import Image from "@/components/ui/image";
import ReserveSelectDate from "@/components/reserve-select-date/reserve-select-date";
import HotelDining from "@/components/dining/dining";
import Offer from "@/components/offers/offers";
import Gallery from "@/components/gallery/gallery";
import Discount from "@/components/discount/discount";
import Discover from "@/components/discover/discover";
import Trending from "@/components/trending/trending";
import Promo from "@/components/promo/promo";
import Location from "@/components/location/location";
import Trend from "@/components/trend-activities/trend";
import Rooms from "@/components/top-rooms/top-rooms";
import { pageOffers } from "@/components/offers/offerData";
import { useAtomValue } from "jotai";
import { currentConfigAtom } from "@/store/config";
import { useQuery } from "@apollo/client";
import { queries } from "@/sdk/graphql/cms";
import { IPost } from "@/types/cms";
import ScreenLoading from "@/components/screenLoading/screenLoading";

export default function HomePage() {
  // const t = useTranslations("HomePage")
  const { data, loading } = useQuery(queries.posts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      perPage: 10000,
    },
  });

  const rooms: IPost[] = data?.cmsPosts.filter(
    (post: IPost) => post.tagIds[0] === "gwNn-3QevRDYw0fkMh5ny"
  );

  const services: IPost[] = data?.cmsPosts.filter(
    (post: IPost) => post.tagIds[0] === "7cqjtUTEqwuL0R2nB9gyz"
  );

  const restaurants: IPost[] = data?.cmsPosts.filter(
    (post: IPost) => post.tagIds[0] === "MN2F0CRukGM5ui08xP6ko"
  );

  if (loading) {
    return <ScreenLoading />;
  }

  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden">
        <div className="min-h-screen flex flex-col justify-end container pt-10 pb-10 md:pb-12">
          <div className="space-y-6 md:mb-[84px]">
            <h1 className="text-[40px] md:text-[64px] text-white">
              Find your best staycation
            </h1>
            <ReserveSelectDate />
          </div>
        </div>
        <div className="h-[400px] md:h-[850px] w-full absolute -top-[84px] left-0 -z-10">
          <Image
            src="/images/-8654223224160323167_1050_x_500.png"
            width={2000}
            height={1500}
            quality={100}
            className="h-full w-full brightness-[.8] object-cover"
            alt="Hero background"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </div>
      <div className="space-y-20 lg:space-y-40 mt-10">
        <Rooms posts={rooms} />
        <Trend posts={services} />
        <Offer posts={restaurants} />
        <Location />
      </div>
    </div>
  );
}
