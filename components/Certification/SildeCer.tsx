"use client";
import { TypographyH3, TypographyMuted } from "../Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { Item } from "../ui/item";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Separator } from "../ui/separator";

const SildeCer = ({ label, images }: { label: string; images: string[] }) => {
  console.log(images);

  return (
    <section className="my-10 text-center">
      <TypographyMuted>ใบรับรองของสถาบัน</TypographyMuted>
      <TypographyH3>{label}</TypographyH3>
      <Swiper
        direction="horizontal"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper custom-swiper mt-5"
      >
        {images.map((img) => (
          <SwiperSlide key={img} className="flex justify-center mb-10">
            <Item
              variant="outline"
              className="bg-muted/25 rounded-2xl overflow-hidden"
            >
              <Dialog>
                <DialogTrigger asChild className="cursor-pointer hover:scale-105 duration-300 rounded-2xl">
                  <Image
                    priority={true}
                    src={`/certification/${img}`}
                    alt={img}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </DialogTrigger>
                <DialogContent
                  showCloseButton={false}
                  className="p-0 md:scale-150 bg-transparent border-0 shadow-none"
                >
                  <DialogTitle className="hidden">
                    Certificate Preview
                  </DialogTitle>
                  <Image
                    priority={true}
                    src={`/certification/${img}`}
                    alt={img}
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </Item>
          </SwiperSlide>
        ))}
      </Swiper>
      <Separator className="mt-10" />
    </section>
  );
};

export default SildeCer;
