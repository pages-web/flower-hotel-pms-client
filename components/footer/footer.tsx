"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const footerSections = [
  {
    title: "About",
    links: [
      { href: "/", label: "About Us" },
      { href: "/", label: "Career" },
      { href: "/", label: "Blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/", label: "Contact Us" },
      { href: "/", label: "Return" },
      { href: "/", label: "FAQ" },
    ],
  },
];

const footerSections2 = [
  {
    title: "Rooms",
    link: "/accommodation",
  },
  {
    title: "Restaurant & Bar",
    link: "/dining",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const socialIcons = [
  // {
  //   href: "https://www.instagram.com/flower_hotel_ulaanbaatar",
  //   label: "Instagram",
  //   icon: "/images/instagram.svg",
  // },
  {
    href: "https://www.facebook.com/flowerhotelulaanbaatar",
    label: "Facebook",
    icon: "/images/facebook.svg",
  },
  // { href: "https://twitter.com", label: "Twitter", icon: "/images/x.svg" },
  // { href: "https://google.com", label: "Google", icon: "/images/google.svg" },
];

export default function Footer() {
  return (
    <footer className="border-t pb-3 mt-20">
      <div className="container mx-auto gap-10 flex flex-col items-center ">
        <div className="w-[150px] flex flex-col items-center">
          <Image
            src="/images/logo2.png"
            alt="logo"
            width={300}
            height={300}
            quality={100}
          />
        </div>
        <div className="flex justify-center">
          <div className="space-y-3 flex flex-col items-center">
            {footerSections2.map((section, index) => (
              <p className="font-bold" key={index}>
                {section.title}
              </p>
            ))}
          </div>
          {/* <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.9127757590254!2d106.9352121770386!3d47.92438637122066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692166117ef3d%3A0x16047093895df1e4!2sFlower%20Hotel!5e1!3m2!1smn!2smn!4v1740094066102!5m2!1smn!2smn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>

        <div className="text-center text-sm text-gray-600">
          <div className="flex justify-center space-x-4 mb-6">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={social.icon} alt={social.label} className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
          <p>&copy; 2025 All rights reserved.</p>
          <div className="mt-2 space-x-4 flex justify-center">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
