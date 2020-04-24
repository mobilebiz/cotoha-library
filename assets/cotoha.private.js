/**
 * COTOHAのRestAPIをクラス化
 */
const rp = require('request-promise');

module.exports = class Cotoha {
    // コンストラクタ
    constructor(authKey = '', apiBaseUrl = '') {
        console.log(`Cotoha(${authKey}, ${apiBaseUrl}) constructor called.`);
        this.authKey = authKey;
        this.apiBaseUrl = apiBaseUrl;
    }

    /**
     * アクセストークンの取得
     * @param {URL} accessTokenPublishUrl   COTOHA Access Token Publish URL
     * @param {String} clientId         COTOHAクライアントID
     * @param {String} clientSecret     COTOHAクライアントシークレット
     * @returns 認証キー 
     */
    getAuthKey(accessTokenPublishUrl, clientId, clientSecret) {
        console.log(`getAuthKey(${clientId}, ${clientSecret}) called`);
        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                uri: accessTokenPublishUrl,
                headers: {
                  'Content-Type': 'application/json',
                  charset: 'UTF-8'
                },
                json: {
                    grantType: 'client_credentials',
                    clientId: clientId,
                    clientSecret: clientSecret
                }, 
              };

              rp(options)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });            

        });
    };

    /**
     * 感情分析APIを使ってネガポジ判定します
     * @param {String} word     検索したい文章
     * @returns 結果データ（JSON）
     */
    getSentiment(word) {
        console.log(`getSentiment(${word}) called`);
        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                uri: `${this.apiBaseUrl}nlp/v1/sentiment`,
                headers: {
                    'Content-Type': 'application/json',
                    charset: 'UTF-8',
                    Authorization: `Bearer  ${this.authKey}`
                },
                json: {
                    sentence: word
                },
            };

            rp(options)
            .then(res => {
                console.dir(res);
                resolve(res.result);
            })
            .catch(err => {
                reject(err);
            });            
        });
    };
}