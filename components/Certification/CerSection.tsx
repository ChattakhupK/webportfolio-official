"use client";
import SildeCer from "./SildeCer";
import { motion } from "framer-motion";

interface CerSectionProps {
  futureskill: string[];
  borntodev: string[];
  etc: string[];
}

const CerSection = ({ futureskill, borntodev, etc }: CerSectionProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="my-10 space-y-5"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
    >
      <motion.div variants={itemVariants}>
        <SildeCer label={"FUTURESKILL"} images={futureskill} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SildeCer label={"BORNTODEV"} images={borntodev} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SildeCer label={"ETC."} images={etc} />
      </motion.div>
    </motion.div>
  );
};

export default CerSection;
