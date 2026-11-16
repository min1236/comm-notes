// 新增筆記只需在 NOTES 陣列加入一筆物件；詳細規範參閱 AGENTS.md。
const NOTES = [
  {
    id: 'fourier-transform',
    title: '傅立葉轉換入門',
    category: '訊號與系統',
    level: '基礎',
    summary: '理解訊號如何從時間域轉換至頻率域，以及頻譜的意義。',
    updated: '2026-11-16',
    duration: 6,
    tags: ['頻率域', '頻譜', '訊號分析'],
    sections: [
      { heading: '核心概念', paragraphs: ['傅立葉轉換可將時間域訊號表示為不同頻率成分的組合，方便觀察訊號的頻率分布。', '連續時間傅立葉轉換的常見形式：X(f) = ∫ x(t)e^(−j2πft) dt，其中積分範圍為負無限大至正無限大。'] },
      { heading: '重要性質', bullets: ['線性：兩個訊號的線性組合，其轉換亦為相同的線性組合。', '時移：時間上的位移會對應到頻域的相位改變。', '摺積定理：時間域摺積對應到頻域乘積。'] },
      { heading: '應用情境', paragraphs: ['在無線通訊中，可運用頻譜觀察訊號所占頻寬及可能的干擾來源。'] }
    ],
    takeaway: '傅立葉轉換的重點，是用頻率成分重新理解同一個訊號。'
  },
  {
    id: 'autocorrelation',
    title: '自相關函數',
    category: '訊號與系統',
    level: '基礎',
    summary: '用不同時間位移下的相似程度，辨識訊號的週期性與統計特性。',
    updated: '2026-11-16',
    duration: 5,
    tags: ['相關性', '週期性', '隨機過程'],
    sections: [
      { heading: '核心概念', paragraphs: ['自相關函數用於描述訊號與其時間位移版本之間的相似程度。', '對實數能量訊號，常見定義為 Rxx(τ) = ∫ x(t)x(t+τ) dt；對隨機過程則使用期望值定義。'] },
      { heading: '觀察重點', bullets: ['τ = 0 時代表訊號與本身完全對齊。', '若訊號有週期性，自相關函數通常也會呈現週期性。', '對複數訊號，定義需適當使用複數共軛。'] },
      { heading: '應用情境', paragraphs: ['可用於週期偵測、訊號同步及分析雜訊的統計特性。'] }
    ],
    takeaway: '自相關函數讓我們知道：訊號延遲多少之後，仍與原本相似。'
  },
  {
    id: 'mvdr-beamforming',
    title: 'MVDR 波束成形',
    category: '無線通訊',
    level: '進階',
    summary: '以陣列天線強化目標方向的接收，並降低其他方向的干擾。',
    updated: '2026-11-16',
    duration: 8,
    tags: ['天線陣列', '抗干擾', '波束成形'],
    sections: [
      { heading: '核心概念', paragraphs: ['MVDR（Minimum Variance Distortionless Response）以最小化輸出功率為目標，同時維持目標方向的單位響應。', '典型最佳化式：min wᴴRw，條件為 wᴴa(θ₀) = 1；R 為接收訊號協方差矩陣，a(θ₀) 為目標方向導向向量。'] },
      { heading: '模擬流程', bullets: ['建立均勻線性陣列（ULA）與目標、干擾方向。', '估計接收訊號協方差矩陣。', '計算 MVDR 權重，並繪製方向圖。', '觀察目標方向增益與干擾方向的凹陷（null）。'] },
      { heading: '注意事項', paragraphs: ['實際效果受到協方差矩陣估計品質、樣本數與陣列模型誤差影響；模擬結果不應直接視為實際系統效能。'] }
    ],
    takeaway: 'MVDR 的核心是「維持目標響應，同時最小化其他方向造成的輸出功率」。'
  },
  {
    id: 'ofdm-basics',
    title: 'OFDM 基本原理',
    category: '無線通訊',
    level: '中階',
    summary: '認識正交分頻多工的子載波、循環字首與抗多路徑特性。',
    updated: '2026-11-16',
    duration: 7,
    tags: ['多載波', '正交性', '循環字首'],
    sections: [
      { heading: '核心概念', paragraphs: ['OFDM 將高速資料流分配至多個彼此正交的子載波傳送，以降低每個子載波的符元速率。', '實務上常利用 IFFT 產生時域 OFDM 符元，接收端再透過 FFT 回到各子載波的頻域表示。'] },
      { heading: '關鍵設計', bullets: ['子載波之間維持正交，讓頻譜可以重疊以提高頻譜效率。', '循環字首（CP）在足夠長的情況下，可減輕多路徑導致的符元間干擾。', '系統須處理頻率偏移、峰均功率比（PAPR）及通道估計等問題。'] },
      { heading: '應用情境', paragraphs: ['OFDM 是 Wi‑Fi 與行動通訊等系統中常見的多載波技術基礎。'] }
    ],
    takeaway: 'OFDM 透過正交子載波與適當的保護區間，提高頻率選擇性通道中的傳輸彈性。'
  }
];
