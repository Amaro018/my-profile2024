"use client";
import { useState, useEffect, createContext, useContext } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Projects from "./projects.js";
import Link from "next/link.js";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


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

      <main
        className="flex flex-col p-2  md:p-24 dark:bg-gray-900 dark:text-white gap-8"
      >
        <div className="flex flex-col justify-between w-full items-center px-24 md:flex-row">
          <div className="logo text-2xl md:text-4xl">
            <h1>
              Amaro,<span className="font-bold">Jhomari</span>
            </h1>
          </div>

          <div className="flex flex-row gap-4 text-xl items-center" > 

            <a href="#contact" className="hover:font-bold hover:underline">
              Contact
            </a>
            <a href="#projects" className="hover:font-bold hover:underline">
              Projects
            </a>
       
            <button type="button" onClick={toggleDarkMode} className="transform duration-300 hover:scale-110">
              {/* <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
              {darkMode ? <DarkModeIcon className="text-4xl"/> : <WbSunnyIcon className="text-4xl"/>}
            </button>
          </div>

        </div>

        <section id="introduction" className="">
          <div className="flex flex-col w-full p-2 items-center justify-between md:flex-row my-4 ">
            <div className="w-1/2 flex">
              <Image
                src={`${darkMode ? "/images/junWhite.png" : "/images/junBlack.png"}`}
                alt="Profile Image"
                width={400}
                height={400}
                className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}
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
                  Institution. My goal is simple - to become a professional developer.
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

        <div className="flex flex-col gap-4 mt-4">
            <p className="text-4xl font-bold text-center md:text-left">Skills</p>
        </div>
          <div className="w-full flex flex-row gap-4 mt-2 md:mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill={`${darkMode ? "white" : "black"}`}
              className="w-24 h-24"
            >
              <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill={`${darkMode ? "white" : "black"}`}
              className="w-24 h-24"
            >
              <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
            </svg>

            <svg
              className="w-24 h-24"
              viewBox="10 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.49 18.205C14.962 9.526 21.064 6.19 28.796 8.197c3.723.996 6.297 3.263 8.017 6.245 2.96 4.986 5.974 6.76 9.085 5.325 1.49-.7 2.978-2.113 4.468-4.225-4.47 8.679-10.574 12.014-18.305 10.008-3.722-.997-6.296-3.263-8.016-6.246-2.96-4.986-5.975-6.76-9.085-5.325-1.491.7-2.979 2.113-4.469 4.225zm16 18C36.962 27.526 43.064 24.19 50.796 26.197c3.723.996 6.297 3.263 8.017 6.245 2.96 4.986 5.974 6.76 9.085 5.325 1.49-.7 2.978-2.113 4.468-4.225-4.47 8.679-10.574 12.014-18.305 10.008-3.722-.997-6.296-3.263-8.016-6.246-2.96-4.986-5.975-6.76-9.085-5.325-1.491.7-2.979 2.113-4.469 4.225z"
                fill={`${darkMode ? "white" : "black"}`}
                fillRule="nonzero"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill={`${darkMode ? "white" : "black"}`}
              className="w-24 h-24"
            >
              <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill={`${darkMode ? "white" : "black"}`}
              className="w-24 h-24"
            >
              <path d="M504.4 115.8a5.7 5.7 0 0 0 -.3-.7 8.5 8.5 0 0 0 -.5-1.3 6 6 0 0 0 -.5-.7 9.4 9.4 0 0 0 -.7-.9c-.2-.2-.5-.4-.8-.6a8.8 8.8 0 0 0 -.9-.7L404.4 55.6a8 8 0 0 0 -8 0L300.1 111h0a8.1 8.1 0 0 0 -.9 .7 7.7 7.7 0 0 0 -.8 .6 8.2 8.2 0 0 0 -.7 .9c-.2 .2-.4 .5-.5 .7a9.7 9.7 0 0 0 -.5 1.3c-.1 .2-.2 .4-.3 .7a8.1 8.1 0 0 0 -.3 2.1V223.2l-80.2 46.2V63.4a7.8 7.8 0 0 0 -.3-2.1c-.1-.2-.2-.5-.3-.7a8.4 8.4 0 0 0 -.5-1.2c-.1-.3-.4-.5-.5-.7a9.4 9.4 0 0 0 -.7-.9 9.5 9.5 0 0 0 -.8-.6 9.8 9.8 0 0 0 -.9-.7h0L115.6 1.1a8 8 0 0 0 -8 0L11.3 56.5h0a6.5 6.5 0 0 0 -.9 .7 7.8 7.8 0 0 0 -.8 .6 8.2 8.2 0 0 0 -.7 .9c-.2 .3-.4 .5-.6 .7a7.9 7.9 0 0 0 -.5 1.2 6.5 6.5 0 0 0 -.3 .7 8.2 8.2 0 0 0 -.3 2.1v329.7a8 8 0 0 0 4 7l192.5 110.8a8.8 8.8 0 0 0 1.3 .5c.2 .1 .4 .2 .6 .3a7.9 7.9 0 0 0 4.1 0c.2-.1 .4-.2 .6-.2a8.6 8.6 0 0 0 1.4-.6L404.4 400.1a8 8 0 0 0 4-7V287.9l92.2-53.1a8 8 0 0 0 4-7V117.9A8.6 8.6 0 0 0 504.4 115.8zM111.6 17.3h0l80.2 46.2-80.2 46.2L31.4 63.4zm88.3 60V278.6l-46.5 26.8-33.7 19.4V123.5l46.5-26.8zm0 412.8L23.4 388.5V77.3L57.1 96.7l46.5 26.8V338.7a6.9 6.9 0 0 0 .1 .9 8 8 0 0 0 .2 1.2h0a5.9 5.9 0 0 0 .4 .9 6.4 6.4 0 0 0 .4 1v0a8.5 8.5 0 0 0 .6 .8 7.6 7.6 0 0 0 .7 .8l0 0c.2 .2 .5 .4 .8 .6a8.9 8.9 0 0 0 .9 .7l0 0 0 0 92.2 52.2zm8-106.2-80.1-45.3 84.1-48.4 92.3-53.1 80.1 46.1-58.8 33.6zm184.5 4.6L215.9 490.1V397.8L346.6 323.2l45.8-26.2zm0-119.1L358.7 250l-46.5-26.8V131.8l33.7 19.4L392.4 178zm8-105.3-80.2-46.2 80.2-46.2 80.2 46.2zm8 105.3V178L455 151.2l33.7-19.4v91.4h0z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill={`${darkMode ? "white" : "black"}`}
              className="w-24 h-24"
            >
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill={`${darkMode ? "white" : "black"}`}
              className="w-24 h-24"
            >
              <path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill={`${darkMode ? "white" : "black"}`}
              className="w-24 h-24"
            >
              <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
            </svg>
          </div>
            </div>
          </div>
        </section>


        
        <section id="projects" className={`${darkMode ? "text-white" : "text-black"}`}>
          <Projects darkMode={darkMode}/>
        </section>

        <section id="contact" className="flex flex-col justify-center border-2 border-slate-400 w-3/4 mx-auto p-4 rounded-lg shadow-lg gap-4">
          <div className="text-center">
            <p className="text-4xl font-bold">Contact Me</p>
          </div>
          <div className="w-full flex flex-col md:px-24 gap-4 items-center">
            <div className="flex flex-col gap-2 w-full text-center md:text-justify">
              <p className="text-xl text-center">
                Interested in collaborating or have a project in mind? Let's
                connect! You can reach out to me via email or LinkedIn.
              </p>
              <div className="flex flex-col justify-center gap-4 md:flex-row">
          <Link href="mailto:jhomari.amaro@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 items-center hover:underline">
<AlternateEmailIcon/> jhomari.amaro@gmail.com
          </Link>


          <Link href="https://www.linkedin.com/in/jhomari-amaro-945987242" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 items-center hover:underline">
<LinkedInIcon/> Jhomari Amaro
          </Link>

          <Link href="https://www.facebook.com/amaro018/" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 items-center hover:underline">
<FacebookRoundedIcon/> Facebook
          </Link>

              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full dark:bg-gray-900 dark:text-white border-t-2">
    <div className="text-center p-4 flex flex-row justify-center gap-4">
            <p>
            2024 Copyright: Amaro Jhomari
            </p>
            <button type="button" onClick={toggleDarkMode} className="transform duration-300 hover:scale-110">
              {/* <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
              {darkMode ? <DarkModeIcon className="text-2xl"/> : <WbSunnyIcon className="text-2xl"/>}
            </button>
     </div>
</footer>

      {/* <button className="fixed w-16 h-16 bottom-16 right-16 bg-neutral dark:bg-white rounded-full border border-black" onClick={toggleDarkMode}>{darkMode ? "Light" : "dark"}</button> */}
      </div>
  );
}
