import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex flex-col p-2 bg-white dark:text-white dark:bg-black md:p-24">
      <div className="flex flex-col justify-between w-full items-center md:flex-row">
        <div className="logo text-4xl md:text-7xl">
          <h1>
            Amaro,<span className="font-bold">Jhomari</span>
          </h1>
        </div>
        <div className="flex flex-row gap-4 text-xl">
          <h1>About</h1>
          <h1>Skill</h1>
          <h1>Contact</h1>
          <h1>Projects</h1>
        </div>
      </div>

      <div className="flex flex-col w-full p-2 items-center justify-between md:flex-row md:px-24">
        <div className="w-full">
          <Image
            src="/images/jun.jpg" // Directly reference the image in the public folder
            alt="Profile Image"
            width={400}
            height={400}
          />
        </div>
        <div className="w-full gap-4">
          <div className="flex flex-col gap-4 bg-red-900 w-full text-center md:bg-white md:text-left">
            <p className="text-5xl">Web Dev</p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              lacinia, dolor ac tristique iaculis, sem nisl commodo purus, vel
              dictum lorem mi eu erat. Ut hendrerit pharetra ullamcorper. Ut
              egestas dolor magna, nec dapibus turpis sagittis id. Vivamus
              facilisis accumsan purus, nec porttitor diam semper ut. Nunc
              aliquet porttitor elit eget imperdiet. Vivamus sit amet ultrices
              erat. Fusce et facilisis mi. Morbi sed finibus urna. Cras
              facilisis erat eu massa fermentum suscipit.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-4 md:flex-row">
            <a
              href="/files/Jhomari_Amaro_CV.pdf"
              download
              className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 flex flex-row gap-2 items-center justify-center"
            >
              <p>Download CV</p>
              <FontAwesomeIcon icon={faDownload} className="w-6" />
            </a>
            <a
              href="https://github.com/Amaro018"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 text-white rounded hover:bg-gray-900 flex flex-row gap-2 items-center justify-center"
            >
              <p>GitHub</p>
              <FontAwesomeIcon icon={faGithub} className="w-6" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
