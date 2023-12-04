const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <img
          src="images/blinker-bar.jpg"
          alt="Picture of Blinker Bar"
          className="about-bar-pic"
        />
      </div>
      <div className="about-grid">
        <div className="about-element">
          {/* <img
            src="images/blinker-name.png"
            alt="Picture of Blinker Bar"
            className="nav-img"
          /> */}
          <h2 className="section-header">Blinker</h2>
          <h3> Our name comes from a forgotten classic cocktail</h3>
          <hr />
          <img
            src="images/blinker-coup-black.png"
            alt="Blinker Glass"
            width="auto"
            className="section-img"
          />
          <p className="blinker-text section-text ">
            A three ingredient cocktail <br />
            blending rye, grapefruit and <br />
            raspberry in perfect harmony. <br />
            This has inspired our seasonal <br />
            approach to perfect serves.
          </p>
          {/* <img
            src="images/blinker-name.png"
            alt="Picture of Blinker Bar"
            className="nav-img"
          /> */}
        </div>
        <div className="about-element">
          <img
            src="images/blinker-sign-cocktail.jpg"
            alt=""
            className="blinker-img"
          />
        </div>
      </div>
    </>
  );
};

export default About;
