"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const envsafe_1 = require("envsafe");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.env = (0, envsafe_1.envsafe)({
    DB_STRING: (0, envsafe_1.str)(),
    PORT: (0, envsafe_1.port)(),
});
