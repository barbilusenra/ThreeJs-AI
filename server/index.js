import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from DALL.E"})
})

app.listen(port, () => console.log('Server has started on port 8080'))