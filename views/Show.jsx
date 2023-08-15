import React from "react";

const Show = ({ Flight }) => {
  let { airline, flightNo, departs, destinations } = Flight;
  console.log(destinations.arrivalAirport);
  return (
    <div>
      <br />
      <p>Airline: {airline}</p>

      <p>Flight Number: {flightNo}</p>
      <br />
      <p>
        Departure Time:
        {departs.toLocaleDateString() + " "}
        {departs.toLocaleTimeString()}
      </p>
      <br />
      {destinations
        ? destinations.map((destination) => {
            return (
              <>
                <p>Arrival Airport: </p>
                <p>{destination.arrivalAirport}</p>
                <br />
                <p>Arrival Time: </p>
                <p>{destination.arrival.toLocaleDateString() + " "}</p>
                <p>{destination.arrival.toLocaleTimeString()}</p>
                <hr />
              </>
            );
          })
        : "bye"}
      <p>Arrival Information: </p>
      <form method="POST" action={`/flights/${Flight._id}?_method=PUT`}>
        <label htmlFor="Airport">Airports: </label>
        <select name="arrivalAirport" id="Airport">
          <option value="AUS">AUS</option>
          <option value="DAL">DAL</option>
          <option value="LAX">LAX</option>
          <option value="SAN">SAN</option>
          <option value="SEA">SEA</option>
        </select>
        <label htmlFor="Arrival"> Arrival Time: </label>
        <input name="arrival" id="arrival" type="datetime-local" />
        <button>Submit</button>
      </form>
      <a href="/flights">
        <button>Back</button>
      </a>
    </div>
  );
};

export default Show;
