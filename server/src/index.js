const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const createRouter = require('./routes')

require('dotenv').config()


app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

createRouter(app)
const port = process.env.WEB_PORT || 5000
app.listen(port, () => {
    console.log("Dang chay ", port)
})