import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

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
        }}
      />
      <motion.p
        className="text-base mb-3 font-medium pt-2 md:text-4xl underline"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        Barath's Portfolio
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocKjmJ8wjwjpn9SNRx2bOoWfBxI8_B6RQwGcgIqYwaasJW0=s288-c-no"
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
      <p className="text-sm max-w-xl mb-6">
        Hello there! My name is Barath, and I hail from the vibrant city of
        Coimbatore. Beyond being a passionate resident of this beautiful place,
        I'm an ardent Messi fan, always cheering for him on the field. In my
        free time, I'm not just a spectator; I'm also a creator. I express my
        thoughts and ideas through writing, particularly in the form of blogs.
      </p>
    </div>
  );
}

export default Intro;
