import React from 'react';
import { Code2, Palette, Database, Gamepad2, GitBranch, Monitor } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: any }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
    <Icon className="w-8 h-8 mb-4 text-violet-600" />
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center">
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-700">{skill}</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full"
                style={{ width: `${Math.random() * 30 + 70}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: Palette,
      skills: ["Blender", "Figma", "Canva"]
    },
    {
      title: "Web Development",
      icon: Code2,
      skills: ["React", "Node.js", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Programming",
      icon: Monitor,
      skills: ["Java", "C++", "Flutter", "Dart"]
    },
    {
      title: "Game Development",
      icon: Gamepad2,
      skills: ["Unity", "Unreal Engine", "3D Modeling", "Animation"]
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "GitLab"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Firebase"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Technical Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}