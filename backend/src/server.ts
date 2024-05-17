import  {tweetCrawler}  from './scripts/tweetCrawler.js';
import { loginAcceptCrawler } from './scripts/loginAcceptCrawler.js';
import express from 'express';

const app = express();
const PORT = 8080;

//loginAcceptCrawler();
tweetCrawler();
app.get('/', (req, res) => {
    res.send('hello!');
});

app.get('/crawl', async (req, res) => {
  res.send('hello2!');
  // try {
  //   const data = await crawls(); // Puppeteer로 크롤링한 데이터
  //   res.json({ crawledData: data }); // JSON 형식으로 응답
  // } catch (error) {
  //   console.error('Error during crawling:', error);
  //   res.status(500).json({ error: 'Failed to crawl data' });
  // }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); 
});


