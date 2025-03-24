"use client";
import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Hero() {
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
    <div className="w-full h-screen bg-gradient-to-br from-black to-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl text-center px-4 sm:px-6 md:px-8 relative z-10">
        {/* Title Section */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
          Hey, I&apos;m <span className="text-gray-300">Aman Singh</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-4">
          A Full Stack Developer passionate about building scalable web solutions with clean code and intuitive design.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
          <a href="#projects" onClick={handleSmoothScroll} className="px-8 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl">
            View Projects
          </a>
          <a href="https://linkedin.com/in/aman-singh-dev" className="px-8 py-2 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Me
          </a>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-gray-800 to-black opacity-30 rounded-full blur-3xl animate-spin-slow" />
      <div className="absolute bottom-10 right-10 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-black to-gray-800 opacity-30 rounded-full blur-3xl animate-spin-slow-reverse" />

      {/* Interactive Particles */}
      <canvas id="particle-canvas" className="absolute inset-0 w-full h-full" />

      {/* Double Arrow Animation */}
      <div className="absolute bottom-12 flex flex-col items-center z-10">
        <FaAngleDoubleDown className="text-gray-400 text-4xl animate-bounce" />
      </div>

      {/* Script for Particles Effect */}
      <script>
        {`
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        class Particle {
          constructor(x, y, size, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speedX = speedX;
            this.speedY = speedY;
          }
          draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
          }
          update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.02;
          }
        }

        function createParticles(x, y) {
          for (let i = 0; i < 5; i++) {
            particles.push(new Particle(x, y, Math.random() * 4 + 1, Math.random() * 3 - 1.5, Math.random() * 3 - 1.5));
          }
        }

        function animateParticles() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            if (particle.size <= 0.2) particles.splice(index, 1);
          });
          requestAnimationFrame(animateParticles);
        }
        animateParticles();

        window.addEventListener('mousemove', (e) => createParticles(e.x, e.y));
        `}
      </script>
    </div>
  );
}
