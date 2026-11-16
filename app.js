/* 頁面由 NOTES 資料產生。勿在此硬編筆記內容。 */
(function () {
  'use strict';
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const noteURL = (id) => `note.html?id=${encodeURIComponent(id)}`;
  const root = document.getElementById('app');
  if (!root || !Array.isArray(NOTES)) return;

  function card(note) {
    return `<a class="note-card" href="${noteURL(note.id)}"><div class="card-top"><span class="pill">${escapeHTML(note.category)}</span><span class="level">${escapeHTML(note.level)}</span></div><h3>${escapeHTML(note.title)}</h3><p>${escapeHTML(note.summary)}</p><div class="card-bottom"><span>約 ${Number(note.duration)} 分鐘閱讀</span><span class="arrow">閱讀筆記 ↗</span></div></a>`;
  }

  function initHome() {
    root.innerHTML = `<section class="hero"><span class="eyebrow">COMMUNICATION ENGINEERING NOTES</span><h1>讓複雜的通訊概念，<br><span>變得清楚易懂。</span></h1><p>把訊號處理、無線通訊與天線技術整理成容易複習的知識筆記。每篇採用一致的結構，也方便持續擴充。</p><div class="stats"><div class="stat"><strong>${NOTES.length}</strong><span>篇學習筆記</span></div><div class="stat"><strong>${new Set(NOTES.map(n=>n.category)).size}</strong><span>個學習分類</span></div><div class="stat"><strong>持續更新</strong><span>可擴充知識庫</span></div></div></section><section aria-labelledby="notes-title"><div class="section-heading"><div><h2 id="notes-title">探索學習筆記</h2><p>依主題或關鍵字找到需要的內容</p></div></div><div class="tools"><input id="search" type="search" placeholder="搜尋標題、摘要或標籤…" aria-label="搜尋筆記"><select id="category" aria-label="篩選分類"><option value="">全部分類</option>${[...new Set(NOTES.map(n=>n.category))].map(x=>`<option value="${escapeHTML(x)}">${escapeHTML(x)}</option>`).join('')}</select></div><div class="card-grid" id="results" aria-live="polite"></div></section>`;
    const search = document.getElementById('search');
    const category = document.getElementById('category');
    const results = document.getElementById('results');
    const render = () => {
      const term = search.value.trim().toLocaleLowerCase();
      const matches = NOTES.filter(n => (!category.value || n.category === category.value) && [n.title,n.summary,n.category,...n.tags].join(' ').toLocaleLowerCase().includes(term));
      results.innerHTML = matches.length ? matches.map(card).join('') : '<div class="empty">找不到符合條件的筆記，請試試其他關鍵字。</div>';
    };
    search.addEventListener('input', render);
    category.addEventListener('change', render);
    render();
  }

  function initNote() {
    const id = new URLSearchParams(location.search).get('id');
    const note = NOTES.find(n => n.id === id);
    if (!note) {
      document.title = '找不到筆記｜通訊工程學習筆記';
      root.innerHTML = '<div class="error"><h1>找不到這篇筆記</h1><p>網址可能不正確，或內容已調整。</p><a href="index.html">返回筆記首頁</a></div>';
      return;
    }
    document.title = `${note.title}｜通訊工程學習筆記`;
    const sections = note.sections.map(s => `<section><h2>${escapeHTML(s.heading)}</h2>${(s.paragraphs || []).map(p=>`<p>${escapeHTML(p)}</p>`).join('')}${s.bullets?.length ? `<ul>${s.bullets.map(b=>`<li>${escapeHTML(b)}</li>`).join('')}</ul>` : ''}</section>`).join('');
    root.innerHTML = `<div class="article-outer"><a href="index.html" class="back">← 返回全部筆記</a><div class="article-head"><span class="pill">${escapeHTML(note.category)}</span><h1>${escapeHTML(note.title)}</h1><p>${escapeHTML(note.summary)}</p><div class="metadata"><span>難度：${escapeHTML(note.level)}</span><span>閱讀時間：約 ${Number(note.duration)} 分鐘</span><span>更新：${escapeHTML(note.updated)}</span></div></div><article class="article-content">${sections}<div class="takeaway"><strong>重點整理</strong><div>${escapeHTML(note.takeaway)}</div></div><div class="tags">${note.tags.map(t=>`<span class="tag"># ${escapeHTML(t)}</span>`).join('')}</div></article></div>`;
  }

  if (document.body.dataset.page === 'home') initHome();
  if (document.body.dataset.page === 'note') initNote();
})();
