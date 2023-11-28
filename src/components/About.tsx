const About = () => {
  return (
    <>
      <div className="about-container">
        <img
          src="images/blinker-bar.jpg"
          alt="Picture of Blinker Bar"
          className="about-bar-pic"
        />
      </div>
      <div className="about-grid">
        <div className="about-element">
          <img
            src="images/blinker-name.png"
            alt="Picture of Blinker Bar"
            className="nav-img"
          />
          <p className="blinker-text">
            A three ingredient cocktail <br />
            blending rye, grapefruit and <br />
            raspberry in perfect harmony. <br />
            This has inspired our seasonal <br />
            approach to perfect serves.
          </p>
          <img
            src="images/blinker-name.png"
            alt="Picture of Blinker Bar"
            className="nav-img"
          />
        </div>
        <div className="about-element">
          <img src="images/cocktail-zest.jpg" alt="" className="blinker-img" />
        </div>
      </div>
    </>
  );
};

export default About;
