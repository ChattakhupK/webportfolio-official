import React from "react";
import { TypographyH2, TypographyMuted, TypographyP } from "../Typography";
import { Button } from "../ui/button";
import TypingJob from "../TypingJob";
import Link from "next/link";
import { FaCar } from "react-icons/fa";

const Hero = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between md:items-center">
      {/* ข้อความหลักทางซ้าย */}
      <div className="text-start md:w-md">
        <TypographyH2>สวัสดีครับ, ผมฟลุ๊ค</TypographyH2>
        <TypographyP>
          ผมกำลังค้นหางานในสายงานไอที โดยมีประสบการ์ทำงานจริงมาเกือบปี
          ถ้าคุณสนใจ ผมสนใจตำแหน่ง <TypingJob />
        </TypographyP>
      </div>

      {/* ข้อความรองทางขวา */}
      <div className="flex flex-col justify-between items-end h-full mt-10 md:mt-0">
        <div className="text-end">
          <TypographyMuted>ที่อยู่ปัจจุบัน : จังหวัดอุดรธานี </TypographyMuted>
          <TypographyMuted>พร้อมย้ายทันทีเมื่อได้งาน</TypographyMuted>
          <TypographyMuted>
            มีรถยนต์ส่วนตัว
            <FaCar className="inline align-middle ml-1" />
          </TypographyMuted>
        </div>
        <Link target="_blank" href={"/Resume.pdf"}>
          <Button
            size="default"
            variant={"outline"}
            className="rounded-full mt-5 cursor-pointer"
          >
            ดาวน์โหลดเรซูเม่
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Hero;
