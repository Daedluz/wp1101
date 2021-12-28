import mongoose from "mongoose";
import dotenv from "dotenv-defaults";
import { dataInit } from "./upload.js";

import "dotenv-defaults/config.js";

async function connect() {
    // DONE TODO 1.1 Connect your MongoDB
    dotenv.config();

    mongoose
    .connect(
        process.env.MONGO_URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }
    )
    .then((res) => console.log("mongo db connected."))
    .catch((err) => console.log(err))

    const db = mongoose.connection

    db.once('open', () => {
        dataInit();
    });
  
}

export default { connect };