/* =========================================================
 * 見本表示ページ共通スクリプト
 * ---------------------------------------------------------
 * today.html と sample.html で使う。
 * renderSamplePage(sample) を呼ぶと、タイトル・説明・
 * ポイント・エディタ・「学んだ!」ボタンを描画する。
 * ========================================================= */

function renderSamplePage(sample) {
  if (!sample) {
    document.querySelector(".page").innerHTML = `
      <h1 class="page-title">見本が見つかりませんでした</h1>
      <p class="page-lead">URLが間違っているか、削除された可能性があります。</p>
      <a class="btn btn-secondary" href="samples.html">📚 見本一覧へ戻る</a>
    `;
    return;
  }

  document.title = sample.title + " — Web Stack Lab";

  /* メタ情報(バッジ・タイトル・日付・学んだボタン) */
  const head = document.getElementById("sampleHead");
  head.innerHTML = `
    <div class="card-meta">
      <span class="badge badge-${sample.category}">${sample.category}</span>
      <span class="badge ${levelBadgeClass(sample.level)}">${sample.level === "応用" ? "🚀 応用" : "🌱 基礎"}</span>
      ${sample.modern ? '<span class="badge badge-new">✨ 最新技術</span>' : ""}
      <span class="card-date">${sample.date} 追加</span>
    </div>
    <h1 class="page-title">${sample.title}</h1>
  `;

  /* 技術の説明 */
  document.getElementById("sampleDescription").textContent = sample.description;

  /* 学びのポイント */
  const pointsEl = document.getElementById("samplePoints");
  pointsEl.innerHTML = sample.points.map((p) => `<li>${p}</li>`).join("");

  /* もっとくわしい解説(details.js にある見本だけ表示) */
  const detailEl = document.getElementById("sampleDetail");
  const detail =
    typeof SAMPLE_DETAILS !== "undefined" ? SAMPLE_DETAILS[sample.id] : null;
  if (detailEl && detail) {
    detailEl.innerHTML = `
      <details class="deep-dive">
        <summary>📖 もっとくわしい解説(クリックでひらく)</summary>
        <div class="deep-dive-body">${detail}</div>
      </details>
    `;
  }

  /* 学んだ!ボタン */
  const learnedBtn = document.getElementById("learnedBtn");
  function paintLearnedBtn(isLearned) {
    learnedBtn.classList.toggle("is-learned", isLearned);
    learnedBtn.textContent = isLearned ? "✔ 学んだ!" : "☐ 学んだらチェック";
  }
  paintLearnedBtn(getLearnedIds().includes(sample.id));
  learnedBtn.addEventListener("click", () => {
    paintLearnedBtn(toggleLearned(sample.id));
  });

  /* エディタ + プレビュー */
  createEditor(document.getElementById("editor"), {
    html: sample.html,
    css: sample.css,
    js: sample.js,
  });
}
