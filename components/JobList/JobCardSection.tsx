"use client";
import {
  TypographyH3,
  TypographyMuted,
  TypographyP,
  TypographyP2,
} from "../Typography";
import { joblistsProps } from "@/lib/joblists";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Separator } from "../ui/separator";

const JobCardSection = ({
  label,
  position,
  exp,
  detail,
  picture,
}: joblistsProps) => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // มือถือ
          },
          640: {
            slidesPerView: 3, // แท็บเล็ตแนวตั้ง
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {picture.map((pic) => (
          <SwiperSlide key={pic}>
            <Image
              priority={true}
              alt={pic}
              src={pic}
              width={500}
              height={500}
              className="mx-auto select-none object-cover overflow-hidden h-[400px] rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col md:flex-row justify-between bg-muted dark:bg-muted/40 p-5 rounded-xl border">
        <div className="flex-1 text-start">
          <TypographyH3>{label}</TypographyH3>
          <TypographyP>รายละเอียดงาน</TypographyP>
          {detail.map((list, index) => (
            <TypographyP2 key={index}>- {list}</TypographyP2>
          ))}
        </div>

        {/* small detail */}
        <div className="flex-1 text-end">
          <TypographyMuted>ตำแหน่ง : {position}</TypographyMuted>
          <TypographyMuted>{exp}</TypographyMuted>
        </div>
      </div>
      <Separator className="my-4" />
    </>
  );
};

export default JobCardSection;
