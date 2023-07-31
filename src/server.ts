import express, { Application } from 'express';
import router from './routes';
import connectDB from "./config/database";

const app: Application = express();

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

app.use(express.json());
app.use('/', router);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));