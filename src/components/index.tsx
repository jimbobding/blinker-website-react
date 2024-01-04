const Index = () => {
  return (
    <div className="container">
      <div className="index-picture-grid">
        <div className="index-picture-element grid-col-span4">
          {" "}
          <img src="images/dan.jpg" alt="Picture of Dan" />
        </div>
        <div className="index-picture-element grid-col-span4 ">
          <p className="section-text text-center">
            Whenever you want to be in good company. <br /> Blinker awaits.{" "}
            <br />
            Locallly sourced. <br /> Artfully mixed. <br /> Served with care.
          </p>
        </div>
        <div
          className="index-picture-element grid-col-span2"
          data-aos="fade-right"
          data-aos-easing="lease-in-out"
          data-aos-duration="1000"
        >
          <img src="images/irish-coffee.jpeg" alt="" />
        </div>

        <div
          className="index-picture-element grid-col-span2 "
          data-aos="fade-left"
          data-aos-easing="lease-in-out"
          data-aos-duration="1000"
        >
          <img src="images/drink-table.jpeg" alt="" />
        </div>
        <div
          className="index-picture-element grid-col-span2"
          data-aos="fade-right"
          data-aos-easing="lease-in-out"
          data-aos-duration="1000"
        >
          <img src="images/tin-drink.jpeg" alt="" />
        </div>
        <div
          className="index-picture-element grid-col-span2"
          data-aos="fade-left"
          data-aos-easing="lease-in-out"
          data-aos-duration="1000"
        >
          <img src="images/cocktail-zest.jpg " alt="" />
        </div>
      </div>
    </div>
  );
};
export default Index;
