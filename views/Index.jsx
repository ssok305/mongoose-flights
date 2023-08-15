import React from "react";

const Index = ({ flights }) => {
  return (
    <html>
      <head>
        <link href="../output.css" rel="stylesheet" />
      </head>
      <h1 class="text-red-3xl font-bold underline">Hello world!</h1>
      <h1>Flights: </h1>
      {flights.map((flight, index) => (
        <p key={index}>
          Flight: {index}
          <br />
          {flight.airline}
          <br />
          {flight.flightNo}
          <br />
          {flight.departs.toLocaleDateString() + " "}
          {flight.departs.toLocaleTimeString()}
          <a href={`http://localhost:8080/flights/${flight._id}`}>
            <button>Detail</button>
          </a>
        </p>
      ))}
    </html>
  );
};

export default Index;
