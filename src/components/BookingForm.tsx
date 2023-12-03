const BookingForm = () => {
  return (
    <div>
      <div className="booking-form-grid" id="contact">
        <div className="booking-form-element">
          {" "}
          <div className="booking-form">
            <div className="text-center bottom-logo">
              <a href="" className=" contact-logo">
                <img
                  src="images/blinker-bar-icon.png"
                  alt="Blinker Glass"
                  width="auto"
                  height="40"
                  className=" align-top"
                />
              </a>
            </div>
            <form
              action="https://formspree.io/f/xjvldjqd"
              method="POST"
              id="my-form"
            >
              <div className="form-group ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input"
                  placeholder="NAME"
                />
              </div>

              <div className="form-group ">
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  className="contact-input"
                  placeholder="PHONE-NUMBER"
                />
              </div>

              <div className="form-group ">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input"
                  placeholder="EMAIL"
                />
              </div>

              <div className="form-group ">
                <label>Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-input"
                ></textarea>
              </div>
              <button id="btn" type="submit">
                Submit
              </button>
              <div className="text-center bottom-logo">
                <a href="" className=" contact-logo">
                  <img
                    src="images/blinker-rockssign-black.png"
                    alt="Blinker Glass"
                    width="auto"
                    height="40"
                    className=" align-top"
                  />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="booking-form-element">
          {" "}
          <h2 className="seating-text-header">
            WE OPERATE AS A WALK IN VENUE
            <hr />
          </h2>{" "}
          <div className="text-center">
            <a href="" className="contact-logo">
              <img
                src="images/blinker-coup-black.png"
                alt="Blinker Glass"
                width="auto"
                height="40"
                className="seating-text-img"
              />
            </a>
          </div>
          <p className="section-text">
            Blinker operates as a walk in venue. We will do our best to seat
            people a comfortably and promptly as we can. We can also accommodate
            larger groups so for bookings of 6 or more please get in touch.
          </p>
          <div className="text-center">
            <a href="" className="contact-logo">
              <img
                src="images/blinker-slice-black.png"
                alt="Blinker Orange Slice"
                width="auto"
                height="40"
                className="seating-text-img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
