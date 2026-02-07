import { useState } from 'react';
import './Navbar.css';
import { ContactModal } from './ContactModal';

const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <nav className="p3-navbar">
        {/* Left Side - Brand Logo */}
        <a href="#" className="navbar-brand">
          <img src="/assets/personal-logo.svg" alt="Nheo Manalo" className="navbar-logo" />
        </a>
        
        {/* Right Side - Links */}
        <div className="navbar-links">
          <a href="#about">About</a>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="navbar-contact-btn"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
    </>
  );
};

export default Navbar;
