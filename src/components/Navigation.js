import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {

    const location = useLocation();

    return location.pathname === '/' ? (
        <nav className="navigation"> {/*create navigation bar*/}
            <ul>
                {/*create clickable links that point to route paths defined in App.js*/}  
                <li><Link to="/Read">Read</Link></li>
                <li><Link to="/Submit">Submit</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    ) : (
        <nav className="small-navigation"> {/*create navigation bar*/}
            <ul>
                {/*create clickable links that point to route paths defined in App.js*/}
            <li><Link to="/Read">Read</Link></li>
            <li><Link to="/Submit">Submit</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );

}

export default Navigation;