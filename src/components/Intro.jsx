import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { motion } from "framer-motion";

function Intro({ theme }) {
  console.log("Theme", theme);
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <p className="text-base mb-3 font-medium pt-2 md:text-4xl underline">
        Barath's Portfolio
      </p>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/53510578?s=400&u=cbc82579d3c19d480e3b59fc1562d5c1bd4f6c48&v=4"
          className="rounded-full"
        />
      </motion.div>
      <TypeWriterEffect
        textStyle={{
          fontSize: "32px",
          fontWeight: "800",
          lineHeight: "1.9",
          margin: "10px 0",
          color: theme === "dark" ? "white" : "black",
          textAlign: "center",
        }}
        startDelay={200}
        cursorColor="black"
        text="Software Development Engineer"
        typeSpeed={100}
      />
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
