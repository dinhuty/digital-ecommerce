const express = require('express')
const router = express.Router()

router.post('/sign-in', (req, res) => {
    res.status(200).json("Success")
})

module.exports = router