import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
import { connect } from './config/dbConnect'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

dotenv.config()
connect()
const port = process.env.PORT
const app = express();

app.use(cookieParser)
app.use(bodyParser.json())
app.use(express.json())

app.use('/api',userRoutes)


app.listen(port,()=>{
   console.log(`server is running${port}`)
})