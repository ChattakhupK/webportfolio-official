import React from "react";
import ContainerBox from "../ContainerBox";
import { TypographyH2, TypographyP2 } from "../Typography";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div
      className="text-(--primary-inverse) py-20 rounded-t-[150px]"
      style={{ backgroundColor: "var(--bg-inverse)" }}
    >
      <ContainerBox>
        <div className="flex justify-center -mt-15 mb-9">
          {/* โลโก้โหมดสว่าง */}
          <Image
            src="/logowhite-Photoroom.png"
            alt="Logo Light"
            width={80}
            height={80}
            className="block dark:hidden"
          />
          {/* โลโก้โหมดมืด */}
          <Image
            src="/logoblack-Photoroom.png"
            alt="Logo Dark"
            width={80}
            height={80}
            className="hidden dark:block"
          />
        </div>
        <div className="flex gap-x-10 justify-between items-center px-10">
          <div className="max-w-lg">
            <TypographyH2>ช่องทางการติดต่อ</TypographyH2>
            <TypographyP2>
              ผมยินดีที่จะรับฟังความเห็นจากคุณ
              หรือการรับฟังความคิดเห็นเพื่อนำไปปรับปรุงผลงานของผมให้ดียิ่งขึ้น
            </TypographyP2>
          </div>
          <div className="max-w-lg">
         asds
          </div>
        </div>
      </ContainerBox>
    </div>
  );
};

export default Footer;
