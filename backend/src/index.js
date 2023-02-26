import { Express } from "express";

import {Client} from "redis-om"

import cors from "cors"

const app = Express()
app.use(Express.json())

app.use(cors({
    origin: ["https://localhost:3000/task"]
}))


app.get("/task", (req, res)=>{
    res.send("task")
})

const client = new Client();






app.listen(3000, async()=>{


    try{
        await client.open("redis-16858.c305.ap-south-1-1.ec2.cloud.redislabs.com:16858") 
        console.log("Successful Connection to Database")
        
    }catch(err){
        console.log(err)
    }
})