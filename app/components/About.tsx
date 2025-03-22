"use client";
import React, { useEffect, useState } from "react";

export default function AboutMe() {
  const [output, setOutput] = useState<string[]>([]);
  const commands = [
    "% cd ~/wpaman",
    "% echo 'Aman Singh'",
    "Aman Singh - Full Stack Developer",
    "% echo 'skills'",
    "Next.js, Flutter, Firebase, Spring Boot, TypeScript",
    "% echo 'interests'",
    "Building Scalable Web Solutions, Problem Solving",
    "% echo 'hobbies'",
    "Coding, Exploring Tech, Creating Innovative Products",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < commands.length) {
        setOutput((prev) => [...prev, commands[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="w-full min-h-screen bg-black text-white flex items-center justify-center py-20 px-4 md:px-8 lg:px-12">
      <div className="w-full max-w-4xl p-6 bg-black border border-gray-700 rounded-lg shadow-lg font-mono text-lg leading-relaxed">
        {/* Terminal Header */}
        <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded-t-lg flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4">zsh — aman@MacBook ~</span>
        </div>

        {/* Terminal Content */}
        <div className="bg-black p-4 overflow-auto h-96 border-t border-gray-700">
          {output.map((line, index) => (
            <div key={index} className="text-gray-300 whitespace-pre-wrap leading-8">
              {line}
              <br/>
            </div>
          ))}
          <div className="text-gray-500 animate-blink">_</div>
        </div>
      </div>
    </section>
  );
}

// CSS for cursor blink effect
const blinkStyles = `
  @keyframes blink {
    50% { opacity: 0; }
  }
  .animate-blink {
    animation: blink 1s step-end infinite;
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = blinkStyles;
  document.head.appendChild(styleSheet);
}
