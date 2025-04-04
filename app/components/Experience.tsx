"use client";
import React from "react";

const experiences = [
  {
    company: "EffiGo Global Pvt Ltd",
    location: "Bangalore, India",
    role: "Product Engineering Intern",
    duration: "Jan 2025 - Mar 2025",
    details: [
      "Developed scalable backend services using Spring Boot, improving procurement software performance by 40%.",
      "Integrated microservices using REST APIs, enhancing inter-module communication and system reliability.",
      "Collaborated cross-functionally to design and implement new procurement features, reducing processing time by 20%.",
    ],
  },
  {
    company: "Healtether Healthcare Pvt Ltd",
    location: "Chennai, India",
    role: "Software Developer Intern",
    duration: "Mar 2024 – May 2024",
    details: [
      "Implemented RESTful APIs, improving data retrieval speed by 30% and enhancing overall app performance.",
      "Utilized BLOC (Business Logic Component) for effective state management in the Flutter app.",
      "Developed and optimized backend logic to handle a 20% increase in user load, improving system efficiency and scalability.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full min-h-150 bg-black text-white flex flex-col justify-center items-center py-20 px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-16">Experience</h2>
      <div className="w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg mb-8 shadow-xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500"></span>
            <h3 className="text-2xl font-semibold">{exp.company}</h3>
            <p className="text-gray-400">{exp.location}</p>
            <p className="text-gray-500 italic mb-4">{exp.role} • {exp.duration}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 
