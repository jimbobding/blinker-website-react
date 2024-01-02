const Menu = () => {
  return (
    <div className="menu-grid" id="menu">
      <div className="menu-grid-element">
        {" "}
        <h2 className="section-header">
          Menu
          <hr />
        </h2>{" "}
        <div className="text-center">
          <a href="" className="contact-logo">
            {/* <img
              src="images/blinker-raspberry.png"
              alt="Raspberry"
              width="auto"
              height="40"
              className="section-img"
            /> */}{" "}
            <a href="" className="contact-logo">
              {" "}
              <img
                src="images/blinker-raspberry-black.png"
                alt="Blinker Orange Slice"
                width="auto"
                height="40"
                className="section-img"
              />
            </a>
          </a>
        </div>
        <p className="booking-form-element section-text">
          {" "}
          {/* Influenced by British seasonality our menu is monthly changing and
          always focuses around four
          <br />
          in-season flavours.
          <br />
          With a dedicated Martini and Old Fashioned section in addition, we
          truly have something for everyone. */}
          Our menu is influenced by British seasonality with a monthly changing
          menu focused around four in-season ingredients. In dedicated Martini
          and Old Fashioned sections, you’ll find variations on timeless
          classics.
        </p>
        <div className="text-center"></div>
      </div>
      <div className="menu-grid-element">
        <div className="image-container">
          <div className="menu-picture-element ">
            <img src="images/blinker-menu.jpg" alt="" />
          </div>
          <div className="overlay">
            <h2>Menu</h2>

            <a
              href="menues/27.11.23_Blinker_Menu_December23 (1).pdf"
              target="_blank"
              type="button"
              className="section-btn "
            >
              Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
