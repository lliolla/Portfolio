import React from 'react';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Nav from '../components/Nav';
import Projects from '../components/Projects';

const Project4 = () => {
    return (
        <main>
            <Mouse/>
            <div className="project">
                <Nav/>
                <Logo />
                <Projects idProject={3}  />
                <Buttons left={"/projet-3"} right={"/projet-1"}  />
            </div>
        </main>
        
    );
};

export default Project4;