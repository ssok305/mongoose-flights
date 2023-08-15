const express = require('express');

require('dotenv').config()

const mongoConfig = require('./config');
mongoConfig()

const app = express()
const PORT = 8080;

const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
app.use(methodOverride('_method'))


// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', jsxEngine())

const flightRoutes = require('./routes/flightsRoute')

app.use(express.urlencoded({extended: true}))

app.use('/flights', flightRoutes)


app.get('/', (req,res) => {
    res.send('Hello World.')
})


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT, process.env.MONGO_URL)
})