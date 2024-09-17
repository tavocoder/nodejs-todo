import express from 'express';
import router from '../routes/routes';
import path from 'path';
// import cors from 'cors';

const app = express();

const staticPath = path.join(__dirname, '../../client/dist');

if (process.env.MODE === 'production') {
    app.use(express.static(staticPath));
}

// app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/todos/', router)

export default app;