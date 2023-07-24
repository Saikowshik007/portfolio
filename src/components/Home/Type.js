import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Sai Kowshik Ananthula 🙋‍♂️",
          "Software Engineer 👨🏾‍💻",
          "Master of Computer Science Graduate 👨‍🎓",
          "Open Source Contributor 💻",
          "Competitive Gamer 🎮"

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
