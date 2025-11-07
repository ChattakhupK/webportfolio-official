"use client";
import React, { useEffect } from "react";
import ContainerBox from "../ContainerBox";
import { TypographyH2, TypographyH3, TypographyP2 } from "../Typography";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaLine,
} from "react-icons/fa";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { useAnimation, Variants, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Separator } from "../ui/separator";

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
  {
    icon: FaLine,
    path: "https://line.me/ti/p/8AR8kZeWYy",
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
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="w-full text-(--primary-inverse) py-5"
        style={{ backgroundColor: "var(--bg-inverse)" }}
      >
        <ContainerBox>
          {/* การติดต่อ */}
          <div className="mx-auto flex max-w-4xl flex-col md:flex-row space-y-10 gap-x-10 justify-between items-start px-10 my-5 md:mb-0">
            {/* contact */}
            <div className="max-w-lg">
              <TypographyH3>ช่องทางการติดต่อ</TypographyH3>
              <TypographyP2>
                ผมยินดีที่จะรับฟังความเห็นจากคุณ
                หรือการรับฟังความคิดเห็นเพื่อนำไปปรับปรุงผลงานของผมให้ดียิ่งขึ้น
              </TypographyP2>
              <div className="flex font-bold flex-col mt-2 space-y-1">
                <div className="flex items-center">
                  <Mail /> | <TypographyP2>Most5140@hotmail.com</TypographyP2>
                </div>
                <div className="flex items-center">
                  <Phone /> | <TypographyP2>085-855-4668</TypographyP2>
                </div>
              </div>
            </div>
            {/* logo social */}
            <div>
              <TypographyH3>ช่องทางอื่นๆ</TypographyH3>
              <div className="flex flex-row gap-x-2 text-2xl mt-2">
                {soical.map((link, index) => (
                  <Link
                    className="hover:scale-105 duration-300 hover:text-red-700 dark:hover:text-red-300"
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
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-center my-2"
      >
        © 2025 ChattakhupK All rights reserved.
      </motion.div>
    </>
  );
};

export default Footer;
