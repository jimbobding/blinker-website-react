const Menu = () => {
  return (
    <div className="menu-grid">
      <div className="menu-grid-element">
        {" "}
        <h2 className="seating-text-header">
          Menu
          <hr />
        </h2>{" "}
        <div className="text-center">
          <a href="" className="contact-logo">
            <img
              src="images/blinker-raspberry.png"
              alt="Raspberry"
              width="auto"
              height="40"
              className="seating-text-img"
            />
          </a>
        </div>
        <p className="section-text">
          {" "}
          Influenced by British seasonality our menu is monthly changing and
          always focuses around four
          <br />
          in-season flavours.
          <br />
          With a dedicated Martini and Old Fashioned section in addition, we
          truly have something for everyone.
        </p>
        <div className="text-center">
          <a href="" className="contact-logo">
            <img
              src="images/blinker-raspberry-black.png"
              alt="Blinker Orange Slice"
              width="auto"
              height="40"
              className="seating-text-img"
            />
          </a>
        </div>
      </div>
      <div className="menu-grid-element">
        <div className="image-container">
          <div className="menu-picture-element ">
            <img src="images/blinker-menu.jpg" alt="" />
          </div>
          <div className="overlay">
            <h2>Menu</h2>

            <a
              href="media/28.10.23_Blinker_Menu_November23.pdf"
              target="_blank"
              type="button"
              className="menu-btn  text-center"
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
