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
