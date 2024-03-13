import React, { useState, useEffect } from "react";

const Welcome = () => {
  const text = "Welcome to my Portfolio ! Period";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust typing speed here
    return () => clearInterval(timer);
  }, [text]);

  return (
    <p className="text-base mb-3 font-medium pt-2 md:text-4xl underline">
      {displayText}
    </p>
  );
};

export default Welcome;
