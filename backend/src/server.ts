import  {tweetCrawler}  from './scripts/tweetCrawler.js';
import { loginAcceptCrawler } from './scripts/loginAcceptCrawler.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import axios from 'axios';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

const consumerKey = 'YOUR_CONSUMER_KEY';
const consumerSecret = 'YOUR_CONSUMER_SECRET';
const callbackURL = 'http://localhost:3000/callback';
let requestTokenSecret: string | null = null;

//인증요청
app.get('/login', async (req, res) => {
  try {
      const response = await axios.post('https://api.twitter.com/oauth/request_token', null, {
          params: {
              oauth_callback: callbackURL
          },
          headers: {
              Authorization: `OAuth oauth_consumer_key="${consumerKey}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Math.floor(Date.now() / 1000)}", oauth_nonce="${Math.random().toString(36).substring(7)}", oauth_version="1.0"`
          }
      });

      const requestToken = new URLSearchParams(response.data);
      requestTokenSecret = requestToken.get('oauth_token_secret');

      res.redirect(`https://api.twitter.com/oauth/authenticate?oauth_token=${requestToken.get('oauth_token')}`);
  } catch (error) {
      res.status(500).send('Error getting request token');
  }
});

// 트위터 콜백 처리
app.get('/callback', async (req, res) => {
  const { oauth_token, oauth_verifier } = req.query;
  
  try {
      const response = await axios.post('https://api.twitter.com/oauth/access_token', null, {
          params: {
              oauth_token,
              oauth_verifier
          },
          headers: {
              Authorization: `OAuth oauth_consumer_key="${consumerKey}", oauth_token="${oauth_token}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Math.floor(Date.now() / 1000)}", oauth_nonce="${Math.random().toString(36).substring(7)}", oauth_version="1.0"`
          }
      });

      const accessToken = new URLSearchParams(response.data);
      const oauthToken = accessToken.get('oauth_token');
      const oauthTokenSecret = accessToken.get('oauth_token_secret');

      res.cookie('oauth_token', oauthToken, { httpOnly: true });
      res.cookie('oauth_token_secret', oauthTokenSecret, { httpOnly: true });

      res.redirect('/profile');
  } catch (error) {
      res.status(500).send('Error getting access token');
  }
});

app.get('/profile', async (req, res) => {
  const { oauth_token, oauth_token_secret } = req.cookies;

  try {
      const response = await axios.get('https://api.twitter.com/1.1/account/verify_credentials.json', {
          headers: {
              Authorization: `OAuth oauth_consumer_key="${consumerKey}", oauth_token="${oauth_token}", oauth_token_secret="${oauth_token_secret}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Math.floor(Date.now() / 1000)}", oauth_nonce="${Math.random().toString(36).substring(7)}", oauth_version="1.0"`
          }
      });

      res.json(response.data);
  } catch (error) {
      res.status(500).send('Error fetching user profile');
  }
});

//하단 크롤러
type CrawledData = { text: string[]; images: string[] } | null;
let crawledData:CrawledData = null;
app.get('/', (req, res) => {
    res.send('hello!');
});

app.post('/url', async (req, res) => {
  const url = req.body.url;
  console.log('Received URL:', url);

  try {
    const data = await tweetCrawler(url);
    crawledData = data; 
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


