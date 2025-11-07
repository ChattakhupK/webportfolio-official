"use client";
import WorkList from "@/components/WorkList/WorkList";
import { works } from "@/lib/work";
import { motion } from "framer-motion";

const ShowWorkList = () => {
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
      {works.map((work, index) => (
        <motion.div key={index} variants={itemVariants}>
          <WorkList
            label={work.label}
            detail={work.detail}
            category={work.category}
            picture={work.picture}
            live={work.live}
            github={work.github}
            key={index}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ShowWorkList;
