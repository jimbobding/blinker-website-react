import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <img
          src="images/blinker-raspberry-black.png"
          alt=""
          className="nav-img"
        />
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          {" "}
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li className="nav-li">
            <a href="/about">About</a>
          </li>

          <li className="nav-li">
            <a href="/contact">Contact</a>
          </li>

          <li className="nav-li">
            <a href="/menu">Menu</a>
          </li>
          <li className="nav-li">
            <a href="/merch">Merch</a>
          </li>
          <li className="nav-li">
            <a href="/opening">Opening</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
