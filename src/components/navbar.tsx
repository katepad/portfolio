import React, { useState } from 'react';
import '../styles/global.css'; 
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Site Name */}
        <div className="navbar-brand"> KATE PADUGANAO </div>

        {/* Hamburger */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Links */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
