"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
  SiTailwindcss,
  SiSpringboot,
  SiReact,
  SiMongodb,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-400" /> },
  { name: "React", icon: <SiReact size={40} className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
  { name: "Flutter", icon: <SiFlutter size={40} className="text-blue-400" /> },
  { name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
  { name: "MySQL", icon: <SiMysql size={40} className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full min-h-150 py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Skills & Technologies</h2>
        <p className="text-gray-400 mt-4">
          Technologies I use to build fast, scalable, and intuitive applications.
        </p>

        {/* Skill Icons Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform transition duration-300 hover:scale-110"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
