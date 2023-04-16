import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) =>(nav.isActive ? "nav-active hover": "hover")}> <li>Acceuil</li>
                </NavLink>
            <NavLink to="/projects" className={(nav) =>(nav.isActive ? "nav-active hover": "hover")}>Portfolio</NavLink>
            <NavLink to="/a-propos" className={(nav) =>(nav.isActive ? "nav-active hover": "hover")}> 
                <li>A propos</li>
                </NavLink>
         
                <NavLink to="/contact" className={(nav) =>(nav.isActive ? "nav-active hover": "hover")}> 
                <li>Contact</li>
                </NavLink>
         
                   
            </ul>
        </div>
    );
};

export default Nav;