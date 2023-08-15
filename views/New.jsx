import React from "react";

function New () {
    return (
        <div>
            <form method="POST" action="/flights" >
                <label htmlFor="airline">Airline: </label>
                <select name="airline" id="airline">
                    <option value='United'>United</option>
                    <option value='American'>American</option>
                    <option value='Southwest'>Southwest</option>

                </select>
                <br/>
                <label htmlFor="Airport">Airport: </label>
                <select name="departAirport" id="Airport">
                    <option value='AUS'>AUS</option>
                    <option value='DAL'>DAL</option>
                    <option value='LAX'>LAX</option>
                    <option value='SAN'>SAN</option>
                    <option value='SEA'>SEA</option>
                </select>
                <br/>
                <label htmlFor="flightNo">Flight#: </label>
                <input name="flightNo" id="flightNo" type="number"/>
                <br></br>
                <label htmlFor="departs">Departs: </label>
                <input name="departs" id="departs" type='datetime-local'/>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default New;
