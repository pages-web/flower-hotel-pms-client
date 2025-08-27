"use client";
import { Link, useRouter } from "@/i18n/routing";
import Image from "../ui/image";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu, Facebook, Phone, MapPin } from "lucide-react";

import { Dropdown, Space } from "antd";
import { DownOutlined, GlobalOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

// 🌐 Хэлний сонголт
const langItems: MenuProps["items"] = [
  { key: "en", label: "EN" },
  { key: "mn", label: "MN" },
  { key: "jp", label: "日本語" },
];

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
    { href: "/special-offers", label: "Special Offers" },
    { href: "/Local-Information", label: "Local Information" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  // Хэл сонгох үед
  const onLangClick: MenuProps["onClick"] = ({ key }) => {
    router.push(`/${key}`);
  };

  return (
    <header
      className="z-50 sticky top-0 md:shadow-md bg-background text-white w-full border-b"
      {...rest}
    >
      <div className="container flex md:flex-row gap-4 md:gap-[clamp(1rem,3vw,3rem)] justify-end lg:justify-between items-center w-full h-[70px] lg:h-[80px]">
        {/* Logo */}
        <div className="w-fit absolute -top-1 lg:-top-2 left-4 h-24 lg:h-28 overflow-hidden cursor-pointer">
          <Image
            src={"/images/logo2.png"}
            height={300}
            width={300}
            quality={100}
            skipAnimation
            priority
            alt="Flower Hotel Logo"
            className="object-contain h-full w-full object-left"
            onClick={() => router.push("/")}
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-2 md:gap-4 ml-auto">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="text-black text-sm px-3 py-2 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="hidden lg:flex gap-4 ml-6">
          <a href="./contact" aria-label="Location">
            <MapPin className="w-5 h-5 text-black hover:text-blue-600 transition-colors" />
          </a>
          <a href="/contact" aria-label="Phone">
            <Phone className="w-5 h-5 text-black hover:text-blue-600 transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/flower.hotel"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-black hover:text-blue-600 transition-colors" />
          </a>
        </div>
        {/* Language dropdown */}
        <Dropdown
          menu={{ items: langItems, onClick: onLangClick }}
          placement="bottomRight"
        >
          <a
            onClick={(e) => e.preventDefault()}
            className="cursor-pointer text-black"
          >
            <Space>
              <GlobalOutlined />
              {/* Language */}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        {/* Extra children (ex: buttons) */}
        {children}

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="block lg:hidden">
            <Menu color="black" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Flower Hotel</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col mt-10">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className="text-black text-sm px-3 py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Socials for mobile */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.facebook.com/flower.hotel"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
