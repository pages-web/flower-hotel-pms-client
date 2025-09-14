import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function page() {
  const t = useTranslations("restran");
  return (
    <div id="content" style={{ display: "block" }}>
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px]">
        <Image
          src="/images/download-3.jpg"
          alt="Career Header"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Image
            src="/images/stamp-white.png"
            alt="Flower Hotel Logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg"></h2>
        </div>
      </div>
      <div className="image-header">
        <div className="bg" />
        <div
          className="thumb"
          style={{
            backgroundImage: 'url("/images/download-3.jpg")',
          }}
        ></div>
        {/* <div className="container">
          <div className="row">
            <div className="col-sm-9 col-sm-offset-3">
              <div className="caption">
                <img src="/images/stamp-white.png" />
                <h2>Awards</h2>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <section className="container mt-10">
        <article>
          <div className="content awards">
            <ul>
              <li>
                <span />
                2000 – The Entrepreneur of a Year of the City of Ulaanbaatar
                Award
              </li>
              <li>
                2001 – Certificate from Property Auhority of the City of
                Ulaanbaatar.
              </li>
              <li>
                2001 – The Best National Insurance Payer Organization of
                Bayanzurkh district
              </li>
              <li>2001 – TOP 100 Entrepreneurs</li>
              <li>
                2002 – “Producer of Healthy and Safe Food” Award by National
                Health Authority
              </li>
              <li>2000, 2003 – Mongolian Tax Office Gratitude</li>
              <li>
                2002 – The Best National Insurance Payer Organization Award by
                the National Social Insurance Authority
              </li>
              <li>
                2003 – “Organization with International Accounting Standard”
                Certificate by the Ministry of Finance and Economy
              </li>
              <li>
                2004 – “Reliable Tax Payer” Certificate by Mongolian National
                Tax Authority
              </li>
              <li>
                2006 – The Fifty Entrepreneurs competed for TOP 100
                Entrepreneurs
              </li>
              <li>
                2007, 2008 – Fifty Entrepreneur competed for TOP 100
                Entrepreneur by Mongolian Chamber and Commerce
              </li>
              <li>2008 – Mongolian Tax Office Gratitude</li>
              <li>
                2009 – The Best National Insurance Payer Organization of
                Bayanzurkh district
              </li>
              <li>
                2009 – The Fifty Entrepreneurs competed for TOP 100
                Entrepreneurs by Mongolian Chamber and Commerce
              </li>
              <li>
                2010 – The Fifty Entrepreneurs competed for TOP 100
                Entrepreneurs by Mongolian Chamber and Commerce
              </li>
              <li>
                2010 – “Hotel of a Year”, “Manager of a Year” and “Chef of a
                Year” Awards by the Mongolian Hotel Association and Tourism
                Board of Ulaanbaatar
              </li>
              <li>
                2010 – The Best Entrepreneur of Food Service Sector of
                Bayanzurkh District
              </li>
              <li>
                2011 – The Hard Work Award for the President Mr Batbaatar by
                Bayanzurkh District.
              </li>
              <li>
                2011 – Reliable Tax Payer Certificate by Mongolian National Tax
                Authority
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}
