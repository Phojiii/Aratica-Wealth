'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroCarousel() {
  return (
    <div className="hero-section relative z-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-[500px]"
      >
        <SwiperSlide>
          <Image
            src="/banner-one.webp"
            alt="Slide 1"
            width={1920}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/banner-two.webp"
            alt="Slide 2"
            width={1920}
            height={800}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/banner-three.webp"
            alt="Slide 3"
            width={1920}
            height={800}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
