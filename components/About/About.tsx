import React from "react";
import { TypographyH2, TypographyP } from "../Typography";

const About = () => {
  return (
    <section id="about" className="flex justify-between mt-10">
      <div>s</div>
      <div className="text-end md:w-md">
        <TypographyH2>ประวัติ</TypographyH2>
        <TypographyP>
          ผมกำลังค้นหางานในสายงานไอที โดยมีประสบการ์ทำงานจริงมาเกือบปี
          ถ้าคุณสนใจ ผมสนใจตำแหน่ง
        </TypographyP>
      </div>
    </section>
  );
};

export default About;
