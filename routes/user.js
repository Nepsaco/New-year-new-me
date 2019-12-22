const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/users', (req, res) => {
    res.json({name: 'Tobie'})
})

module.exports = router
