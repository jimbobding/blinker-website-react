const OpeningHours = () => {
  return (
    <>
      <div className="opening-hours-container" id="opening">
        <p>
          <strong>Monday:</strong>
        </p>
        <p>Closed</p>
        <p>
          <strong>Tuesday - Wednesday:</strong>
        </p>
        <p>3 PM - 11 PM</p>

        <p>
          <strong>Thursday:</strong>
        </p>
        <p>3 PM - 12 AM</p>
        <p>
          <strong>Friday:</strong>
        </p>
        <p>3 PM - 12:30 AM</p>

        <p>
          <strong>Saturday:</strong>
        </p>
        <p>2 PM - 12:30 AM</p>

        <p>
          <strong>Sunday:</strong>
        </p>
        <p>2 PM - 10 PM</p>
      </div>
      <div className="image-container">
        <img
          src="images/WhatsApp Image 2024-11-30 at 19.21.53.jpeg"
          alt="Opening Hours Visual"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </>
  );
};

export default OpeningHours;
