import WebSocket from 'ws';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv-defaults";
import http from 'http';
// Second lesson at 44 minute, a lot of code to copy lol
// 65 for broadcast message

dotenv.config()

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });