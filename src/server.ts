import express, { Application } from 'express';
import morgan from 'morgan';
import connectDB from "./config/database";
import cors from "cors";
import eventRouter from './routes/events';

const app: Application = express();
const logger = morgan('short');

async function startApp() {
    //Connect to database
    await connectDB();

    app.use(logger)

    app.use(cors());

    app.use(express.json());

    app.use('/events', eventRouter)

    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
}

startApp();