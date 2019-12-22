const express = require('express')
const app = express()
const port = process.env.PORT || 9000
const user = require('./routes/user')

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})

// Routes
app.use(user)
