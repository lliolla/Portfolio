import React from 'react';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Nav from '../components/Nav';
import Projects from '../components/Projects';

const Project2 = () => {
    return (
        <main>
        <Mouse/>
        <div className="project">
            <Nav/>
            <Logo />
            <Projects idProject={1}  />
            <Buttons left={"/projet-1"} right={"/projet-3"}  />
        </div>
    </main>
    );
};

export default Project2;