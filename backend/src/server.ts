import  {tweetCrawler}  from './scripts/tweetCrawler.js';
import { loginAcceptCrawler } from './scripts/loginAcceptCrawler.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

let crawledData = null;
app.get('/', (req, res) => {
    res.send('hello!');
});

app.post('/url', async (req, res) => {
  const url = req.body.url;
  console.log('Received URL:', url);

  try {
    const data = await tweetCrawler(url);
    res.json({ nonLoginAccessData: data });
  } catch (error) {
    console.error('Error in tweetCrawler:', error);
    res.status(500).json({ error: 'Failed to crawl data' });
  }
});

app.get('/crawl', async (req, res) => {
  if(crawledData) {
    res.json({nonLoginAccessData: crawledData});
  } else {
    res.status(500).json({error: 'No crawled Data available!'})
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); 
});


