import express, { Application } from 'express';
import homeRouter from './routes/index';
import eventRouter from './routes/events';
// import router from './routes';
import connectDB from "./config/database";
import cors from "cors";


const app: Application = express();

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

app.use(cors());

app.use(express.json());

app.use('/', homeRouter);
app.use('/events', eventRouter)

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));