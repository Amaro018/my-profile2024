
"use client";
import { useState, useEffect, createContext, useContext } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link.js";



export default function NavBar(props) {
  const [darkMode, setDarkMode] = useState(false);
const [imageSrc, setImageSrc] = useState("/images/junBlack.png");
const [isFading, setIsFading] = useState(false);
    return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center w-full p-4">
          <div className="logo text-2xl md:text-4xl">
            <h1>
              Amaro,<span className="font-bold">Jhomari</span>
            </h1>
          </div>
          <div className="flex flex-row gap-4 text-xl" > 
            <a href="#about" className="hover:font-bold hover:underline">
              About
            </a>
            <a href="#skill" className="hover:font-bold hover:underline">
              Skill
            </a>
            <a href="#contact" className="hover:font-bold hover:underline">
              Contact
            </a>
            <a href="#projects" className="hover:font-bold hover:underline">
              Projects
            </a>
            <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium hidden sm:block md:block lg:block">
            {`${darkMode ? "Dark" : "Light"}`}
          </span>
        </label>
          </div>
      </div>
    </div>
    )
}