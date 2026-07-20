/* =========================================================
 * 見本データ
 * ---------------------------------------------------------
 * 新しい見本を追加するときは、この配列の末尾にオブジェクトを
 * 追加するだけでOK。一覧・詳細・本日の見本・遊び場に自動で反映される。
 *
 *   id       : URLに使う一意な英数字(ケバブケース)
 *   title    : 見本のタイトル
 *   category : "HTML" | "CSS" | "JS" (メインで学ぶ技術)
 *   level    : "基礎" | "応用"
 *   modern   : true にすると「✨最新技術」バッジがつく(省略可)
 *   date     : 追加した日 (YYYY-MM-DD)
 *   summary  : カード一覧に表示する短い説明(1〜2文)
 *   description : 詳細ページに表示する技術の説明
 *   points   : 学びのポイント(箇条書き)
 *   html/css/js : エディタの初期コード
 *
 * 注意: コードはバッククォート(`)で囲むので、コード内で ` や ${ を
 * 使う場合は \` \${ とエスケープすること。
 * ========================================================= */

const SAMPLES = [
  /* =====================================================
   * HTML — 基礎
   * =================================================== */
  {
    id: "html-basic-structure",
    title: "見出しと段落 — HTMLの基本構造",
    category: "HTML",
    level: "基礎",
    date: "2026-06-08",
    summary: "h1〜h3の見出しとp・ul・aタグで、文書の骨組みを作る最初の一歩。",
    description:
      "HTMLは「文書の構造」を表現する言語です。見出し(h1〜h6)は文書の階層を表し、p は段落、ul/li は箇条書き、a はリンクを表します。見た目のためではなく「意味」でタグを選ぶことが、読みやすくアクセシブルなページへの第一歩です。",
    points: [
      "h1 はページに1つ。h2, h3 と階層を飛ばさずに使う",
      "ul(順不同リスト)と ol(順序付きリスト)の使い分け",
      "a タグの href 属性でリンク先を指定する",
    ],
    html: `<h1>はじめてのHTML</h1>
<p>HTMLは文書の<strong>構造</strong>を表す言語です。</p>

<h2>今日学ぶこと</h2>
<ul>
  <li>見出しタグ (h1〜h6)</li>
  <li>段落タグ (p)</li>
  <li>リストタグ (ul / li)</li>
</ul>

<h2>参考リンク</h2>
<p><a href="https://developer.mozilla.org/ja/" target="_blank">MDN Web Docs</a> がおすすめです。</p>`,
    css: `body {
  font-family: sans-serif;
  line-height: 1.8;
  padding: 16px;
}
h1 {
  border-bottom: 3px solid #ff7ab6;
  padding-bottom: 8px;
}`,
    js: ``,
  },

  {
    id: "html-form-parts",
    title: "フォーム部品カタログ — input・select・textarea",
    category: "HTML",
    level: "基礎",
    date: "2026-06-10",
    summary: "テキスト・色・範囲・選択肢…。HTMLだけで使える入力部品を総ざらい。",
    description:
      "フォームはユーザーから情報を受け取る玄関口です。input はtype属性を変えるだけで、テキスト・メール・日付・色・スライダーなど何役もこなします。label の for と input の id を対応させると、ラベルをクリックしても入力欄にフォーカスでき、支援技術にも意味が伝わります。",
    points: [
      "input は type 属性で姿が変わる(text / email / date / color / range など)",
      "label の for 属性と input の id を対応させる",
      "placeholder は「例」を示すもの。ラベルの代わりにしない",
    ],
    html: `<form>
  <p>
    <label for="name">おなまえ</label><br>
    <input type="text" id="name" placeholder="例: ぴかまる">
  </p>
  <p>
    <label for="birthday">たんじょうび</label><br>
    <input type="date" id="birthday">
  </p>
  <p>
    <label for="color">すきな色</label>
    <input type="color" id="color" value="#ff7ab6">
  </p>
  <p>
    <label for="genki">今日の元気度</label><br>
    <input type="range" id="genki" min="0" max="100">
  </p>
  <p>
    <label for="animal">すきな動物</label><br>
    <select id="animal">
      <option>ねこ</option>
      <option>いぬ</option>
      <option>カピバラ</option>
    </select>
  </p>
  <p>
    <label for="memo">ひとこと</label><br>
    <textarea id="memo" rows="3" placeholder="自由に書いてね"></textarea>
  </p>
  <button type="button">そうしん(ダミー)</button>
</form>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
input, select, textarea {
  font-size: 15px;
  padding: 6px 10px;
  border: 2px solid #f0cfe0;
  border-radius: 8px;
}
label {
  font-weight: bold;
  color: #b05585;
}
button {
  padding: 8px 24px;
  border: none;
  border-radius: 999px;
  background: #ff7ab6;
  color: white;
  font-size: 15px;
  cursor: pointer;
}`,
    js: ``,
  },

  {
    id: "html-table",
    title: "表(テーブル)の正しい作り方",
    category: "HTML",
    level: "基礎",
    date: "2026-06-11",
    summary: "table・thead・tbody・th・tdの役割分担と、しましま模様のスタイリング。",
    description:
      "表は table タグで作りますが、ただ td を並べるのではなく、見出し行は thead + th、データ行は tbody + td と役割で分けるのがポイントです。CSSの border-collapse: collapse で枠線を一本化し、:nth-child(even) で偶数行だけ色を変えると、読みやすい「しましま表」になります。",
    points: [
      "th は「見出しセル」。太字になるだけでなく意味を持つ",
      "border-collapse: collapse で二重線を防ぐ",
      ":nth-child(even) で偶数行だけ選んで色を変えられる",
    ],
    html: `<h1>すきな飲み物ランキング</h1>
<table>
  <thead>
    <tr>
      <th>順位</th>
      <th>飲み物</th>
      <th>票数</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1位</td><td>いちごみるく</td><td>42票</td></tr>
    <tr><td>2位</td><td>ミルクティー</td><td>35票</td></tr>
    <tr><td>3位</td><td>ラムネ</td><td>28票</td></tr>
    <tr><td>4位</td><td>抹茶ラテ</td><td>21票</td></tr>
  </tbody>
</table>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
h1 { font-size: 20px; }

table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 2px solid #ffd3e6;
  padding: 10px 14px;
  text-align: left;
}
thead th {
  background: #ff7ab6;
  color: white;
}
/* 偶数行だけ色を変えて「しましま」に */
tbody tr:nth-child(even) {
  background: #fff0f7;
}`,
    js: ``,
  },

  {
    id: "html-semantic",
    title: "セマンティックHTML — 意味のあるタグで組む",
    category: "HTML",
    level: "基礎",
    date: "2026-06-12",
    summary: "header・nav・main・article・footer。divだらけを卒業してページに意味を与える。",
    description:
      "divでも見た目は作れますが、header(頭)、nav(メニュー)、main(本文)、article(独立した記事)、aside(補足)、footer(足元)という「意味を持つタグ」を使うと、検索エンジンやスクリーンリーダーがページの構造を理解できるようになります。現代のWeb制作では必須の考え方です。",
    points: [
      "main はページに1つだけ",
      "article は「単体で成立するまとまり」に使う",
      "見た目はCSSの仕事、意味はHTMLの仕事、と分業する",
    ],
    html: `<header>
  <strong>🍰 スイーツブログ</strong>
  <nav>
    <a href="#">ホーム</a>
    <a href="#">レシピ</a>
    <a href="#">お店めぐり</a>
  </nav>
</header>

<main>
  <article>
    <h1>いちご大福を作ってみた</h1>
    <p>もちもちの皮に甘酸っぱいいちご。意外とかんたんでした!</p>
  </article>
  <aside>
    <h2>人気の記事</h2>
    <p>プリンの黄金比を探る旅</p>
  </aside>
</main>

<footer>© 2026 スイーツブログ</footer>`,
    css: `body {
  font-family: sans-serif;
  margin: 0;
}
/* 各エリアに色をつけて「構造」を見えるようにする */
header {
  background: #ffe0ef;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
}
nav a {
  margin-left: 10px;
  color: #d14d8b;
}
main {
  display: flex;
  gap: 12px;
  padding: 16px;
}
article {
  flex: 2;
  background: #fff7ee;
  border-radius: 12px;
  padding: 16px;
}
aside {
  flex: 1;
  background: #eefaf5;
  border-radius: 12px;
  padding: 16px;
}
footer {
  background: #f3edff;
  text-align: center;
  padding: 10px;
}
h1 { font-size: 20px; margin-top: 0; }
h2 { font-size: 15px; margin-top: 0; }`,
    js: ``,
  },

  /* =====================================================
   * HTML — 応用
   * =================================================== */
  {
    id: "html-details-accordion",
    title: "JSゼロのアコーディオン — details / summary",
    category: "HTML",
    level: "応用",
    date: "2026-06-18",
    summary: "クリックで開閉するQ&AをHTMLだけで。name属性を揃えると1つだけ開く排他式にも。",
    description:
      "details と summary を使うと、JavaScriptを1行も書かずに開閉できるアコーディオンが作れます。さらに複数の details に同じ name 属性をつけると「1つ開くと他が閉じる」排他式アコーディオンになります(この name 属性は2024年に全主要ブラウザ対応になった比較的新しい機能です)。",
    points: [
      "summary が「クリックする見出し」、それ以外が開閉される中身",
      "open 属性をつけると最初から開いた状態になる",
      "同じ name をつけると1つしか開かない排他式になる(2024年〜)",
    ],
    html: `<h1>よくある質問</h1>

<details name="faq" open>
  <summary>Q. このサイトは無料ですか?</summary>
  <p>A. はい、ぜんぶ無料です!</p>
</details>

<details name="faq">
  <summary>Q. JavaScriptを使っていますか?</summary>
  <p>A. いいえ、この開閉はHTMLだけで動いています。</p>
</details>

<details name="faq">
  <summary>Q. 1つ開くと他が閉じるのはなぜ?</summary>
  <p>A. 同じ name 属性をつけているからです。</p>
</details>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
h1 { font-size: 20px; }

details {
  border: 2px solid #ffd3e6;
  border-radius: 12px;
  margin-bottom: 10px;
  overflow: hidden;
}
summary {
  cursor: pointer;
  padding: 12px 16px;
  background: #fff0f7;
  font-weight: bold;
  color: #c2447e;
}
details[open] summary {
  background: #ff7ab6;
  color: white;
}
details p {
  margin: 0;
  padding: 12px 16px;
}`,
    js: ``,
  },

  {
    id: "html-dialog-modal",
    title: "dialogタグで本格モーダル",
    category: "HTML",
    level: "応用",
    date: "2026-06-19",
    summary: "showModal()を呼ぶだけで、フォーカス管理もEscキーも背景も面倒を見てくれる。",
    description:
      "昔はモーダル(画面に重なるダイアログ)を作るのに大量のJSが必要でしたが、今は dialog タグに任せられます。showModal() で開くと、背景の操作をブロックし、Escキーで閉じ、フォーカスも閉じ込めてくれます。背景の暗幕は ::backdrop 疑似要素でスタイリングできます。dialogは2022年から全主要ブラウザで使えます。",
    points: [
      "dialog.showModal() でモーダルとして開く(show()は非モーダル)",
      "::backdrop で背景の暗幕をデザインできる",
      "form method=\"dialog\" のボタンで閉じられる(JS不要)",
    ],
    html: `<h1>dialogタグのデモ</h1>
<button id="openBtn">📮 メッセージを開く</button>

<dialog id="myDialog">
  <h2>こんにちは!</h2>
  <p>これは dialog タグで作ったモーダルです。<br>
  Escキーでも閉じられます。</p>
  <form method="dialog">
    <button>とじる</button>
  </form>
</dialog>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
button {
  font-size: 15px;
  padding: 10px 24px;
  border: none;
  border-radius: 999px;
  background: #9a7bff;
  color: white;
  cursor: pointer;
}
dialog {
  border: none;
  border-radius: 16px;
  padding: 24px 32px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
/* モーダルの後ろの暗幕 */
dialog::backdrop {
  background: rgba(154, 123, 255, 0.35);
  backdrop-filter: blur(3px);
}`,
    js: `const dialog = document.querySelector("#myDialog");
const openBtn = document.querySelector("#openBtn");

openBtn.addEventListener("click", () => {
  dialog.showModal(); // モーダルとして開く
});`,
  },

  {
    id: "html-popover",
    title: "popover属性 — JSゼロでポップアップ",
    category: "HTML",
    level: "応用",
    modern: true,
    date: "2026-07-04",
    summary: "属性を2つ書くだけでポップオーバー完成。2025年にBaseline入りした注目機能。",
    description:
      "要素に popover 属性、ボタンに popovertarget 属性を書くだけで、開閉・外側クリックで閉じる・Escで閉じる・最前面表示を全部ブラウザがやってくれます。Popover APIは2025年1月に全主要ブラウザが対応する「Baseline」入りを果たし、同年4月には安定版(Widely Available)になった、いま注目のHTML機能です。",
    points: [
      "popover 属性 + popovertarget 属性のペアで動く(JS不要)",
      "外側クリックやEscキーで自動的に閉じる(light dismiss)",
      "2025年1月にBaseline入り、4月にWidely Availableになった新機能",
    ],
    html: `<h1>Popover APIのデモ</h1>

<button popovertarget="menu">🍔 メニューをひらく</button>

<div id="menu" popover>
  <strong>きょうのメニュー</strong>
  <ul>
    <li>🍓 いちごパフェ</li>
    <li>🍮 とろけるプリン</li>
    <li>🧋 タピオカミルクティー</li>
  </ul>
  <p>外側をクリックすると閉じるよ</p>
</div>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
button {
  font-size: 15px;
  padding: 10px 24px;
  border: none;
  border-radius: 999px;
  background: #ff7ab6;
  color: white;
  cursor: pointer;
}
/* popover本体のデザイン */
[popover] {
  border: 3px solid #ffd3e6;
  border-radius: 16px;
  padding: 18px 24px;
  box-shadow: 0 16px 40px rgba(255, 122, 182, 0.3);
}
[popover] p {
  color: #b08db5;
  font-size: 12px;
  margin-bottom: 0;
}
ul { padding-left: 20px; }`,
    js: ``,
  },

  /* =====================================================
   * CSS — 基礎
   * =================================================== */
  {
    id: "css-flexbox-center",
    title: "Flexboxで上下左右中央寄せ",
    category: "CSS",
    level: "基礎",
    date: "2026-06-09",
    summary: "たった3行のCSSで要素をど真ん中に。レイアウトの定番テクニック。",
    description:
      "display: flex を親要素に指定すると、子要素の並べ方を柔軟にコントロールできます。justify-content は主軸(横)方向、align-items は交差軸(縦)方向の揃え方を決めます。この2つを center にするだけで、長年CSSの難問だった「上下左右の中央寄せ」が一瞬で実現できます。",
    points: [
      "display: flex は「親」に指定する",
      "justify-content: center → 横方向の中央寄せ",
      "align-items: center → 縦方向の中央寄せ",
    ],
    html: `<div class="container">
  <div class="box">ど真ん中!</div>
</div>`,
    css: `.container {
  display: flex;
  justify-content: center; /* 横方向 */
  align-items: center;     /* 縦方向 */
  height: 240px;
  background: #fff0f7;
  border: 2px dashed #ff7ab6;
  border-radius: 12px;
}

.box {
  background: #ff7ab6;
  color: white;
  padding: 20px 32px;
  border-radius: 8px;
  font-size: 20px;
  font-family: sans-serif;
}`,
    js: ``,
  },

  {
    id: "css-button-hover",
    title: "ホバーで変化するボタン",
    category: "CSS",
    level: "基礎",
    date: "2026-06-13",
    summary: ":hover と transition で、マウスを乗せるとふわっと反応するボタンを作る。",
    description:
      ":hover はマウスが乗ったときだけ適用される疑似クラスです。色や位置をいきなり切り替えると不自然なので、transition を組み合わせて「変化にかかる時間」を指定します。transform: translateY() で少し浮き上がらせ、box-shadow で影を強くすると、押したくなるボタンになります。",
    points: [
      "transition は「変化前」の状態(通常時)に書く",
      "transform は再描画コストが低く、アニメーションに最適",
      "cursor: pointer でクリックできることを伝える",
    ],
    html: `<div class="stage">
  <button class="btn">ホバーしてみて!</button>
</div>`,
    css: `.stage {
  display: flex;
  justify-content: center;
  padding: 60px 0;
}

.btn {
  font-size: 18px;
  padding: 14px 36px;
  border: none;
  border-radius: 999px;
  color: white;
  background: linear-gradient(135deg, #ff7ab6, #9a7bff);
  box-shadow: 0 4px 12px rgba(255, 122, 182, 0.4);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(255, 122, 182, 0.5);
}

.btn:active {
  transform: translateY(-1px);
}`,
    js: ``,
  },

  {
    id: "css-card-design",
    title: "影と角丸で作るカードUI",
    category: "CSS",
    level: "基礎",
    date: "2026-06-14",
    summary: "border-radius と box-shadow で、今どきのカードデザインを作る。",
    description:
      "カードUIは現代のWebデザインの基本パーツです。border-radius で角を丸め、box-shadow でふんわりした影をつけると「浮いている」ように見えます。影は「濃く小さく」より「薄く大きく」のほうが自然です。overflow: hidden を使うと、画像などの子要素も角丸に収まります。",
    points: [
      "box-shadow: x移動 y移動 ぼかし 色 の順で指定",
      "影の色は真っ黒ではなく rgba() で透明度を下げる",
      "overflow: hidden で子要素を角丸内に収める",
    ],
    html: `<div class="card">
  <div class="card-image"></div>
  <div class="card-body">
    <h2>カードタイトル</h2>
    <p>影と角丸だけで、ぐっと今どきの見た目になります。</p>
    <span class="tag">CSS</span>
  </div>
</div>`,
    css: `body {
  display: flex;
  justify-content: center;
  padding: 32px;
  background: #fff7ee;
  font-family: sans-serif;
}

.card {
  width: 280px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(74, 63, 94, 0.15);
}

.card-image {
  height: 120px;
  background: linear-gradient(135deg, #ffd43b, #ff7ab6);
}

.card-body {
  padding: 20px;
}

.card-body h2 {
  margin: 0 0 8px;
  font-size: 18px;
}

.card-body p {
  margin: 0 0 12px;
  color: #8a7f9e;
  font-size: 14px;
  line-height: 1.6;
}

.tag {
  display: inline-block;
  background: #fff0f7;
  color: #ff7ab6;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
}`,
    js: ``,
  },

  {
    id: "css-grid-gallery",
    title: "CSS Gridでギャラリーレイアウト",
    category: "CSS",
    level: "基礎",
    date: "2026-06-15",
    summary: "行と列を同時に扱えるGridで、タイルが敷き詰められたギャラリーを作る。",
    description:
      "Flexboxが「1方向の並び」を得意とするのに対し、Gridは「行と列の2次元」を一度に設計できます。grid-template-columns: repeat(3, 1fr) で等幅3列が完成し、gap で隙間を一括指定。さらに grid-column: span 2 のように書くと、特定のタイルだけ2列分に広げられます。",
    points: [
      "repeat(3, 1fr) = 「1frを3回」→ 等幅3列",
      "gap ひとつで縦横の隙間をまとめて指定",
      "span 2 で「2マスぶん」に広げられる",
    ],
    html: `<div class="gallery">
  <div class="tile wide">🍓</div>
  <div class="tile">🍰</div>
  <div class="tile">🧁</div>
  <div class="tile">🍩</div>
  <div class="tile wide">🍮</div>
  <div class="tile">🍪</div>
</div>`,
    css: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 等幅3列 */
  gap: 12px;
  padding: 16px;
}

.tile {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 40px;
  border-radius: 16px;
  background: linear-gradient(135deg, #fff0f7, #f3edff);
  border: 2px solid #ffd3e6;
}

/* 2列ぶんに広がるタイル */
.wide {
  grid-column: span 2;
  background: linear-gradient(135deg, #ffe8d1, #fff3c4);
  border-color: #ffd8a8;
}`,
    js: ``,
  },

  {
    id: "css-keyframes-animation",
    title: "@keyframesでぷるぷるアニメーション",
    category: "CSS",
    level: "基礎",
    date: "2026-06-16",
    summary: "はずむ・ゆれる・まわる。keyframesで動きを定義してキャラを踊らせよう。",
    description:
      "@keyframes は「アニメーションの台本」です。0%から100%までの間にどう変化するかを書き、animation プロパティで要素に割り当てます。infinite で無限ループ、animation-delay をずらせば、同じ動きでもキャラごとにタイミングの違う楽しい群舞になります。",
    points: [
      "@keyframes 名前 { 0% {...} 100% {...} } で台本を書く",
      "animation: 名前 時間 easing 回数 の順で指定",
      "animation-delay をずらすと群舞になる",
    ],
    html: `<div class="stage">
  <span class="chara">🐰</span>
  <span class="chara">🐻</span>
  <span class="chara">🐱</span>
  <span class="chara">🐼</span>
</div>`,
    css: `.stage {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 70px 0;
}

.chara {
  font-size: 48px;
  animation: bounce 1s ease-in-out infinite;
}

/* 1匹ずつタイミングをずらす */
.chara:nth-child(2) { animation-delay: 0.15s; }
.chara:nth-child(3) { animation-delay: 0.3s; }
.chara:nth-child(4) { animation-delay: 0.45s; }

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) scale(1, 1);
  }
  30% {
    transform: translateY(-30px) scale(0.95, 1.05);
  }
  60% {
    transform: translateY(0) scale(1.05, 0.9);
  }
}`,
    js: ``,
  },

  /* =====================================================
   * CSS — 応用
   * =================================================== */
  {
    id: "css-glassmorphism",
    title: "すりガラスのカード — backdrop-filter",
    category: "CSS",
    level: "応用",
    date: "2026-06-20",
    summary: "背景を曇らせる「グラスモーフィズム」。こだわり系サイトの定番演出。",
    description:
      "backdrop-filter: blur() は「要素の後ろにあるもの」をぼかすプロパティです。半透明の白背景 + blur + 細い白ボーダーを組み合わせると、すりガラス(グラスモーフィズム)の質感になります。AppleのUIをはじめ、最近のこだわったWebサイトで頻出の演出です。",
    points: [
      "backdrop-filter は「自分の後ろ」に効く(filterは自分自身)",
      "background: rgba(255,255,255,0.2) など半透明と組み合わせる",
      "境界に薄い白ボーダーを足すとガラス感が増す",
    ],
    html: `<div class="scene">
  <div class="ball ball-1"></div>
  <div class="ball ball-2"></div>
  <div class="glass">
    <h2>Glassmorphism</h2>
    <p>後ろの丸がすりガラス越しに見えます</p>
  </div>
