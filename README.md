# COTOHA Library for Twilio CLI Serverless

Twilio CLI Serverless で COTOHA を簡単に扱うためのライブラリです。
Assets 内のプライベートファイルとして利用します。

- [COTOHA](https://api.ce-cotoha.com/contents/index.html)
- NTTコミュニケーションズが提供する自然言語処理・音声処理APIプラットフォーム
- 日本語辞書による精度向上
- 構文解析、固有表現抽出、固有名詞補正、照応解析、キーワード抽出、類似性算出、文タイプ判定、感情分析などの分析
- 音声認識（STT）、音声合成（TTS）機能も保有
- 要約、テキスト分類なども可能

## Features

Twilio Functions から簡単に COTOHA の各種機能呼び出すことが可能です。  
※現在のバージョンでは、COTOHA API の感情分析にのみ対応しています。それ以外のAPIは未対応です。  

## Requirement

- dotenv 8.2.0 （テストで利用）
- request-promise 4.2.5（テストで利用）

## Installation

まずは、[COTOHA Developers無料登録](https://api.ce-cotoha.com/contents/developers/index.html)から、COTOHA APIの検証用アカウントを作成します。  
アカウントが作成されると、以下の内容が払い出されるので、こちらを控えておきます。

- Access Token Publish URL
- Developer API Base URL
- Developer Client id
- Developer Client secret

つぎに、 Serverless プロジェクトを作成してください。

```sh
twilio serverless:init --template blank
（以下略）
```

次に、本プロジェクト内にある`.env.sample`を参考に、ご自分の作業ディレクトリにある`.env`の内容をご自分の環境に合わせて変更します。

変数名|説明
:--|:--
ACCOUNT_SID|Twilio CLIで生成された値（SKから始まる文字列）
AUTH_TOKEN|Twilio CLIで生成された値
COTOHA_ACCESS_TOKEN_PUBLISH_URL|先程控えておいた Access Token Publish URL ※新設
COTOHA_API_BASE_URL|先ほど控えておいた Developer API Base URL ※新設
COTOHA_CLIENT_ID|先ほど控えておいた Developer Client id ※新設
COTOHA_CLIENT_SECRET|先ほど控えておいた Developer Client secret ※新設

最後に、本プロジェクト assets フォルダ内にある`cotoha.private.js`をご自分の Twilio CLI Serverless 作業ディレクトリ内の assets にコピーしてください。

## Usage

使い方のサンプルは、本プロジェクトの functions フォルダ内にある `Cotoha.js` 御覧ください。

## Note

## Author

- 高橋克己
- グローバル・インターネット・ジャパン株式会社
- 株式会社KDDIウェブコミュニケーションズ
- katsumi@gij.com / katsumi.takahashi@kddi-web.com

## License

"COTOHA Library for Twilio CLI" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
