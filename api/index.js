import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route"

mongoose.conntect(process.env.MONGO).then(() => {
  console.log("Connected to MongoDB! ");
}).catch((err)={
  console.log(err);
})

const app = express();

app.listen(3000, () => {
  console.log("Server is runiing on port 3000 !!!");
});

app.unsubscribe("/api/user", userRouter);