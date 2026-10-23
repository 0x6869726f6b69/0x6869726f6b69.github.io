# Hiroki Hasegawa — Personal Website

GitHub Pages で公開している個人サイトです（https://0x6869726f6b69.github.io/ ）。
デザインは AcademicPages 風のアカデミック・ホームページ構成で、ビルド不要の静的サイト（HTML / CSS / JavaScript）です。

## ページ構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | About me ＋ News（5件ずつ自動で流れる） |
| `publications.html` | 論文一覧（Journal / Conference / Preprint） |
| `publication.html?id=...` | 論文の詳細（Previous / Next で前後へ移動） |
| `talks.html` / `talk.html?id=...` | 発表の一覧と詳細 |
| `teaching.html` / `course.html?id=...` | 授業（TA など）の一覧と詳細 |
| `cv.html` | CV（論文・発表・授業は自動で載ります） |
| `404.html` | ページが見つからないとき |

右上の月/太陽アイコンでライト／ダークを切り替えられます（初期状態は端末の設定に合わせます）。

## 内容の編集

**文章・リンク・画像はすべて `assets/js/data.js` で編集します。** HTML を触る必要はありません。

- `"xxxxxx"` になっている箇所に文章を入れる
- 空文字 `""` にした項目は表示されない（メール、Google Scholar、ORCID など）
- 論文・発表・授業は `{ ... }` のかたまりをコピーして追加（`id` は英数字とハイフン、重複不可）
- 顔写真：`assets/img/` に画像を置き、`SITE.avatar` のパスを変更
- 著者リストでは `SITE.citationName`（`Hasegawa, H.`）と一致する名前が太字になります

デザインは `assets/css/style.css`、表示のしくみは `assets/js/main.js` にあります。

