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

// const Destination = mongoose('Destination', destinationSchema)

module.exports = destinationSchema;
