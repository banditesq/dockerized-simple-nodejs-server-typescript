import 'dotenv/config'
import express from "express";

import user_auth from "./api/user_auth/user_auth"

import user_action from "./api/user_actions/actions";

import {auth_middleware} from "./routes_protection/index";

import bodyParser from "body-parser"

import mongoose from "mongoose";



const app = express();

const port = process.env.SERVER_PORT || 8002



app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URI!);

app.use("/user_auth",user_auth)
app.use("/user", auth_middleware,user_action)


app.listen(port,()=>{
    console.log(`server running on port ${port} `)
    
})