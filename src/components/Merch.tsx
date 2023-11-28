const Merch = () => {
  return (
    <>
      <div className="merch-grid">
        <div className="merch-element grid-col-span4">
          <h2>Merch</h2>
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
          <p className="section-text">
            {" "}
            If you like the blinker style we are now selling a range of blinker
            merch. So if you want hoodies, tee's, jumpers, beanies and caps or
            even a blinker apron to make make your own old fshioneds at home in.
            Then check out our merch here{" "}
          </p>
        </div>
        <div className="merch-element">
          <a href="" target="_blank" type="button" className="section-btn">
            Merch
          </a>
        </div>
      </div>
    </>
  );
};

export default Merch;
