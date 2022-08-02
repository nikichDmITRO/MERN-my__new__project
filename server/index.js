import express from "express";
import mongoose from "mongoose";

const app = express();

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://adm:123adm123@cluster0.dzddehm.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(3002,()=>console.log(`Server started on port: ${3002}`))
  } catch (err) {}
}

start()
