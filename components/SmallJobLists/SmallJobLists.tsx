"use client";
import Image from "next/image";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import { works } from "@/lib/work";
import { TypographyH3, TypographyMuted, TypographyP2 } from "../Typography";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const SmallJobLists = () => {
  return (
    <>
      <section className="text-center mt-10">
        <TypographyMuted>ผลงานที่ผ่านมา</TypographyMuted>
        <TypographyH3>ผลงานพร้อมตัวอย่าง</TypographyH3>
        <Button
          size="default"
          variant={"outline"}
          className="rounded-full mt-2 cursor-pointer"
          asChild
        >
          <Link href={"/performance"}>ดูผลงาน</Link>
        </Button>
      </section>

      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        spaceBetween={30}
        modules={[Autoplay]}
        className="mySwiper mt-10"
      >
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <Item key={work.label} variant="outline" className="bg-muted/25">
              <ItemHeader>
                <Image
                  priority={true}
                  src={work.picture}
                  alt={work.label}
                  width={1280}
                  height={1280}
                  className="aspect-square w-full rounded-sm object-cover"
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle className="line-clamp-1">{work.label}</ItemTitle>
                <ItemDescription>{work.detail}</ItemDescription>
              </ItemContent>
            </Item>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SmallJobLists;
