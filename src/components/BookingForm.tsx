import React, { useState, SyntheticEvent } from "react";
import { useForm } from "@formspree/react";

const BookingForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xjvldjqd");

  const handleFormSubmit = (event: SyntheticEvent) => {
    // Reset form fields
    event.preventDefault();

    setName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");
  };
  console.log(state);
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
              onSubmit={(e) => {
                handleSubmit(e);
                handleFormSubmit(e);
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input"
                  placeholder="NAME"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  className="contact-input"
                  placeholder="PHONE-NUMBER"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
            We do not take bookings. However, for full venue hire or any other
            inquiries, please contact us via the form below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
