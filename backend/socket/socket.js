import {Server} from "socket.io";
import http from "http";
import express from "express";


const app = express();

const server = http.createServer(app);
const io=new Server(server,{
    cors: {
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
});
io.on("connection", (socket)=>{
    console.log("User connected",socket.id);
    socket.on("disconnect", (msg)=>{
        console.log("User disconnected",socket.id);
    })
})

export {app,io,server}