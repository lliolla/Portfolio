import React, { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Projects = (props) => {
  const [currentProject] = useState(projectsData[props.idProject]);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();
  const [plusMinus, setPlusMinus] = useState();
  console.log(left, top, size);
  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 600) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
    setPlusMinus(Math.random() > 0.4 ? 1 : -1); // on cherche a avoir un chiffre neg ou un chiffre positf aleatoiremnt
  }, []);
  //motion parameters
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };
  const transition = {
    ease: [0.3, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  const imgAnnim = {
    initial: {
      opacity: 0,
      x: Math.random() * 350 * plusMinus, // si on multiplie par -1 on a un chiffre neg
      y: Math.random() * 120 * plusMinus, // si on multiplie par -1 on a un chiffre neg
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className="project-main"
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <motion.div
        className="img-content"
        initial="initial"
        animate="visible"
        exit="exit"
        transition={{ duration: 1.2 }}
        variants={imgAnnim}
      >
        <div className="img-container hover">
          <span>
            <h3> {currentProject.title} </h3>
            <p> {currentProject.infos} </p>
          </span>
          <img
            src={currentProject.img}
            alt={currentProject.title}
            className="img"
          />
        </div>
        <div className="button-container">
          <a
            href={currentProject.link}
            target="_blank"
            rel="nooppener noreferrer"
            className="hover"
          >
            <span className="button">Voir le site</span>
          </a>
        </div>
      </motion.div>
      <span
        className="random-circle"
        style={{ left, top, transform: size }}
      ></span>
    </motion.div>
  );
};

export default Projects;
