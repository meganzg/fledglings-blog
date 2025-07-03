import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header(){

    const location = useLocation();

    return  (
        <header className="site-header">
            <div className="nav-container">
                
            </div>
        </header>
    );
}

export default Header;