const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/resolutions', (req, res) => {
    queries
        .resolutions
        .getAll()
        .then(resolutions => {
            res.json(resolutions)
        })
})

module.exports = router
