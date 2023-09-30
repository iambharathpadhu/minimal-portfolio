import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { motion } from "framer-motion";

function Intro({ theme }) {
  console.log("Theme", theme);
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <TypeWriterEffect
        textStyle={{
          fontSize: "32px",
          fontWeight: "800",
          color: "#333333",
          lineHeight: "1.9",
          margin: "10px 0",
          color: theme === "dark" ? "white" : "black",
          textAlign: "center",
        }}
        startDelay={500}
        cursorColor="black"
        text="Barath's Portfolio"
        typeSpeed={100}
      />
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
      <p className="text-base md:text-xl mb-3 font-medium pt-2">
        Software Development Engineer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Hello there! My name is Barath, and I hail from the vibrant city of
        Coimbatore. Beyond being a passionate resident of this beautiful place,
        I'm an ardent Messi fan, always cheering for him on the field. In my
        free time, I'm not just a spectator; I'm also a creator. I express my
        thoughts and ideas through writing, particularly in the form of blogs.
        My blog topics vary, but I often find myself delving into the world of
        technology, exploring its latest innovations, and sharing my insights.
        When I'm not immersed in the digital realm, you can find me hanging out
        with my friends. I cherish those moments of camaraderie, as they are the
        essence of life's enjoyment. One motto that I live by is "under promise
        and over deliver." This principle guides my actions and helps me strive
        for excellence in all that I do. Whether it's in my writing, my
        interactions with friends, or my pursuit of technological knowledge, I
        believe in setting realistic expectations and then surpassing them. So,
        that's a little glimpse into who I am - a Messi-loving, technology
        enthusiast, blogging, and friend-enjoying individual who aims to exceed
        expectations in every aspect of life.
      </p>
    </div>
  );
}

export default Intro;
