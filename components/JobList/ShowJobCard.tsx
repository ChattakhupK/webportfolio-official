"use client";
import { joblists } from "@/lib/joblists";
import JobCardSection from "./JobCardSection";
import { motion } from "framer-motion";

const ShowJobCard = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
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
      {joblists.map((job, index) => (
        <motion.div
          className="space-y-10 my-10"
          key={index}
          variants={itemVariants}
        >
          <JobCardSection
            label={job.label}
            position={job.position}
            detail={job.detail}
            exp={job.exp}
            picture={job.picture}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ShowJobCard;
