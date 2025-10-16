import express from 'express';
import cors from 'cors';

const app = express();

import db from './utils/database.js';

app.use(cors());

app.use('/api/blog_67', async (req, res, next) => {
    const results = await db.query(`select * from blog_67`);
    console.log('results', JSON.stringify(results.rows));
    res.json(results.rows);
});

app.use('/', (req, res, next) => {
    res.send('jbshen, 213410367');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log(`Server running on port ${port} `);
});