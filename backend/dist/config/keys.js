import dotenv from 'dotenv';
dotenv.config();
const keys = {
    twitter: {
        consumerKey: process.env.REACT_APP_TWITTER_CONSUMER_KEY || 'default_consumer_key',
        consumerSecret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET || 'default_consumer_secret',
        callbackURL: 'http://yourdomain.com/auth/twitter/callback'
    }
};
console.log(process.env.REACT_APP_TWITTER_CONSUMER_KEY);
export default keys;
