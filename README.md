# Todo Frontend

Next.js + TypeScript + Tailwind CSS で作成したTodoアプリのフロントエンド

## 🚀 機能

- ✅ Todo一覧表示
- ✅ Todo作成
- ✅ Todo完了/未完了の切り替え（一度完了したら変更不可）
- ✅ Todo削除
- ✅ レスポンシブデザイン
- ✅ ダークテーマUI

## 🛠 技術スタック

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Package Manager**: npm

## 📋 前提条件

- Node.js 18.0以上
- npm または yarn
- バックエンドサーバーが起動していること（Go + Gin）

## 🔧 セットアップ

1. **リポジトリをクローン**
```bash
git clone https://github.com/latttchc/dodo-go-frontend.git
cd dodo-go-frontend
```

2. **依存関係をインストール**
```bash
npm install
```

3. **開発サーバーを起動**
```bash
npm run dev
```

4. **ブラウザでアクセス**
```
http://localhost:3000
```

## 🔗 バックエンド連携

このフロントエンドは以下のバックエンドAPIと連携します：

- **リポジトリ**: [dodo-go-backend](https://github.com/latttchc/dodo-go-backend)
- **ベースURL**: `http://localhost:8080`

### API エンドポイント

| メソッド | エンドポイント | 説明 |
|---------|---------------|------|
| GET | `/todos` | Todo一覧取得 |
| POST | `/todos` | Todo作成 |
| PUT | `/todos/:id` | Todo更新 |
| DELETE | `/todos/:id` | Todo削除 |

## 📱 使用方法

1. **Todo作成**: 上部の入力フィールドにタスクを入力し「追加」ボタンをクリック
2. **Todo完了**: チェックボックスをクリックして完了状態に変更（一度完了したら変更不可）
3. **Todo削除**: 各Todoの「削除」ボタンをクリック

## 🎨 UI仕様

- **カラーテーマ**: ダークテーマ
- **レスポンシブ**: モバイル・タブレット・デスクトップ対応
- **アクセント色**: 
  - チェックボックス: 緑色（`accent-green-500`）
  - 追加ボタン: 青色（`bg-blue-500`）
  - 削除ボタン: 赤色（`bg-red-500`）

## 📁 プロジェクト構造

```
frontend/
├── src/
│   └── app/
│       ├── page.tsx          # メインTodoページ
│       ├── layout.tsx        # レイアウト
│       └── globals.css       # グローバルスタイル
├── public/                   # 静的ファイル
├── tailwind.config.ts        # Tailwind設定
├── next.config.js           # Next.js設定
└── package.json             # 依存関係
```

## 🚀 デプロイ

### Vercel（推奨）

```bash
npm install -g vercel
vercel
```

### その他のプラットフォーム

```bash
npm run build
npm start
```

## 🔧 環境変数

必要に応じて `.env.local` ファイルを作成：

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```

## 🐛 トラブルシューティング

### よくある問題

1. **CORS エラー**
   - バックエンドでCORS設定が正しく行われているか確認

2. **API接続エラー**
   - バックエンドサーバーが起動しているか確認
   - APIのベースURLが正しいか確認

3. **スタイルが適用されない**
   - Tailwind CSSの設定を確認
   - `npm run dev` でサーバーを再起動

## 📝 開発者向け

### スクリプト

```bash
npm run dev          # 開発サーバー起動
npm run build        # プロダクションビルド
npm run start        # プロダクションサーバー起動
npm run lint         # ESLintチェック
```

### コーディング規約

- TypeScriptの型定義を適切に使用
- コンポーネントは関数コンポーネントで作成
- Tailwind CSSでスタイリング
- エラーハンドリングを適切に実装

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Requestを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 👨‍💻 作成者

- **GitHub**: [@latttchc](https://github.com/latttchc)

---

**関連リンク**
- [バックエンドリポジトリ](https://github.com/latttchc/dodo-go-backend)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
