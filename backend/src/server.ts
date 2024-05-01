import {crawls} from './scripts/crawler';
import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('hello!');
});

app.get('/crawl', async (req, res) => {
  res.send('냐앙');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); 
});


