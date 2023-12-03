// import { useState } from "react";

// const Navbar = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <nav>
//       <div className="nav-container">
//         <img
//           src="images/blinker-raspberry-black.png"
//           alt=""
//           className="nav-img"
//         />
//         <div className="menu">
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <ul>
//           <li className="nav-li">
//             <a
//               href="#about"
//               className="nav-link"
//               onClick={() => scrollToSection("about")}
//             >
//               About
//             </a>
//           </li>

//           <li className="nav-li">
//             <a
//               href="#contact"
//               className="nav-link"
//               onClick={() => scrollToSection("contact")}
//             >
//               Contact
//             </a>
//           </li>

//           <li className="nav-li">
//             <a
//               href="#menu"
//               className="nav-link"
//               onClick={() => scrollToSection("menu")}
//             >
//               Menu
//             </a>
//           </li>

//           <li className="nav-li">
//             <a
//               href="#merch"
//               className="nav-link"
//               onClick={() => scrollToSection("merch")}
//             >
//               Merch
//             </a>
//           </li>

//           <li className="nav-li">
//             <a
//               href="#opening"
//               className="nav-link"
//               onClick={() => scrollToSection("opening")}
//             >
//               Opening
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
            <a href="#about" onClick={() => scrollToSection("about")}>
              About
            </a>
          </li>

          <li className="nav-li">
            <a href="#contact">Contact</a>
          </li>

          <li className="nav-li">
            <a href="#menu">Menu</a>
          </li>
          <li className="nav-li">
            <a href="#merch">Merch</a>
          </li>
          {/* <li className="nav-li">
            <a href="#opening">Opening</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
