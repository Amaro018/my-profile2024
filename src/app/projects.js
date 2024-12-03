// components/Projects.js

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "ONLINE RENTAL SHOP",
    description:
      "ONGOING PROJECT. A simple online rental shop made by blitzjs",
      image: "/images/default.jpg",
    link: "https://github.com/Amaro018/react-subli",
  },
  {
    id: 2,
    title: "IZEEK INVENTORY SYSTEM",
    description:
      "FINISHED. an inventory system for the company izeek which stores and manages products of their company",
    image: "/images/default.jpg",
    link: "https://github.com/Amaro018/izeek",
  },
  {
    id: 3,
    title: "BARANGAY HEALTH MONITORING SYSTEM",
    description:
      "FINISHED. a system that automatically monitors the health status of barangay residents",
      image: "/images/default.jpg",
    link: "https://github.com/Amaro018/NHMS",
  },
];

const Projects = (props) => {
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
      <div className="flex flex-wrap justify-center gap-4 ">
        {projects.map((project) => (
          <Link
          href={project.link}
          target="_blank"
          key={project.id}
          className={`p-4 rounded-md shadow-md w-80 flex flex-col items-center hover:shadow-lg hover:shadow-gray-500 transition duration-300 ease-in-out ${props.darkMode ? 'bg-gray-400 text-black' : 'bg-slate-900 text-white'}`}
          >
            <div className="w-full h-32 my-2">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}        
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="text-center flex flex-col my-2">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
