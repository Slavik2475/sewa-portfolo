import React from 'react';
import { Github, Linkedin, Mail, Gamepad2 } from 'lucide-react';
import { images } from '../assets/images';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="absolute inset-1 bg-[url('/src/assets/background.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-7 relative">
            <img 
              src={images.hero.profile}
              alt="Slavik Dcosta" 
              className="w-44 h-44 rounded-full mx-auto object-cover border-4 border-violet-400 shadow-lg"
            />
            <div className="absolute -bottom-6 right-1/2 transform translate-x-20">
              <Gamepad2 className="w-10 h-10 text-violet-400" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Slavik Dcosta
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Game Developer | App Developer | Full-Stack Engineer
          </p>
          <p className="text-lg mb-12 text-gray-400">
            Crafting immersive digital experiences through code and creativity
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="transform hover:scale-110 transition-transform">
              <Github className="w-8 h-8 text-gray-200 hover:text-[#211F1F]" /> {/* GitHub color */}
            </a>
            <a href="https://linkedin.com" className="transform hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8 text-gray-200 hover:text-[#0077B5]" /> {/* LinkedIn color */}
            </a>
            <a href="mailto:contact@slavik.dev" className="transform hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-gray-200 hover:text-[#EA4335]" /> {/* Email color */}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}