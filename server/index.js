import express from "express"
import dotenv from "dotenv"
import { connectToMongoDb } from "./lib/mongo.js"
import routes from "./routes.js"
import bodyParser from 'body-parser'
import { GetAllUsersHandler } from "./handlers/userHandler.js"
import cors from 'cors'
 

dotenv.config()

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 3000

app.get('/loda', (req,res) => {res.send("Lasan")});


app.listen(port, () => {
    connectToMongoDb()
    console.log(`Server running at port ${port}`)
    routes(app);
});

