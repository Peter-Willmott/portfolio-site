import React from "react";

// Import Components
import Navigation from "./components/core/navigation";
import Landing from "./components/landing/landing";
import Skills from "./components/skills/skills";
import Portfolio from "./components/projects/portfolio";
import Particles from "./components/core/backgroundParticles";

const App = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font m-auto">
      <Navigation />
      <Particles />
      <div className="bg-gray-900 opacity-95 contentContainer">
      <Landing />
      <Portfolio />
      <Skills />
      </div>
    </main>
  );
};

export default App;
