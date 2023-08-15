const mongoose = require('mongoose');

const destinationSchema = mongoose.Schema ({
    arrivalAirport: {
        type: String,
        enum: ['AUS','DAL','LAX','SAN','SEA']
    },
    arrival: {
        type: Date
    }

})

const Destination = mongoose.model('Destination', destinationSchema)

module.exports = Destination;
