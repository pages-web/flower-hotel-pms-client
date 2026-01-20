"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { useAtom } from "jotai";
import { reserveDateAtom, reserveGuestAndRoomAtom } from "@/store/reserve";
import { useToast } from "@/hooks/others/use-toast";
import { useTranslations } from "next-intl";
const ReserveButton = ({
  arrow,
  path,
  className,
}: {
  arrow?: boolean;
  path?: string;
  className?: string;
}) => {
  const formatDate = (date: Date | undefined) => {
    return date instanceof Date ? date.toISOString().split("T")[0] : "";
  };
  const locale = useParams().locale;
  const [date] = useAtom(reserveDateAtom);
  const [reserveGuestAndRoom] = useAtom(reserveGuestAndRoomAtom);
  const { toast } = useToast();
  const ToastHandler = () => {
    if (!date?.to || !date.from) {
      return toast({
        variant: "destructive",
        title: "Pick a date",
      });
    }
    if (!reserveGuestAndRoom?.room || reserveGuestAndRoom?.room === 0) {
      return toast({
        variant: "destructive",
        title: "Add a room",
      });
    }
    if (!reserveGuestAndRoom?.adults || reserveGuestAndRoom?.adults === 0) {
      return toast({
        variant: "destructive",
        title: "Add a guests",
      });
    }
  };
  const t = useTranslations("restran");
  return (
    <Link
      target="_blank"
      href={
        !date?.from ||
        !date?.to ||
        !reserveGuestAndRoom?.room ||
        !reserveGuestAndRoom?.adults ||
        reserveGuestAndRoom?.room === 0 ||
        reserveGuestAndRoom?.adults === 0
          ? ""
          : `https://booking.flower-hotel.mn/room-rates?arrivalDate=${formatDate(date.from)}&departureDate=${formatDate(date.to)}`
      }
      locale={locale === "en" ? "en" : "mn"}
      className={className}
    >
      <Button
        variant={"secondary"}
        className="font-bold"
        size={"lg"}
        onClick={() => ToastHandler()}
      >
        {t("Reserve")}
        {arrow && <ArrowRight className="ml-2 w-5 h-5" />}
      </Button>
    </Link>
  );
};
export default ReserveButton;
