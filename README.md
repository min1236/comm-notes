# 通訊工程學習筆記

以原生 HTML/CSS/JavaScript 建立的可擴充學習筆記網站。首頁提供搜尋與分類篩選，文章詳情共用 `note.html` 模板。AI 協作規則見 [AGENTS.md](AGENTS.md)。

## 功能
- 通訊工程知識筆記列表與詳情
- 即時關鍵字搜尋、分類篩選
- RWD 手機版版型
- 資料驅動的筆記新增方式

## 專案架構
- `index.html`：首頁
- `note.html`：文章頁
- `css/style.css`：共用樣式
- `js/data.js`：筆記內容
- `js/app.js`：畫面與互動
- `AGENTS.md`：AI 協作規範

## 如何新增內容
1. 閱讀 `AGENTS.md` 第 4–8 節。
2. 在 `js/data.js` 的 `NOTES` 陣列加入一個符合欄位規範的物件。
3. 開啟首頁，確認新卡片出現、可搜尋並可點進文章頁。
4. 將變更 commit 並 push 至 GitHub。

## 本機預覽
直接使用瀏覽器開啟 `index.html`，或在資料夾中執行 `python -m http.server 8000`，再開啟 `http://localhost:8000/`。

## 部署至 GitHub Pages
1. 建立公開 GitHub Repository（例如 `comm-notes`）。
2. 上傳**此資料夾內的全部檔案**到 Repository 根目錄，不要多包一層資料夾。
3. 進入 Repository → **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**，Branch 設定為 `main`，資料夾選 `/ (root)`，按 **Save**。
5. GitHub Pages 完成部署後，網頁通常為 `https://你的帳號.github.io/comm-notes/`；請以 Pages 顯示的實際網址為準。

> 部署後請把 `index.html` 和 `note.html` 導覽列中的 GitHub 首頁 `https://github.com/` 改為自己的實際儲存庫網址。

## 提交說明
此專案將網站實作方式與後續擴充規則分開管理，讓 AI 讀取 `AGENTS.md` 後，能依固定資料格式新增內容，而不必重寫 HTML 和 CSS。
