import React from "react";
import { TypographyH2, TypographyP } from "../Typography";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between my-10 gap-x-5">
      {/* รูปภาพตัวเอง */}
      <div>
        <Image
          className="rounded-2xl w-full mb-10 md:mb-0"
          priority={true}
          src={"/IMG_1448.jpg"}
          alt="placehold-new"
          width={500}
          height={500}
        />
      </div>
      {/* ประวัติ */}
      <div className="text-start md:text-end md:w-lg">
        <TypographyH2>ประวัติ</TypographyH2>
        <TypographyP>
          ผมอยากเป็นนักพัฒนา Front End Developer
          เพื่อสร้างเว็บแอปพลิเคชันที่น่าประทับใจ และใช้เทคโนโลยีใหม่ๆ
          เพื่อสร้างเว็บแอปพลิเคชันที่ดีที่สุดสำหรับผู้ใช้
          ความฝันสูงสุดของผมตอนนี้คือการเป็นนักพัฒนา Full Stack Developer
          และตอนนี้แม้ว่าผมจะเรียนจบแล้ว
          แต่ก็ยังคงเรียนหลักสูตรเพิ่มเติมเพื่อบรรลุความฝันของผม
        </TypographyP>
      </div>
    </section>
  );
};

export default About;
