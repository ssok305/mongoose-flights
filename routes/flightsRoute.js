const express = require('express')

const router = express.Router();

const flightsController = require('../controllers/flightsController')

router.get('/', flightsController.index)

// "new" route
router.get('/new', flightsController.new)

// // "destroy" route
// router.delete('/:indexOfFlights', flightsController.destroy)

// // "update" route
// router.put('/:indexOfFlights', flightsController.update)

// "create" route
router.post('/', flightsController.create)

// // "edit" route
// router.get('/:indexOfFlights/edit', flightsController.edit)

// "show" route      //   localhost:8080/flights/:indexOfFlights
router.get('/:id', flightsController.show)

module.exports = router