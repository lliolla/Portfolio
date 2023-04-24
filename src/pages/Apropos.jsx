import React from "react";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import { motion } from "framer-motion"

const Apropos = () => {
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
    <main>
      <Mouse />
      <motion.div className="about" initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}>
        <Nav />
        <Logo />
        <div className="container">
        <div className="about-container">
          <h2>A propos</h2>
          <div className="circle"></div>
          <p>
            Développeuse web passionnée par le monde digital, je suis à la
            recherche d'un nouveau projet passionnant a partager avec vos
            équipes
          </p>
        </div>
        <div className="stack-container">
          <h2>Ma stack</h2>
          <div className="stack-icons">
            <div>
    
              <img src="/public/assets/logo/node.png" alt="" />
            </div>
            <div>
              <img src="/public/assets/logo/js.png" alt=""  />
            </div>
            <div>
    
              <img src="/public/assets/logo/react.png" alt="" />
            </div>
            <div>
    
              <img src="/public/assets/logo/vuejs.png" alt="" />
            </div>
            <div>
    
              <img src="/public/assets/logo/sql.png" alt="" style={{width:"100%"}}/>
            </div>
          </div>
        </div>
        </div>
        
      </motion.div>
    </main>
  );
};

export default Apropos;
