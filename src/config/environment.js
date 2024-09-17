import dotenv from "dotenv";

dotenv.config();

export const serverPort = process.env.SERVER_PORT || 5000;
export const mongodbUri = process.env.MONGODB_URI;
