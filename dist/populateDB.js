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
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const uri = 'mongodb+srv://anpythomas:fwuZYu5FG3Kee4tk@cluster0.3arexof.mongodb.net/';
const client = new mongodb_1.MongoClient(uri);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const users = client.db("test").collection("users");
            const events = client.db("test").collection("events");
            const eventDocs = [
                {
                    "name": "Event 4",
                    "is_virtual": false,
                    "location": "Kansas City, MO",
                    "startDatetime": "2023-08-01T18:00:00Z",
                    "endDatetime": "2023-08-01T20:00:00Z",
                    "price": 0,
                    "tags": ['sports'],
                    "creatorId": "60d5ecb8b48738759f80f840",
                    "managedBy": ["60d5ecb8b48738759f80f840"],
                    "imgUrl": "http://example.com/event4.png",
                    "description": "This is a description for Event 4"
                },
            ];
            // await users.insertMany(userDocs);
            yield events.insertMany(eventDocs);
        }
        finally {
            yield client.close();
        }
    });
}
run().catch(console.dir);
