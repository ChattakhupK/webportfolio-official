"use client";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { FaStripe } from "react-icons/fa6";

import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiFirebaseFill,
  RiSupabaseFill,
} from "react-icons/ri";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import {
  SiMysql,
  SiPrisma,
  SiSequelize,
  SiXampp,
  SiExpress,
  SiAntdesign,
  SiDbeaver,
  SiMongodb,
  SiShadcnui,
} from "react-icons/si";

import { TypographyP } from "./Typography";

const logos = [
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3Alt, label: "CSS3" },
  { icon: BiLogoJavascript, label: "JAVASCRIPT" },
  { icon: BiLogoTypescript, label: "TYPESCRIPT" },
  { icon: FaReact, label: "REACT" },
  { icon: RiNextjsFill, label: "NEXT.JS" },
  { icon: FaNodeJs, label: "NODE.JS" },
  { icon: SiExpress, label: "EXPRESS.JS" },
  { icon: RiTailwindCssFill, label: "TAILWIND" },
  { icon: FaBootstrap, label: "BOOTSTRAP" },
  { icon: RiFirebaseFill, label: "FIREBASE" },
  { icon: SiMysql, label: "MYSQL" },
  { icon: FaStripe, label: "STRIPE" },
  { icon: FaGithub, label: "GITHUB" },
  { icon: SiPrisma, label: "PRISMA" },
  { icon: SiSequelize, label: "SEQUELIZE" },
  { icon: SiXampp, label: "XAMPP" },
  { icon: SiAntdesign, label: "ANTDESIGN" },
  { icon: SiDbeaver, label: "Dbeaver" },
  { icon: SiMongodb, label: "Mongodb" },
  { icon: SiShadcnui, label: "Shadcnui" },
  { icon: RiSupabaseFill, label: "Supabase" },
];

const LogoSkill = () => {
  return (
    <Marquee gradient={false}>
      {logos.map((Icon, index) => (
        <div
          key={index}
          className="mx-5 my-5 flex flex-col justify-center items-center"
        >
          <Icon.icon className="text-[40px] hover:scale-110 duration-500" />
        </div>
      ))}
    </Marquee>
  );
};

export default LogoSkill;
