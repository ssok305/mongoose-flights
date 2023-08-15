import React from "react";

const Show = ({Flight}) => {
    let {airline, flightNo, departs} = Flight
    return(
        <div>
       
            <br/>
            {airline}
            <br/>
            {flightNo}
            <br/>
            {departs.toLocaleDateString() + ' '}        
            {departs.toLocaleTimeString()}
            <br/>
            <p>Arrival Information: </p>
            <form method="POST" action={`/flights/${Flight._id}?_method=PUT`} >
                <label htmlFor="Airport">Airports: </label>
                <select name="arrivalAirport" id="Airport">
                        <option value='AUS'>AUS</option>
                        <option value='DAL'>DAL</option>
                        <option value='LAX'>LAX</option>
                        <option value='SAN'>SAN</option>
                        <option value='SEA'>SEA</option>
                </select>
                <label htmlFor="Arrival"> Arrival Time: </label>
                <input name="arrival" id="arrival" type='datetime-local'/>
                <button>Submit</button>
                </form>
            <a href="/flights">
                <button>Back</button>
            </a>
        </div>
    )
}

export default Show