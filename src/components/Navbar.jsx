import "./Navbar.css";
import logo from "../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={sticky ? "navbar sticky" : "navbar"}>

      <NavLink
        to="/"
        className="logo-container"
        onClick={closeMenu}
      >
        <img
          src={logo}
          alt="Velvora Global Exim Logo"
          className="logo"
        />
      </NavLink>


      <button
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>


      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/export-markets" onClick={closeMenu}>
            Global Markets
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="nav-contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;