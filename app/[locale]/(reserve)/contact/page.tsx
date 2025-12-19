// app/[locale]/(reserve)/contact/page.tsx
import { Phone, MapPin, Mail } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the client component with SSR disabled
const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-8 text-gray-600">
        No request is too great and no detail too small. Our team is happy to
        assist you before and during your stay at Flower Hotel.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone className="text-primary w-6 h-6 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Phone</h2>
              <p className="text-gray-600">+976 7700 4949</p>
              <p className="text-gray-600">++976 9011 4750 (Hotel booking)</p>
              <p className="text-gray-600">
                +976 8805 2939 (Restaurant & conference room reservation)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-primary w-6 h-6 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Location</h2>
              <p className="text-gray-600">
                Bayanzürkh District, Zaluuchuud Avenue 18 Ulaanbaatar 49,
                Mongolia P.O. Box 328
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-primary w-6 h-6 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Email</h2>
              <p className="text-gray-600">
                reservation@flower-hotel.mn (Hotel booking)
              </p>
              <p className="text-gray-600">
                restaurants@flower-hotel.mn (Restaurant & conference room
                reservation)
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Leave a message</h2>
          <ContactForm />
        </div>

        <div className="h-[400px] lg:h-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.9127757590254!2d106.9352121770386!3d47.92438637122066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692166117ef3d%3A0x16047093895df1e4!2sFlower%20Hotel!5e1!3m2!1smn!2smn!4v1740094066102!5m2!1smn!2smn"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Flower Hotel Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
