"use client";
import { TypeAnimation } from "react-type-animation";
import { FC } from "react";

const TypingJob: FC = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Web Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "IT Support",
        1000,
        "Frontend developer",
        1000,
        "Backend developer",
        1000,
        "Full Stack Developer",
        1000,
      ]}
      wrapper="span"
      className="text-red-700 dark:text-red-300 font-black"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TypingJob;
