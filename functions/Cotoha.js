const rp = require('request-promise');

exports.handler = async function(context, event, callback) {
  const word = event.word || "先日注文した商品がまだ届かないんで、ちょっと困っているんですけど";

  // COTOHAライブラリの準備
  const Cotoha = require(assets['/cotoha.js'].path);
  const cotoha;
  let authKey;  // COTOHAアクセストークン

  // アクセストークンを取得する
  cotoha = new Cotoha();
  await cotoha.getAuthKey(context.COTOHA_CLIENT_ID, context.COTOHA_CLIENT_SECRET)
  .then(async result => {
    authKey = result.access_token;
    // 感情分析APIの呼び出し
    const cotoha = new Cotoha(authKey);
    return await cotoha.getSentiment(word);
  })
  .then(result => {
    callback(null, {result: result.sentiment});
  })
  .catch(err => {
    console.dir(err);
    callback(err);
  });
};