import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Welcome from "./Welcome";

const visible = { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10, x: -75 },
  visible,
};

function Intro({ theme }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });
  const bgColor = theme === "dark" ? "#f5f5f5" : "#611bb8";
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          width: "100vw",
          height: "20px",
          background: bgColor,
          bottom: 0,
          left: 0,
          position: "fixed",
          zIndex: 100,
        }}
      />
      <Welcome />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        whileHover={{ scale: 1.1 }}
      >
        <img
          src="/assets/barath-photo.jpeg"
          className="rounded-full w-40 h-40 object-cover"
        />
      </motion.div>
      <motion.div
        className="text-base mb-3 font-medium pt-2 md:text-2xl"
        initial={{ opacity: 0, y: 0, x: -500 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      >
        Senior Frontend Developer
      </motion.div>
      <motion.p
        className="text-sm max-w-xl mb-6 text-justify rounded-lg p-4"
        initial={{
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          borderColor: "transparent",
        }}
        animate={{
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
          borderColor: "#ccc",
        }}
        transition={{ duration: 0.5 }}
      >
        Hello there! My name is Barath, and I hail from the vibrant city of
        Coimbatore. Beyond being a passionate resident of this beautiful place,
        I'm an ardent Messi fan, always cheering for him on the field. In my
        free time, I'm not just a spectator; I'm also a creator. I express my
        thoughts and ideas through writing, particularly in the form of blogs.
      </motion.p>
    </div>
  );
}

export default Intro;
