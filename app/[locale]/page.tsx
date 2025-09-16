"use client";
import { useTranslations } from "next-intl";
import Image from "@/components/ui/image";
import ReserveSelectDate from "@/components/reserve-select-date/reserve-select-date";
import Offer from "@/components/offers/offers";
import Location from "@/components/location/location";
import Trend from "@/components/trend-activities/trend";
import Rooms from "@/components/top-rooms/top-rooms";
import ScreenLoading from "@/components/screenLoading/screenLoading";
import { useQuery } from "@apollo/client";
import { queries } from "@/sdk/graphql/cms";
import { IPost } from "@/types/cms";
import { useState, useRef } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Zoom, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/effect-fade";

export default function HomePage() {
  const { data, loading } = useQuery(queries.posts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      perPage: 10000,
    },
  });

  // Auto-reverse autoplay
  const [isReversed, setIsReversed] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const rooms: IPost[] = data?.cmsPosts.filter(
    (post: IPost) => post.tagIds[0] === "gwNn-3QevRDYw0fkMh5ny"
  );
  const services: IPost[] = data?.cmsPosts.filter(
    (post: IPost) => post.tagIds[0] === "7cqjtUTEqwuL0R2nB9gyz"
  );
  const restaurants: IPost[] = data?.cmsPosts.filter(
    (post: IPost) => post.tagIds[0] === "MN2F0CRukGM5ui08xP6ko"
  );
  console.log("services :>> ", services);
  const t = useTranslations("restran");

  const heroImages = [
    {
      src: "/images/-8654223224160323167_1050_x_500.png",
      alt: "Hero background slide 1",
    },
    {
      src: "/images/bgfood.jpg",
      alt: "Hero background slide 2",
    },
  ];

  // Reverse autoplay logic
  const handleSlideChange = (swiper: SwiperType) => {
    const { activeIndex, slides } = swiper;

    if (activeIndex === slides.length - 1 && !isReversed) {
      setTimeout(() => {
        setIsReversed(true);
        swiper.autoplay.stop();
        swiper.autoplay.start();
      }, 6000);
    }

    if (activeIndex === 0 && isReversed) {
      setTimeout(() => {
        setIsReversed(false);
        swiper.autoplay.stop();
        swiper.autoplay.start();
      }, 6000);
    }
  };

  if (loading) {
    return <ScreenLoading />;
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="min-h-[60vh] md:min-h-screen flex flex-col justify-end container px-4 md:px-6 pb-6 md:pb-12 relative z-10">
          <div className="space-y-4 md:space-y-6 md:mb-[84px] text-center md:text-left">
            <h1 className="text-[22px] sm:text-[28px] md:text-[48px] lg:text-[64px] leading-tight text-white font-extrabold drop-shadow-xl">
              {t("find")}
            </h1>
          </div>
          <div>
            <ReserveSelectDate />
          </div>
        </div>

        {/* Hero Slider */}
        <div className="h-[240px] sm:h-[300px] md:h-[650px] lg:h-[850px] w-full absolute -top-[60px] md:-top-[84px] left-0 -z-10">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              reverseDirection: isReversed,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            effect="slide"
            speed={800}
            loop={false}
            modules={[Zoom, Pagination, Autoplay, EffectFade]}
            className="hero-swiper h-full w-full"
            onSlideChange={handleSlideChange}
            onSwiper={(swiper: SwiperType) => {
              swiperRef.current = swiper;
            }}
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.src}
                  width={1920}
                  height={1080}
                  quality={90}
                  className="h-full w-full object-cover brightness-[.7]"
                  alt={image.alt}
                  priority={index === 0}
                  sizes="100vw"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none z-10" />
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-8 sm:space-y-12 md:space-y-20 lg:space-y-40 mt-6 md:mt-10">
        <Rooms posts={rooms} />
        <Trend />
        <Offer />
        <Location />
      </div>
    </div>
  );
}
