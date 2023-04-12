import React from 'react';
import { NavLink} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div className="notFound">
                <div className="notFound-content">
                   <h2>Erreur</h2>
                <NavLink to="/">
                <h3>retour à l'acceuil <i className='fas fa-home' ></i> </h3>

                </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;