import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDb from "./db/connectToMongoDb.js";
import cookieParser from 'cookie-parser'

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/user.routes.js";


const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', usersRoutes)

app.listen(PORT, () => {
    connectToMongoDb()
    console.log(`Server is running on port ${PORT}`);
});