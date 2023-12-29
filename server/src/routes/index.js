const authRouter = require("./auth.router")
const createRouter = (app) => {
    app.use("/api/auth", authRouter)
    app.use("/", authRouter)
}

module.exports = createRouter