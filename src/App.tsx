import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import GameDev from './components/GameDev';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Skills />
      <GameDev />
      <Certificates />
      <Projects />
      <Feedback />
    </div>
  );
}

export default App;