"use client";
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId || '');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="w-full bg-black text-white py-4 fixed top-0 z-50">
      <div className="container mx-auto flex justify-center items-center space-x-8">
        {/* Navigation Links */}
        <a href="#about" onClick={handleSmoothScroll} className="hover:text-gray-400 transition">About</a>
        <a href="#skills" onClick={handleSmoothScroll} className="hover:text-gray-400 transition">Skills</a>
        <a href="#projects" onClick={handleSmoothScroll} className="hover:text-gray-400 transition">Projects</a>

        {/* Icons */}
        <a href="https://github.com/amancd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/aman-singh-dev" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <FaLinkedin size={24} />
        </a>
      </div>
    </nav>
  );
}
