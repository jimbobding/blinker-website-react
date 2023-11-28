const OpeningHours = () => {
  return (
    <>
      <div className="opening-hours-grid">
        <div className="opening-hours-element">
          <h2>Opening Hours</h2>
        </div>
        <div className="opening-hours-element">
          {" "}
          <div className="image-container">
            <div className="opening-picture-element ">
              <img src="images/blinker-sign-cocktail.jpg" alt="" />
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpeningHours;
