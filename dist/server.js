"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
// Enable CORS for all routes
app.use((0, cors_1.default)({ exposedHeaders: ["Authorization"] }));
app.use(express_1.default.json());
// MongoDB connection setup
mongoose_1.default
    .connect("mongodb+srv://admin:admin@mongotodo.gb7kb.mongodb.net/")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Database connection error: ", err));
app.get("/", (req, res) => {
    res.send("Hello World");
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
