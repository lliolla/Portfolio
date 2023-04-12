import React from 'react';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Nav from '../components/Nav';
import Projects from '../components/Projects';

const Project3 = () => {
    return (
        <main>
            <Mouse/>
            <div className="project">
                <Nav/>
                <Logo />
                <Projects idProject={2}  />
                <Buttons left={"/projet-2"} right={"/projet-4"}  />
            </div>
        </main>
        
    );
};

export default Project3;