import { useState } from "react";

import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          {" "}
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li className="nav-li">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              About
            </ScrollLink>
          </li>

          <li className="nav-li">
            <ScrollLink
              to="menu"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Menu
            </ScrollLink>
          </li>
          <li className="nav-li">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </ScrollLink>
          </li>
          <li className="nav-li">
            <ScrollLink
              to="merch"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Merch
            </ScrollLink>
          </li>
          <li className="nav-li">
            <ScrollLink
              to="opening"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Opening
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
