import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import Social from "../components/Social";
import TextEffect from "../components/TextEffect";
import { motion } from "framer-motion"
const Home = () => {
    const variants ={
        initial:{
            opacity:0,
            transition:{duration:0.5},
            x:100
        },
        animate:{
            opacity:1,
            x:0
        },
        exit:{
            opacity:0,
            transition:{duration:0.3},
            x:-100
        }
    }
  return (
    <div>
   <Mouse />
      <motion.div 
      className="home"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}

      >
        <Nav />
        <Social />
        <div className="home-main">
          <div className="main-content">
            <motion.h1 
            drag 
            dragConstraints={{
                left:-250,right:950,bottom:250, top:-250 
            }} >Fanny Jobert</motion.h1>
            <motion.h2
             drag 
             dragConstraints={{
                 left:-250,right:950,bottom:250, top:-250 
             }} >
              <TextEffect />
            </motion.h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </motion.div>
    </div>
  );
};

export default Home;
