import { IconType } from "react-icons";
import "./Navbar.css";

interface navItemProps {
  icon: IconType;
  goTo: string;
  label: string;
  activeNav: string;
  setActiveNav: (goTo: string) => void;
}

const NavItem = ({
  goTo,
  icon: Icon,
  label,
  activeNav,
  setActiveNav,
}: navItemProps) => {
  return (
    <>
      <li className="nav__item">
        <a
          href={goTo}
          onClick={() => {
            setActiveNav(goTo);
          }}
          className={`nav__link ${activeNav === goTo ? "active-link" : ""}`}
        >
          <Icon /> {label}
        </a>
      </li>
    </>
  );
};

export default NavItem;
