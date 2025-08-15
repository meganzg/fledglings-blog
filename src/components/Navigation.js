import { React, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Navigation() {
    const location = useLocation();

    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) return; // disable shrink behavior on mobile
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 200;
            const progress = Math.min(scrollY / maxScroll, 1);
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return location.pathname === '/' ? (
        <nav
            className="navigation"
            style={{
                height: isMobile ? 70 : `${250 - 170 * scrollProgress}px`,
                boxShadow: !isMobile && scrollProgress > 0 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
            }}
        >
            <ul
                className="nav-text"
                style={{
                    transform: isMobile ? 'none' : `translate(${-10 * scrollProgress}px, ${-10 * scrollProgress}px)`,
                }}
            >
                <ul className="social-links" style={{ marginRight: isMobile ? 0 : `${0 + 150 * scrollProgress}px`, marginTop: '-5px' }}>
                    <a href="https://www.instagram.com/fledglingsmag/" className="insta-link" aria-label="Instagram">
                        <PiInstagramLogoLight className="insta" />
                    </a>
                    <a href="https://twitter.com/" className="twitter-link" aria-label="Twitter">
                        <FaTwitter className="twitter" />
                    </a>
                    <a href="https://www.tumblr.com/" className="tumblr-link" aria-label="Tumblr">
                            <FaTumblr className="tumblr" />
                    </a>
                </ul>
                <p
                    className="head"
                    style={{
                        fontSize: isMobile ? 28 : `${90 - 50 * scrollProgress}px`,
                        marginRight: isMobile ? 0 : `${30 - 40 * scrollProgress}px`,
                        transform: isMobile ? 'none' : `translate(${-150 * scrollProgress}px, ${-100 * scrollProgress}px)`,
                        fontFamily: 'Sabon',
                    }}
                >
                    fledglings
                </p>
                <li className="desktop-only"><Link to="/fiction">Fiction</Link></li>
                <li className="desktop-only"><Link to="/poetry">Poetry</Link></li>
                <li className="desktop-only"><Link to="/nonfiction">Nonfiction</Link></li>
                <li className="desktop-only"><Link to="/art">Art</Link></li>
                <li className="desktop-only"><Link to="/Submit">Submit</Link></li>
                <li className="desktop-only"><Link to="/About">About</Link></li>

                {/* Mobile hamburger */}
                <button className="hamburger" onClick={toggleMenu} aria-label="Open menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </ul>

            {/* Mobile overlay menu */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <span className="mobile-brand">fledglings</span>
                    <button className="mobile-close" onClick={closeMenu} aria-label="Close menu">×</button>
                </div>
                <ul className="mobile-menu-list" onClick={closeMenu}>
                    <li><Link to="/fiction">Fiction</Link></li>
                    <li><Link to="/poetry">Poetry</Link></li>
                    <li><Link to="/nonfiction">Nonfiction</Link></li>
                    <li><Link to="/art">Art</Link></li>
                    <li><Link to="/Submit">Submit</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </div>
        </nav>
    ) : (
        <nav className="small-navigation">
            <ul>
                <li><Link to="/"><p className="small-head">fledglings</p></Link></li>
                <li className="desktop-only"><Link to="/fiction">Fiction</Link></li>
                <li className="desktop-only"><Link to="/poetry">Poetry</Link></li>
                <li className="desktop-only"><Link to="/nonfiction">Nonfiction</Link></li>
                <li className="desktop-only"><Link to="/art">Art</Link></li>
                <li className="desktop-only"><Link to="/Submit">Submit</Link></li>
                <li className="desktop-only"><Link to="/About">About</Link></li>
                <button className="hamburger" onClick={toggleMenu} aria-label="Open menu">
                    <span></span><span></span><span></span>
                </button>
            </ul>
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <span className="mobile-brand">fledglings</span>
                    <button className="mobile-close" onClick={closeMenu} aria-label="Close menu">×</button>
                </div>
                <ul className="mobile-menu-list" onClick={closeMenu}>
                    <li><Link to="/fiction">Fiction</Link></li>
                    <li><Link to="/poetry">Poetry</Link></li>
                    <li><Link to="/nonfiction">Nonfiction</Link></li>
                    <li><Link to="/art">Art</Link></li>
                    <li><Link to="/Submit">Submit</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;