import React from "react";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import Logo from "../components/Logo";

const Apropos = () => {
  return (
    <main>
      <Mouse />
      <div className="about">
        <Nav />
        <Logo />
        <div className="container">
        <div className="about-container">
          <h2>A propos</h2>
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
        
      </div>
    </main>
  );
};

export default Apropos;
