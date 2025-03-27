import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {

    const location = useLocation();

    return location.pathname === '/' ? (
        <nav className="navigation"> {/*create navigation bar*/}
            <ul>
                {/*create clickable links that point to route paths defined in App.js*/}  
                <li><Link to="/poetry">POETRY</Link></li>
                <li><Link to="/fiction">FICTION</Link></li>
                <li><Link to="/nonfiction">NONFICTION</Link></li>
                <li><Link to="/art">ART</Link></li>
                <li><Link to="/Submit">SUBMIT</Link></li>
                <li><Link to="/About">ABOUT</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
            </ul>
        </nav>
    ) : (
        <nav className="small-navigation"> {/*create navigation bar*/}
            <ul>
                {/*create clickable links that point to route paths defined in App.js*/}
            <li><Link to="/poetry">POETRY</Link></li>
            <li><Link to="/fiction">FICTION</Link></li>
            <li><Link to="/nonfiction">NONFICTION</Link></li>
            <li><Link to="/art">ART</Link></li>
            <li><Link to="/Submit">SUBMIT</Link></li>
            <li><Link to="/About">ABOUT</Link></li>
            <li><Link to="/Contact">CONTACT</Link></li>
            </ul>
        </nav>
    );

}

export default Navigation;