require('dotenv').config();
const Cotoha = require('../assets/cotoha.private.js');

describe('COTOHA API テスト', () => {
    let authKey;
    test('認証トークンの取得', async () => {
        const cotoha = new Cotoha();
        await cotoha.getAuthKey(process.env.COTOHA_ACCESS_TOKEN_PUBLISH_URL, process.env.COTOHA_CLIENT_ID, process.env.COTOHA_CLIENT_SECRET)
        .then(async result => {
            authKey = result.access_token;
            expect(authKey).not.toBe('');
        })
        .catch(err => {
            throw err;
        });
    });

    test('感情分析API', async () => {
        const cotoha = new Cotoha(authKey, process.env.COTOHA_API_BASE_URL);
        const word = '今日はとても楽しかったです';
        await cotoha.getSentiment(word)
        .then(async result => {
            sentiment = result.sentiment;
            expect(sentiment).toBe('Positive');
        })
        .catch(err => {
            throw err;
        });
    });
});