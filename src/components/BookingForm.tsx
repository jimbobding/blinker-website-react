import React, { SyntheticEvent } from "react";

const BookingForm: React.FC = () => {
  const handleSubmit = (event: SyntheticEvent) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Your form submission logic here (e.g., sending data to the server)

    // Reset the form fields
    const form = document.getElementById("my-form") as HTMLFormElement | null;
    if (form) {
      form.reset();
    }
  };

  return (
    <div>
      <div className="booking-form-grid" id="contact">
        <div className="booking-form-element">
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
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input"
                  placeholder="NAME"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  className="contact-input"
                  placeholder="PHONE-NUMBER"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input"
                  placeholder="EMAIL"
                />
              </div>

              <div className="form-group">
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
          <h2 className="section-header">
            WE OPERATE AS A WALK IN VENUE ONLY
            <hr />
          </h2>
          <h3 className="section-header">
            WE DO NOT TAKE BOOKINGS
            <hr />
          </h3>
          <div className="text-center">
            <a href="" className="contact-logo">
              <img
                src="images/blinker-rockssign-black.png"
                alt="Blinker Orange Slice"
                width="auto"
                className="section-img"
              />
            </a>
          </div>
          <p className="section-text">
            We do not take bookings. However for full venue hire or any other
            enquiries please contact us via the form below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
