"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Turn your ideas into powerful, responsive websites that work flawlessly on every device. Whether you're building from scratch or improving what you have, your site will be fast, secure, and built to grow with your business.",
    href: "/contact",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Give your users an experience they’ll love and remember. From wireframes to polished interfaces, every element is designed with your audience in mind—making your product not just usable, but truly enjoyable.",
    href: "/contact",
  },
  // {
  //   num: "03",
  //   title: "Logo Design",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   href: "",
  // },
  {
    num: "03",
    title: "SEO Optimization",
    description:
      "Get your website seen by the right people at the right time. With smart SEO strategies tailored to your goals, your site will rank higher, attract more organic traffic, and turn visits into results.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto p-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-transparent group-hover:text-outline-hover text-outline transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-white/60">{service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
