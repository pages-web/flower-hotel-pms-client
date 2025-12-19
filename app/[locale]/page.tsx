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
import { useState, useRef, useEffect } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Zoom, Pagination, Autoplay, EffectFade } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/effect-fade";
import { MapPin, RefreshCw, Thermometer, Wind } from "lucide-react";

export default function HomePage({ params }: { params: { locale: string } }) {
  const { data, loading } = useQuery(queries.posts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      perPage: 10000,
      language: params.locale,
    },
  });
  const [weather, setWeather] = useState<any>(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [isReversed, setIsReversed] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useTranslations("restran");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "54527fb2610662b49f397ffb7c76caf3";
        const city = "Ulaanbaatar";
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=mn`
        );
        const data = await res.json();
        setWeather(data);
      } catch (error) {
        console.error("Цаг агаар дуудах алдаа:", error);
      } finally {
        setLoadingWeather(false);
      }
    };

    fetchWeather();
  }, []);

  const rooms: IPost[] = data?.cmsPosts.filter(
    (post: IPost) => post.tagIds[0] === "gwNn-3QevRDYw0fkMh5ny"
  );

  const heroImages = [
    { src: "/images/-8654223224160323167_1050_x_500.png", alt: "Hero 1" },
    { src: "/images/bgfood.jpg", alt: "Hero 2" },
  ];

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
  const MainBannerText = data?.cmsPosts?.find((item: any) =>
    item?.categoryIds?.includes("-oQTWGnVC3DtLN_dK1jZa")
  );
  if (loading) return <ScreenLoading />;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="min-h-[60vh] md:min-h-screen flex flex-col justify-end container px-4 md:px-6 pb-6 md:pb-12 relative z-10">
          <div className="space-y-4 md:space-y-6 md:mb-[84px] text-center md:text-left">
            <h1 className="text-[22px] sm:text-[28px] md:text-[48px] lg:text-[64px] leading-tight mb-20 text-white font-extrabold drop-shadow-xl">
              {MainBannerText?.title}
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
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={false}
            effect="slide"
            speed={800}
            loop={false}
            modules={[Zoom, Pagination, Autoplay, EffectFade]}
            className="hero-swiper h-full w-full"
            onSlideChange={handleSlideChange}
            onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
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

          {/* Weather Section (absolute дээр байрлана) */}
          <div className="absolute top-20 right-1 -translate-x-1/2 z-20 w-full max-w-[320px] sm:max-w-sm">
            <div className="bg-white/30 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base sm:text-lg font-bold text-black">
                  Одоогийн цаг агаар
                </h2>
                <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 cursor-pointer hover:text-blue-600 hover:rotate-180 transition-all duration-300" />
              </div>

              <div className="flex items-center mb-4">
                <MapPin className="w-4 h-4 text-red-500 mr-2" />
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  Улаанбаатар, Монгол
                </h4>
              </div>

              {loadingWeather ? (
                <div className="flex items-center justify-center py-4">
                  <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 animate-spin" />
                  <p className="text-gray-500 text-sm">Ачааллаж байна...</p>
                </div>
              ) : weather?.main ? (
                <div className="space-y-2 sm:space-y-3">
                  <div className=" backdrop-blur-md rounded-lg p-3 ">
                    <div className="flex items-center">
                      <Thermometer className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" />
                      <div>
                        <p className="text-xs text-white mb-1">Температур</p>
                        <p className="text-lg sm:text-xl font-bold text-gray-800">
                          {Math.round(weather.main.temp)}°C
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" backdrop-blur-md rounded-lg p-3 ">
                    <div className="flex items-center">
                      <Wind className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2" />
                      <div>
                        <p className="text-xs text-white mb-1">Салхи</p>
                        <p className="text-base sm:text-lg font-semibold text-gray-800">
                          {weather.wind.speed} м/с
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none z-10" />
        </div>
      </div>

      {/* Other Sections */}
      <div className="space-y-8 sm:space-y-12 md:space-y-20 lg:space-y-40 mt-10">
        <Rooms posts={rooms} />
        <Trend />
        <Offer />
        <Location />
      </div>
    </div>
  );
}
