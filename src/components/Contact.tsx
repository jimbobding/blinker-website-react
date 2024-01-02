const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h2>Contact Us</h2>
        {/* <hr /> */}
        <hr />
        <p>0161 - 236 - 8225</p>
        <p>hello@blinkerbar.co.uk</p>

        <ul className="socilal-list">
          <li className="social-link">
            <a
              className="intstagram-link"
              target="_blank"
              href="https://www.instagram.com/accounts/onetap/?next=%2Fblinkerbar%2F"
            >
              <i className="fab fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
