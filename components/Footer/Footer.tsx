"use client";
import React, { useEffect } from "react";
import ContainerBox from "../ContainerBox";
import { TypographyH2, TypographyH3, TypographyP2 } from "../Typography";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { useAnimation, Variants, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

const soical: SocialLink[] = [
  {
    icon: FaFacebook,
    path: "https://www.facebook.com/MosT5140",
  },
  {
    icon: FaInstagram,
    path: "https://www.instagram.com/f.kykie",
  },
  {
    icon: FaGithub,
    path: "https://github.com/ChattakhupK",
  },
  {
    icon: FaDiscord,
    path: "https://discord.com/users/240118062827831297",
  },
];

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <motion.div
    id="contact"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="mx-auto w-full md:max-w-4/6 text-(--primary-inverse) py-10 rounded-t-[150px]"
      style={{ backgroundColor: "var(--bg-inverse)" }}
    >
      <ContainerBox>
        {/* โลโก้ */}
        <div className="flex justify-center -mt-10 mb-9">
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
        {/* การติดต่อ */}
        <div className="flex space-y-10 flex-col md:flex-row gap-x-10 justify-center items-start px-10">
          <div className="max-w-lg">
            <div className="text-center md:text-start">
              <TypographyH2>ช่องทางการติดต่อ</TypographyH2>
            </div>
            <TypographyP2>
              ผมยินดีที่จะรับฟังความเห็นจากคุณ
              หรือการรับฟังความคิดเห็นเพื่อนำไปปรับปรุงผลงานของผมให้ดียิ่งขึ้น
            </TypographyP2>
            <div className="flex flex-col mt-2 space-y-1">
              <div className="flex items-center">
                <Mail /> | <TypographyP2>Most5140@hotmail.com</TypographyP2>
              </div>
              <div className="flex items-center">
                <Phone /> | <TypographyP2>085-855-4668</TypographyP2>
              </div>
            </div>
            <div className="flex gap-x-2 text-3xl mt-2">
              {soical.map((link, index) => (
                <Link
                  className="hover:scale-110 duration-500 hover:text-red-700 dark:hover:text-red-300"
                  key={index}
                  target="_blank"
                  href={link.path}
                >
                  <link.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ContainerBox>
    </motion.div>
  );
};

export default Footer;
