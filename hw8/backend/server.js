import WebSocket from 'ws';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv-defaults";
import http from 'http';
import { sendData, sendStatus, initData } from './wssConnect';
import Message from './models/Message';
import connectDB from './mongo';
// Second lesson at 44 minute, a lot of code to copy lol
// 65 for broadcast message

dotenv.config()

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server: server });

const broadcastMessage = (data, status) => {
    wss.clients.forEach((client) => {
        sendData(data, client);
        sendStatus(status, client);
    })
}

// TODO Connect to db
connectDB();

const db = mongoose.connection

db.once('open', () => {
    console.log("MongoDB connected !");

    wss.on('connection', (ws) => {
        console.log("WebSocket connected !")
        initData(ws);
        ws.onmessage = async (byteString) => {
            // DONE TODO Parse message to get task
            const { data } = byteString;
            const [ task, payload ] = JSON.parse(data);
            switch(task){
                case 'input' : {
                    // DONE TODO save to db
                    const { name, body } = payload;
                    const message = new Message({ name, body });
                    try
                    {
                        await message.save();
                    } 
                    catch (e) 
                    {
                        throw new Error ("Message DB save error : " + e);
                    }
                    broadcastMessage(["output", [payload]], {
                        type: 'success',
                        msg: "Message sent."
                    });
                    break;
                }
                case 'clear' :
                {
                    Message.deleteMany({}, () => {
                        sendData(['cleared']);
                        sendStatus({ type: 'info', msg: 'Message cache cleared.' });
                    })
                    break;
                }
                default: break;
            }
        }
        
    })

    // define server
    const port = process.env.PORT || 4000;
    server.listen(port, () => {
        console.log(`Server is up on port ${port}.`)
    });
})


