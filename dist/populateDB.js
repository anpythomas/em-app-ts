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
const uri = 'myMongoDBString';
const client = new mongodb_1.MongoClient(uri);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const users = client.db("test").collection("users");
            const events = client.db("test").collection("events");
            const userDocs = [
                {
                    "name": "John Doe",
                    "email": "john@example.com",
                    "username": "johndoe",
                    "password": "hashed_password_1",
                    "registeredEvents": ["60d5ecb8b48738759f80f840", "60d5ecb8b48738759f80f841"],
                    "imageUrl": "http://example.com/image1.png",
                    "managedEvents": []
                },
                {
                    "name": "Jane Doe",
                    "email": "jane@example.com",
                    "username": "janedoe",
                    "password": "hashed_password_2",
                    "registeredEvents": ["60d5ecb8b48738759f80f843"],
                    "imageUrl": "http://example.com/image2.png",
                    "managedEvents": ["60d5ecb8b48738759f80f842", "60d5ecb8b48738759f80f845"]
                },
                {
                    "name": "Robert Smith",
                    "email": "robert@example.com",
                    "username": "robertsmith",
                    "password": "hashed_password_3",
                    "registeredEvents": ["60d5ecb8b48738759f80f847"],
                    "imageUrl": "http://example.com/image3.png",
                    "managedEvents": ["60d5ecb8b48738759f80f846", "60d5ecb8b48738759f80f848"]
                }
            ];
            const eventDocs = [
                {
                    "name": "Event 1",
                    "is_virtual": true,
                    "location": "Online",
                    "startDatetime": "2023-08-01T18:00:00Z",
                    "endDatetime": "2023-08-01T20:00:00Z",
                    "price": 15.0,
                    "tags": [],
                    "creatorId": "60d5ecb8b48738759f80f840",
                    "managedBy": ["60d5ecb8b48738759f80f841"],
                    "imgUrl": "http://example.com/event1.png",
                    "description": "This is a description for Event 1"
                },
                {
                    "name": "Event 2",
                    "is_virtual": false,
                    "location": "New York",
                    "startDatetime": "2023-08-02T18:00:00Z",
                    "endDatetime": "2023-08-02T20:00:00Z",
                    "price": 20.0,
                    "tags": ["entertainment"],
                    "creatorId": "60d5ecb8b48738759f80f842",
                    "managedBy": ["60d5ecb8b48738759f80f843"],
                    "imgUrl": "http://example.com/event2.png",
                    "description": "This is a description for Event 2"
                },
                {
                    "name": "Event 3",
                    "is_virtual": true,
                    "location": "Online",
                    "startDatetime": "2023-08-03T18:00:00Z",
                    "endDatetime": "2023-08-03T20:00:00Z",
                    "price": 10.0,
                    "tags": ["art", "tech", "sports"],
                    "creatorId": "60d5ecb8b48738759f80f844",
                    "managedBy": ["60d5ecb8b48738759f80f845"],
                    "imgUrl": "http://example.com/event3.png",
                    "description": "This is a description for Event 3"
                }
            ];
            yield users.insertMany(userDocs);
            yield events.insertMany(eventDocs);
        }
        finally {
            yield client.close();
        }
    });
}
run().catch(console.dir);
