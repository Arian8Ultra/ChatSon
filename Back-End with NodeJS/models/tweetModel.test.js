const { CreateTweet, GetTweet, GetTweets, UpdateTweet, DeleteTweet, GetTweetByUsername,GetCurentUserTweets,LikeTweet,UnlikeTweet } = require('./models/tweetModel');

// creating test fro tweetModel Methods
 test('CreateTweet', () => {
    expect(CreateTweet).toBeDefined();
});

test('GetTweet', () => {
    expect(GetTweet).toBeDefined();
});

test('GetTweets', () => {
    expect(GetTweets).toBeDefined();
});

test('UpdateTweet', () => {
    expect(UpdateTweet).toBeDefined();
});

test('DeleteTweet', () => {
    expect(DeleteTweet).toBeDefined();
});

test('GetTweetByUsername', () => {
    expect(GetTweetByUsername).toBeDefined();
});

test('GetCurentUserTweets', () => {
    expect(GetCurentUserTweets).toBeDefined();
});

test('LikeTweet', () => {
    expect(LikeTweet).toBeDefined();
});

test('UnlikeTweet', () => {
    expect(UnlikeTweet).toBeDefined();
});
