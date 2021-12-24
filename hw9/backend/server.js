import WebSocket from 'ws';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv-defaults";
import http from 'http';
import { sendData, sendStatus, initData } from './wssConnect';
import Message from './models/Message';

export default function mongo()
{
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
        console.log("MongoDB connected !");
    });

}
