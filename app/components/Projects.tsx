"use client";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiFirebase, SiSpringboot, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiReact, SiMongodb } from "react-icons/si";
import Tilt from 'react-parallax-tilt';

// Project Data
const projects = [
  {
    title: "Chess: Tips & Tricks",
    description: "An interactive chess learning app that provides strategies and tips for all skill levels.",
    image: "/chess-tricks.png",
    techStack: [SiFlutter, SiFirebase],
    liveLink: "https://play.google.com/store/apps/details?id=com.atomdyno.chess_tips_and_tricks",
    githubLink: "https://github.com/AtomDyno/chess-app",
  },
  {
    title: "AtomDyno Tools",
    description: "A comprehensive suite of PDF management tools including compress, convert, and edit features.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQH7QtWSwjRB1g/feedshare-shrink_2048_1536/B56ZWePSY5GUAo-/0/1742116563224?e=1745452800&v=beta&t=kHMzIb7CiAtoP3t-FKTAafEzfrDAwMwl1S98JV0c9R4",
    techStack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase],
    liveLink: "https://atomdyno.com",
    githubLink: "https://github.com/AtomDyno/pdf-tools",
  },
  {
    title: "B.Tech CSE Notes App",
    description: "A dedicated notes app for CSE students to access resources and study materials.",
    image: "/btech.png",
    techStack: [SiFlutter, SiFirebase],
    liveLink: "https://play.google.com/store/apps/details?id=com.atomdyno.btech_cse_notes",
    githubLink: "https://github.com/AtomDyno/image-resizer",
  },
  {
    title: "Food Delivery App",
    description: "A seamless food ordering platform built with MERN stack, providing real-time tracking and secure payments.",
    image: "/food.png",
    techStack: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
    liveLink: "https://github.com/amancd/food-app-mern",
    githubLink: "https://github.com/AtomDyno/image-resizer",
  },
  {
    title: "Nike Hero Page",
    description: "A visually captivating landing page designed for Nike, showcasing their latest products with dynamic animations.",
    image: "/nike.png",
    techStack: [SiReact],
    liveLink: "https://github.com/amancd/Reactjs-nike",
    githubLink: "https://github.com/AtomDyno/image-resizer",
  },
  {
    title: "Med App",
    description: "A medical management app that provide features like appointmnet, EHR, Telemedicine, and IOMT.",
    image: "/placeholder.png",
    techStack: [SiFlutter, SiFirebase],
    liveLink: "https://github.com/amancd/medapp_v2.0/",
    githubLink: "https://github.com/AtomDyno/image-resizer",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="w-full min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-16">Innovative Products</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.05}>
            <div className="relative bg-black p-6 rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
              {/* Project Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>

              {/* Tech Stack Icons */}
              <div className="flex mt-4 space-x-4">
                {project.techStack.map((Icon, i) => (
                  <Icon key={i} className="text-gray-300 text-2xl" />
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex space-x-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-300">
                  <FaExternalLinkAlt className="mr-2" />  Live Link
                </a>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
