import experss from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = experss()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(experss.json({limit:"16kb"}))
app.use(experss.urlencoded({extended:true, limit:"16kb"}))
app.use(experss.static("public"))
app.use(cookieParser())

// routes

import userRouter from "./routes/user.routes.js"

app.use("/api/v1/users", userRouter)


export {app}   