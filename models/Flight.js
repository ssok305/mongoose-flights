const mongoose = require('mongoose');
const {destinationSchema} = require('./Destination')
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
    },
    departAirport: {
        type: String,
        enum: ['AUS','DAL','LAX','SAN','SEA']
    },

    destinations: {type: [destinationSchema]}
    

});

const Flight = mongoose.model('Flight', flightsSchema)

module.exports = Flight