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
              href="menus/27.4.25_Blinker_Menu_May25.pdf"
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
