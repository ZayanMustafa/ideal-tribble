
// File : index.js
import express from "express";
import mongoose from "mongoose";
import vinOrderRouter from "./routes/order.js";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config()

const app = express();
const port = process.env.PORT || 5000;


const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://fussionreport.vercel.app"
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 200
};




// Middleware
app.use(cors(corsOptions));
app.use(express.json());



// MongoDB connection
await mongoose.connect(process.env.MONGODB_URI)
  .then(
    
    () => console.log("MongoDB connected successfully")
    
    )
  .catch(
      
    err => console.error("MongoDB connection error:", err)
    
    );



// Routes
app.use('/orders', vinOrderRouter);










// Server startup
app.listen(port, () => {
  
    console.log(`Server is running on port http://localhost:${port}`);

});