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
      try{
      const data = await tweetCrawler();
      res.json({nonLoginAccessData: data});
    } catch(error){
      console.error('Error during Crawling:', error);
      res.status(500).json({error: 'Failed to Crawl Data.'})
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); 
});


