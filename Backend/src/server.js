import express from "express" 
import notesRoutes from "../routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();
const app = express()



app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter); // Apply rate limiting middleware
app.use("/api/notes", notesRoutes);


connectDB().then(() => {
   

    app.listen(5001, ()=> {
    console.log("server started at 5001 port") ;
});
})