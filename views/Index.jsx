import React from "react";

const Index = ({flights}) => {
    return (
        <div>
            <h1>Flights: </h1>
            {flights.map((flight, index) => 
                    <p key={index}>
                        Flight: {index}
                        <br/>
                        {flight.airline}
                        <br/>
                        {flight.flightNo}
                        <br/>
                        {flight.departs.toLocaleDateString() + ' '}
                        
                        {flight.departs.toLocaleTimeString()}
                    </p>
             
            )}
        </div>
    )
}

export default Index