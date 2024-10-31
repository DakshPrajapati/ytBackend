import experss from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = experss()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(experss.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}  