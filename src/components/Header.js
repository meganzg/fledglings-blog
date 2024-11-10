import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header(){

    const location = useLocation();

    if (location.pathname === '/')
        return (
            <header>
                <Link to="/" className="site-title">
                    <h1 className="header">Fledglings</h1>
                </Link>
            </header>
        );

    return  (
        <header>
            <Link to="/" className="site-title">
                <h4 className="small-header">fledglings</h4>
            </Link>
        </header>
    );
}

export default Header;