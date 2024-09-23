import { IconType } from "react-icons";
import "./Navbar.css";

interface navItemProps {
  icon: IconType;
  goTo: string;
  label: string;
}

const NavItem = ({ goTo, icon: Icon, label }: navItemProps) => {
  return (
    <>
      <li className="nav__item">
        <a href={goTo} className="nav__link">
          <Icon /> {label}
        </a>
      </li>
    </>
  );
};

export default NavItem;
