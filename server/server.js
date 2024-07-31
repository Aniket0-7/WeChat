import express from "express" ;
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/msg.route.js";
import userRoutes from "./routes/user.route.js";
import connectdb from "./db/connect.js";

dotenv.config();
const PORT = process.env.PORT;

const __dirname = path.resolve();


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/client/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"/client/dist/index.html"))
})




server.listen(PORT,()=>{
    connectdb();
    console.log("server is on");
});