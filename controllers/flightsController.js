const Flight = require('../models/Flight')

module.exports.index = async (req,res) => {
    const flights = await Flight.find()
    res.render('Index', {flights} )
}

module.exports.new = (req, res) => {
    res.render('New')
}

module.exports.create = async (req,res) => {
    console.log(req.body)
    try{
        let flight = await Flight.create(req.body)
        console.log(flight)
    }catch(error){
        console.error("Failed to create a Flight Document: ", error)
    }
    res.redirect('flights')
}

module.exports.show = async (req,res) =>{
 
    const foundFlight = await Flight.findById(req.params.id)

    res.render('Show', {Flight: foundFlight})
}

module.exports.update = async (req,res) => {
    const foundFlight = await Flight.findById(req.params.id)
    foundFlight.destinations.push(req.body)
    foundFlight.save()
    res.render('Show', {Flight: foundFlight})
}