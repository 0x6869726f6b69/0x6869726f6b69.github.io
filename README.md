# Portfolio Website

GitHub Pages で公開する、研究・制作ポートフォリオサイトです。
ビルド不要の静的サイト（HTML / CSS / JavaScript）です。

## ページ構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | トップ（メインビジュアル / PROJECTS / VISION / NEWS） |
| `vision.html` | ビジョン |
| `profile.html` | プロフィール |
| `projects.html` | プロジェクト一覧（カテゴリ絞り込みあり） |
| `project.html?id=...` | プロジェクト詳細（前後のプロジェクトへ移動可） |
| `publication.html` | 研究業績・発表 |
| `news.html` | お知らせ一覧 |
| `post.html?id=...` | お知らせ詳細 |
| `contact.html` | お問い合わせ |
| `404.html` | ページが見つからないとき |

## 内容の編集

**文章・リンク・画像はすべて `assets/js/data.js` で編集します。** HTML を触る必要はありません。

- 名前・SNS：`window.SITE`
- プロジェクトの追加：`window.PROJECTS` の `{ ... }` をコピーして追加（`id` は英数字とハイフン、重複不可）
- ニュースの追加：`window.NEWS` に追加（日付順に自動で並びます）
- 画像の差し替え：`assets/img/` に画像（jpg / png / svg）を置き、`image` のパスを書き換え

デザインは `assets/css/style.css`、表示のしくみは `assets/js/main.js` にあります。

## 手元で確認する

```bash
python -m http.server 8000
```

ブラウザで http://localhost:8000 を開きます。

## 公開（更新）する

```bash
git add -A
git commit -m "Update content"
git push
```

push して 1〜2 分ほどで GitHub Pages に反映されます。
