"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  const [text, helper] = useTypewriter({
    /* Config */
    words: [
      "HI There👋👋🏿!",
      "The name is JOY AKOBI CHINONYEREM",
      "I am a frontend developer",
      "A full-stack developer in process!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden my-20"
    >
      <BackgroundCircles />
      <div className="max-w-7xl mx-auto">
        <Image
          src="/about.png"
          alt="A description of the image"
          width={1000}
          height={1000}
          className="rounded-full object-cover shadow-2xl h-72 w-72"
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-600 pb-2 font-semibold tracking-[15px]">Software Developer</h2>
        <h1 className="text-xl lg:2xl font-semibold px-10">
          <span className="my-3">{text}</span>
          <Cursor cursorColor="red" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
          <button className="heroButton">About</button>
          </Link>
          <Link href="#experince">
          <button className="heroButton">Experince</button>
          </Link>
          <Link href={'#skills'}>
          <button className="heroButton">Skills</button>
          </Link>
          <Link href={'/Projects'}>
          <button className="heroButton">Projects</button>
          </Link>
           <Link href={'/conatactMe'}>
          <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
