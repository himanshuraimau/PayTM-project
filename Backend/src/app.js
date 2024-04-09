import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials:true
    }
))

app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//ROUTES import
import userRouter from "./routes/user.routes.js";
import accountRouter from "./routes/account.routes.js";

//ROutes declartion
app.use("/api/v1/users",userRouter)
//https://localhost:8000/api/v1/users/signup

app.use("/api/v1/accounts",accountRouter)


export {app}