import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER || 3001;
const DB_PASSWORD = process.env.DB_PASSWORD || 3001;
const DB_NAME = process.env.DB_NAME || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.dzddehm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
      );
    app.listen(PORT, () => console.log(`Server started port: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

start();
