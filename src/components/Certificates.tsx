import React from 'react';
import { Award, Trophy, ExternalLink } from 'lucide-react';

const achievements = [
  {
    title: "Smart India Hackathon",
    organization: "Ministry of Education",
    date: "2023",
    description: "Developed an innovative solution for agricultural supply chain management",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    link: "https://www.sih.gov.in/sih2023"
  },
  {
    title: "Hackwartz",
    organization: "Tech Innovation Hub",
    date: "2023",
    description: "First place for developing a sustainable smart city solution",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    link: "https://hackwartz.tech"
  }
];

export default function Certificates() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-violet-600" />
          <h2 className="text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-gray-600">Recognition for innovation and technical excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <a 
              key={index} 
              href={achievement.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-violet-600" />
                  <span className="text-sm text-violet-600 font-semibold">{achievement.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-2">{achievement.organization}</p>
                <p className="text-gray-500 mb-4">{achievement.description}</p>
                <div className="flex items-center gap-2 text-violet-600 group-hover:text-violet-700 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Details</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}