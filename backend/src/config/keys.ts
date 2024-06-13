const keys = {
    twitter: {
        consumerKey: process.env.TWITTER_CONSUMER_KEY || 'default_consumer_key',
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET || 'default_consumer_secret',
        callbackURL: 'http://yourdomain.com/auth/twitter/callback'
    }
};

export default keys;