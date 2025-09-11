// Option 1: Using Swiper's built-in reverse direction with state management
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
import { useState, useRef, useEffect } from "react";

// Import Swiper React components and types
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

// Import required modules
import {
  Zoom,
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
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

  // Auto-reverse functionality state
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

  // Auto-reverse logic with proper typing
  const handleSlideChange = (swiper: SwiperType) => {
    const { activeIndex, slides } = swiper;

    // Check if we've reached the end and not currently reversing
    if (activeIndex === slides.length - 1 && !isReversed) {
      setTimeout(() => {
        setIsReversed(true);
        swiper.autoplay.stop();
        swiper.autoplay.start();
      }, 6000); // Wait for the current slide duration
    }

    // Check if we've reached the beginning while reversing
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
      <div className="relative overflow-hidden">
        <div className="min-h-screen flex flex-col justify-end container pb-10 md:pb-12 relative z-10">
          <div className="space-y-6 md:mb-[84px]">
            <h1 className="text-[40px] md:text-[64px] text-white font-bold drop-shadow-lg">
              {t("find")}
            </h1>
            <ReserveSelectDate />
          </div>
        </div>

        {/* Enhanced Hero Image Slider with Auto-Reverse */}
        <div className="h-[400px] md:h-[850px] w-full absolute -top-[84px] left-0 -z-10">
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                "--swiper-pagination-bullet-inactive-color":
                  "rgba(255, 255, 255, 0.4)",
                "--swiper-navigation-size": "28px",
                "--swiper-pagination-bullet-size": "12px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              } as React.CSSProperties
            }
            spaceBetween={0}
            slidesPerView={1}
            zoom={{
              maxRatio: 3,
              minRatio: 1,
              toggle: true,
            }}
            navigation={{
              enabled: true,
              hideOnClick: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            // Auto-reverse autoplay configuration
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: isReversed, // Dynamic reverse based on state
            }}
            effect="slide"
            speed={800}
            loop={false} // Disable loop for proper reverse functionality
            touchRatio={1.5}
            threshold={10}
            longSwipesRatio={0.25}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            mousewheel={{
              enabled: false,
            }}
            modules={[Zoom, Navigation, Pagination, Autoplay, EffectFade]}
            className="hero-swiper h-full w-full"
            onSlideChange={handleSlideChange}
            onSwiper={(swiper: SwiperType) => {
              swiperRef.current = swiper;
            }}
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="swiper-zoom-container h-full w-full relative">
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <Image
                      src={image.src}
                      width={1920}
                      height={1080}
                      quality={95}
                      className={`
                        h-full w-full 
                        brightness-[.75] 
                        object-cover 
                        object-center
                        transition-all 
                        duration-500 
                        hover:brightness-[.85]
                        scale-100
                        hover:scale-105
                      `}
                      alt={image.alt}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center center",
                        minHeight: "100%",
                        minWidth: "100%",
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none z-10" />
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
