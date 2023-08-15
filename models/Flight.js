const mongoose = require('mongoose');
const destinationSchema = require('./Destination')
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
        default: () => new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate())
    },
    departAirport: {
        type: String,
        enum: ['AUS','DAL','LAX','SAN','SEA']
    },


    destinations: [destinationSchema] 
    

});

const Flight = mongoose.model('Flight', flightsSchema)

module.exports = Flight