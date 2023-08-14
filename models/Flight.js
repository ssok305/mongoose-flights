const mongoose = require('mongoose');
const flightsSchema = mongoose.Schema({
    airline: {
        type: String,
        emum: ['American',"Southwest", "United"]
    },
    flightNo:{
        type: Number,
        minLength: 10,
        maxLength: 9999,
        required: true
    },
    departs:{
        type: Date,
        // defaultValue: 2023
    }

});

const Flight = mongoose.model('Flight', flightsSchema)

module.exports = Flight