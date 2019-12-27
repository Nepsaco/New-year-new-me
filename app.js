const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 9000

const user = require('./routes/user')
const resolutions = require('./routes/resolutions')

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})

// Middle wares
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes
app.use(user)
app.use(resolutions)

