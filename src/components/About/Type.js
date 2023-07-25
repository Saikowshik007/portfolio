import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
"Information is not knowledge. The only source of knowledge is experience. You need experience to gain wisdom ~ Albert Einstein."

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
