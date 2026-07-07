/* =========================================================
 * タブ切替エディタ + ライブプレビュー 共通部品
 * ---------------------------------------------------------
 * 使い方:
 *   const editor = createEditor(コンテナ要素, {
 *     html: "...", css: "...", js: "...",
 *   });
 *   editor.getCode()          // { html, css, js } を取得
 *   editor.setCode({...})     // コードを差し替え(プレビューも更新)
 *   editor.appendCode({...})  // コードを末尾に追記
 *   editor.reset()            // 初期コードに戻す
 *
 * コンテナの中に「HTML/CSS/JSタブ付きエディタ」と
 * 「プレビュー(iframe)」を横並び(狭い画面では縦)で生成する。
 * 入力するとデバウンス付きでプレビューが自動更新される。
 * ========================================================= */

function createEditor(container, initialCode, options = {}) {
  const initial = {
    html: initialCode.html || "",
    css: initialCode.css || "",
    js: initialCode.js || "",
  };
  const current = { ...initial };

  /* ---- DOM生成 ---- */
  container.classList.add("editor-wrap");
  container.innerHTML = `
    <section class="editor-pane">
      <div class="editor-toolbar">
        <div class="editor-tabs" role="tablist">
          <button class="editor-tab is-active" data-lang="html" role="tab">HTML</button>
          <button class="editor-tab" data-lang="css" role="tab">CSS</button>
          <button class="editor-tab" data-lang="js" role="tab">JS</button>
        </div>
        <div class="editor-actions">
          <button class="editor-action" data-action="copy" title="表示中のコードをコピー">コピー</button>
          <button class="editor-action" data-action="reset" title="初期コードに戻す">リセット</button>
        </div>
      </div>
      <textarea class="editor-area" data-lang="html" spellcheck="false"></textarea>
      <textarea class="editor-area is-hidden" data-lang="css" spellcheck="false"></textarea>
      <textarea class="editor-area is-hidden" data-lang="js" spellcheck="false"></textarea>
    </section>
    <section class="preview-pane">
      <div class="preview-toolbar">
        <span class="preview-dot"></span>
        <span class="preview-dot"></span>
        <span class="preview-dot"></span>
        <span class="preview-label">プレビュー</span>
      </div>
      <iframe class="preview-frame" title="プレビュー" sandbox="allow-scripts"></iframe>
    </section>
  `;

  const tabs = container.querySelectorAll(".editor-tab");
  const areas = container.querySelectorAll(".editor-area");
  const iframe = container.querySelector(".preview-frame");
  const copyBtn = container.querySelector('[data-action="copy"]');
  const resetBtn = container.querySelector('[data-action="reset"]');

  let activeLang = "html";

  areas.forEach((area) => {
    area.value = current[area.dataset.lang];
  });

  /* ---- プレビュー描画 ---- */
  function renderPreview() {
    iframe.srcdoc = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<style>${current.css}</style>
</head>
<body>
${current.html}
<script>${current.js}<\/script>
</body>
</html>`;
  }

  /* ---- タブ切り替え ---- */
  function switchTab(lang) {
    activeLang = lang;
    tabs.forEach((t) => t.classList.toggle("is-active", t.dataset.lang === lang));
    areas.forEach((a) => a.classList.toggle("is-hidden", a.dataset.lang !== lang));
    container.querySelector(`.editor-area[data-lang="${lang}"]`).focus();
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => switchTab(tab.dataset.lang));
  });

  /* ---- 入力 → デバウンスしてプレビュー更新 ---- */
  let timer = null;
  areas.forEach((area) => {
    area.addEventListener("input", () => {
      current[area.dataset.lang] = area.value;
      clearTimeout(timer);
      timer = setTimeout(() => {
        renderPreview();
        if (options.onChange) options.onChange({ ...current });
      }, 300);
    });

    /* Tabキーでスペース2つを挿入(フォーカス移動させない) */
    area.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = area.selectionStart;
        const end = area.selectionEnd;
        area.value = area.value.slice(0, start) + "  " + area.value.slice(end);
        area.selectionStart = area.selectionEnd = start + 2;
        area.dispatchEvent(new Event("input"));
      }
    });
  });

  /* ---- コピー / リセット ---- */
  copyBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(current[activeLang]);
    copyBtn.textContent = "コピーした!";
    setTimeout(() => (copyBtn.textContent = "コピー"), 1200);
  });

  resetBtn.addEventListener("click", () => {
    if (!confirm("初期のコードに戻します。よろしいですか?")) return;
    api.setCode(initial);
  });

  /* ---- 外部から使うAPI ---- */
  const api = {
    getCode() {
      return { ...current };
    },
    setCode(code) {
      ["html", "css", "js"].forEach((lang) => {
        if (code[lang] !== undefined) {
          current[lang] = code[lang];
          container.querySelector(`.editor-area[data-lang="${lang}"]`).value = code[lang];
        }
      });
      renderPreview();
      if (options.onChange) options.onChange({ ...current });
    },
    appendCode(code) {
      const merged = {};
      ["html", "css", "js"].forEach((lang) => {
        const add = code[lang];
        if (add) {
          merged[lang] = current[lang] ? current[lang] + "\n\n" + add : add;
        }
      });
      api.setCode(merged);
    },
    reset() {
      api.setCode(initial);
    },
    switchTab,
  };

  renderPreview();
  return api;
}