</div>`,
    css: `.scene {
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffd6ea, #d9e8ff);
  overflow: hidden;
  font-family: sans-serif;
}

.ball {
  position: absolute;
  border-radius: 50%;
}
.ball-1 {
  width: 140px; height: 140px;
  background: #ff7ab6;
  top: 20px; left: 60px;
}
.ball-2 {
  width: 100px; height: 100px;
  background: #9a7bff;
  bottom: 30px; right: 80px;
}

.glass {
  position: relative;
  padding: 24px 40px;
  border-radius: 20px;
  text-align: center;
  /* ここがすりガラスの正体 */
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px rgba(80, 60, 120, 0.2);
}

.glass h2 { margin: 0 0 6px; color: #4a3f5e; }
.glass p { margin: 0; color: #6d6187; font-size: 13px; }`,
    js: ``,
  },

  {
    id: "css-scroll-snap",
    title: "スクロールスナップでカルーセル",
    category: "CSS",
    level: "応用",
    date: "2026-06-21",
    summary: "スクロールが「ピタッ」と止まる。JSなしで作るスワイプカルーセル。",
    description:
      "scroll-snap-type を親に、scroll-snap-align を子に指定すると、スクロールを離したとき要素が「ピタッ」と定位置に吸い付きます。スマホのスワイプカルーセルや縦のフルページスクロールが、JavaScriptなしで実現できます。mandatory は必ず吸着、proximity は近いときだけ吸着します。",
    points: [
      "親: scroll-snap-type: x mandatory(横方向・必ず吸着)",
      "子: scroll-snap-align: center(中央に吸着)",
      "横スクロールして手を離すと吸い付くのを確かめよう",
    ],
    html: `<p class="hint">👉 横にスクロールしてみて!</p>
<div class="carousel">
  <div class="slide s1">1</div>
  <div class="slide s2">2</div>
  <div class="slide s3">3</div>
  <div class="slide s4">4</div>
</div>`,
    css: `body { font-family: sans-serif; }
.hint { text-align: center; color: #a294b8; }

.carousel {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 10px 15%;
  /* スクロールを離すと吸着する */
  scroll-snap-type: x mandatory;
}

.slide {
  flex: 0 0 70%;
  height: 200px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: white;
  /* 各スライドは中央に吸着 */
  scroll-snap-align: center;
}

.s1 { background: #ff7ab6; }
.s2 { background: #ffa94d; }
.s3 { background: #3ec6b5; }
.s4 { background: #9a7bff; }`,
    js: ``,
  },

  {
    id: "css-has-selector",
    title: ":has() — 待望の「親セレクタ」",
    category: "CSS",
    level: "応用",
    modern: true,
    date: "2026-06-24",
    summary: "「チェック済みの子を持つカード」を親ごと装飾。State of CSSで一番愛された機能。",
    description:
      "長年「CSSでは子の状態から親を選べない」のが常識でしたが、:has() がそれを覆しました。.card:has(:checked) と書けば「チェックされた入力を持つカード」を丸ごとスタイリングできます。2023年12月から全主要ブラウザで使えるBaseline機能で、State of CSS 2025調査では最も使われ、最も愛される機能に選ばれました。",
    points: [
      "A:has(B) = 「Bを含むA」を選択できる",
      "JSで付け外ししていたクラスが不要になるケース多数",
      "2023年末からBaseline(全ブラウザ)対応済み",
    ],
    html: `<h1>今日のToDo</h1>
<p>チェックすると、カードごと「完了」の見た目に!</p>

<label class="todo">
  <input type="checkbox">
  <span>牛乳を買う</span>
</label>
<label class="todo">
  <input type="checkbox">
  <span>CSSの勉強</span>
</label>
<label class="todo">
  <input type="checkbox">
  <span>部屋のそうじ</span>
</label>`,
    css: `body { font-family: sans-serif; padding: 16px; }
h1 { font-size: 20px; }
p { color: #a294b8; font-size: 13px; }

.todo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  margin-bottom: 10px;
  border: 2px solid #ffd3e6;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #3ec6b5;
}

/* ここが主役!
   「チェック済みのinputを持つ .todo」を親ごと選ぶ */
.todo:has(:checked) {
  background: #e2f8ee;
  border-color: #3ec6b5;
  text-decoration: line-through;
  color: #2fa877;
  transform: scale(0.98);
}`,
    js: ``,
  },

  {
    id: "css-container-query",
    title: "コンテナクエリ — 置き場所で変わる部品",
    category: "CSS",
    level: "応用",
    modern: true,
    date: "2026-06-25",
    summary: "画面幅ではなく「親の幅」で切り替わるレスポンシブ。右下をつまんで実験!",
    description:
      "メディアクエリは「画面の幅」しか見られませんが、コンテナクエリ(@container)は「親要素の幅」で部品のレイアウトを切り替えられます。同じカード部品がサイドバーでは縦積み、広い場所では横並び、と置き場所に応じて自動で姿を変える——モダンな部品設計の要です。2023年2月から全主要ブラウザ対応のBaseline機能で、2026年5月にはCSS変数を条件にできるスタイルクエリもBaseline入りしました。",
    points: [
      "親に container-type: inline-size を指定して「計測対象」にする",
      "@container (min-width: 400px) { ... } で切り替え",
      "メディアクエリ=画面基準、コンテナクエリ=親基準",
    ],
    html: `<p class="hint">枠の右下をドラッグして広げてみて!</p>

<div class="container">
  <div class="profile">
    <div class="avatar">🐹</div>
    <div class="info">
      <h2>ハムたろう</h2>
      <p>ひまわりの種と回し車が好き。特技は頬袋収納。</p>
    </div>
  </div>
</div>`,
    css: `body { font-family: sans-serif; padding: 16px; }
.hint { color: #a294b8; font-size: 13px; }

.container {
  /* このコンテナの幅を基準にする */
  container-type: inline-size;
  resize: horizontal;  /* 右下をつまんで幅を変えられる */
  overflow: auto;
  width: 260px;
  min-width: 220px;
  max-width: 100%;
  border: 2px dashed #9a7bff;
  border-radius: 16px;
  padding: 12px;
}

.profile {
  display: flex;
  flex-direction: column; /* ふだんは縦積み */
  align-items: center;
  text-align: center;
  gap: 10px;
  background: #f3edff;
  border-radius: 12px;
  padding: 16px;
}

.avatar { font-size: 56px; }
.info h2 { margin: 0 0 4px; font-size: 17px; }
.info p { margin: 0; font-size: 13px; color: #7c6f96; }

/* コンテナが400pxを超えたら横並びに! */
@container (min-width: 400px) {
  .profile {
    flex-direction: row;
    text-align: left;
  }
}`,
    js: ``,
  },

  {
    id: "css-modern-colors",
    title: "oklch() と color-mix() — 新世代の色指定",
    category: "CSS",
    level: "応用",
    modern: true,
    date: "2026-06-26",
    summary: "人の目に自然な色空間oklchと、CSSだけで色を混ぜるcolor-mix。",
    description:
      "oklch() は「明度・彩度・色相」で色を指定する新しい色空間で、色相を回しても明るさが揃って見えるのが特長。デザインシステムのパレット作りに最適です。color-mix() は2色をCSSだけで混ぜられる関数で、ブランド色から「薄い版」「濃い版」を自動生成できます。どちらも2023年に全主要ブラウザ対応済みで、こだわったサイトの配色設計では定番になりつつあります。",
    points: [
      "oklch(明度 彩度 色相) — 色相を変えても明るさが揃う",
      "color-mix(in oklch, 色A, 色B 30%) で混色",
      "ブランド色 + white を混ぜて濃淡パレットを自動生成できる",
    ],
    html: `<h1>oklchで色相だけ回したパレット</h1>
<div class="row">
  <div class="chip c1">0°</div>
  <div class="chip c2">60°</div>
  <div class="chip c3">120°</div>
  <div class="chip c4">200°</div>
  <div class="chip c5">280°</div>
</div>

<h1>color-mixで作る濃淡</h1>
<div class="row">
  <div class="chip m1">+白60%</div>
  <div class="chip m2">+白30%</div>
  <div class="chip m3">もと色</div>
  <div class="chip m4">+黒20%</div>
</div>`,
    css: `body { font-family: sans-serif; padding: 16px; }
h1 { font-size: 15px; color: #7c6f96; }

.row { display: flex; gap: 8px; margin-bottom: 20px; }

.chip {
  flex: 1;
  height: 70px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

/* 明度と彩度は固定、色相(最後の値)だけ回す */
.c1 { background: oklch(0.72 0.17 0); }
.c2 { background: oklch(0.72 0.17 60); }
.c3 { background: oklch(0.72 0.17 120); }
.c4 { background: oklch(0.72 0.17 200); }
.c5 { background: oklch(0.72 0.17 280); }

/* ブランド色に白や黒を混ぜて濃淡を作る */
.m1 { background: color-mix(in oklch, #ff7ab6, white 60%); }
.m2 { background: color-mix(in oklch, #ff7ab6, white 30%); }
.m3 { background: #ff7ab6; }
.m4 { background: color-mix(in oklch, #ff7ab6, black 20%); }`,
    js: ``,
  },

  {
    id: "css-scroll-animation",
    title: "スクロール連動アニメ — animation-timeline",
    category: "CSS",
    level: "応用",
    modern: true,
    date: "2026-07-05",
    summary: "読了プログレスバーがJSなしで動く。Interop 2026注目の最先端CSS。",
    description:
      "animation-timeline: scroll() を使うと、アニメーションの進行を「時間」ではなく「スクロール量」に連動させられます。ページ上部の読了バーや、スクロールで現れる演出がCSSだけで書けます。ChromeとSafariは対応済みですが、Firefoxは2026年半ば時点でまだフラグ付き(Interop 2026の重点項目)なので、実戦では「動かなくても困らない演出」に使うのが安全です。プレビューはChrome系ブラウザでご覧ください。",
    points: [
      "animation-timeline: scroll() でスクロール量に連動",
      "従来はJSのscrollイベントが必須だった処理がCSSだけに",
      "FirefoxはまだBaseline未達 → 装飾用途にとどめるのが安全(2026年時点)",
    ],
    html: `<div class="progress"></div>

<div class="content">
  <h1>スクロールしてみて! 📜</h1>
  <p>上のバーがスクロール量に合わせて伸びます。</p>
  <p>むかしむかし、あるところにCSSだけでスクロール演出を作れる時代が来ました。</p>
  <p>JavaScriptのscrollイベントを監視して、高さを計算して、styleを書き換えて…という作業はもう不要。</p>
  <p>animation-timeline: scroll() と書くだけで、ブラウザが勝手に同期してくれます。</p>
  <p>パフォーマンスもJSより有利。スクロール処理はブラウザの得意分野だからです。</p>
  <p>ここまで読んだら、バーは満タンのはず! 🎉</p>
</div>`,
    css: `body {
  font-family: sans-serif;
  margin: 0;
}

/* 画面上部に固定した読了バー */
.progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 8px;
  width: 100%;
  background: linear-gradient(90deg, #ff7ab6, #9a7bff, #3ec6b5);
  transform-origin: left;
  transform: scaleX(0);

  /* ここが主役: 時間ではなくスクロールに連動 */
  animation: grow linear;
  animation-timeline: scroll();
}

@keyframes grow {
  to { transform: scaleX(1); }
}

.content {
  padding: 30px 24px 300px;
  line-height: 2;
}`,
    js: ``,
  },

  /* =====================================================
   * JS — 基礎
   * =================================================== */
  {
    id: "js-click-counter",
    title: "クリックカウンター — はじめてのJS",
    category: "JS",
    level: "基礎",
    date: "2026-06-10",
    summary: "ボタンを押すと数字が増える。イベントとDOM操作の最初の一歩。",
    description:
      "JavaScriptの基本は「要素を取得して、イベントに反応して、画面を書き換える」の3ステップです。document.querySelector() で要素を取得し、addEventListener('click', ...) でクリックを待ち受け、textContent で表示を書き換えます。この3つを覚えるだけで、ページが「動き」始めます。",
    points: [
      "querySelector はCSSと同じセレクタで要素を探せる",
      "addEventListener でイベント(クリック等)を待ち受ける",
      "textContent で要素内のテキストを書き換える",
    ],
    html: `<div class="counter">
  <p class="count">0</p>
  <button id="countUp">+1 する</button>
  <button id="reset">リセット</button>
</div>`,
    css: `.counter {
  text-align: center;
  font-family: sans-serif;
  padding: 24px;
}

.count {
  font-size: 64px;
  font-weight: bold;
  color: #ff7ab6;
  margin: 0 0 16px;
}

button {
  font-size: 16px;
  padding: 10px 24px;
  margin: 0 4px;
  border: 2px solid #ff7ab6;
  border-radius: 8px;
  background: white;
  color: #ff7ab6;
  cursor: pointer;
}

button:hover {
  background: #ff7ab6;
  color: white;
}`,
    js: `// 要素を取得する
const countEl = document.querySelector(".count");
const countUpBtn = document.querySelector("#countUp");
const resetBtn = document.querySelector("#reset");

let count = 0;

// クリックされたら count を増やして表示を更新
countUpBtn.addEventListener("click", () => {
  count = count + 1;
  countEl.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
});`,
  },

  {
    id: "js-color-changer",
    title: "背景色チェンジャー",
    category: "JS",
    level: "基礎",
    date: "2026-06-11",
    summary: "クリックするたびに背景色がランダムに変わる。style操作と配列の練習。",
    description:
      "JavaScriptから要素の style プロパティを書き換えると、CSSを動的に変更できます。ここでは色の配列から Math.random() でランダムに1色選び、body の背景色に設定しています。Math.floor(Math.random() * 配列.length) は「配列からランダムに選ぶ」定番パターンなので丸ごと覚えると便利です。",
    points: [
      "要素.style.プロパティ名 = 値 でCSSを動的に変更",
      "Math.random() は 0以上1未満のランダムな数を返す",
      "配列[Math.floor(Math.random() * 配列.length)] でランダム選択",
    ],
    html: `<div class="stage">
  <p id="colorName">ボタンを押してみて!</p>
  <button id="changeBtn">色を変える 🎨</button>
</div>`,
    css: `body {
  margin: 0;
  transition: background-color 0.4s ease;
}

.stage {
  text-align: center;
  padding: 60px 20px;
  font-family: sans-serif;
}

#colorName {
  font-size: 24px;
  font-weight: bold;
}

button {
  font-size: 18px;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  background: #4a3f5e;
  color: white;
  cursor: pointer;
}`,
    js: `const colors = [
  "#fecaca", "#fed7aa", "#fef08a",
  "#bbf7d0", "#bae6fd", "#ddd6fe", "#fbcfe8",
];

const btn = document.querySelector("#changeBtn");
const label = document.querySelector("#colorName");

btn.addEventListener("click", () => {
  // 配列からランダムに1色選ぶ
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
  label.textContent = "今の色: " + color;
});`,
  },

  {
    id: "js-input-mirror",
    title: "入力と連動する画面 — inputイベント",
    category: "JS",
    level: "基礎",
    date: "2026-06-15",
    summary: "名札メーカーで学ぶ、タイプするたびに画面が変わるリアルタイム連動。",
    description:
      "input イベントは、入力欄の内容が変わるたびに発火します。event.target.value(またはinput要素の .value)で今の入力内容を取得し、画面の別の場所に反映すれば「タイプと同時に変わるUI」が作れます。文字数カウンターや検索のリアルタイム絞り込みなど、応用範囲がとても広い基本パターンです。",
    points: [
      "change は確定時、input は1文字ごとに発火する",
      "入力内容は input要素.value で取れる",
      "value.length で文字数も数えられる",
    ],
    html: `<div class="maker">
  <label for="nameInput">名前を入力してね</label><br>
  <input type="text" id="nameInput" maxlength="10" placeholder="10文字まで">
  <p class="counter" id="counter">0 / 10文字</p>

  <div class="plate">
    <span class="plate-name" id="plateName">???</span>
    <span class="plate-sub">の名札</span>
  </div>
</div>`,
    css: `.maker {
  font-family: sans-serif;
  text-align: center;
  padding: 24px;
}

input {
  font-size: 18px;
  padding: 10px 14px;
  border: 2px solid #ffd3e6;
  border-radius: 10px;
  margin-top: 8px;
  text-align: center;
}

.counter {
  font-size: 12px;
  color: #a294b8;
}

.plate {
  display: inline-block;
  margin-top: 12px;
  padding: 24px 48px;
  background: linear-gradient(135deg, #fff0f7, #f3edff);
  border: 3px solid #ff7ab6;
  border-radius: 16px;
}

.plate-name {
  font-size: 32px;
  font-weight: bold;
  color: #ff7ab6;
}

.plate-sub {
  color: #a294b8;
}`,
    js: `const input = document.querySelector("#nameInput");
const plateName = document.querySelector("#plateName");
const counter = document.querySelector("#counter");

// 1文字入力(削除)されるたびに実行される
input.addEventListener("input", () => {
  const text = input.value;

  // 空のときは ??? を表示
  plateName.textContent = text === "" ? "???" : text;
  counter.textContent = text.length + " / 10文字";
});`,
  },

  {
    id: "js-clock-timer",
    title: "動く時計 — setIntervalで繰り返す",
    category: "JS",
    level: "基礎",
    date: "2026-06-16",
    summary: "1秒ごとに現在時刻を描き直すデジタル時計。DateとsetIntervalの入門。",
    description:
      "setInterval(関数, 1000) は「1000ミリ秒ごとに関数を実行し続けて」という命令です。new Date() で現在時刻を取得し、getHours() などで時・分・秒を取り出して毎秒表示し直せば時計になります。padStart(2, \"0\") で「7」を「07」にするのは時刻表示の定番テクニックです。",
    points: [
      "setInterval(fn, ミリ秒) で繰り返し実行",
      "new Date() → getHours() / getMinutes() / getSeconds()",
      "String(n).padStart(2, \"0\") でゼロ埋め2桁に",
    ],
    html: `<div class="clock-box">
  <p class="clock" id="clock">--:--:--</p>
  <p class="greet" id="greet"></p>
</div>`,
    css: `.clock-box {
  font-family: sans-serif;
  text-align: center;
  padding: 50px 20px;
}

.clock {
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #4a3f5e;
  margin: 0;
  font-variant-numeric: tabular-nums;
}

.greet {
  font-size: 18px;
  color: #a294b8;
}`,
    js: `const clockEl = document.querySelector("#clock");
const greetEl = document.querySelector("#greet");

function update() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  clockEl.textContent = h + ":" + m + ":" + s;

  // 時間帯であいさつを変える
  const hour = now.getHours();
  if (hour < 5)       greetEl.textContent = "🌙 よふかしさん?";
  else if (hour < 11) greetEl.textContent = "☀️ おはよう!";
  else if (hour < 18) greetEl.textContent = "🍵 こんにちは!";
  else                greetEl.textContent = "🌆 こんばんは!";
}

update();                 // まず1回すぐ実行
setInterval(update, 1000); // その後は1秒ごと`,
  },

  /* =====================================================
   * JS — 応用
   * =================================================== */
  {
    id: "js-intersection-reveal",
    title: "スクロールでふわっと出現 — IntersectionObserver",
    category: "JS",
    level: "応用",
    date: "2026-06-27",
    summary: "画面に入った要素だけをふわっと表示。こだわり系サイトの必修スクロール演出。",
    description:
      "IntersectionObserver は「要素が画面内に入ったか」を効率よく監視できるAPIです。scrollイベントで毎回位置計算する古い方法と違い、ブラウザが最適なタイミングで教えてくれるので軽量です。画面に入ったら .show クラスをつけ、CSSのtransitionでふわっと表示——モダンなサイトの定番演出です。",
    points: [
      "new IntersectionObserver(callback) で監視役を作る",
      "observer.observe(要素) で監視スタート",
      "entry.isIntersecting が true = 画面に入った合図",
    ],
    html: `<h1>下にスクロールしてね 👇</h1>
<div class="item">🌸 はるのおもいで</div>
<div class="item">🌻 なつのぼうけん</div>
<div class="item">🍁 あきのさんぽ</div>
<div class="item">⛄ ふゆのまほう</div>
<div class="item">🌈 そしてまた、はる</div>`,
    css: `body {
  font-family: sans-serif;
  padding: 20px;
}

h1 {
  font-size: 18px;
  text-align: center;
  color: #a294b8;
  margin-bottom: 260px;
}

.item {
  background: linear-gradient(135deg, #fff0f7, #f3edff);
  border: 2px solid #ffd3e6;
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 180px;
  text-align: center;
  font-size: 22px;

  /* 出現前: 透明で少し下にいる */
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* 出現後 */
.item.show {
  opacity: 1;
  transform: translateY(0);
}`,
    js: `// 「画面に入ったかどうか」を見張る監視員を作る
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 画面に入ったら .show をつける(CSSがふわっとさせる)
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 }); // 2割見えたら発火

// すべての .item を監視対象にする
document.querySelectorAll(".item").forEach((item) => {
  observer.observe(item);
});`,
  },

  {
    id: "js-drag-card",
    title: "ドラッグで動かせるカード — Pointer Events",
    category: "JS",
    level: "応用",
    date: "2026-06-28",
    summary: "つかんで、動かして、離す。マウスもタッチも1本のコードで扱える。",
    description:
      "pointerdown(つかむ)→ pointermove(動かす)→ pointerup(離す)の3イベントで、要素のドラッグ移動が作れます。Pointer Events はマウス・タッチ・ペンをまとめて扱える現代的なAPIで、setPointerCapture() を使うと素早いドラッグでポインタがカードの外に出ても追跡が途切れません。",
    points: [
      "pointerdown / pointermove / pointerup の3点セット",
      "setPointerCapture で速いドラッグでも取り逃さない",
      "CSSに touch-action: none を忘れずに(スマホのスクロールと衝突防止)",
    ],
    html: `<p class="hint">🖐 カードをつかんで動かしてみて!</p>
<div class="sticker" id="sticker">🐣</div>`,
    css: `body {
  font-family: sans-serif;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  background: #fdf3e7;
}

.hint {
  text-align: center;
  color: #b3a08f;
}

.sticker {
  position: absolute;
  top: 100px;
  left: 60px;
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 24px rgba(150, 110, 60, 0.25);
  cursor: grab;
  touch-action: none; /* スマホでのスクロールと衝突させない */
}

.sticker.dragging {
  cursor: grabbing;
  transform: scale(1.1) rotate(-5deg);
  box-shadow: 0 20px 40px rgba(150, 110, 60, 0.35);
}`,
    js: `const sticker = document.querySelector("#sticker");
let offsetX = 0;
let offsetY = 0;
let dragging = false;

sticker.addEventListener("pointerdown", (e) => {
  dragging = true;
  // つかんだ位置とカード左上のズレを覚えておく
  offsetX = e.clientX - sticker.offsetLeft;
  offsetY = e.clientY - sticker.offsetTop;
  sticker.setPointerCapture(e.pointerId);
  sticker.classList.add("dragging");
});

sticker.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  sticker.style.left = (e.clientX - offsetX) + "px";
  sticker.style.top = (e.clientY - offsetY) + "px";
});

sticker.addEventListener("pointerup", () => {
  dragging = false;
  sticker.classList.remove("dragging");
});`,
  },

  {
    id: "js-view-transition",
    title: "View Transition API — ぬるっと画面切替",
    category: "JS",
    level: "応用",
    modern: true,
    date: "2026-07-06",
    summary: "startViewTransitionで囲むだけでシャッフルがアニメに。2025年Baseline入りの新星。",
    description:
      "View Transition API を使うと、DOMの書き換えを document.startViewTransition(() => {...}) で包むだけで、変更前後をブラウザが自動でアニメーション補間してくれます。各要素に view-transition-name をつければ、シャッフルしたカードがスーッと移動する演出も数行で完成。同一ページ内のView Transitionは2025年10月にBaseline入りした、いま最も勢いのある新APIのひとつです。",
    points: [
      "document.startViewTransition(DOM更新関数) で包むだけ",
      "view-transition-name が同じ要素同士が補間される",
      "未対応ブラウザにはそのまま実行するフォールバックを書く",
    ],
    html: `<div class="stage">
  <button id="shuffleBtn">🔀 シャッフル!</button>
  <div class="grid" id="grid"></div>
</div>`,
    css: `.stage {
  font-family: sans-serif;
  text-align: center;
  padding: 20px;
}

button {
  font-size: 16px;
  padding: 10px 28px;
  border: none;
  border-radius: 999px;
  background: #9a7bff;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 90px);
  gap: 12px;
  justify-content: center;
}

.tile {
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 44px;
  background: #fff0f7;
  border: 2px solid #ffd3e6;
  border-radius: 16px;
}

/* 移動アニメの時間を調整 */
::view-transition-group(*) {
  animation-duration: 0.5s;
}`,
    js: `const grid = document.querySelector("#grid");
let tiles = ["🍓", "🍋", "🍇", "🍑", "🥝", "🫐"];

function render() {
  grid.innerHTML = "";
  tiles.forEach(function (emoji) {
    const div = document.createElement("div");
    div.className = "tile";
    div.textContent = emoji;
    // 同じ名前の要素同士が移動アニメで結ばれる
    div.style.viewTransitionName = "tile-" + emoji.codePointAt(0);
    grid.appendChild(div);
  });
}

function shuffle() {
  tiles = tiles.slice().sort(function () {
    return Math.random() - 0.5;
  });

  if (document.startViewTransition) {
    // 対応ブラウザ: 差分をアニメーションしてくれる
    document.startViewTransition(render);
  } else {
    // 未対応ブラウザ: そのまま描き直す
    render();
  }
}

document.querySelector("#shuffleBtn").addEventListener("click", shuffle);
render();`,
  },

  {
    id: "js-xray-card",
    title: "まほうの透けるカード — 動かすと後ろの世界が見える",
    category: "JS",
    level: "応用",
    modern: true,
    date: "2026-07-08",
    summary: "ドラッグで動かせるカードが「のぞき窓」に。カードの部分だけ隠れた絵が透けて見える!",
    description:
      "ドラッグできるカードの部分だけ、カバーの後ろに隠れた絵が見える「のぞき窓」エフェクトです。タネは background-attachment: fixed——背景画像を「要素」ではなく「画面」に固定するプロパティで、カードがどこへ動いても絵は画面に張り付いたまま。だからカードが『絵に穴を開けてのぞいている』ように見えるのです。ドラッグ移動はPointer Eventsで実装しています。",
    points: [
      "background-attachment: fixed = 背景を画面に固定する",
      "カードと同じ絵を画面全体サイズで敷けば「のぞき窓」が完成",
      "iOSのSafariはfixedが効かないことがある(実戦では要確認)",
    ],
    html: `<div class="cover">
  <p class="hint">🔍 カードをドラッグしてみて!<br>
  カードの部分だけ、隠れた世界が透けて見えるよ</p>
  <div class="xray-card" id="card">
    <span class="card-label">まほうのカード</span>
  </div>
</div>`,
    css: `body {
  margin: 0;
  font-family: sans-serif;
}

/* 手前のカバー(水玉模様) */
.cover {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: #ffe9f2;
  background-image: radial-gradient(#ffc9df 3px, transparent 3px);
  background-size: 26px 26px;
}

.hint {
  text-align: center;
  padding-top: 30px;
  color: #c2447e;
  font-weight: bold;
  line-height: 1.8;
}

/* のぞき窓カード:
   後ろに隠れている「世界の絵」をグラデーションで描き、
   background-attachment: fixed で"画面に"固定する。
   カードが動いても絵は動かない → 透けて見える! */
.xray-card {
  position: absolute;
  top: 130px;
  left: 40px;
  width: 200px;
  height: 140px;
  border: 5px solid white;
  border-radius: 18px;
  box-shadow: 0 14px 34px rgba(190, 80, 130, 0.35);
  cursor: grab;
  touch-action: none;

  background-image:
    /* 太陽 */
    radial-gradient(circle at 78% 16%,
      #ffd43b 0 34px, rgba(255, 212, 59, 0.4) 46px, transparent 60px),
    /* 雲 */
    radial-gradient(circle at 20% 26%, white 0 16px, transparent 17px),
    radial-gradient(circle at 27% 29%, white 0 21px, transparent 22px),
    radial-gradient(circle at 35% 26%, white 0 14px, transparent 15px),
    /* 丘 */
    radial-gradient(130% 90% at 15% 118%, #7ed491 0 46%, transparent 47%),
    radial-gradient(140% 100% at 90% 122%, #56bd74 0 46%, transparent 47%),
    /* 空 */
    linear-gradient(#7cc7f2, #d5f1ff 75%);
  background-size: 100vw 100vh;
  background-attachment: fixed; /* ← これが魔法の正体 */
}

.xray-card.dragging {
  cursor: grabbing;
  box-shadow: 0 24px 50px rgba(190, 80, 130, 0.45);
}

.card-label {
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #c2447e;
  font-size: 11px;
  font-weight: bold;
  padding: 3px 12px;
  border-radius: 999px;
  box-shadow: 0 3px 8px rgba(190, 80, 130, 0.25);
  white-space: nowrap;
}`,
    js: `const card = document.querySelector("#card");
let offsetX = 0;
let offsetY = 0;
let dragging = false;

card.addEventListener("pointerdown", (e) => {
  dragging = true;
  offsetX = e.clientX - card.offsetLeft;
  offsetY = e.clientY - card.offsetTop;
  card.setPointerCapture(e.pointerId);
  card.classList.add("dragging");
});

card.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  card.style.left = (e.clientX - offsetX) + "px";
  card.style.top = (e.clientY - offsetY) + "px";
});

card.addEventListener("pointerup", () => {
  dragging = false;
  card.classList.remove("dragging");
});`,
  },

  /* =====================================================
   * 追加分: HTML基礎の増強
   * =================================================== */
  {
    id: "html-images-figure",
    title: "画像の貼り方 — img・alt・figure",
    category: "HTML",
    level: "基礎",
    date: "2026-06-13",
    summary: "imgタグの正しい使い方と、altテキストが大切な理由。キャプションはfigureで。",
    description:
      "画像は img タグで表示します。src が画像の場所、alt は「画像が見られない人・状況」のための説明文です。alt は読み込み失敗時に表示されるだけでなく、スクリーンリーダーが読み上げ、検索エンジンも参照する超重要属性。キャプション付きの画像は figure と figcaption でセットにすると意味が伝わります。",
    points: [
      "alt は「画像の代わりになる説明文」を書く(飾り画像なら空でOK)",
      "width / height を書くと読み込み中のガタつき(レイアウトシフト)を防げる",
      "figure + figcaption でキャプション付き画像に",
    ],
    html: `<h1>画像の貼り方</h1>

<figure>
  <img
    src="https://picsum.photos/id/237/320/200"
    alt="こちらを見上げる黒い子犬"
    width="320" height="200">
  <figcaption>figcaptionで書いたキャプション🐶</figcaption>
</figure>

<h2>altテキストの働き</h2>
<p>わざと存在しない画像を指定すると…</p>
<img src="nai-gazou.png" alt="altに書いた説明文がここに表示されます">`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
h1 { font-size: 20px; }
h2 { font-size: 16px; margin-top: 24px; }

figure {
  margin: 0;
  display: inline-block;
}

img {
  border-radius: 12px;
  border: 3px solid #ffd3e6;
}

figcaption {
  text-align: center;
  font-size: 13px;
  color: #a294b8;
  margin-top: 6px;
}`,
    js: ``,
  },

  {
    id: "html-class-id",
    title: "classとid — CSSとJSへの橋渡し",
    category: "HTML",
    level: "基礎",
    date: "2026-06-14",
    summary: "「何度でも使えるclass」と「1つだけのid」。命名がすべての土台になる。",
    description:
      "class は要素に「種類の名前」をつける属性で、同じclassを何個でも使えます。id は「固有の名前」で、ページ内に1つだけ。CSSからは .クラス名 / #id名 で選択でき、JSからも querySelector で同じ書き方で取得できます。「見た目のグループ化はclass、唯一の要素の特定はid」と覚えましょう。",
    points: [
      "class = 何度でも使える種類名(半角スペース区切りで複数もOK)",
      "id = ページに1つだけの固有名",
      "CSSでは .class と #id、JSでも同じセレクタで使える",
    ],
    html: `<h1>クラスとidの使い分け</h1>

<!-- 同じ class は何度でも使える -->
<p class="tag">HTML</p>
<p class="tag">CSS</p>
<p class="tag important">JS (2つのclassを併用)</p>

<!-- id はページに1つだけ -->
<p id="special">idを持つ、唯一の特別な要素</p>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
h1 { font-size: 20px; }

/* .名前 → classを選ぶ */
.tag {
  display: inline-block;
  background: #d9f2ff;
  color: #2f9dc9;
  padding: 6px 16px;
  border-radius: 999px;
  margin-right: 6px;
}

/* classは重ねがけできる */
.important {
  background: #fff3c4;
  color: #c99a06;
  font-weight: bold;
}

/* #名前 → idを選ぶ */
#special {
  border: 3px dashed #ff7ab6;
  border-radius: 12px;
  padding: 12px 16px;
  color: #c2447e;
}`,
    js: ``,
  },

  /* =====================================================
   * 追加分: CSS基礎の増強
   * =================================================== */
  {
    id: "css-selectors-basic",
    title: "CSSセレクタ入門大全",
    category: "CSS",
    level: "基礎",
    date: "2026-06-17",
    summary: "タグ・class・id・子孫・疑似クラス。要素を「狙い撃ち」する基本文法を一気に。",
    description:
      "CSSは「どれに(セレクタ)」「何を(プロパティ)」の2つでできています。タグ名そのまま、.class、#id に加えて、「AとBの間にスペース」で子孫選択、:hover や :nth-child() などの疑似クラスまで、セレクタの基本を1画面にまとめました。セレクタを制する者はCSSを制します。",
    points: [
      "p / .box / #main — 基本3種をまず完璧に",
      "A B(スペース)= Aの中のB、A > B = 直接の子だけ",
      ":nth-child(odd) や :first-child で「何番目」も選べる",
    ],
    html: `<div class="list">
  <p>タグ名セレクタ(p)で全部の段落が茶色</p>
  <p class="pink">.pink で選ばれた段落</p>
  <p id="unique">#unique で選ばれた唯一の段落</p>
</div>

<ul>
  <li>リスト1(奇数行に色)</li>
  <li>リスト2</li>
  <li>リスト3(奇数行に色)</li>
  <li>リスト4</li>
</ul>

<p>ホバーで色が変わる → <a href="#">このリンク</a></p>`,
    css: `body { font-family: sans-serif; padding: 16px; }

/* ① タグ名: すべての p が対象 */
p { color: #8a6d5c; }

/* ② class: .pink を持つ要素だけ */
.pink { color: #ff5fa2; font-weight: bold; }

/* ③ id: #unique の1つだけ */
#unique {
  background: #f3edff;
  padding: 8px 12px;
  border-radius: 8px;
}

/* ④ 子孫セレクタ: ul の中の li */
ul li { list-style: "🍬 "; }

/* ⑤ 疑似クラス: 奇数番目のli */
li:nth-child(odd) { background: #fff0f7; }

/* ⑥ 疑似クラス: マウスが乗った時 */
a { color: #9a7bff; }
a:hover { color: #ff5fa2; background: #fff3c4; }`,
    js: ``,
  },

  {
    id: "css-box-model",
    title: "ボックスモデル — margin・padding・border",
    category: "CSS",
    level: "基礎",
    date: "2026-06-18",
    summary: "全要素は「箱」でできている。内側の余白と外側の余白、境界線の関係を目で見る。",
    description:
      "CSSではすべての要素が「中身 → padding(内側の余白)→ border(枠線)→ margin(外側の余白)」の層でできた箱です。この見本では各層に色をつけて構造を可視化しました。box-sizing: border-box を指定すると「widthはborderまで込みの幅」になり、レイアウト計算が直感的になるため、現代のCSSではほぼ必須の設定です。",
    points: [
      "内側から 中身 → padding → border → margin の4層",
      "margin は透明(親の背景が見える)、padding は自分の背景色が付く",
      "box-sizing: border-box を全要素に指定するのが現代の定番",
    ],
    html: `<div class="outer">
  <span class="label">← ピンク地帯 = margin(外側の余白)</span>
  <div class="box">
    この白い部分が「中身」。
    そのまわりの黄色が padding、
    紫の線が border です。
  </div>
</div>`,
    css: `/* 現代の定番おまじない:
   widthを「border込みの幅」として扱う */
* { box-sizing: border-box; }

body {
  font-family: sans-serif;
  margin: 0;
  padding: 16px;
}

.outer {
  background: #ffd6ea; /* ここが見える範囲 = margin */
  border-radius: 12px;
}

.label {
  font-size: 12px;
  color: #c2447e;
  padding: 6px;
  display: inline-block;
}

.box {
  margin: 28px;             /* 外側の余白 */
  padding: 24px;            /* 内側の余白 */
  border: 6px solid #9a7bff; /* 枠線 */
  background: #fff3c4;      /* paddingに色が付くのが分かる */
  border-radius: 12px;
  line-height: 1.8;
}`,
    js: ``,
  },

  {
    id: "css-position",
    title: "positionの4兄弟 — relative・absolute・sticky・fixed",
    category: "CSS",
    level: "基礎",
    date: "2026-06-19",
    summary: "通知バッジもピタッと付いてくる見出しも、全部positionの仕業。",
    description:
      "position は要素の配置ルールを変えるプロパティです。relative は「本来の位置から少しずらす+絶対配置の基準になる」、absolute は「基準(直近のrelative等)から座標指定」、sticky は「スクロールで画面端に到達したら貼り付く」、fixed は「画面に完全固定」。特に『親にrelative、子にabsolute』はバッジやアイコン重ねの黄金パターンです。",
    points: [
      "親 relative + 子 absolute が重ね配置の黄金パターン",
      "sticky は「スクロールで端に付いたら貼り付く」",
      "top / right / bottom / left とセットで使う",
    ],
    html: `<h1>通知バッジ(relative + absolute)</h1>
<div class="bell">
  🔔
  <span class="badge">3</span>
</div>

<h1>貼り付く見出し(sticky)</h1>
<div class="scroll-area">
  <h2 class="sticky-head">🍰 スイーツの章</h2>
  <p>スクロールしても見出しが上に貼り付きます。</p>
  <p>プリン、ケーキ、シュークリーム…</p>
  <p>まだまだ続く…</p>
  <h2 class="sticky-head">🍹 ドリンクの章</h2>
  <p>次の見出しが来ると入れ替わるのも見どころ。</p>
  <p>ラムネ、ミルクティー、ソーダ…</p>
  <p>おしまい!</p>
</div>`,
    css: `body { font-family: sans-serif; padding: 16px; }
h1 { font-size: 16px; color: #7c6f96; }

/* --- バッジ --- */
.bell {
  position: relative;  /* ← 子のabsoluteの基準になる */
  display: inline-block;
  font-size: 44px;
}
.badge {
  position: absolute;  /* 基準(=bell)からの座標指定 */
  top: -4px;
  right: -10px;
  background: #ff5fa2;
  color: white;
  font-size: 13px;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 999px;
}

/* --- sticky --- */
.scroll-area {
  height: 190px;
  overflow-y: scroll;
  border: 2px dashed #ffd3e6;
  border-radius: 12px;
  padding: 0 14px;
}
.sticky-head {
  position: sticky; /* スクロールで上端に貼り付く */
  top: 0;
  background: #fff0f7;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 15px;
  color: #c2447e;
}
p { line-height: 2.2; }`,
    js: ``,
  },

  {
    id: "css-transition-basics",
    title: "transition徹底入門 — 動きの速度曲線レース",
    category: "CSS",
    level: "基礎",
    date: "2026-06-22",
    summary: "ease? linear? ease-in-out? 4匹のレースで速度曲線の違いを体感する。",
    description:
      "transition は「プロパティが変化するときの時間」を指定します。書式は transition: 対象 時間 速度曲線 遅延。速度曲線(timing-function)はease(緩急あり)、linear(一定)、ease-in(加速)、ease-out(減速)で印象が大きく変わります。この見本ではステージにホバーすると4匹が同時にスタートし、曲線ごとの走り方の違いが一目で分かります。",
    points: [
      "transition: 対象 時間 曲線 遅延 の順で指定",
      "ease-out は「素早く始まりゆっくり終わる」= UIで一番人気",
      "ホバーを外した時も逆再生でアニメする",
    ],
    html: `<p class="hint">🏁 下のステージにマウスを乗せるとレース開始!</p>
<div class="stage">
  <div class="runner r1">🐢 linear</div>
  <div class="runner r2">🐇 ease</div>
  <div class="runner r3">🐕 ease-in</div>
  <div class="runner r4">🐈 ease-out</div>
</div>`,
    css: `body { font-family: sans-serif; padding: 16px; }
.hint { color: #a294b8; font-size: 13px; }

.stage {
  border: 2px dashed #ffd3e6;
  border-radius: 12px;
  padding: 14px;
  background:
    linear-gradient(90deg, transparent 0 88%, #fff0f7 88%);
}

.runner {
  width: 120px;
  padding: 8px 10px;
  margin-bottom: 10px;
  background: white;
  border: 2px solid #ffd3e6;
  border-radius: 10px;
  font-size: 13px;
}

/* 同じ2秒でも、速度曲線で走り方が変わる */
.r1 { transition: transform 2s linear; }
.r2 { transition: transform 2s ease; }
.r3 { transition: transform 2s ease-in; }
.r4 { transition: transform 2s ease-out; }

.stage:hover .runner {
  transform: translateX(calc(100% + 140px));
}`,
    js: ``,
  },

  /* =====================================================
   * 追加分: CSSアニメーション
   * =================================================== */
  {
    id: "css-loading-spinner",
    title: "ローディングアニメ詰め合わせ",
    category: "CSS",
    level: "応用",
    date: "2026-06-29",
    summary: "くるくるスピナー・ぴょこぴょこドット・波紋。読み込み演出3種盛り。",
    description:
      "「読み込み中」の演出は、待ち時間のストレスを和らげる大切なUIです。定番のスピナーは『borderの一辺だけ色を変えた円をrotateで回す』だけ。ドットは同じアニメをanimation-delayでずらし、波紋はscaleとopacityを同時に変化させます。どれも@keyframes+transformの組み合わせで、GPUで処理されるためとても軽量です。",
    points: [
      "スピナー = border 1辺だけ着色した円 + rotate",
      "ドット = 同じ動きを animation-delay でずらすだけ",
      "transform / opacity のアニメはGPU処理で軽い",
    ],
    html: `<div class="row">
  <div class="demo">
    <div class="spinner"></div>
    <p>スピナー</p>
  </div>
  <div class="demo">
    <div class="dots">
      <span></span><span></span><span></span>
    </div>
    <p>ドット</p>
  </div>
  <div class="demo">
    <div class="ripple"></div>
    <p>波紋</p>
  </div>
</div>`,
    css: `body { font-family: sans-serif; }
.row {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 40px 0;
}
.demo { text-align: center; }
.demo p { color: #a294b8; font-size: 13px; }

/* ① スピナー: 上辺だけ色を変えて回す */
.spinner {
  width: 48px;
  height: 48px;
  border: 6px solid #ffd3e6;
  border-top-color: #ff5fa2;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ② ドット: delayをずらして波にする */
.dots {
  display: flex;
  gap: 8px;
  height: 48px;
  align-items: center;
}
.dots span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #9a7bff;
  animation: hop 0.6s ease-in-out infinite alternate;
}
.dots span:nth-child(2) { animation-delay: 0.15s; }
.dots span:nth-child(3) { animation-delay: 0.3s; }
@keyframes hop {
  to { transform: translateY(-16px); }
}

/* ③ 波紋: 広がりながら消える */
.ripple {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #3ec6b5;
  animation: ripple 1.2s ease-out infinite;
}
@keyframes ripple {
  from { transform: scale(0.4); opacity: 1; }
  to   { transform: scale(1.4); opacity: 0; }
}`,
    js: ``,
  },

  {
    id: "css-text-wave",
    title: "文字が波打つテキストアニメーション",
    category: "CSS",
    level: "応用",
    date: "2026-06-30",
    summary: "1文字ずつspanで包んでdelayをずらす、ロゴやタイトルの定番演出。",
    description:
      "文字全体ではなく「1文字ずつ」動かすには、各文字を span で包み、同じ@keyframesアニメを animation-delay を少しずつずらして適用します。するとメキシカンウェーブのような波が生まれます。ここではさらに色相も1文字ずつずらして虹色に。文字数が多い場合はJSでspan分割を自動化するのが実務の定番です。",
    points: [
      "インライン要素に transform を効かせるには display: inline-block",
      "nth-child で1文字ごとに animation-delay をずらす",
      "文字数が多いときはJSでspan分割を自動化する",
    ],
    html: `<h1 class="wave">
  <span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span><span>!</span>
</h1>
<p class="sub">ようこそ、波打つ文字の世界へ</p>`,
    css: `body {
  font-family: sans-serif;
  text-align: center;
  padding-top: 60px;
  background: #fff7ee;
}

.wave span {
  /* インライン要素はtransformが効かないので変換 */
  display: inline-block;
  font-size: 56px;
  animation: wave 1.4s ease-in-out infinite;
}

/* 1文字ずつ遅らせて「波」を作る */
.wave span:nth-child(1) { animation-delay: 0s;    color: #ff5fa2; }
.wave span:nth-child(2) { animation-delay: 0.08s; color: #ffa94d; }
.wave span:nth-child(3) { animation-delay: 0.16s; color: #ffd43b; }
.wave span:nth-child(4) { animation-delay: 0.24s; color: #3ec6b5; }
.wave span:nth-child(5) { animation-delay: 0.32s; color: #38bdf8; }
.wave span:nth-child(6) { animation-delay: 0.4s;  color: #9a7bff; }
.wave span:nth-child(7) { animation-delay: 0.48s; color: #ff5fa2; }
.wave span:nth-child(8) { animation-delay: 0.56s; color: #ffa94d; }

@keyframes wave {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-22px) rotate(-6deg); }
}

.sub { color: #a294b8; }`,
    js: ``,
  },

  {
    id: "css-infinite-marquee",
    title: "無限ループのロゴマーキー",
    category: "CSS",
    level: "応用",
    date: "2026-07-05",
    summary: "「導入企業ロゴがす〜っと流れ続ける」あの演出。タネは全体を2セット並べること。",
    description:
      "ランディングページの定番、ロゴが延々と流れる無限マーキー。タネは『同じ内容を2セット並べて、ちょうど半分(-50%)まで動かしてループする』こと。1セット目が流れきった瞬間に2セット目が同じ見た目になるので、つなぎ目が見えません。hoverでanimation-play-state: pausedにして一時停止できるのもお約束です。",
    points: [
      "中身を2セット並べて translateX(-50%) でループ",
      "width: max-content で中身の幅ぴったりに",
      "hover時は animation-play-state: paused で一時停止",
    ],
    html: `<p class="hint">🖱 マウスを乗せると一時停止するよ</p>
<div class="marquee">
  <div class="track">
    <!-- 1セット目 -->
    <span>🍓 いちご社</span><span>🧁 カップケーキ商事</span><span>🍩 ドーナツ堂</span><span>🍰 ショートケーキ屋</span>
    <!-- 2セット目(まったく同じ内容) -->
    <span>🍓 いちご社</span><span>🧁 カップケーキ商事</span><span>🍩 ドーナツ堂</span><span>🍰 ショートケーキ屋</span>
  </div>
</div>`,
    css: `body { font-family: sans-serif; }
.hint { text-align: center; color: #a294b8; font-size: 13px; }

.marquee {
  overflow: hidden;  /* はみ出しを隠す */
  border-top: 2px dashed #ffd3e6;
  border-bottom: 2px dashed #ffd3e6;
  padding: 18px 0;
}

.track {
  display: flex;
  gap: 32px;
  width: max-content; /* 中身ぴったりの幅に */
  animation: scroll 10s linear infinite;
}

/* ちょうど半分動かすと1セット目と2セット目が重なる */
@keyframes scroll {
  to { transform: translateX(-50%); }
}

.marquee:hover .track {
  animation-play-state: paused;
}

.track span {
  font-size: 20px;
  font-weight: bold;
  color: #7c6f96;
  background: #fff;
  border: 2px solid #f0e4ff;
  border-radius: 999px;
  padding: 8px 22px;
  white-space: nowrap;
}`,
    js: ``,
  },

  /* =====================================================
   * 追加分: 最近のWebでよく使われる技術
   * =================================================== */
  {
    id: "css-gradient-text",
    title: "グラデーション文字 — background-clip: text",
    category: "CSS",
    level: "応用",
    date: "2026-07-01",
    summary: "このサイトのロゴにも使われている、文字をグラデで塗るテクニック。",
    description:
      "文字そのものをグラデーションで塗るには、①背景にグラデーションを敷き、②background-clip: text で「背景を文字の形で切り抜き」、③color: transparent で文字色を透明にします。背景が文字の形にだけ見える、という発想の転換です。background-position をアニメさせれば、キラッと流れる輝きも作れます。実はこのWeb Stack Labのロゴもこの技術です。",
    points: [
      "背景グラデ + background-clip: text + 透明文字 の3点セット",
      "-webkit- 接頭辞も併記すると安心",
      "background-position を動かすとキラキラ流れる",
    ],
    html: `<h1 class="gradient">グラデ文字!</h1>
<h1 class="shiny">キラッと流れる文字</h1>`,
    css: `body {
  font-family: sans-serif;
  text-align: center;
  padding-top: 40px;
}

h1 { font-size: 44px; margin: 20px 0; }

.gradient {
  background: linear-gradient(120deg, #ff5fa2, #9a7bff, #3ec6b5);
  -webkit-background-clip: text;
  background-clip: text;   /* 背景を文字の形で切り抜く */
  color: transparent;      /* 文字自体は透明に */
}

.shiny {
  background: linear-gradient(
    120deg,
    #b8a8d8 30%, #fff 50%, #b8a8d8 70%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shine 2.5s linear infinite;
}

@keyframes shine {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}`,
    js: ``,
  },

  {
    id: "css-clamp-fluid",
    title: "clamp()で流体タイポグラフィ",
    category: "CSS",
    level: "応用",
    date: "2026-07-02",
    summary: "「最小・おすすめ・最大」の3点指定で、画面幅に滑らかに追従する文字サイズ。",
    description:
      "clamp(最小値, 推奨値, 最大値) は「推奨値を使うけど、最小〜最大の範囲は出ない」という関数です。推奨値に vw(画面幅の%)やcqi(コンテナ幅の%)を使うと、幅に合わせて文字が滑らかに伸び縮みする『流体タイポグラフィ』になり、メディアクエリの段差ガタつきから解放されます。モダンなサイトの見出しはほぼこれです。枠の右下をつまんで動きを確かめてください。",
    points: [
      "clamp(下限, 可変値, 上限) の3点セット",
      "実ページでは 5vw など画面幅基準が定番",
      "この見本は cqi(コンテナ幅基準)でその場で体験できる",
    ],
    html: `<p class="hint">↘ 枠の右下をドラッグして広げたり縮めたりしてみて!</p>

<div class="resizable">
  <h1 class="fluid-title">のびちぢみ見出し</h1>
  <p class="fluid-text">この文字たちは clamp() で「最小〜最大」の間を、枠の幅に合わせてなめらかに変化します。</p>
</div>`,
    css: `body { font-family: sans-serif; padding: 16px; }
.hint { color: #a294b8; font-size: 13px; }

.resizable {
  container-type: inline-size; /* cqi の基準にする */
  resize: horizontal;
  overflow: auto;
  width: 300px;
  min-width: 200px;
  max-width: 100%;
  border: 2px dashed #9a7bff;
  border-radius: 16px;
  padding: 20px;
  background: #fdf6ff;
}

/* 最小18px 〜 幅の9% 〜 最大44px */
.fluid-title {
  font-size: clamp(18px, 9cqi, 44px);
  margin: 0 0 8px;
  color: #8464e8;
}

/* 本文もゆるやかに追従 */
.fluid-text {
  font-size: clamp(12px, 4cqi, 17px);
  margin: 0;
  color: #7c6f96;
  line-height: 1.8;
}`,
    js: ``,
  },

  {
    id: "css-dark-mode",
    title: "ダークモード対応 — CSS変数と:has()で作る",
    category: "CSS",
    level: "応用",
    date: "2026-07-03",
    summary: "色をCSS変数に集約すれば、変数の値を差し替えるだけで一瞬で夜モードに。",
    description:
      "ダークモード対応のコツは「色を直書きせず、CSS変数(--名前)に集約する」こと。切り替えは変数の値を差し替えるだけで済みます。この見本ではトグルのcheckboxを :has() で検知して body 全体の変数を上書きしています。実際のサイトではさらに @media (prefers-color-scheme: dark) でOSの設定に合わせる+ユーザー切り替えを組み合わせるのが定番です。",
    points: [
      "色は :root の CSS変数に集約 → var(--名前) で使う",
      "body:has(#toggle:checked) で変数を丸ごと差し替え",
      "OS設定に従うなら @media (prefers-color-scheme: dark)",
    ],
    html: `<label class="switch">
  <input type="checkbox" id="darkToggle">
  🌙 ダークモード
</label>

<div class="card">
  <h1>こんばんは対応カード</h1>
  <p>色をぜんぶCSS変数にしておけば、差し替えは一瞬。</p>
  <button>ボタンも一緒に変わる</button>
</div>`,
    css: `/* ① 色はぜんぶ変数に集約(昼の値) */
body {
  --bg: #fff7ee;
  --card: #ffffff;
  --text: #4a3f5e;
  --accent: #ff5fa2;

  background: var(--bg);
  color: var(--text);
  font-family: sans-serif;
  padding: 20px;
  min-height: 100vh;
  margin: 0;
  transition: background 0.5s, color 0.5s;
}

/* ② チェックされたら夜の値に差し替え */
body:has(#darkToggle:checked) {
  --bg: #1e1b2e;
  --card: #2a2640;
  --text: #efeaff;
  --accent: #b79bff;
}

/* ③ 部品は変数を参照するだけ */
.switch {
  display: inline-block;
  cursor: pointer;
  border: 2px solid var(--accent);
  color: var(--accent);
  border-radius: 999px;
  padding: 8px 18px;
  margin-bottom: 16px;
}

.card {
  background: var(--card);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  transition: background 0.5s;
}

h1 { font-size: 20px; margin-top: 0; }

button {
  background: var(--accent);
  color: var(--bg);
  border: none;
  border-radius: 999px;
  padding: 10px 24px;
  font-size: 14px;
  cursor: pointer;
}

/* OSの設定に合わせたい場合はこちらを使う:
@media (prefers-color-scheme: dark) {
  body { --bg: #1e1b2e; ... }
}
*/`,
    js: ``,
  },

  {
    id: "css-nesting",
    title: "CSSネスト — Sassみたいに入れ子で書く",
    category: "CSS",
    level: "応用",
    modern: true,
    date: "2026-07-07",
    summary: "ツール無しでCSSを入れ子に書ける時代が来た。&で:hoverもまとめられる。",
    description:
      "かつてはSassなどのツールが必要だった「セレクタの入れ子(ネスト)」が、素のCSSで書けるようになりました。.card { h2 {...} &:hover {...} } のように、関連するスタイルを親の中にまとめられるので、構造が一目瞭然になります。& は「親セレクタ自身」を表します。CSSネストは2023年末までに全主要ブラウザへ載り、2024年には要素セレクタを&なしで直接書ける緩和構文も揃いました。",
    points: [
      "親 { 子セレクタ {...} } と入れ子で書ける",
      "& は親自身 → &:hover で擬似クラスもまとめられる",
      "ネストは2〜3段まで。深くしすぎると逆に読みにくい",
    ],
    html: `<div class="card">
  <h2>ネストで書いたカード</h2>
  <p>このカードのCSSは、ぜんぶ .card の中に入れ子で書かれています。CSSタブを見てみて!</p>
  <a href="#">ホバーしてみてね →</a>
</div>`,
    css: `body {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  padding: 40px 16px;
  background: #fff7ee;
}

/* .card に関するスタイルが1か所にまとまる! */
.card {
  width: 300px;
  background: white;
  border: 2px solid #ffd3e6;
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.25s, box-shadow 0.25s;

  /* 子要素をネストで書く */
  h2 {
    margin: 0 0 8px;
    font-size: 18px;
    color: #c2447e;
  }

  p {
    color: #8a7f9e;
    font-size: 14px;
    line-height: 1.7;
  }

  a {
    color: #9a7bff;
    font-weight: bold;
    text-decoration: none;

    /* さらにネスト: & は「親自身」 */
    &:hover {
      color: #ff5fa2;
    }
  }

  /* カード自身のhoverも中に書ける */
  &:hover {
    transform: translateY(-6px) rotate(-1deg);
    box-shadow: 0 14px 30px rgba(255, 122, 182, 0.25);
  }
}`,
    js: ``,
  },

  {
    id: "js-typewriter",
    title: "タイプライター演出 — 1文字ずつ現れる",
    category: "JS",
    level: "応用",
    date: "2026-07-04",
    summary: "ヒーローコピーが打ち込まれていくあの演出。slice()とsetIntervalで作る。",
    description:
      "AIチャットやランディングページの定番、文字が1文字ずつ打ち込まれる演出です。仕組みは「文字数カウンタを増やしながら text.slice(0, i) を表示し続ける」だけ。点滅カーソルはCSSアニメーションで作ります。複数の文章を順番に打っては消す無限ループにすると、ヒーローセクションの主役になれます。",
    points: [
      "text.slice(0, i) で「先頭からi文字だけ」取り出す",
      "カーソルの点滅はCSSの@keyframesに任せる",
      "打ち終わったら少し待って次の文へ、が心地よい",
    ],
    html: `<div class="stage">
  <p class="type">
    <span id="text"></span><span class="cursor"></span>
  </p>
</div>`,
    css: `.stage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: #2d2450;
  font-family: monospace;
}

.type {
  font-size: 22px;
  color: #f4f0ff;
}

/* 点滅カーソルはCSSにおまかせ */
.cursor {
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background: #ff5fa2;
  vertical-align: text-bottom;
  animation: blink 0.8s steps(1) infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}`,
    js: `const textEl = document.querySelector("#text");

// 順番に表示する文章たち
const lines = [
  "こんにちは、Web Stack Labへようこそ。",
  "コードは、書いて動かして覚えよう。",
  "今日もひとつ、新しい技を。",
];

let lineIndex = 0; // 何文目か
let charIndex = 0; // 何文字目か
let deleting = false;

function tick() {
  const line = lines[lineIndex];

  if (!deleting) {
    charIndex++;
    // 打ち終わったら1秒待って消しはじめる
    if (charIndex === line.length) {
      deleting = true;
      setTimeout(tick, 1000);
      textEl.textContent = line;
      return;
    }
  } else {
    charIndex--;
    // 消し終わったら次の文へ
    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
    }
  }

  // 先頭から charIndex 文字だけ表示
  textEl.textContent = line.slice(0, charIndex);
  setTimeout(tick, deleting ? 40 : 90);
}

tick();`,
  },

  /* =====================================================
   * 追加分: JS応用の増強
   * =================================================== */
  {
    id: "js-fetch-api",
    title: "fetch API — サーバーからデータを取ってくる",
    category: "JS",
    level: "応用",
    date: "2026-07-06",
    summary: "ボタンを押すたびにきつね画像APIを呼び出す。async/awaitとエラー処理の実戦入門。",
    description:
      "fetch() は「URLにリクエストを送って応答をもらう」ためのAPIで、モダンなWebアプリの心臓部です。await fetch(url) で応答を待ち、await res.json() でJSONを取り出す——この2段階のawaitが基本形。通信は失敗がつきものなので、try/catch で包み、res.ok でHTTPエラーも確認します。この見本は実在の公開API(randomfox.ca)を呼ぶので、ネット接続時に本物の通信を体験できます。",
    points: [
      "await fetch(url) → await res.json() の2段階",
      "404などはエラー扱いされない → res.ok の確認が必須",
      "通信処理は try/catch で必ず失敗に備える",
    ],
    html: `<div class="app">
  <h1>🦊 きつねガチャ</h1>
  <button id="fetchBtn">写真をもらう!</button>
  <p id="status">ボタンを押すと、きつね画像APIを呼び出します</p>
  <img id="foxImg" alt="ランダムなきつねの写真" hidden>
</div>`,
    css: `.app {
  font-family: sans-serif;
  text-align: center;
  padding: 24px;
}

h1 { font-size: 22px; }

button {
  font-size: 16px;
  padding: 12px 32px;
  border: none;
  border-radius: 999px;
  background: #ffa94d;
  color: white;
  cursor: pointer;
}
button:disabled {
  opacity: 0.5;
}

#status {
  color: #a294b8;
  font-size: 13px;
  min-height: 1.5em;
}

#foxImg {
  max-width: 90%;
  max-height: 260px;
  border-radius: 16px;
  border: 4px solid #ffe8d1;
  box-shadow: 0 10px 24px rgba(150, 110, 60, 0.2);
}`,
    js: `const btn = document.querySelector("#fetchBtn");
const img = document.querySelector("#foxImg");
const status = document.querySelector("#status");

// async を付けた関数の中でだけ await が使える
async function loadFox() {
  btn.disabled = true;
  status.textContent = "🛰 よびだし中…";

  try {
    // ① リクエストを送って応答を待つ
    const res = await fetch("https://randomfox.ca/floof/");

    // ② 404や500はcatchに行かないので自分で確認
    if (!res.ok) {
      throw new Error("HTTPエラー: " + res.status);
    }

    // ③ 応答の本文をJSONとして取り出す(これもawait)
    const data = await res.json();

    img.src = data.image; // 画像URLが入っている
    img.hidden = false;
    status.textContent = "とどいた! 🎉";
  } catch (err) {
    // 通信失敗・オフライン・HTTPエラーはここに来る
    status.textContent = "😢 失敗: " + err.message;
  }

  btn.disabled = false;
}

btn.addEventListener("click", loadFox);`,
  },

  {
    id: "js-web-animations",
    title: "Web Animations API — JSからアニメを操縦する",
    category: "JS",
    level: "応用",
    date: "2026-07-06",
    summary: "element.animate()で作ったアニメを、再生・一時停止・倍速・逆再生で自在に操る。",
    description:
      "Web Animations API(WAAPI)は、CSSの@keyframes相当を element.animate(キーフレーム配列, オプション) としてJSから直接作れるAPIです。CSSアニメとの最大の違いは「作った後に操縦できる」こと。返ってくるAnimationオブジェクトの pause() / play() / reverse() や playbackRate で、再生状態を自由にコントロールできます。ユーザー操作に反応するアニメや、値が動的に決まるアニメはWAAPIの出番です。",
    points: [
      "element.animate([...], {...}) はCSSの@keyframes+animationのJS版",
      "戻り値のAnimationで pause / play / reverse / 倍速が操れる",
      "動的な値・操作に反応するアニメはCSSよりWAAPIが得意",
    ],
    html: `<div class="stage">
  <div class="ufo" id="ufo">🛸</div>
</div>

<div class="controls">
  <button id="toggleBtn">⏸ 一時停止</button>
  <button id="reverseBtn">🔁 逆再生</button>
  <label>
    速さ
    <input type="range" id="speed" min="0.2" max="3" step="0.1" value="1">
  </label>
</div>`,
    css: `body { font-family: sans-serif; }

.stage {
  height: 140px;
  margin: 16px;
  border: 2px dashed #d9c8ff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
}

.ufo { font-size: 48px; }

.controls {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  font-size: 14px;
  padding: 8px 18px;
  border: 2px solid #9a7bff;
  border-radius: 999px;
  background: white;
  color: #9a7bff;
  cursor: pointer;
}

label {
  font-size: 13px;
  color: #7c6f96;
}`,
    js: `const ufo = document.querySelector("#ufo");

// CSSの@keyframes相当をJSで作る。戻り値が「操縦かん」
const anim = ufo.animate(
  [
    { transform: "translateX(0) rotate(-8deg)" },
    { transform: "translateX(60vw) rotate(8deg)" },
  ],
  {
    duration: 2000,
    iterations: Infinity,   // 無限ループ
    direction: "alternate", // 行って戻る
    easing: "ease-in-out",
  }
);

// 一時停止 / 再開
const toggleBtn = document.querySelector("#toggleBtn");
toggleBtn.addEventListener("click", () => {
  if (anim.playState === "running") {
    anim.pause();
    toggleBtn.textContent = "▶ 再生";
  } else {
    anim.play();
    toggleBtn.textContent = "⏸ 一時停止";
  }
});

// その場で進行方向を反転
document.querySelector("#reverseBtn").addEventListener("click", () => {
  anim.reverse();
});

// スライダーで倍速(0.2倍〜3倍)
document.querySelector("#speed").addEventListener("input", (e) => {
  anim.playbackRate = Number(e.target.value);
});`,
  },

  {
    id: "js-localstorage-memo",
    title: "localStorage — 消えないメモ帳を作る",
    category: "JS",
    level: "応用",
    date: "2026-07-07",
    summary: "リロードしても残るメモ帳。JSON.stringify/parseとセットで覚えるブラウザ保存。",
    description:
      "localStorage はブラウザに「キーと値」を保存できる小さな倉庫で、リロードしてもブラウザを閉じても残ります。保存できるのは文字列だけなので、配列やオブジェクトは JSON.stringify() で文字列化して保存し、JSON.parse() で復元します。この「状態が変わるたび保存、起動時に復元」というパターンは、このサイトの『学んだ!』記録や遊び場の自動保存でも使われている実戦技です。",
    points: [
      "setItem / getItem / removeItem の3つが基本",
      "文字列しか入らない → JSON.stringify / parse とセットで",
      "起動時に復元 → 変更のたび保存、が定番パターン",
    ],
    html: `<div class="memo-app">
  <h1>🗒 消えないメモ帳</h1>
  <p class="hint">追加してからリロードしてみて。ちゃんと残ってるよ!</p>
  <form id="form">
    <input id="input" placeholder="メモを書く…" maxlength="30">
    <button>追加</button>
  </form>
  <ul id="list"></ul>
</div>`,
    css: `.memo-app {
  font-family: sans-serif;
  max-width: 340px;
  margin: 20px auto;
}

h1 { font-size: 20px; text-align: center; }
.hint { font-size: 12px; color: #a294b8; text-align: center; }

form { display: flex; gap: 8px; }

input {
  flex: 1;
  font-size: 15px;
  padding: 10px 14px;
  border: 2px solid #ffd3e6;
  border-radius: 10px;
}

button {
  border: none;
  border-radius: 10px;
  background: #ff7ab6;
  color: white;
  padding: 0 18px;
  font-size: 14px;
  cursor: pointer;
}

ul { list-style: none; padding: 0; }

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff0f7;
  border-radius: 10px;
  padding: 10px 14px;
  margin-top: 8px;
}

li button {
  background: transparent;
  color: #c2447e;
  font-size: 16px;
}`,
    js: `const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

const KEY = "memo-app";

// ① 起動時: 保存されていたメモを復元(無ければ空の配列)
let memos = JSON.parse(localStorage.getItem(KEY)) || [];

// ② 変更のたびに保存して描き直す
function save() {
  localStorage.setItem(KEY, JSON.stringify(memos));
  render();
}

function render() {
  list.innerHTML = "";
  memos.forEach((memo, index) => {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = memo;

    const del = document.createElement("button");
    del.textContent = "🗑";
    del.addEventListener("click", () => {
      memos.splice(index, 1); // index番目を1つ削除
      save();
    });

    li.append(text, del);
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // ページ再読み込みを止める
  if (input.value.trim() === "") return;
  memos.push(input.value.trim());
  input.value = "";
  save();
});

render();`,
  },

  {
    id: "js-canvas-draw",
    title: "Canvasお絵かきアプリ",
    category: "JS",
    level: "応用",
    date: "2026-07-07",
    summary: "ドット単位で自由に描けるcanvas。ペイントアプリを40行で作る。",
    description:
      "canvas はJSから自由に絵を描ける「デジタル画用紙」です。getContext('2d') で描画ペン(コンテキスト)を取得し、beginPath → moveTo → lineTo → stroke の流れで線を引きます。Pointer Eventsと組み合わせれば、マウスでも指でも描けるお絵かきアプリに。ゲーム、グラフ、画像加工など、HTMLのタグでは表現できない自由描画はぜんぶcanvasの領分です。",
    points: [
      "getContext(\"2d\") で描画用のペンを手に入れる",
      "beginPath → moveTo → lineTo → stroke が線描きの基本",
      "描く座標は getBoundingClientRect() でcanvas基準に変換",
    ],
    html: `<div class="paint">
  <div class="toolbar">
    <button class="color is-active" data-color="#4a3f5e" style="background:#4a3f5e"></button>
    <button class="color" data-color="#ff5fa2" style="background:#ff5fa2"></button>
    <button class="color" data-color="#3ec6b5" style="background:#3ec6b5"></button>
    <button class="color" data-color="#ffa94d" style="background:#ffa94d"></button>
    <button id="clearBtn">🧽 ぜんぶ消す</button>
  </div>
  <canvas id="canvas" width="460" height="280"></canvas>
</div>`,
    css: `.paint {
  font-family: sans-serif;
  text-align: center;
  padding: 12px;
}

.toolbar {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
}

.color {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #e8ddd0;
  cursor: pointer;
}

.color.is-active {
  box-shadow: 0 0 0 3px #ff5fa2;
}

#clearBtn {
  border: 2px solid #e8ddd0;
  background: white;
  border-radius: 999px;
  padding: 4px 14px;
  cursor: pointer;
}

canvas {
  background: white;
  border: 3px solid #ffd3e6;
  border-radius: 16px;
  touch-action: none; /* 指描きとスクロールの衝突防止 */
  max-width: 100%;
}`,
    js: `const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d"); // 描画用の「ペン」

ctx.lineWidth = 4;
ctx.lineCap = "round";  // 線の端を丸く
ctx.lineJoin = "round"; // 角も丸く

let drawing = false;

// 画面上の座標を「canvasの中の座標」に変換する
function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - rect.left) * (canvas.width / rect.width),
    y: (e.clientY - rect.top) * (canvas.height / rect.height),
  };
}

canvas.addEventListener("pointerdown", (e) => {
  drawing = true;
  const pos = getPos(e);
  ctx.beginPath();      // 新しい線を開始
  ctx.moveTo(pos.x, pos.y);
  canvas.setPointerCapture(e.pointerId);
});

canvas.addEventListener("pointermove", (e) => {
  if (!drawing) return;
  const pos = getPos(e);
  ctx.lineTo(pos.x, pos.y); // 前回の点から線を引く
  ctx.stroke();
});

canvas.addEventListener("pointerup", () => {
  drawing = false;
});

// 色の切り替え
document.querySelectorAll(".color").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".color.is-active").classList.remove("is-active");
    btn.classList.add("is-active");
    ctx.strokeStyle = btn.dataset.color;
  });
});

// 全消去
document.querySelector("#clearBtn").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});`,
  },

  /* =====================================================
   * 追加分: HTML応用の増強
   * =================================================== */
  {
    id: "html-inert-attribute",
    title: "inert属性 — 背後をまるごと操作不能にする",
    category: "HTML",
    level: "応用",
    modern: true,
    date: "2026-07-12",
    summary: "パネルを開いている間、背後のコンテンツを inert 属性で丸ごと無効化。クリックもTab移動も読み上げも届かなくなる。",
    description:
      "inert は要素とその子孫を「画面には見えているが操作はできない」状態にするHTMLのグローバル属性です。inert を付けた範囲の中身はクリックしてもイベントが発火せず、Tabキーでのフォーカス移動の対象からも外れ、スクリーンリーダーからも読み上げられなくなります。従来はモーダルやパネルを開いたときに、背景側の要素へ個別に tabindex=\"-1\" を設定したり pointer-events: none を当てたりして擬似的に操作を止めていましたが、inert 属性(JSからは要素の .inert プロパティ)を使えば1行で同じことが実現できます。2023年4月に主要ブラウザでBaseline入りしており、現在は広く利用できる機能です。ただし見た目上の変化(グレーアウトなど)は自動では付かないため、[inert] セレクタなどで意図的にスタイルを当てる必要があります。",
    points: [
      "inert を true にすると、要素内の全てがクリック・Tabフォーカス・読み上げの対象外になる",
      "モーダルやパネル表示時に背景を「操作不能」にする定番テクニックが1行で書ける(tabindex操作やpointer-events: noneの個別指定が不要)",
      "見た目は自動で変わらないので、[inert] セレクタで opacity など任意のスタイルを当てる",
    ],
    html: `<div class="demo-wrap">
  <div id="mainContent" class="panel">
    <h3>メインコンテンツ</h3>
    <p>ボタンやリンクが並ぶ、ふだんの画面を想定したエリアです。</p>
    <button type="button">押せるボタン</button>
    <a href="#" onclick="return false;">押せるリンク</a>
  </div>

  <button id="openBtn" type="button">⚙ 設定パネルを開く</button>

  <div id="settingsPanel" class="settings-panel" hidden>
    <h3>設定パネル</h3>
    <p>このパネルが開いている間、背後の「メインコンテンツ」は inert 属性でクリックもTab移動も無効化されます。</p>
    <label><input type="checkbox" /> 通知を受け取る</label>
    <br /><br />
    <button id="closeBtn" type="button">閉じる</button>
  </div>
</div>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
.demo-wrap {
  max-width: 360px;
}
.panel {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  transition: opacity 0.2s ease;
}
/* inertが付いた要素を見た目にも分かるようにする(自動では変化しない) */
.panel[inert] {
  opacity: 0.35;
  filter: grayscale(0.4);
}
#openBtn {
  margin-top: 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 999px;
  background: #6366f1;
  color: white;
  cursor: pointer;
}
.settings-panel {
  margin-top: 12px;
  border: 2px solid #6366f1;
  border-radius: 8px;
  padding: 16px;
  background: #eef2ff;
}`,
    js: `const mainContent = document.getElementById("mainContent");
const settingsPanel = document.getElementById("settingsPanel");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  settingsPanel.hidden = false;
  mainContent.inert = true; // 背後の操作をまるごと無効化
  closeBtn.focus();
});

closeBtn.addEventListener("click", () => {
  settingsPanel.hidden = true;
  mainContent.inert = false; // 操作を元に戻す
  openBtn.focus();
});`,
  },

  /* =====================================================
   * 追加分: HTML基礎の増強
   * =================================================== */
  {
    id: "html-responsive-images",
    title: "レスポンシブ画像 — srcset と picture要素",
    category: "HTML",
    level: "基礎",
    date: "2026-07-13",
    summary: "画面の幅や解像度に合わせて、ブラウザが最適な画像を自動で選んでくれる仕組み。",
    description:
      "img タグに src を1つ書くだけだと、スマホでもPCの巨大モニタでも同じサイズの画像が読み込まれてしまい、小さい画面では通信量の無駄になります。srcset 属性に「画像URLと横幅(例: 800w)」の候補を並べ、sizes 属性で「表示幅の目安」を伝えると、ブラウザが画面サイズや解像度に応じて最適な1枚を自動で選んで読み込みます。もう一つの手段が picture タグです。中に複数の source を並べ、media 属性で条件(画面幅など)ごとに違う画像URLを指定できます。srcset が「同じ構図で解像度違いを選ぶ」ためのものなのに対し、picture + source は「画面幅によって構図そのものを変える(アートディレクション)」場合に向いています。どちらの方法でも、最後に通常の img タグを書いておくと、条件に合う source が無い古いブラウザ向けのフォールバックになります。srcset・sizes・picture はいずれも主要ブラウザで長く使われている安定した機能です。",
    points: [
      "srcset + sizes:同じ構図のまま解像度違いの画像からブラウザが最適な1枚を選ぶ(パフォーマンス向上)",
      "picture + source:media 属性の条件ごとに構図が違う画像へ丸ごと切り替える(アートディレクション)",
      "picture の中の img タグは省略できない。source が1つも条件に合わないときのフォールバックになる",
    ],
    html: `<h1>レスポンシブ画像</h1>

<h2>① srcset + sizes(解像度に応じて自動選択)</h2>
<img
  src="https://picsum.photos/id/1015/400/300"
  srcset="
    https://picsum.photos/id/1015/400/300 400w,
    https://picsum.photos/id/1015/800/600 800w,
    https://picsum.photos/id/1015/1200/900 1200w"
  sizes="(max-width: 600px) 100vw, 400px"
  alt="山と湖の風景写真"
  width="400" height="300">

<h2>② picture + source(画面幅で構図ごと切り替え)</h2>
<picture>
  <source media="(max-width: 480px)" srcset="https://picsum.photos/id/1025/300/400">
  <source media="(min-width: 481px)" srcset="https://picsum.photos/id/1025/600/300">
  <img src="https://picsum.photos/id/1025/600/300" alt="犬の写真(画面幅によって構図が変わります)">
</picture>

<p class="hint">プレビュー枠の横幅を変えて、画像が選び直されるか確認してみよう</p>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
h1 { font-size: 20px; }
h2 { font-size: 15px; margin-top: 24px; }

img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  border: 3px solid #cfe0ff;
  display: block;
}

.hint {
  margin-top: 12px;
  font-size: 13px;
  color: #6b7a99;
}`,
    js: ``,
  },

  /* =====================================================
   * 追加分: JS基礎の増強
   * =================================================== */
  {
    id: "js-array-methods",
    title: "配列メソッドで一覧を操作する — map / filter / reduce",
    category: "JS",
    level: "基礎",
    date: "2026-07-14",
    summary:
      "配列のmap・filter・reduceを使って、買い物リストの未購入分と合計金額をリアルタイムに計算する見本。",
    description:
      "JavaScriptの配列には、要素をひとつずつ処理するための便利なメソッドが用意されています。map() は配列の各要素を変換して同じ長さの新しい配列を作り、filter() は条件に合う要素だけを取り出した新しい配列を作り、reduce() は配列全体をひとつの値(合計や個数など)にまとめます。いずれも元の配列そのものは書き換えずに新しい値を返す点が共通しており、for文でカウンタ変数を管理しながら書くよりも「配列に対して何をしたいか」がコードから読み取りやすくなります。map・filter・reduceはES5(2009年)から存在する古くからの標準機能で、モダンブラウザはもちろん非常に広い範囲の環境で問題なく使えます。この見本では、買い物リストのチェック状態から filter で未購入分だけを絞り込み、reduce でその合計金額を計算し、map で一覧表示用のHTML文字列を組み立てています。",
    points: [
      "map():配列の各要素を変換し、同じ長さの新しい配列を作る(例: 一覧のHTML生成)",
      "filter():条件に合う要素だけを取り出した新しい配列を作る(例: 未購入だけ絞り込む)",
      "reduce():配列全体をひとつの値にまとめる(例: 合計金額の計算)",
    ],
    html: `<h1>買い物リスト</h1>
<p class="lead">チェックを入れると「未購入」から外れます。合計金額も自動で再計算されます。</p>
<ul id="list"></ul>
<div id="summary" class="summary"></div>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
h1 { font-size: 20px; }
.lead { font-size: 13px; color: #6b7a99; }

#list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}
#list li {
  border-bottom: 1px solid #e2e8f5;
  padding: 8px 0;
}
#list label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
#list .done {
  text-decoration: line-through;
  color: #9aa5c0;
}
.price {
  margin-left: auto;
  font-variant-numeric: tabular-nums;
}
.summary {
  background: #eef3ff;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14px;
}
.summary strong {
  color: #2451ff;
}`,
    js: `const products = [
  { name: "りんご", price: 120, checked: false },
  { name: "牛乳", price: 200, checked: false },
  { name: "食パン", price: 150, checked: false },
  { name: "卵(6個入り)", price: 248, checked: false },
  { name: "コーヒー豆", price: 680, checked: false },
];

const listEl = document.getElementById("list");
const summaryEl = document.getElementById("summary");

function render() {
  listEl.innerHTML = products
    .map((item, i) => \`
    <li>
      <label>
        <input type="checkbox" data-index="\${i}" \${item.checked ? "checked" : ""}>
        <span class="\${item.checked ? "done" : ""}">\${item.name}</span>
        <span class="price">¥\${item.price}</span>
      </label>
    </li>\`)
    .join("");

  const remaining = products.filter((item) => !item.checked);
  const total = remaining.reduce((sum, item) => sum + item.price, 0);
  const names = remaining.map((item) => item.name);

  summaryEl.innerHTML = \`
    <p>未購入: \${remaining.length}点(\${names.length ? names.join("、") : "なし"})</p>
    <p>残りの合計金額: <strong>¥\${total.toLocaleString()}</strong></p>
  \`;
}

listEl.addEventListener("change", (e) => {
  const idx = e.target.dataset.index;
  if (idx === undefined) return;
  products[Number(idx)].checked = e.target.checked;
  render();
});

render();`,
  },

  /* =====================================================
   * 追加分: JS基礎の増強
   * =================================================== */
  {
    id: "js-form-validation",
    title: "フォーム入力チェック — Constraint Validation API",
    category: "JS",
    level: "基礎",
    date: "2026-07-15",
    summary:
      "required・pattern などのHTML属性と、JavaScriptのvalidityプロパティを組み合わせて、送信前に入力ミスをその場で伝える見本。",
    description:
      "フォームの入力チェックは、HTML属性だけである程度まで実現できます。required は「未入力なら送信させない」、pattern は「正規表現に合わない値を弾く」、type=\"email\" は「メール形式かどうか」をブラウザ自身が判定してくれます。これらの検証結果は、各input要素の validity プロパティ(ValidityStateオブジェクト)から読み取れます。valueMissing は未入力、patternMismatch は正規表現不一致、typeMismatch は型不一致など、どこが問題なのかを個別に判定できるため、「必須項目です」「〇〇の形式で入力してください」のように項目ごとに違うメッセージを出し分けられます。さらに setCustomValidity() を使うと、ブラウザ標準では判定できない独自ルール(例: パスワード確認欄の一致チェック)もこの仕組みに乗せて、統一的にエラー表示できます。input要素のrequired・pattern属性やValidityStateは長く使われてきた安定した標準機能で、主要ブラウザで広くサポートされています。",
    points: [
      "required・pattern・type=\"email\" などの属性でブラウザ自身に基本チェックをさせる",
      "input.validity(ValidityState)で valueMissing・patternMismatch・typeMismatch を個別に判定",
      "setCustomValidity() で独自ルール(パスワード確認の一致など)もエラー表示に統合できる",
    ],
    html: `<form id="signupForm" novalidate>
  <h1>会員登録フォーム</h1>

  <label>
    お名前(必須)
    <input type="text" id="name" name="name" required minlength="2">
    <small class="msg" data-for="name"></small>
  </label>

  <label>
    メールアドレス(必須)
    <input type="email" id="email" name="email" required>
    <small class="msg" data-for="email"></small>
  </label>

  <label>
    パスワード(8文字以上・英数字混在)
    <input type="password" id="password" name="password" required
      pattern="(?=.*[a-zA-Z])(?=.*[0-9]).{8,}">
    <small class="msg" data-for="password"></small>
  </label>

  <label>
    パスワード(確認)
    <input type="password" id="passwordConfirm" name="passwordConfirm" required>
    <small class="msg" data-for="passwordConfirm"></small>
  </label>

  <button type="submit">登録する</button>
  <p id="result" class="result"></p>
</form>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
h1 { font-size: 18px; margin-bottom: 16px; }

label {
  display: block;
  margin-bottom: 14px;
  font-size: 13px;
  color: #445;
}

input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 4px;
  padding: 8px 10px;
  font-size: 14px;
  border: 2px solid #cfd6e6;
  border-radius: 8px;
}

input:focus {
  outline: none;
  border-color: #2451ff;
}

input.is-invalid {
  border-color: #ff5470;
  background: #fff3f5;
}

.msg {
  display: block;
  min-height: 16px;
  margin-top: 4px;
  color: #ff5470;
  font-size: 12px;
}

button {
  font-size: 14px;
  padding: 10px 22px;
  border: none;
  border-radius: 8px;
  background: #2451ff;
  color: white;
  cursor: pointer;
}
button:hover { background: #1739c9; }

.result {
  margin-top: 12px;
  font-size: 13px;
  font-weight: bold;
}
.result.ok { color: #16a34a; }`,
    js: `const form = document.getElementById("signupForm");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const resultEl = document.getElementById("result");

// 項目ごとのエラーメッセージ(validityの種類に応じて出し分け)
function messageFor(input) {
  const v = input.validity;
  if (v.valueMissing) return "この項目は必須です。";
  if (input.id === "email" && v.typeMismatch) return "メール形式で入力してください(例: name@example.com)。";
  if (input.id === "password" && v.patternMismatch) return "8文字以上、英字と数字を両方含めてください。";
  if (input.id === "name" && v.tooShort) return "2文字以上で入力してください。";
  if (v.customError) return input.validationMessage;
  return "";
}

function validateField(input) {
  // パスワード確認欄は「一致しているか」を独自ルールとしてsetCustomValidityに乗せる
  if (input === passwordConfirm) {
    input.setCustomValidity(
      passwordConfirm.value !== password.value ? "パスワードが一致しません。" : ""
    );
  }

  const ok = input.checkValidity();
  input.classList.toggle("is-invalid", !ok);
  const msgEl = form.querySelector(\`.msg[data-for="\${input.id}"]\`);
  if (msgEl) msgEl.textContent = ok ? "" : messageFor(input);
  return ok;
}

form.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => validateField(input));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [...form.querySelectorAll("input")];
  const allOk = inputs.map(validateField).every(Boolean);

  resultEl.textContent = allOk
    ? "✅ 入力内容はすべて有効です(実際の送信は行われません)"
    : "❌ 入力内容を確認してください";
  resultEl.className = "result" + (allOk ? " ok" : "");
});`,
  },

  /* =====================================================
   * 追加分: HTML応用の増強
   * =================================================== */
  {
    id: "html-template-element",
    title: "templateタグ — 使うまで描画されない雛形",
    category: "HTML",
    level: "応用",
    date: "2026-07-16",
    summary: "テンプレートをHTMLの中に書いておき、JSで複製して使い回す。文字列結合よりも安全で速い一覧の作り方。",
    description:
      "innerHTML にテンプレート文字列を連結して一覧を作る方法はよく使われますが、ユーザー入力をそのまま埋め込むとXSS(スクリプト注入)の危険があり、要素数が増えるほど文字列の組み立てコストもかさみます。template タグを使うと、この問題を避けつつ同じことができます。template タグの中身はページ読み込み時にDOMへ描画されず、img の読み込みや script の実行も行われない「不活性な雛形」として保持されます。JavaScriptから template要素の .content プロパティ(DocumentFragment)を .cloneNode(true) で複製し、複製した中の要素だけを textContent で書き換えてから appendChild すれば、文字列を一切組み立てずに安全に要素を増やせます。同じ雛形を何度でも複製できるため、一覧やカードを繰り返し追加するUIと相性が良い機能です。template要素はHTML Standardの一部として長く全主要ブラウザでサポートされている安定した機能です。",
    points: [
      "template タグの中身は読み込み時に描画されない(img・scriptも動かない「不活性」な雛形)",
      "tpl.content.cloneNode(true) で複製すると、雛形そのものは汚さずに何度でも使い回せる",
      "textContent での書き換え + cloneNode は innerHTML の文字列連結よりXSSに強く、一覧生成にも向く",
    ],
    html: `<h1>名刺リスト</h1>
<p class="lead">ボタンを押すたびに、templateタグの雛形を複製してカードを1枚追加します。</p>

<button id="addBtn" type="button">名刺を1枚追加</button>
<ul id="list" class="list"></ul>

<!-- ここは読み込み時には描画されない「雛形」。id や画像も今は動かない -->
<template id="cardTemplate">
  <li class="card">
    <div class="avatar"></div>
    <div class="info">
      <p class="name"></p>
      <p class="role"></p>
    </div>
    <button class="removeBtn" type="button">削除</button>
  </li>
</template>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
h1 { font-size: 20px; }
.lead { font-size: 13px; color: #6b7a99; margin-bottom: 12px; }

#addBtn {
  font-size: 14px;
  padding: 8px 18px;
  border: none;
  border-radius: 8px;
  background: #2451ff;
  color: white;
  cursor: pointer;
}
#addBtn:hover { background: #1739c9; }

.list {
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 2px solid #dbe3f5;
  border-radius: 10px;
  background: #f8faff;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7aa2ff, #2451ff);
  flex-shrink: 0;
}

.info { flex: 1; }
.name { font-size: 14px; font-weight: bold; margin: 0; }
.role { font-size: 12px; color: #6b7a99; margin: 2px 0 0; }

.removeBtn {
  font-size: 12px;
  padding: 4px 10px;
  border: 1px solid #ff5470;
  border-radius: 6px;
  background: white;
  color: #ff5470;
  cursor: pointer;
}
.removeBtn:hover { background: #fff0f2; }`,
    js: `const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const template = document.getElementById("cardTemplate");

// 名刺のサンプルデータ(追加のたびに順番に使う)
const people = [
  { name: "佐藤 あかり", role: "フロントエンドエンジニア" },
  { name: "鈴木 はると", role: "デザイナー" },
  { name: "高橋 ゆい", role: "バックエンドエンジニア" },
  { name: "田中 そら", role: "プロジェクトマネージャー" },
];
let count = 0;

addBtn.addEventListener("click", () => {
  const person = people[count % people.length];
  count++;

  // template.content(DocumentFragment)を複製。雛形そのものは変化しない
  const clone = template.content.cloneNode(true);

  // 複製の中の要素だけをtextContentで書き換える(innerHTMLの文字列連結を使わない)
  clone.querySelector(".name").textContent = person.name;
  clone.querySelector(".role").textContent = person.role;

  const li = clone.querySelector(".card");
  clone.querySelector(".removeBtn").addEventListener("click", () => {
    li.remove();
  });

  list.appendChild(clone);
});`,
  },

  /* =====================================================
   * 追加分: JS基礎の増強
   * =================================================== */
  {
    id: "js-string-methods",
    title: "文字列メソッド見本帳 — trim・includes・replace・padStart",
    category: "JS",
    level: "基礎",
    date: "2026-07-19",
    summary:
      "入力欄の文字にtrim・toUpperCase・includes・replace・padStartを次々に試して、コードと結果をその場で見比べる見本。",
    description:
      "JavaScriptの文字列(string)には、値を書き換えずに新しい文字列を作るためのメソッドがたくさん用意されています。trim() は前後の空白を取り除き、toUpperCase() は大文字に変換し、includes() は指定した文字列が含まれるかを true/false で返し、replace() は最初に見つかった一致箇所を別の文字列に置き換えます。padStart() は文字列が指定した長さに満たないとき、先頭を指定した文字で埋めて長さをそろえるメソッドで、0埋めした番号表示などによく使われます。ここで挙げた中では includes()(ECMAScript 2015)と padStart()(ECMAScript 2017)が比較的新しく追加されたメソッドで、trim()・toUpperCase()・replace() はそれよりも前から存在する古株です。いずれの メソッドも呼び出し元の文字列そのものを変更せず、結果を新しい文字列として返す点が共通しています。この見本では、入力欄の値に対してボタンを押すたびに1つのメソッドを適用し、実際に呼び出したコードと結果を並べて表示することで、それぞれの挙動の違いを確認できるようにしています。",
    points: [
      "文字列メソッドは元の文字列を書き換えず、結果を新しい文字列として返す(イミュータブル)",
      "trim() は前後の空白除去、includes() は部分一致の判定、replace() は最初の一致箇所の置換に使う",
      "padStart(長さ, 埋め文字) は桁を揃えたい表示(例: 0埋めの番号)に便利",
    ],
    html: `<h1>文字列メソッド見本帳</h1>
<p class="lead">入力欄の文字を書き換えて、下のボタンでいろいろな文字列メソッドを試してみよう。</p>

<input type="text" id="textInput" value="  Web Stack Lab  ">

<div class="buttons">
  <button data-method="trim" type="button">trim()</button>
  <button data-method="upper" type="button">toUpperCase()</button>
  <button data-method="includes" type="button">includes("Lab")</button>
  <button data-method="replace" type="button">replace("Lab", "ラボ")</button>
  <button data-method="padStart" type="button">padStart(20, "*")</button>
</div>

<div id="output" class="output">ボタンを押すと、ここに実行したコードと結果が表示されます。</div>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
h1 { font-size: 20px; }
.lead { font-size: 13px; color: #6b7a99; margin-bottom: 12px; }

#textInput {
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  padding: 8px 10px;
  border: 1px solid #cbd5f5;
  border-radius: 8px;
  margin-bottom: 12px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}
.buttons button {
  font-size: 13px;
  padding: 7px 12px;
  border: none;
  border-radius: 8px;
  background: #2451ff;
  color: white;
  cursor: pointer;
}
.buttons button:hover { background: #1739c9; }

.output {
  background: #eef3ff;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.6;
  word-break: break-all;
}
.output code {
  background: #dbe3f5;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}`,
    js: `const input = document.getElementById("textInput");
const output = document.getElementById("output");

document.querySelectorAll("[data-method]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = input.value;
    let code = "";
    let result;

    switch (btn.dataset.method) {
      case "trim":
        code = '"' + text + '".trim()';
        result = text.trim();
        break;
      case "upper":
        code = '"' + text + '".toUpperCase()';
        result = text.toUpperCase();
        break;
      case "includes":
        code = '"' + text + '".includes("Lab")';
        result = text.includes("Lab");
        break;
      case "replace":
        code = '"' + text + '".replace("Lab", "ラボ")';
        result = text.replace("Lab", "ラボ");
        break;
      case "padStart":
        code = '"' + text + '".padStart(20, "*")';
        result = text.padStart(20, "*");
        break;
      default:
        return;
    }

    output.innerHTML =
      "<code>" + code + "</code><br>→ <strong>" + JSON.stringify(result) + "</strong>";
  });
});`,
  },

  /* =====================================================
   * 追加分: HTML基礎の増強
   * =================================================== */
  {
    id: "html-datalist-autocomplete",
    title: "datalist要素 — 入力欄に候補リストを添える",
    category: "HTML",
    level: "基礎",
    date: "2026-07-20",
    summary:
      "input に list属性で datalist をひも付けると、JavaScriptなしで「候補から選べる」入力欄になる。",
    description:
      "datalist は、input 要素に「入力候補のリスト」を渡すための要素です。datalist に id を振り、input 側に同じ値を list 属性として指定すると、入力欄にフォーカスしたときや文字を打ち込んだときに、ブラウザが候補一覧を出してくれます。select と違って自由入力も残したまま候補を出せるのが特徴で、県名や検索キーワードのように「候補はあるけど一覧に無い値も許したい」場面に向いています。text型の input では Chrome・Firefox・Edge・Safariのいずれでも長らく利用でき、フォームの一部として広く使われてきた機能です。一方で、range型・color型・date型など特殊なinput typeと組み合わせたときの見た目や挙動はブラウザによって差があるため、それらと組み合わせる場合は各ブラウザでの動作確認が必要です。この見本では、都道府県名のdatalistをtext型inputにひも付け、さらに「候補を追加」ボタンでJavaScriptからoption要素を動的に増やせることも確認できるようにしています。",
    points: [
      "input の list属性と datalist の id を対応させると、候補付きの自由入力欄になる(selectと違い一覧に無い値も入力できる)",
      "text型inputでの候補表示は主要ブラウザで長く安定して動くが、range・color・date型などは対応がブラウザごとに異なる",
      "datalist内のoption要素はJavaScriptから自由に追加・削除でき、候補リストを動的に更新できる",
    ],
    html: `<h1>datalist見本 — 候補から選べる入力欄</h1>
<p class="lead">「県」の欄に文字を打つと候補が出るよ。一覧に無い県名を自由入力することもできる。</p>

<label for="pref">お住まいの都道府県</label><br>
<input type="text" id="pref" list="prefList" placeholder="例: 東京都">

<datalist id="prefList">
  <option value="北海道"></option>
  <option value="東京都"></option>
  <option value="大阪府"></option>
  <option value="京都府"></option>
  <option value="沖縄県"></option>
</datalist>

<div class="add-row">
  <input type="text" id="newPref" placeholder="候補に追加したい県名">
  <button type="button" id="addBtn">候補を追加</button>
</div>

<p id="msg" class="msg"></p>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
}
h1 { font-size: 20px; }
.lead { font-size: 13px; color: #6b7a99; margin-bottom: 14px; }

label { font-size: 13px; font-weight: bold; }

input[type="text"] {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  padding: 8px 10px;
  border: 1px solid #cbd5f5;
  border-radius: 8px;
  margin-top: 4px;
}

.add-row {
  display: flex;
  gap: 8px;
  margin-top: 20px;
}
.add-row input { flex: 1; }
.add-row button {
  font-size: 13px;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: #2451ff;
  color: white;
  cursor: pointer;
  white-space: nowrap;
}
.add-row button:hover { background: #1739c9; }

.msg {
  font-size: 13px;
  color: #1a8f4c;
  min-height: 1.4em;
  margin-top: 8px;
}`,
    js: `const prefList = document.getElementById("prefList");
const newPref = document.getElementById("newPref");
const addBtn = document.getElementById("addBtn");
const msg = document.getElementById("msg");

addBtn.addEventListener("click", () => {
  const value = newPref.value.trim();
  if (!value) {
    msg.textContent = "県名を入力してください";
    return;
  }

  const already = [...prefList.options].some((opt) => opt.value === value);
  if (already) {
    msg.textContent = \`「\${value}」はすでに候補にあります\`;
    return;
  }

  const option = document.createElement("option");
  option.value = value;
  prefList.appendChild(option);

  msg.textContent = \`「\${value}」を候補に追加しました\`;
  newPref.value = "";
});`,
  },
];

/* ---------------------------------------------------------
 * 共通ユーティリティ
 * ------------------------------------------------------- */

/** idから見本を探す */
function findSample(id) {
  return SAMPLES.find((s) => s.id === id);
}

/** レベルバッジ用のクラス名を返す */
function levelBadgeClass(level) {
  return level === "応用" ? "badge-level-advanced" : "badge-level";
}

/**
 * 本日の見本を返す。
 * 今日の日付(date)と一致する見本があればそれを優先し、
 * なければ日数ベースのローテーションで日替わり表示する。
 */
function getTodaysSample() {
  const now = new Date();
  const todayStr =
    now.getFullYear() +
    "-" +
    String(now.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(now.getDate()).padStart(2, "0");

  const exact = SAMPLES.find((s) => s.date === todayStr);
  if (exact) return exact;

  const days = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
  return SAMPLES[days % SAMPLES.length];
}

/* 「学んだ!」記録 (localStorage) */
const LEARNED_KEY = "sws-learned";

function getLearnedIds() {
  try {
    return JSON.parse(localStorage.getItem(LEARNED_KEY)) || [];
  } catch {
    return [];
  }
}

function toggleLearned(id) {
  const ids = getLearnedIds();
  const idx = ids.indexOf(id);
  if (idx >= 0) {
    ids.splice(idx, 1);
  } else {
    ids.push(id);
  }
  localStorage.setItem(LEARNED_KEY, JSON.stringify(ids));
  return ids.includes(id);
}
