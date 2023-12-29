import express, { Express } from 'express'
import { join } from 'path'
import 'dotenv/config'
import { router } from './routes'

const app: Express = express()

app.use(
    express.json({ limit: '10mb' }),
    express.urlencoded({ limit: '10mb', extended: true }),
    router,
)

const port: number = process.env.APP_PORT
app.listen(port, () => {
    console.log("Dang chay ", port)
})