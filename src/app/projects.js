// components/Projects.js

import { useEffect, useState } from "react";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Temp Converter",
    description:
      "A simple temperature converter from celcius to farenheit and vice versa made by old skool html,css and js",
    image: "/images/temp.png",
    link: "https://temperature-converter-jade.vercel.app/",
  },
  {
    id: 2,
    title: "Jak En Poy",
    description:
      "A simple rock, paper, scissors game with computer made by old skool html,css and js",
    image: "/images/game.png",
    link: "https://jak-en-poy-ten.vercel.app/",
  },
  {
    id: 3,
    title: "Stop Watch",
    description: "A simple Stop watch made by react with vite",
    image: "/images/stop.png",
    link: "https://stop-watch-react-tau.vercel.app/",
  },
  {
    id: 4,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/jun.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/jun.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/jun.jpg",
    link: "#",
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
    <section id="projects" className="w-full px-24">
      <div className="text-center my-4">
        <p className="text-4xl font-bold">Projects</p>
      </div>
      <div className="flex flex-wrap justify-center  gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" p-2 rounded-md shadow-md w-80 flex flex-col items-center"
          >
            <div className="w-full h-96 relative mb-2 rounded-lg border border-blue-300">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="text-center flex flex-col">
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
