import express from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config({
    path : "./.env"
})

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
app.use(express.json({limit: "16kb"}))

const appPort = process.env.PORT || 7000
app.listen(appPort, () => {
    console.log("App is listening on port :", appPort);
})
    
//import routes
import urlRoute from "./routes/url.route.js"

app.use("/weather/v1", urlRoute)

export { app }