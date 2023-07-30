"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });
//Connect To Database
(0, database_1.default)();
app.use(express_1.default.json());
app.use('/', routes_1.default);
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
