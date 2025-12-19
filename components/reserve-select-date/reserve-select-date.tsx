"use client";

import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { Bed, CalendarIcon, MapPin, Users } from "lucide-react";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";
import ReserveButton from "../../containers/reserve/reserve-button";
import { useAtom } from "jotai";
import { reserveDateAtom, reserveGuestAndRoomAtom } from "@/store/reserve";
import DateForm from "@/containers/reserve/date-form";
import RoomForm from "@/containers/reserve/room-form";
import GuestForm from "@/containers/reserve/guest-form";
import { useTranslations } from "next-intl";
export const ChildrenWithTitle = ({
  children,
  title,
}: React.PropsWithChildren & { title: string }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

const calculateRecommendedRooms = (adults: number, children: number) => {
  // Recommended: max 2 adults or 1 adult + 1 child per room
  const totalGuests = adults + children;
  return Math.max(1, Math.ceil(totalGuests / 2));
};

const ReserveSelectDate = () => {
  const [date] = useAtom(reserveDateAtom);
  const [reserveGuestAndRoom, setReserveGuestAndRoom] = useAtom(
    reserveGuestAndRoomAtom
  );
  const [showRecommendation, setShowRecommendation] = useState(false);
  const { adults = 0, children = 0, room = 1 } = reserveGuestAndRoom || {};
  const t = useTranslations("restran");

  const recommendedRooms = calculateRecommendedRooms(adults, children);
  const needsMoreRooms = recommendedRooms > room && adults + children > 0;

  const handleRoomSuggestion = () => {
    setReserveGuestAndRoom((prev) => ({
      ...prev,
      room: recommendedRooms,
    }));
    setShowRecommendation(false);
  };
  return (
    <div className="w-full flex flex-col p-6 gap-8 rounded-[12px] bg-white border shadow-lg">
      <div className="w-full flex flex-col lg:flex-row justify-between items-end gap-6 ">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <ChildrenWithTitle title={t("checkin")}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="check-in"
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal w-full",
                    !date?.from && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 min-h-5 h-5 w-5 min-w-5" />
                  {date?.from ? (
                    format(date.from, "PPP")
                  ) : (
                    <span>{t("Select check-in")}</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="min-w-[300px] w-fit p-5" align="start">
                <DateForm mode="checkin" />
              </PopoverContent>
            </Popover>
          </ChildrenWithTitle>

          <ChildrenWithTitle title={t("checkout")}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="check-out"
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal w-full",
                    !date?.to && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 min-h-5 h-5 w-5 min-w-5" />
                  {date?.to ? (
                    format(date.to, "PPP")
                  ) : (
                    <span>{t("Select check-out")}</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="min-w-[300px] w-fit p-5" align="start">
                <DateForm mode="checkout" />
              </PopoverContent>
            </Popover>
          </ChildrenWithTitle>
        </div>

        <ChildrenWithTitle title={t("rooms")}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <Bed className="mr-2 h-4 w-4" />
                {room ? (
                  room + `${room > 1 ? " rooms" : " room"}`
                ) : (
                  <span>Add room</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="min-w-[300px] p-5" align="start">
              <RoomForm />
            </PopoverContent>
          </Popover>
        </ChildrenWithTitle>

        <ChildrenWithTitle title={t("Guest")}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <Users className="mr-2 h-4 w-4" />
                {!!adults && adults + `${adults > 1 ? " Adults" : " Adult"}`}
                {!!adults && !!children && ", "}
                {!!children &&
                  children + `${children > 1 ? " Children" : " Child"}`}
                {!children && !adults && "Add guests"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="min-w-[300px] p-5 " align="start">
              <GuestForm />
            </PopoverContent>
          </Popover>
        </ChildrenWithTitle>
        <ReserveButton arrow className="hidden lg:block" />
      </div>

      {needsMoreRooms && !showRecommendation && (
        <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-700 flex justify-between items-center">
          <span>
            {t("We recommend")} {recommendedRooms}{" "}
            {recommendedRooms > 1 ? t("rooms") : t("room")} {t("for")}{" "}
            {adults + children} {t("guests")}.
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-700 hover:bg-blue-100"
            onClick={() => setShowRecommendation(true)}
          >
            {t("View more")}
          </Button>
        </div>
      )}

      {showRecommendation && (
        <div className="bg-blue-50 p-3 rounded-lg text-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{t("Room Recommendation")}</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-700 hover:bg-blue-100"
              onClick={() => setShowRecommendation(false)}
            >
              {t("Close")}
            </Button>
          </div>
          <p className="mb-2">
            {t("For")}{" "}
            <strong>
              {adults + children} {t("guests")}
            </strong>{" "}
            ({adults} {t("adults")} + {children} {t("children")}),
            {t("we recommend")}{" "}
            <strong>
              {recommendedRooms} {recommendedRooms > 1 ? t("rooms") : t("room")}
            </strong>
            .
          </p>
          <Button size="sm" className="w-full" onClick={handleRoomSuggestion}>
            {t("Select")} {recommendedRooms}{" "}
            {recommendedRooms > 1 ? t("rooms") : t("room")}
          </Button>
        </div>
      )}

      <ReserveButton arrow className="lg:hidden self-end" />
    </div>
  );
};
export default ReserveSelectDate;
