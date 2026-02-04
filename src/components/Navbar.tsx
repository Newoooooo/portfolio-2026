import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="p3-navbar">
      {/* Left Side - Brand Logo */}
      <a href="#" className="navbar-brand">
        <img src="/assets/personal-logo.svg" alt="Nheo Manalo" className="navbar-logo" />
      </a>
      
      {/* Right Side - Links */}
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="mailto:nheo.manalo@gmail.com">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
