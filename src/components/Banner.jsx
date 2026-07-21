"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Link from "next/link";
import { FaArrowRight, FaBalanceScale } from "react-icons/fa";

const slides = [
 {
  id: 1,
  image: "/assets/BImg1.jpg",
  badge: "Experienced Legal Professionals",
  title: "Your Trusted Partner",
  highlight: "In Every Legal Matter",
  description:
    "From consultation to courtroom representation, we deliver practical legal solutions tailored to your needs with dedication, transparency, and unwavering commitment.",
},
  {
    id: 2,
    image: "/assets/BImg2.jpg",
    badge: "Professional Legal Support",
    title: "Protecting Your",
    highlight: "Legal Rights",
    description:
      "Expert guidance and professional representation in civil, criminal, family, corporate, and property law matters.",
  },
  {
    id: 3,
    image: "/assets/BImg3.jpg",
    badge: "Experienced Advocate",
    title: "Committed To",
    highlight: "Justice & Integrity",
    description:
      "Every case is handled with professionalism, strategic planning, and complete confidentiality.",
  },
  {
    id: 4,
    image: "/assets/BImg4.jpg",
    badge: "Trusted Representation",
    title: "Your Reliable",
    highlight: "Legal Partner",
    description:
      "Serving individuals, families, and businesses with professionalism, transparency, and commitment.",
  },
];

export default function Banner() {
  return (
    <section>
      <Swiper
        effect="fade"
        loop
        centeredSlides
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[
          Autoplay,
          Pagination,
          Navigation,
          EffectFade,
        ]}
        className="bannerSwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[80vh] md:h-[85vh] bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/70"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center h-full">
                <div className="max-w-6xl mx-auto w-full px-6">

                  <div className="max-w-2xl">

                    {/* Badge */}

                    <div className="inline-flex items-center gap-2 bg-[#EA7A00] text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
                      <FaBalanceScale />
                      {slide.badge}
                    </div>

                    {/* Heading */}

                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                      {slide.title}
                      <br />
                      <span className="text-[#F59E0B]">
                        {slide.highlight}
                      </span>
                    </h1>

                    {/* Description */}

                    <p className="text-gray-200 text-base md:text-lg leading-8 mt-6">
                      {slide.description}
                    </p>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4 mt-8">

                      <Link
                        href="#contact"
                        className="bg-[#EA7A00] hover:bg-orange-600 transition px-7 py-3 rounded-xl text-white font-semibold flex items-center gap-3"
                      >
                        Schedule Consultation

                        <FaArrowRight />
                      </Link>

                      <Link
                        href="#services"
                        className="border border-white/30 hover:bg-white/10 transition px-7 py-3 rounded-xl text-white font-semibold"
                      >
                        Our Services
                      </Link>

                    </div>

                  </div>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}