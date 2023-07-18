import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/login">Connexion</Link>
                </li>
                <li>
                    <Link to="/home">Accueil</Link>
                </li>
                <li>
                    <Link to="/github">GitHub</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;