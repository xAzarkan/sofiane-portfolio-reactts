import { useEffect, useState } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      let currentSectionId: string | null = activeNav;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        const sectionId = section.getAttribute("id");
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          currentSectionId = `#${sectionId}`;
        }
      });

      setActiveNav(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
  }, [activeNav]);

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Sofiane
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <NavItem
                goTo={"#home"}
                icon={FaHome}
                label={"Home"}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              />
              <NavItem
                goTo={"#about"}
                icon={FaUserAlt}
                label={"About"}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              />
              <NavItem
                goTo={"#skills"}
                icon={FaTools}
                label={"Skills"}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              />
              <NavItem
                goTo={"#qualification"}
                icon={FaFileAlt}
                label={"Qualification"}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              />
              <NavItem
                goTo={"#portfolio"}
                icon={FaBriefcase}
                label={"Portfolio"}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              />
              <NavItem
                goTo={"#contact"}
                icon={FaEnvelope}
                label={"Contact me"}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              />
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
