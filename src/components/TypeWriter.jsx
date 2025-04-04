"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="text-xl font-bold text-center">
      <Typewriter
        options={{
          strings: ['Welcome to Next.js', 'Experience the Future', 'Deploy with Confidence'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
