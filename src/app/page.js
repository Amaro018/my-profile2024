"use client";
import { useState, useEffect, createContext, useContext } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Projects from "./projects.js";
import Link from "next/link.js";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ContactMe from "./components/ContactMe.jsx";
import SkillMe from "./components/SkillMe.jsx";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [imageSrc, setImageSrc] = useState("/images/junBlack.png");
  const [isFading, setIsFading] = useState(false);

  const toggleDarkMode = () => {
    setIsFading(true);
    setTimeout(() => {
      setDarkMode((prevMode) => !prevMode);
      setImageSrc(darkMode ? "/images/junBlack.png" : "/images/junWhite.png");
      setIsFading(false);
    }, 700); // Match this timeout with your transition duration
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="flex flex-col p-2  md:p-24 dark:bg-gray-900 dark:text-white gap-8">
        <div className="flex flex-col justify-between w-full items-center px-24 md:flex-row">
          <div className="logo text-2xl md:text-4xl">
            <h1>
              Amaro,<span className="font-bold">Jhomari</span>
            </h1>
          </div>

          <div className="flex flex-row gap-4 text-xl items-center">
            <a href="#contact" className="hover:font-bold hover:underline">
              Contact
            </a>
            <a href="#projects" className="hover:font-bold hover:underline">
              Projects
            </a>

            <button
              type="button"
              onClick={toggleDarkMode}
              className="transform duration-300 hover:scale-110"
            >
              {/* <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
              {darkMode ? (
                <DarkModeIcon className="text-4xl" />
              ) : (
                <WbSunnyIcon className="text-4xl" />
              )}
            </button>
          </div>
        </div>

        <section id="introduction" className="">
          <div className="flex flex-col w-full p-2 items-center justify-between md:flex-row my-4 ">
            <div className="w-1/2 flex">
              <Image
                src={`${
                  darkMode ? "/images/junWhite.png" : "/images/junBlack.png"
                }`}
                alt="Profile Image"
                width={400}
                height={400}
                className={`transition-opacity duration-300 ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
            <div className="w-full gap-4 ">
              <div className="flex flex-col gap-4 text-center w-full md:text-justify">
                <p className="text-4xl font-bold">React Developer</p>
                <p className="text-xl">
                  Hello, I am Jhomari Amaro, an aspiring developer from the
                  Philippines. I am passionate about technology and dedicated to
                  honing my skills in web development. My journey began with web
                  development when i was studying BSIT in Forbes College
                  Institution. My goal is simple - to become a professional
                  developer.
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-4 md:flex-row">
                <Link
                  href="./files/AMARO, JHOMARI BALANE (2).pdf"
                  download
                  className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 flex flex-row gap-2 items-center justify-center"
                >
                  <p>Download CV</p>
                  <FontAwesomeIcon icon={faDownload} className="w-6" />
                </Link>
                <Link
                  href="https://github.com/Amaro018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 text-white rounded hover:bg-gray-900 flex flex-row gap-2 items-center justify-center"
                >
                  <p>GitHub</p>
                  <FontAwesomeIcon icon={faGithub} className="w-6" />
                </Link>
              </div>
              <SkillMe darkMode={darkMode} />
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`${darkMode ? "text-white" : "text-black"}`}
        >
          <Projects darkMode={darkMode} />
        </section>

        <ContactMe darkMode={darkMode} />
      </main>
      <footer className="w-full dark:bg-gray-900 dark:text-white border-t-2">
        <div className="text-center p-4 flex flex-row justify-center gap-4">
          <p>2024 Copyright: Amaro Jhomari</p>
          <button
            type="button"
            onClick={toggleDarkMode}
            className="transform duration-300 hover:scale-110"
          >
            {/* <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
            {darkMode ? (
              <DarkModeIcon className="text-2xl" />
            ) : (
              <WbSunnyIcon className="text-2xl" />
            )}
          </button>
        </div>
      </footer>

      {/* <button className="fixed w-16 h-16 bottom-16 right-16 bg-neutral dark:bg-white rounded-full border border-black" onClick={toggleDarkMode}>{darkMode ? "Light" : "dark"}</button> */}
    </div>
  );
}
