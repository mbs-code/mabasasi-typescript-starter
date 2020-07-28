# mabasasi-typescript-starter

typescript プロジェクトの雛形。

- typescript
  - ts-node-dev
- jest
- eslint + prettier
- husky
  - lint-staged
  - commitlint

## command

| key       | desc                                 |
| :-------- | :----------------------------------- |
| dev       | `src/index.ts`を実行                 |
| dev:watch | `src/index.ts`を繰り返し実行         |
| build     | `dist`に`module`を生成する           |
| lint      | ファイルの構文をチェックする         |
| fix       | 強制的にコードをフォーマットする     |
| test      | 構文チェックとユニットテストをする   |
| coverage  | ユニットテストの情報をブラウザで表示 |

## path

| key              | src path         | dist path                                |
| :--------------- | :--------------- | :--------------------------------------- |
| dev path         | src/index.ts     | dist/index.js                            |
| module/type path | src/lib/index.ts | dist/lib/index.js <br> dist/esm/index.js |

- `modlue`では`src/lib`以下のみ参照可能
- `src/index/ts`はパッケージ内の開発用

## commitlint

```
type(scope?): subject
body?
footer?
```

> type は次のいずれかでなければならない（type-enum ルール）。
>
> - build: ビルド
> - ci: CI
> - chore: 雑事（カテゴライズする必要ないようなもの）
> - docs: ドキュメント
> - feat: 新機能
> - fix: バグフィックス
> - perf: パフォーマンス
> - refactor: リファクタリング
> - revert: コミット取り消し（git revert）
> - style: コードスタイル
> - test: テスト
>
> [commitlint の紹介#ルール \- Qiita](https://qiita.com/ybiquitous/items/74225bc4bf0a9ddcd7dd#ルール)

ルール変更の仕方がいまいち分からない...（文献不足）

## 参考

- [この TypeScript が Hello, world\! のくせに慎重すぎる \- Qiita](https://qiita.com/matzkoh/items/90baab22ad489b78384b)
  - コードのベース
  - ~~`dist`にディレクトリが生成されなかったので、`package.json`の`main`パスを修正~~
    - ファイル階層修正により元に戻した
  - `npm script`に`coverage`を追加
  - `bin`と`Circle CI`は未実装（現時点では不要）
- [TypeScript \+ Node\.js プロジェクトのはじめかた 2019 \- Qiita](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)
  - `ts-node`周り
- [gitignore\.io \- Create Useful \.gitignore Files For Your Project](https://www.toptal.com/developers/gitignore)
  - `.gitignore`はここの`node`設定から引用
- [commitlint の紹介 \- Qiita](https://qiita.com/ybiquitous/items/74225bc4bf0a9ddcd7dd)
  - commitlint の追加導入
  - 設定はデフォルト
