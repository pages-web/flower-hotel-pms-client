"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const socialIcons = [
  {
    href: "https://www.facebook.com/flowerhotelulaanbaatar",
    label: "Facebook",
    icon: "/images/facebook.svg",
  },
];

export default function Footer() {
  const t = useTranslations("restran");

  const footerSections2 = [
    {
      title: t("rooms"),
      link: "/accommodation",
    },
    {
      title: t("restauran"),
      link: "/services",
    },
    {
      title: t("About Us"),
      link: "/about",
    },
    {
      title: t("Career"),
      link: "/career",
    },
    {
      title: t("awadrs"),
      link: "/awards",
    },
    {
      title: t("Contact"),
      link: "/contact",
    },
  ];

  return (
    <footer className="border-t pb-3 mt-20">
      <div className="container mx-auto gap-10 flex flex-col items-center">
        {/* Logo */}
        <div className="w-[150px] flex flex-col items-center">
          <Image
            src="/images/logo2.png"
            alt="logo"
            width={300}
            height={300}
            quality={100}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <div className="space-y-3 flex flex-col items-center">
            {footerSections2.map((section, index) => (
              <Link
                href={section.link}
                key={index}
                className="font-bold hover:text-blue-600 transition-colors"
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="text-center text-sm text-gray-600">
          <div className="flex justify-center space-x-4 mb-6">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={social.icon} alt={social.label} className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
          <p>&copy; 2025 All rights reserved.</p>
          <div className="mt-2 space-x-4 flex justify-center">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
