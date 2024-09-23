import { useState } from "react";
import "./Navbar.css";
import {
  FaHome,
  FaBriefcase,
  FaEnvelope,
  FaTools,
  FaFileAlt,
  FaUserAlt,
} from "react-icons/fa";
import NavItem from "./NavItem";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Sofiane
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <NavItem goTo={"#home"} icon={FaHome} label={"Home"} />
              <NavItem goTo={"#about"} icon={FaUserAlt} label={"About"} />
              <NavItem goTo={"#skills"} icon={FaTools} label={"Skills"} />
              <NavItem goTo={"#qualification"} icon={FaFileAlt} label={"Qualification"} />
              <NavItem goTo={"#portfolio"} icon={FaBriefcase} label={"Portfolio"} />
              <NavItem goTo={"#contact"} icon={FaEnvelope} label={"Contact me"} />
            </ul>
            <i className="uil uil-times nav__close" id="nav-close"></i>
          </div>

          <div className="nav__btns">
            <i className="uil uil-moon change-theme" id="theme-button"></i>

            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
