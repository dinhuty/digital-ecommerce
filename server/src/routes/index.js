const authRouter = require("./auth.router")
const productRouter = require('./product.router')
const createRouter = (app) => {
    app.use("/api/auth", authRouter)
    app.use("/api/product", productRouter)
    app.use("/api", authRouter)
    app.use("/", authRouter)
}

module.exports = createRouter