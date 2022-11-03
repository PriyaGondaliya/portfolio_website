import React, { useState } from "react";
import "boxicons";
import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="large-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">
            PRIYA
          </a>
        </div>
        <div className={click?"nav__menu":'remove__menu'} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            {/* <li className="nav__item">
              <a href="#about" className="nav__link" onClick={closeMobileMenu}>
                About
              </a>
            </li> */}
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={closeMobileMenu}>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#project" className="nav__link" onClick={closeMobileMenu}>
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={handleClick}>
          {click ? (
            <box-icon name="x" color="black"></box-icon>
          ) : (
            <box-icon name="menu" color="black"></box-icon>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
