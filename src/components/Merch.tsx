const Merch = () => {
  return (
    <>
      <div className="merch-grid" id="merch">
        <div className="merch-element grid-col-span4">
          <h2 className="section-header">Merch</h2>
          <hr />
        </div>
        <div className="merch-element">
          <img src="images/ste-bar-merch.jpg" alt="" />
        </div>
        <div className="merch-element">
          <img src="images/whisky-tee-merch.jpg" alt="" />
        </div>
        <div className="merch-element">
          <img src="images/dom-hat-merch.jpg" alt="" />
        </div>
        <div className="merch-element grid-col-span4">
          <h3>Take Blinker home with you </h3>
          <p className="section-text">
            {" "}
            You asked, we delivered: quality clothes and accessories in the
            Blinker colours and logo. Feel like part of the team with your own
            Blinker apron, t-shirt or hoodie.
          </p>
        </div>
        <div className="merch-element">
          <a
            href="https://blinkerbar.bigcartel.com/"
            target="_blank"
            type="button"
            className="section-btn"
          >
            Merch
          </a>
        </div>
      </div>
    </>
  );
};

export default Merch;
