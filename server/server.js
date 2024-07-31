import express from "express" ;
import dotenv from "dotenv";

import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/msg.route.js";
import userRoutes from "./routes/user.route.js";
import connectdb from "./db/connect.js";

dotenv.config();
const PORT = process.env.PORT;




app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);





server.listen(PORT,()=>{
    connectdb();
    console.log("server is on");
});