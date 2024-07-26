var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { tweetCrawler } from './scripts/tweetCrawler.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import passport from 'passport';
import session from 'express-session';
import keys from './config/keys.js';
import { twitterLogin } from './scripts/twitterLogin.js';
const app = express();
const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
passport.use(new TwitterStrategy({
    consumerKey: keys.twitter.consumerKey,
    consumerSecret: keys.twitter.consumerSecret,
    callbackURL: keys.twitter.callbackURL
}, (token, tokenSecret, profile, done) => {
    const user = {
        id: profile.id,
        username: profile.username,
        displayName: profile.displayName,
        token: token
    };
    // 사용자 정보 반환
    return done(null, user);
}));
// 트위터 로그인 라우트
app.get('/auth/twitter', passport.authenticate('twitter'));
// 트위터 콜백 라우트
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }), (req, res) => {
    // 인증 성공 시 리디렉션 경로
    res.redirect('/profile');
});
// // 로그아웃 라우트
// app.get('/logout', (req, res) => {
//   req.logout((err) => {
//       if (err) {
//           return next(err);
//       }
//       req.session.destroy();
//       res.redirect('/');
//   });
// });
app.get('/profile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const oauthToken = req.session.oauthToken;
    const oauthTokenSecret = req.session.oauthTokenSecret;
    if (!oauthToken || !oauthTokenSecret) {
        return res.status(401).json({ error: 'Not authenticated' });
    }
    try {
        const response = yield axios.get('https://api.twitter.com/1.1/account/verify_credentials.json', {
            headers: {
                Authorization: `OAuth oauth_consumer_key="${keys.twitter.consumerKey}", oauth_token="${oauthToken}", oauth_token_secret="${oauthTokenSecret}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Math.floor(Date.now() / 1000)}", oauth_nonce="${Math.random().toString(36).substring(7)}", oauth_version="1.0"`
            }
        });
        res.json(response.data);
    }
    catch (error) {
        res.status(500).send('Error fetching user profile');
    }
}));
//하단 로그인 로직
app.post('/twitter-login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Request received at /twitter-login');
    console.log('Request body:', req.body);
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }
    try {
        const loginResponse = yield twitterLogin(username, password);
        if (loginResponse.success) {
            res.status(200).json(loginResponse);
        }
        else {
            res.status(401).json({ message: loginResponse.message });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred during login.' });
    }
}));
let crawledData = null;
app.get('/', (req, res) => {
    res.send('hello!');
});
app.post('/url', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.body.url;
    console.log('Received URL:', url);
    try {
        const data = yield tweetCrawler(url);
        crawledData = data;
        console.log('Crawled Data:', data);
        res.json({ nonLoginAccessData: data });
    }
    catch (error) {
        console.error('Error in tweetCrawler:', error);
        res.status(500).json({ error: 'Failed to crawl data' });
    }
}));
app.get('/crawl', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (crawledData) {
        res.json({ nonLoginAccessData: crawledData });
    }
    else {
        res.status(500).json({ error: 'No crawled Data available!' });
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
