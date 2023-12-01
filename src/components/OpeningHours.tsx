const OpeningHours = () => {
  return (
    <>
      {/* <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Monday -Wednesday</td>
            <td>3 PM</td>
            <td>11 PM</td>
          </tr>

          <tr>
            <td>Thursday</td>
            <td>3 PM</td>
            <td>12 AM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>2 PM</td>
            <td>12:30 AM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>12:00 PM</td>
            <td>12:30 AM</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>2 PM</td>
            <td>10 PM</td>
          </tr>
        </tbody>
      </table> */}
      <div className="opening-hours-container">
        <p>
          <strong>Monday - Wednesday:</strong>
        </p>
        <p>3 PM - 11 PM</p>

        <p>
          <strong>Thursday:</strong>
        </p>
        <p>3 PM - 12 AM</p>

        <p>
          <strong>Friday:</strong>
        </p>
        <p>2 PM - 12:30 AM</p>

        <p>
          <strong>Saturday:</strong>
        </p>
        <p>12:00 PM - 12:30 AM</p>

        <p>
          <strong>Sunday:</strong>
        </p>
        <p>2 PM - 10 PM</p>
      </div>
    </>
  );
};

export default OpeningHours;
