import React from "react";

function New () {
    return (
        <div>
            <form method="POST" action="/flights" >
                <label htmlFor="airline">Airline:</label>
                <input name="airline" id="airline" />
                <br></br>
                <label htmlFor="flightNo">Flight#:</label>
                <input name="flightNo" id="flightNo" type="number"/>
                <br></br>
                <label htmlFor="departs">Departs</label>
                <input name="departs" id="departs" type='datetime-local'/>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default New;