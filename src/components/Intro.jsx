import React from "react";
import { motion } from "framer-motion";

function Intro({ theme }) {
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
          src="https://media.licdn.com/dms/image/D5603AQGvl8ok0xTTRg/profile-displayphoto-shrink_400_400/0/1696164918452?e=1701907200&v=beta&t=W88QaI1FVPYZ9B-Flmn-YeLc167fxU5Pk-_nNqnF7GA"
          className="rounded-full w-40 h-40 object-cover"
        />
      </motion.div>
      <p className="text-base mb-3 font-medium pt-2 md:text-2xl">
        Software Development Engineer
      </p>
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
