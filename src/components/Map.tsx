import React from "react";

const Map: React.FC = () => {
  return (
    <>
      {" "}
      <div className="map-container">
        <iframe
          id="myDIV"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.354740295522!2d-2.2437572490052666!3d53.47999117229586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c053ee4787%3A0x66f0571d016fb388!2s70%20Spring%20Gardens%2C%20Manchester%20M2%202BQ!5e0!3m2!1sen!2suk!4v1655916057440!5m2!1sen!2suk"
          width="auto"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
