import React from 'react';
import { Code, Leaf, Home, Coffee } from 'lucide-react';

const ProjectCard = ({ title, description, category, tech, image, link }: { 
  title: string; 
  description: string; 
  category: string; 
  tech: string[];
  image: string;
  link: string;
}) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="block">
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 px-3 py-1 bg-violet-600 text-white rounded-full text-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </a>
);

export default function Projects() {
  const projects = [
    {
      title: "Soil2U",
      description: "Agricultural marketplace connecting farmers with soil testing labs",
      category: "Web App",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
      link: "https://soil2u.com"
    },
    {
      title: "DreamHouse",
      description: "Real estate platform with virtual tours and property management",
      category: "Full Stack",
      tech: ["Next.js", "Firebase", "Three.js"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      link: "https://dreamhouse-realty.com"
    },
    {
      title: "NagarVikas",
      description: "Smart city infrastructure monitoring and management system",
      category: "IoT",
      tech: ["React", "Python", "IoT Sensors", "AWS"],
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      link: "https://nagarvikas.org"
    },
    {
      title: "Ettara Coffee EMS",
      description: "Event management system for coffee tasting and workshops",
      category: "Web App",
      tech: ["Vue.js", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      link: "https://ettara.coffee/events"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Code className="w-16 h-16 mx-auto mb-6 text-violet-600" />
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative solutions across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}