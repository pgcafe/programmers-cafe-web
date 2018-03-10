# プログラマーズカフェWebサイト
プログラマーズカフェのサイトを作成するためのリポジトリです。
このサイトは [Netlify用の機能を追加したGatsby](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify) という ヘッドレスCMS をベースにしています。

## ページ作成、開発をはじめる
git clone などでソースコードを入手した後、以下のコマンドを実行

※yarnが入っていない場合は、環境に合わせてインストールしてください。

```
yarn install
yarn start
```

コマンド実行後、

```
http://localhost:8000/
```

にブラウザなどでアクセスするとサイトが表示されます。

## ページ追加
ページを追加する場合は、

```
src/pages
```

以下にmdファイルを追加してください。

また、
```
src/pages/blog
```

以下に .md ファイルを追加するとブログ記事として追加されます。

## 公開、反映

ローカルで編集後、git pushすると https://pgcafe.netlify.com/ が更新されます。



powered by Netlify with Gatsby
