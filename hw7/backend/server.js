import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRoute from './src/routes/index';
import mongoose from 'mongoose';
import connectDB from './src/mongo';
import ScoreCard from './src/models/ScoreCard';

const app = express();

// init middleware
app.use(cors());
app.use(bodyParser.json());

// define routes 
app.use('/api', apiRoute);

// connectDB
connectDB();

// define server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
});