import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinksRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Adjust height based on toggle
  useEffect(() => {
    const navLinks = navLinksRef.current;
    if (!navLinks) return;

    if (isOpen) {
      navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    } else {
      navLinks.style.maxHeight = "0";
    }
  }, [isOpen]);

  // Adjust on resize
  useEffect(() => {
    const handleResize = () => {
      const navLinks = navLinksRef.current;
      if (!navLinks) return;

      if (window.innerWidth > 768) {
        navLinks.style.maxHeight = "none";
      } else if (!isOpen) {
        navLinks.style.maxHeight = "0";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">MyPortfolio</a>
      </div>
      <ul className="nav-links" id="navLinks" ref={navLinksRef}>
        <li>
          <NavLink
            to="/home"
            onClick={() => setIsOpen(false)}
            className="nav-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="nav-link"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            onClick={() => setIsOpen(false)}
            className="nav-link"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="nav-link"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="nav-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div
        className={`hamburger ${isOpen ? "toggle" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
