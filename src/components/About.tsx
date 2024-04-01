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
        </div>
        <div className="about-element">
          <img
            src="images/blinker-sign-cocktail.jpg"
            alt=""
            className="blinker-img"
          />
        </div>
        <div className="top50-container">
          <div className="top50">
            <a
              href="https://www.top50cocktailbars.com"
              title="Featured on Top50CocktailBars.com"
              target="_blank"
            >
              <img src="images/top50cb_sponsor_black_horizontal.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
