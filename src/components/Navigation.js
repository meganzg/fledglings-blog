import { React, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import { CiInstagram } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


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
                <ul className="social-links" style = {{marginRight: `${0 + 150 * scrollProgress}px`, marginTop: `-5px`}}>
                    <a href="https://www.instagram.com/fledglingsmag/" className="insta-link">
                        <PiInstagramLogoLight className="insta" /></a>
                    <a href="https://www.instagram.com/fledglingsmag/" className="twitter-link">
                        <FaTwitter className="twitter" /></a>
                    <a href="https://www.instagram.com/fledglingsmag/" className="facebook-link">
                        <FaFacebookF className="facebook"/></a>
                </ul>
                <p className="head" style={{
                    fontSize: `${90 - 50 * scrollProgress}px`,
                    marginRight: `${30 - 40 * scrollProgress}px`,
                    transform: `translate(${ -150 * scrollProgress }px, ${ -100 * scrollProgress }px)`,
                    fontFamily: 'Sabon',
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