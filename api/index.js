import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

mongoose.conntect(process.env.MONGO).then(() => {
  console.log("Connected to MongoDB! ");
}).catch((err)={
  console.log(err);
})

const app = express();

app.use(express.json());


app.listen(3000, () => {
  console.log("Server is runiing on port 3000 !!!");
});

app.use("/api/use",userRouter);
app.use("/api/auth", authRouter);

app.use((err,req,res, next)=>{

  const statusCode = err.statusCodee || 500;
  const message = err.message || "Internal Server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
});


// post locallhost:3000/api/auth/signup
// { "username:"test", "email": "test@gmail.com", "password" :"sahand"}