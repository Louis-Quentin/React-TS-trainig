import express from 'express';
import cors from 'cors';
import { router } from './routes/app_route';
import { PORT, HOST } from './apiConfig';
import bodyParser from 'body-parser';

const app = express();

// Enable CORS for *
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router);

app.listen(PORT, HOST, () => {
    console.log(`Server listening on port http://${HOST}:${PORT} (${process.env.NODE_ENV ?? 'unknown environment'})`);
})
