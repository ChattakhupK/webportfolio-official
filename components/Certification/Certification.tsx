import React from "react";
import { TypographyH3, TypographyMuted, TypographyP2 } from "../Typography";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import fs from "fs";
import path from "path";
import { Button } from "../ui/button";
import Link from "next/link";

const Certification = () => {
  const imagesDir = path.join(process.cwd(), "public/certification");
  const files = fs.readdirSync(imagesDir);

  const images = files.filter((file) => /\.(png|jpe?g|gif|webp)$/i.test(file));

  return (
    <section>
      {/* หัวข้อ */}
      <div className="text-center mt-10">
        <TypographyMuted>ใบรับรอง</TypographyMuted>
        <TypographyH3>ประกาศนียบัตร</TypographyH3>
        <TypographyP2>
          เพื่อยืนยันความรู้ ทักษะ
          หรือคุณสมบัติที่เรียนมาและยังมีอีกมากมายที่ไม่มีใบรับรองที่ผมเรียน
        </TypographyP2>
        <Button
          size="default"
          variant={"outline"}
          className="rounded-full mt-5 cursor-pointer"
        >
          <Link href={"/certification"}>ดูประกาศนียบัตรทั้งหมด</Link>
        </Button>
      </div>
      {/* การ์ดรูปภาพ */}
      <div className="mt-10">
        <Marquee gradient={false} speed={50}>
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden mx-2 flex justify-center items-center"
            >
              <Image
                priority={true}
                className="rounded-xl object-cover w-full h-48 border"
                src={`/certification/${img}`}
                width={300}
                height={200}
                alt={img}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Certification;
