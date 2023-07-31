"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const events_1 = __importDefault(require("./routes/events"));
const database_1 = __importDefault(require("./config/database"));
const cors_1 = __importDefault(require("cors"));
// //Use .env file in config folder
// require("dotenv").config({ path: "./config/.env" });
const app = (0, express_1.default)();
const logger = (0, morgan_1.default)('short');
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        //Connect to database
        yield (0, database_1.default)();
        app.use(logger);
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use('/', index_1.default);
        app.use('/events', events_1.default);
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    });
}
startApp();
