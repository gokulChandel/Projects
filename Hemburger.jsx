import React, { useState, useEffect, useRef } from 'react';
import './Hemburger.css'; // Import your CSS file for styling

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="hamburger-menu" ref={menuRef}>
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* Menu Items */}
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        <a href="/" onClick={() => setIsOpen(false)}>Home</a>
        <a href="/about" onClick={() => setIsOpen(false)}>About</a>
        <a href="/services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;