import express from "express" 
import cors from "cors";
import dotenv from "dotenv";


import notesRoutes from "../routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const app = express()



app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter); // Apply rate limiting middleware
app.use("/api/notes", notesRoutes);

app.use(cors({
  origin: 'http://localhost:5173'
}));


connectDB().then(() => {
   

    app.listen(5001, ()=> {
    console.log("server started at 5001 port") ;
});
})