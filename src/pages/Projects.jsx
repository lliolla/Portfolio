import React, { useState } from "react";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import Slide from "../components/Slide";
import { projectsData } from "../data/projectsData";

///on creer les chevrons
//on import les images caroussel du composant slide
const Projects = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const projectLenght = projectsData.length;

  const nextSlide = () => {
    setcurrentIndex(currentIndex === projectLenght - 1 ? 0 : currentIndex + 1);
    console.log("setcurrentIndex", currentIndex);
  };
  const prevSlide = () => {
    setcurrentIndex(currentIndex === 0 ? projectLenght - 1 : currentIndex - 1);
    console.log("setcurrentIndex", currentIndex);
  };

  return (
    <main>
      <Mouse />
      <div className="project">
        <Nav />
        <Logo />
      <div className="circle4"></div>
        {projectsData.map((slides, index) => (
          <div key={slides.id}>
            {index === currentIndex && <Slide idProject={slides.id} />}
          </div>
        ))}
        <div className="arrow">
          <div onClick={prevSlide} className="left hover">
            <span> &#10092;</span>
          </div>

          <div onClick={nextSlide} className="right hover">
            <span> &#10093;</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
