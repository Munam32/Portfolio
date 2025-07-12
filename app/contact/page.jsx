"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Popup Dialog Component
const DialogBox = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
    <div className="bg-[#27272c] border border-accent p-6 rounded-xl w-full max-w-md shadow-xl text-center">
      <p className="text-white mb-4 text-md">{message}</p>
      <Button onClick={onClose} className="mx-auto">
        Close
      </Button>
    </div>
  </div>
);

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+92) 311 654 976 9" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abdulmunam891@gmail.com",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [selectedService, setSelectedService] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const [validationErrorMessage, setValidationErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;

    if (!selectedService) {
      setValidationErrorMessage("Please select a service.");
      return;
    }

    // Clear previous inline error if valid now
    setValidationErrorMessage("");

    emailjs
      .sendForm(
        "service_a5msa6g",
        "template_8jje15s",
        form,
        "xlNRDjeE2Nzx4e1el"
      )
      .then(
        () => {
          setDialogMessage(
            "Message sent successfully! We'll get back to you soon."
          );
          form.reset();
          setSelectedService("");
        },
        () => {
          setDialogMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form Section */}
          <div className="xl:w-[54%] order-2 xl:order-none py-12">
            {/* Inline Validation Error */}
            {validationErrorMessage && (
              <div className="bg-[#1f1f24] border border-red-500 text-white p-4 mb-4 rounded-md text-md">
                {validationErrorMessage}
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Whether it's a website, a redesign, or something bold — your
                vision, my code.
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname *"
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname *"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                />
                <Input type="text" name="phone" placeholder="Phone Number" />
              </div>

              {/* Hidden input for service */}
              <input type="hidden" name="service" value={selectedService} />

              {/* Select */}
              <Select
                value={selectedService}
                onValueChange={(val) => setSelectedService(val)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="SEO Optimization">
                      SEO Optimization
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="md"
                className="max-w-40 cursor-pointer"
              >
                Send Message
              </Button>
            </form>

            {/* Dialog for send result */}
            {dialogMessage && (
              <DialogBox
                message={dialogMessage}
                onClose={() => setDialogMessage("")}
              />
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-1 xl:justify-start order-1 xl:order-none mb-8 xl:mb-0 py-12">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
