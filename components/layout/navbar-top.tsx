"use client";
import { Link, useRouter } from "@/i18n/routing";
import { Separator } from "../ui/separator";
import Image from "../ui/image";
import { Suspense, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";

export function NavbarTop({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuItems = [
    { href: "/accommodation", label: "Rooms" },
    { href: "/dining", label: "Restaurant & Bar" },
    { href: "/services", label: "Services" },
    { href: "/meetings", label: "Meetings & Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={
        "z-50 sticky top-0 md:shadow-md bg-background text-white w-full border-b"
      }
      {...rest}
    >
      <div className="container flex md:flex-row gap-4 md:gap-[clamp(1rem,3vw,3rem)] justify-end lg:justify-between items-center w-full h-[70px] lg:h-[80px] md:sticky top-0 pt-0">
        <div className="w-fit absolute -top-1 lg:-top-2 left-4 h-24 lg:h-28 text-2xl overflow-hidden">
          <Image
            src={"/images/logo2.png"}
            height={300}
            width={300}
            quality={100}
            skipAnimation
            priority
            alt=""
            className="object-contain h-full w-full object-left"
          />
        </div>

        <div
          className="w-fit h-24 lg:h-28 text-2xl overflow-hidden opacity-0 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src={"/images/logo2.png"}
            height={300}
            width={300}
            quality={100}
            skipAnimation
            priority
            alt=""
            className="object-contain h-full w-full object-left"
          />
        </div>

        <nav className="hidden lg:flex gap-2 md:gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="text-black text-textsm px-3 py-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {children}

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="block lg:hidden gap-2 md:gap-4">
            <Menu color="black" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Flower hotel</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col mt-10">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className="text-black text-textsm px-3 py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
