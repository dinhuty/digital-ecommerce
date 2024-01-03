const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const createRouter = require('./routes')
const connectDB = require("./database/config/connectDB");
require('dotenv').config()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

createRouter(app)
const port = process.env.WEB_PORT || 5000
const startServer = async (app, port) => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`app listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};
startServer(app, port);