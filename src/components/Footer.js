import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <img src="/path-to-your-logo.png" alt="Logo" className="footer-logo" />
        <p>Contact Us</p>
        <div className="social-icons">
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-tumblr"></i></a>
        </div>
      </div>
      <div className="footer-right">
        <ul className="footer-links">
          <li><Link to="/fiction">Fiction</Link></li>
          <li><Link to="/poetry">Poetry</Link></li>
          <li><Link to="/nonfiction">Nonfiction</Link></li>
          <li><Link to="/art">Art</Link></li>
          <li><Link to="/submit">Submit</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
