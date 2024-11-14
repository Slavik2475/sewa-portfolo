import React from 'react';
import { Box, Boxes, Target } from 'lucide-react';

const ModelProject = ({ title, description, image, tools }: { title: string; description: string; image: string; tools: string[] }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
    <div className="relative h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span key={index} className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-sm">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function GameDev() {
  const projects = [
    {
      title: "Sci-Fi Environment",
      description: "Futuristic space station interior with detailed props",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      tools: ["Blender", "Substance Painter", "UV Mapping"]
    },
    {
      title: "Character Modeling",
      description: "Detailed character models with rigging and animation",
      image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf",
      tools: ["Blender", "Rigging", "Animation"]
    },
    {
      title: "Architectural Visualization",
      description: "Photorealistic architectural renders and walkthroughs",
      image: "https://images.unsplash.com/photo-1630026317249-c8be3ee4d04c",
      tools: ["Blender", "Cycles Render", "Compositing"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Boxes className="w-16 h-16 mx-auto mb-6 text-violet-400" />
          <h2 className="text-4xl font-bold mb-4">3D Modeling Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Creating immersive 3D environments and characters using Blender
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ModelProject key={index} {...project} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Box className="text-violet-400" />
            Why 3D Modeling?
          </h3>
          <p className="text-gray-300 mb-6">
            3D modeling allows me to bring imagination to life through digital sculpting and design. 
            I specialize in creating detailed models with emphasis on topology, texturing, and optimization for various platforms.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <Target className="w-6 h-6" />
            <span>Currently exploring procedural modeling techniques for environment creation</span>
          </div>
        </div>
      </div>
    </section>
  );
}