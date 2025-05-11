

// import express from "express"
// import mongoose from "mongoose";
// import vinOrderRouter from "./routes/order.js"
// import cors from "cors"

// const app = express();
// const port = process.env.PORT || 5010;

// //  Mongo db ke sath connect kar deya
// try {
    
//     await mongoose.connect("mongodb+srv://muzammil:muzammil@cluster0.5ozicp4.mongodb.net/fussion?retryWrites=true&w=majority&appName=Cluster0")
//     console.log("Mongo DB connected")

// } catch (error) {
    
    
//     console.log(error)
// }


// app.use(express.json());




// app.listen(port, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`Server is running on port http://localhost:${port}`);
//     }
// });


// app.use('/orders' , vinOrderRouter )

// File : index.js
import express from "express";
import mongoose from "mongoose";
import vinOrderRouter from "./routes/order.js";
import cors from "cors";

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
app.use(cors());
app.use(express.json());



// MongoDB connection
mongoose.connect("mongodb+srv://muzammil:muzammil@cluster0.5ozicp4.mongodb.net/fussion?retryWrites=true&w=majority&appName=Cluster0")
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