import React from "react";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Social from "../components/Social";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
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
      <motion.div className="contact" initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}>
        <Nav />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>90 route du grand Pré</p>
              <p>38580 le haut Bréda</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Telephone</h4>
              <CopyToClipboard text="0625623327" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="Clipboard"
                  onClick={() => alert("Téléphone copié!")}
                >
                  06 25 62 33 27
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="fanny.jbt07@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="Clipboard"
                  onClick={() => alert("Email copié!")}
                >
                  fanny.jbt07@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <Social />
          <div className="credits">
            <p>
              Made with{" "}
              <span>
                {" "}
                <BsFillBalloonHeartFill />{" "}
              </span>
              by Fanny Jobert - 2023
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Contact;
