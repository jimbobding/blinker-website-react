import OpeningHours from "./OpeningHours";
import Map from "./Map";
import Contact from "./Contact";

const Footer = () => {
  return (
    <>
      <div className="footer-grid">
        <div className="footer-element ">
          <img
            src="images/blinker-name.png"
            alt="Picture of Blinker Bar"
            className="nav-img"
          />
          <hr />
        </div>
        <div className="footer-element">
          <OpeningHours />
        </div>
        <div className="footer-element">
          <Contact />
          <hr />
        </div>

        <div className="footer-element">
          <Map />
        </div>
      </div>
      <div className="page-footer">Blinker 2024!</div>
    </>
  );
};

export default Footer;
