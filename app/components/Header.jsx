"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
// import profilePic from '../Assets/photo.jpg'

export const Header = () => {
  return (
    <section
      id="header"
      className="py-8 lg:py-24 lg:h-screen flex items-center h-full"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[40px] font-bold loading-[0.8] lg:text-[55px] pt-5">
              Ghezea <span>Alexandru</span>{" "}
            </h1>
            <div className="mb-6 text-[38px] lg:text-[62px] pt-3">
              <span className="text-white mr-2"> I am a </span>
              <TypeAnimation
                sequence={["Front-End Dev"]}
                speed={50}
                className="text-purple-700"
              />
            </div>
            <p className="pb-7 leading-relaxed xl:w-2/4 lg:w-3/4 text-[18px]">
              I am a swimming instructor who discovered a passion for coding,
              who has ventured into the exciting world of front-end development.
              Combining my love for teaching with my newfound interest in
              technology, I am dedicated to honing my skills and creating
              engaging user experiences through web development{" "}
            </p>
            <div className="flex text-[35px] gap-x-6 max-w-max mx-auto lg:mx-0 pt-6">
              <a href="https://github.com/DoNKsar" target="_blank">
                <FaGithub />
              </a>
              <a
                href="www.linkedin.com/in/alex-ghezea-49b180280"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <Image
              src="/photo.jpg"
              width={250}
              height={250}
              className="relative hidden lg:flex flex-1 rounded-full w-80 h-80 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
