import { React, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {

    const location = useLocation();

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 200; // range for full shrink effect
            const progress = Math.min(scrollY / maxScroll, 1); // clamp between 0 and 1
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return location.pathname === '/' ? (
        <nav className="navigation" style={{
            height: `${250 - 170 * scrollProgress}px`,
            boxShadow: scrollProgress > 0 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        }}> {/*create navigation bar*/}
            <ul className="nav-text" style={{
                transform: `translate(${ -10 * scrollProgress }px, ${ -10 * scrollProgress }px)`,
            }}>
                {/*create clickable links that point to route paths defined in App.js*/} 
                <p className="head" style={{
                    fontSize: `${75 - 45 * scrollProgress}px`,
                    marginRight: `${70 - 40 * scrollProgress}px`,
                    transform: `translate(${ -150 * scrollProgress }px, ${ -105 * scrollProgress }px)`,
                    fontFamily: 'BentonModDisplay',
                }}>fledglings</p>
                <li><Link to="/fiction">Fiction</Link></li>
                <li><Link to="/poetry">Poetry</Link></li>
                <li><Link to="/nonfiction">Nonfiction</Link></li>
                <li><Link to="/art">Art</Link></li>
                <li><Link to="/Submit">Submit</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>
    ) : (
        <nav className="small-navigation"> {/*create navigation bar*/}
            <ul>
                {/*create clickable links that point to route paths defined in App.js*/}
            <li><Link to="/"><p className="small-head">fledglings</p></Link></li>
            <li><Link to="/fiction">Fiction</Link></li>
            <li><Link to="/poetry">Poetry</Link></li>
            <li><Link to="/nonfiction">Nonfiction</Link></li>
            <li><Link to="/art">Art</Link></li>
            <li><Link to="/Submit">Submit</Link></li>
            <li><Link to="/About">About</Link></li>
            </ul>
        </nav>
    );

}

export default Navigation;