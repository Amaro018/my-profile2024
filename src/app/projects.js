// components/Projects.js

import { useEffect, useState } from "react";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Temp Converter",
    description:
      "A simple temperature converter from celcius to farenheit and vice versa made by old skool html,css and js",
    image: "/images/temp.JPG",
    link: "https://temperature-converter-jade.vercel.app/",
  },
  {
    id: 2,
    title: "Jak En Poy",
    description:
      "A simple rock, paper, scissors game with computer made by old skool html,css and js",
    image: "/images/game.JPG",
    link: "https://jak-en-poy-ten.vercel.app/",
  },
  {
    id: 3,
    title: "Stop Watch",
    description: "A simple Stop watch made by react with vite",
    image: "/images/stop.JPG",
    link: "https://stop-watch-react-tau.vercel.app/",
  },
  {
    id: 4,
    title: "Color Picker",
    description: "A simple color picker made by react with vite",
    image: "/images/colorpick.JPG",
    link: "https://color-picker-gold-delta.vercel.app/",
  },
  {
    id: 5,
    title: "Shiny Pokemon Cry",
    description: "A simple fetching shiny pokemon cry made by html,css,javascript",
    image: "/images/shiny.JPG",
    link: "https://poke-10w5jxy3l-jhomari-amaros-projects.vercel.app/",
  },
  {
    id: 6,
    title: "Weather API",
    description: "Fetching weather data for a city using HTML, CSS, and JavaScript.",
    image: "/images/weather.JPG",
    link: "https://my-weather-app-blush-xi.vercel.app/",
  },
  {
    id: 7,
    title: "TODO LIST",
    description: "A simple todo list using React with vite",
    image: "/images/todo.JPG",
    link: "https://to-do-list-seven-rosy.vercel.app/",
  },
  {
    id: 8,
    title: "Calculator",
    description: "A simple calculator made by HTML,CSS and JS.",
    image: "/images/calcu.JPG",
    link: "https://calculator-olive-one.vercel.app/",
  },
  {
    id: 9,
    title: "Netflix Clone",
    description: "A netflix clone landing page using HTML and CSS",
    image: "/images/clone.JPG",
    link: "https://netflix-clone-wheat-delta.vercel.app/",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchProjects = async () => {
      try {
        // Here we directly use the local projectsData
        setProjects(projectsData);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="w-full px-12">
      <div className="text-center my-4">
        <p className="text-4xl font-bold">Projects</p>
      </div>
      {/* <div className="text-center my-4">
        <p className="text-4xl font-bold">Subli Online Rental Shop</p>
      </div> */}
      <div className="flex flex-wrap justify-center  gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" p-2 rounded-md shadow-md w-80 flex flex-col items-center"
          >
            <div className="w-full h-32 relative my-2">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                
              
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center flex flex-col my-2">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
