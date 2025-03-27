import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header(){

    const location = useLocation();

    if (location.pathname === '/')
        return (
            <header>
                <p className="header">FLEDGLINGS</p>
            </header>
        );

    return  (
        <header>
            <Link to="/" className="site-title">
                <p className="small-header">fledglings</p>
            </Link>
        </header>
    );
}

export default Header;