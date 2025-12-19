// app/[locale]/(reserve)/contact/ContactForm.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { sendLead } from "./contact-actions";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formNotice, setFormNotice] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormLoading(true);
    setFormNotice(null);

    try {
      const response = await sendLead({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        message: formData.message,
      });

      if (response?.status === "ok") {
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          phone: "",
          message: "",
        });
        setFormNotice("Message sent successfully!");
      } else {
        setFormNotice("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setFormNotice("An error occurred. Please try again.");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          required
        />
        <Input
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Input
          type="tel"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>
      <Textarea
        placeholder="Your message (max 250 characters)"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        maxLength={250}
        required
      />
      {formNotice && (
        <p
          className={`text-sm ${
            formNotice.includes("success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {formNotice}
        </p>
      )}
      <Button
        type="submit"
        className="w-full bg-teal-600 hover:bg-teal-700"
        disabled={formLoading}
      >
        {formLoading ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
