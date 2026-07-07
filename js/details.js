/* =========================================================
 * 見本ごとの「もっとくわしい解説」
 * ---------------------------------------------------------
 * キーは data.js の見本 id。値はHTML文字列で、
 * 詳細ページのアコーディオン(details/summary)内に表示される。
 * 解説がない見本はアコーディオン自体が表示されない。
 *
 * 使えるタグ: <h4> 小見出し / <p> 段落 / <ul><li> 箇条書き /
 *            <code> コード用語
 * ========================================================= */

const SAMPLE_DETAILS = {
  /* ---------- HTML 基礎 ---------- */

  "html-basic-structure": `
<h4>なぜ「意味」でタグを選ぶのか</h4>
<p>ブラウザは h1 を見て「これがこのページの主題だ」と理解し、検索エンジンは見出しの階層から文書の構造を読み取ります。スクリーンリーダーの利用者は「見出しだけを拾い読み」して目的の場所へジャンプします。つまりタグ選びは<strong>機械と人の両方への案内表示</strong>なのです。</p>
<h4>見出し階層のルール</h4>
<ul>
<li><code>h1</code> は1ページ1つが原則(ページの主題)</li>
<li>h2 → h4 のように階層を飛ばさない(目次が壊れる)</li>
<li>「文字を大きくしたいから h2」はNG。大きさはCSSで変える</li>
</ul>
<h4>strong と b の違い</h4>
<p><code>strong</code> は「重要」という意味を持ち、<code>b</code> は単に太字にするだけ。読み上げソフトは strong を強調して読むことがあります。同様に <code>em</code>(強調・斜体)と <code>i</code>(ただの斜体)も意味の有無で使い分けます。</p>`,

  "html-form-parts": `
<h4>type属性は「最適なUI」への切符</h4>
<p><code>type="date"</code> はスマホでカレンダーを、<code>type="email"</code> は @ 付きキーボードを自動で出します。適切なtypeを選ぶだけで、入力体験とバリデーション(<code>required</code> や <code>type="email"</code> の形式チェック)がタダで手に入ります。</p>
<h4>labelを紐付ける2つの方法</h4>
<ul>
<li><code>&lt;label for="x"&gt;</code> + <code>&lt;input id="x"&gt;</code> — 離れた場所でも紐付く</li>
<li><code>&lt;label&gt;名前 &lt;input&gt;&lt;/label&gt;</code> — 包むだけでもOK</li>
</ul>
<p>紐付いていれば、ラベルをタップしても入力欄が反応します。スマホでは的が大きくなるので特に重要です。</p>
<h4>placeholderの落とし穴</h4>
<p>placeholderは入力し始めると消えるため、「何を入れる欄だったか」が分からなくなります。ラベルの代わりに使うのは避け、あくまで<strong>記入例</strong>にとどめましょう。</p>`,

  "html-table": `
<h4>theadとtbodyを分ける理由</h4>
<p>単なる飾りではなく、①CSSで「見出し行だけ」を簡単に選べる、②長い表を印刷すると各ページに見出し行が繰り返される、③スクリーンリーダーが「これは見出し」と理解できる、という実利があります。</p>
<h4>thのscope属性</h4>
<p>より丁寧にするなら <code>&lt;th scope="col"&gt;</code>(列の見出し)や <code>&lt;th scope="row"&gt;</code>(行の見出し)を付けます。読み上げ時に「どの見出しに属するセルか」が正確に伝わります。</p>
<h4>表をレイアウトに使わない</h4>
<p>昔はページ全体をtableで組む時代がありましたが、現在は<strong>表=データの表現専用</strong>。レイアウトはFlexboxやGridの仕事です。逆に「本当に表形式のデータ」をdivで組むのもNG。意味と道具を一致させましょう。</p>`,

  "html-semantic": `
<h4>ランドマークという考え方</h4>
<p>header / nav / main / footer などは「ランドマーク(目印)」としてスクリーンリーダーに認識され、利用者は見出しやランドマーク単位でページ内をジャンプできます。divだけのページではこのジャンプができません。</p>
<h4>articleとsectionの使い分け</h4>
<ul>
<li><code>article</code> — 切り取って単体で成立するもの(ブログ記事、商品カード、コメント)</li>
<li><code>section</code> — 見出しを持つ「章・節」のまとまり</li>
<li>どちらでもないただの箱 → 従来どおり <code>div</code> でOK</li>
</ul>
<h4>SEOへの効果</h4>
<p>検索エンジンは main の中身を「本文」として重視し、nav や footer の定型文と区別します。構造を正しく伝えることは、そのまま検索結果での理解されやすさにつながります。</p>`,

  "html-images-figure": `
<h4>良いaltの書き方</h4>
<p>「画像」「写真」という言葉は不要です(読み上げソフトが自動で付けるため)。<strong>その画像が伝えている内容</strong>を書きます。例:「グラフ」ではなく「売上が3月から右肩上がりのグラフ」。純粋な飾り画像は <code>alt=""</code>(空)にすると読み上げがスキップされます。</p>
<h4>width/heightとレイアウトシフト</h4>
<p>寸法を書いておくと、ブラウザは画像が届く前から場所を確保できます。書かないと読み込み完了時にページがガクッとずれる「レイアウトシフト」が起き、Googleの指標(CLS)でも減点されます。</p>
<h4>現代の画像最適化</h4>
<ul>
<li><code>loading="lazy"</code> — 画面外の画像を後回しに読み込む</li>
<li><code>srcset</code> — 画面サイズ別に最適な画像を出し分け</li>
<li>WebP / AVIF — JPEGより軽い新世代フォーマット</li>
</ul>`,

  "html-class-id": `
<h4>idの「1つだけ」ルールが大事な理由</h4>
<p><code>querySelector("#name")</code> やURLの <code>#name</code> ジャンプは「idは唯一」という前提で動きます。重複させても即エラーにはなりませんが、最初の1つしか見つからず、原因不明のバグの温床になります。</p>
<h4>classの命名のコツ</h4>
<ul>
<li>見た目ではなく役割で: <code>red-text</code> より <code>error-message</code></li>
<li>単語はハイフンで: <code>card-title</code>(ケバブケース)が主流</li>
<li>複数付与を活かす: <code>class="btn btn-large"</code> のように基本+差分で設計</li>
</ul>
<h4>CSSの優先度(詳細度)</h4>
<p>同じ要素に競合する指定があると <code>#id</code> > <code>.class</code> > タグ名 の順で勝ちます。idはこの「強さ」ゆえに上書きしづらく、<strong>スタイリングはclass、JSやページ内リンクの特定はid</strong>という分業が現代の定石です。</p>`,

  /* ---------- HTML 応用 ---------- */

  "html-details-accordion": `
<h4>ブラウザがタダでくれる機能</h4>
<p>details は開閉状態の管理・クリック/キーボード操作・支援技術への状態通知(展開/折りたたみ)をすべて標準装備しています。同じものをdivとJSで自作すると、ARIA属性やフォーカス管理まで含めて数十行必要です。</p>
<h4>name属性による排他制御</h4>
<p>同じ <code>name</code> を持つ details のうち開けるのは1つだけ、というラジオボタン的挙動が2024年に標準化されました。FAQで「他を自動で閉じたい」ときのJSが丸ごと不要になります。</p>
<h4>知っておくと便利な仕様</h4>
<ul>
<li><code>open</code> 属性の有無をCSSの <code>details[open]</code> で拾える</li>
<li>JSからは <code>el.open = true</code> で開閉、<code>toggle</code> イベントで検知</li>
<li>ページ内検索(Ctrl+F)のヒットで自動的に開くブラウザもある</li>
</ul>`,

  "html-dialog-modal": `
<h4>show()とshowModal()の違い</h4>
<p><code>show()</code> は「その場に出るだけ」の非モーダル。<code>showModal()</code> は①最前面レイヤー(top layer)に表示、②背景を操作不能(inert)に、③Escで閉じる、④フォーカスをダイアログ内に閉じ込める、まで面倒を見ます。モーダルにしたいなら必ず showModal() を。</p>
<h4>閉じ方は3通り</h4>
<ul>
<li>JSから <code>dialog.close()</code></li>
<li>内部の <code>&lt;form method="dialog"&gt;</code> のボタン(JS不要)</li>
<li>Escキー(cancelイベントで阻止も可能)</li>
</ul>
<h4>top layerという概念</h4>
<p>showModal() で開いたdialogは「top layer」という特別な層に置かれ、<code>z-index</code> をいくら盛った要素よりも上に表示されます。z-index戦争からの解放も、dialogを使う大きな理由です。popoverも同じ層を使います。</p>`,

  "html-popover": `
<h4>dialogとpopoverの使い分け</h4>
<p>dialogのモーダルは「ユーザーの操作を止めて答えを求める」もの。popoverは「開いたまま他の操作もできる軽い浮遊UI」(メニュー、ツールチップ、通知)向けです。どちらもtop layerに表示されますが、popoverは背景を操作不能にしません。</p>
<h4>light dismissの気持ちよさ</h4>
<p>外側クリックやEscで自動で閉じる挙動(light dismiss)は、自作すると「外側クリックの判定」が意外と厄介です。popover(デフォルトの <code>popover="auto"</code>)はこれを標準装備。常に開いておきたい場合は <code>popover="manual"</code> にします。</p>
<h4>JSからの制御とアニメ</h4>
<ul>
<li><code>el.showPopover()</code> / <code>hidePopover()</code> / <code>togglePopover()</code></li>
<li>CSSの <code>:popover-open</code> 疑似クラスで「開いている間」のスタイルを指定</li>
<li><code>@starting-style</code> と組み合わせるとフェードイン表示も可能</li>
</ul>`,

  /* ---------- CSS 基礎 ---------- */

  "css-flexbox-center": `
<h4>主軸と交差軸というモデル</h4>
<p>Flexboxは「主軸(main axis)」に沿って子を並べます。<code>flex-direction: row</code>(初期値)なら主軸=横、<code>column</code> なら主軸=縦。<code>justify-content</code> は常に主軸方向、<code>align-items</code> は常に交差軸方向を揃えます。directionを変えると2つの役割が入れ替わる点に注意。</p>
<h4>よく使うjustify-contentの値</h4>
<ul>
<li><code>space-between</code> — 両端に寄せて等間隔(ナビの定番)</li>
<li><code>space-around</code> / <code>space-evenly</code> — 余白の配り方違い</li>
<li><code>gap</code> プロパティで子同士の間隔も指定可能(marginより簡単)</li>
</ul>
<h4>もう1つの中央寄せ</h4>
<p>単純な中央寄せなら <code>display: grid; place-items: center;</code> の2行でも書けます。子が1つならgrid、並びの制御が要るならflex、と使い分けると綺麗です。</p>`,

  "css-button-hover": `
<h4>transitionを:hover側に書かない理由</h4>
<p>:hover側に書くと「乗せたとき」は滑らかでも「外したとき」が一瞬で戻ってしまいます。通常時に書けば行きも帰りもアニメーションします。「変化の設定は平常時に」が鉄則です。</p>
<h4>transformが好まれる理由</h4>
<p><code>top</code> や <code>margin</code> を動かすとブラウザはレイアウト計算をやり直しますが、<code>transform</code> と <code>opacity</code> は合成処理だけで済み、GPUが担当するのでカクつきません。動かすならまずtransform、が性能の合言葉です。</p>
<h4>タッチ端末への配慮</h4>
<p>スマホには「ホバー」がありません。<code>@media (hover: hover)</code> で「ホバーできる端末だけ」に効果を限定すると、タップ後にホバー状態が残る違和感を防げます。重要な情報をホバーだけで出すのは避けましょう。</p>`,

  "css-card-design": `
<h4>自然な影の法則</h4>
<p>現実の影は「光源が上にある」前提なので、<code>box-shadow: 0 8px 24px</code> のようにY方向だけずらすのが自然です。色は真っ黒ではなく、背景や要素の色味を含んだ半透明(例: 紫っぽい <code>rgba(74,63,94,0.15)</code>)にすると馴染みます。</p>
<h4>多層シャドウという技</h4>
<p>box-shadowはカンマ区切りで重ねられます。「近くの濃い影 + 遠くの薄い影」の2層にすると、単層より立体感がぐっとリアルになります。有名サイトのカードはほぼ多層です。</p>
<h4>overflow: hiddenの副作用</h4>
<p>子を角丸に収める便利技ですが、はみ出させたいもの(ツールチップやバッジ)まで切れてしまいます。その場合は画像側に <code>border-radius</code> を直接付ける方法に切り替えます。</p>`,

  "css-grid-gallery": `
<h4>frという単位</h4>
<p><code>fr</code> は「余った空間の分け前(fraction)」。<code>1fr 2fr</code> なら1:2で分配されます。pxや%と混ぜても賢く計算してくれるので、「固定200px + 残り全部」は <code>200px 1fr</code> と書けます。</p>
<h4>レスポンシブの必殺技</h4>
<p><code>grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))</code> — 「1列240px以上を確保できるだけ並べ、余りは均等に伸ばす」。メディアクエリ無しで列数が自動調整される、実務頻出のワンライナーです。このサイトの見本一覧もこれで組まれています。</p>
<h4>エリアに名前を付ける</h4>
<p><code>grid-template-areas</code> を使うと "header header" "side main" のように<strong>アスキーアートでレイアウトを描けます</strong>。ページ全体の骨組みはこれが直感的です。</p>`,

  "css-keyframes-animation": `
<h4>transitionとanimationの使い分け</h4>
<p>transitionは「状態Aから状態Bへの変化」専用で、hoverなどのきっかけが必要。animationは「きっかけ無しで勝手に動く」「途中経過を何段階も指定できる」「無限ループできる」。動きに台本が要るならanimationです。</p>
<h4>animationの主なオプション</h4>
<ul>
<li><code>animation-iteration-count: infinite</code> — 無限ループ</li>
<li><code>animation-direction: alternate</code> — 行って戻る往復再生</li>
<li><code>animation-fill-mode: forwards</code> — 終了後も最後の姿を維持</li>
<li><code>animation-play-state: paused</code> — 一時停止(hoverと相性◎)</li>
</ul>
<h4>気配りも忘れずに</h4>
<p>動きに酔いやすい人のために、OSの「視差効果を減らす」設定を <code>@media (prefers-reduced-motion: reduce)</code> で拾い、アニメを控えめにするのが丁寧なサイトの作法です。</p>`,

  "css-selectors-basic": `
<h4>詳細度(specificity)という点数</h4>
<p>競合したとき、ブラウザは「idは100点、classは10点、タグ名は1点」のような点数で勝敗を決めます(同点なら後に書いた方が勝ち)。<code>!important</code> は最終兵器ですが乱用すると収拾がつかなくなるので、まず詳細度の整理で解決を。</p>
<h4>組み合わせセレクタの早見表</h4>
<ul>
<li><code>A B</code>(スペース)— Aの中のB全部(孫もひ孫も)</li>
<li><code>A &gt; B</code> — 直接の子だけ</li>
<li><code>A + B</code> — Aの直後の弟1つ</li>
<li><code>A ~ B</code> — Aより後の弟すべて</li>
</ul>
<h4>nth-childの書き方いろいろ</h4>
<p><code>odd</code>/<code>even</code> のほか、<code>3n</code>(3の倍数)、<code>n+3</code>(3番目以降)、<code>-n+3</code>(最初の3つ)など数式が使えます。「最初の3つだけ大きく」のような表現がCSSだけで書けます。</p>`,

  "css-box-model": `
<h4>content-boxの罠</h4>
<p>初期値の <code>box-sizing: content-box</code> では、width:300px + padding:20px + border:5px = <strong>実際の幅350px</strong>。「指定より大きい!」というCSS初心者最大の混乱ポイントです。border-boxなら「全部込みで300px」になり直感と一致します。</p>
<h4>marginの相殺(そうさい)</h4>
<p>縦に並んだ要素同士のmarginは「足し算されず、大きい方だけ」が採用されます(margin collapse)。「余白が思ったより狭い」ときはたいていこれ。flexやgridコンテナの中では相殺が起きないことも覚えておくと混乱が減ります。</p>
<h4>paddingとmarginの使い分け</h4>
<p>「自分の内側の余裕」はpadding(背景色も広がる)、「他人との距離」はmargin。ボタンを大きくしたいならpadding、ボタン同士を離したいならmargin(または親のgap)です。</p>`,

  "css-position": `
<h4>「基準」の決まり方が肝</h4>
<p>absoluteの基準は「いちばん近い、positionがstatic以外の祖先」。どこにも無ければページ全体が基準になり、意図せぬ場所に飛んでいきます。「absoluteが変な場所に行く」ときは、親にrelativeを付け忘れていないか確認しましょう。</p>
<h4>stickyが効かないときのチェックリスト</h4>
<ul>
<li><code>top</code> などの位置指定を書いたか(必須)</li>
<li>親の高さが自分と同じでは?(貼り付く余地がない)</li>
<li>祖先に <code>overflow: hidden</code> が居ないか(stickyを殺す有名な罠)</li>
</ul>
<h4>fixedとスマホ</h4>
<p>fixedは画面に完全固定なので、ヘッダーや「トップへ戻る」ボタンの定番です。ただしスマホのキーボード表示時に挙動が乱れることがあるため、入力画面では注意が必要です。</p>`,

  "css-transition-basics": `
<h4>4つの値の正体</h4>
<p><code>transition: transform 2s ease-out 0.1s</code> は「対象プロパティ / 所要時間 / 速度曲線 / 開始までの遅延」。対象を <code>all</code> にすると全部滑らかになりますが、意図しないものまで動いて重くなるので、実務では対象を明示するのが行儀良い書き方です。</p>
<h4>cubic-bezierで自作カーブ</h4>
<p>組み込みの4種で足りなければ <code>cubic-bezier(0.34, 1.56, 0.64, 1)</code> のように自作できます。1を超える値を使うと「行き過ぎて戻る」ぷるんとしたバネ の動きに。近年は <code>linear()</code> 関数でさらに複雑な曲線も書けるようになりました。</p>
<h4>アニメできないプロパティ</h4>
<p><code>display: none → block</code> は従来アニメ不可の代表でしたが、近年 <code>transition-behavior: allow-discrete</code> と <code>@starting-style</code> の登場で「表示された瞬間からフェードイン」も素のCSSで書けるようになっています。</p>`,

  /* ---------- CSS 応用 ---------- */

  "css-glassmorphism": `
<h4>ガラスに見える3条件</h4>
<p>①半透明の背景(白なら <code>rgba(255,255,255,0.2)</code> 前後)、②<code>backdrop-filter: blur()</code>、③1px前後の明るいボーダー。この3つが揃うと脳が「ガラス」と認識します。さらに薄い影を足すと浮遊感が出ます。</p>
<h4>blur以外のbackdrop-filter</h4>
<p><code>brightness()</code> <code>saturate()</code> <code>contrast()</code> も使え、カンマではなくスペース区切りで併用できます。Appleの磨りガラスは blur + saturate(彩度アップ)の組み合わせで、後ろの色が鮮やかに透けます。</p>
<h4>パフォーマンスの注意</h4>
<p>backdrop-filterは毎フレーム背後を再計算するため、大面積・多数使用は重くなりがちです。ヘッダーやモーダルなど「ここぞ」の場所に絞り、スクロール連動で動かす場合は特に実機確認を。</p>`,

  "css-scroll-snap": `
<h4>mandatoryとproximityの使い分け</h4>
<p><code>mandatory</code> は必ずどこかに吸着(カルーセル向き)。ただし要素が画面より大きいと「見られない領域」が生まれる危険があるため、長文が混ざるページでは「近くまで来たときだけ吸着」の <code>proximity</code> が安全です。</p>
<h4>吸着位置の微調整</h4>
<ul>
<li><code>scroll-snap-align: start / center / end</code> — どこを合わせるか</li>
<li><code>scroll-padding</code>(親)— 固定ヘッダー分の余白を確保</li>
<li><code>scroll-snap-stop: always</code> — 勢いよくスクロールしても1枚ずつ止める</li>
</ul>
<h4>JSカルーセルとの合わせ技</h4>
<p>「前へ/次へ」ボタンを付けたい場合も、スクロール自体はsnapに任せてJSは <code>scrollBy()</code> を呼ぶだけにすると、慣性・タッチ対応・吸着がすべてブラウザ品質になります。ライブラリ無しでも十分戦えます。</p>`,

  "css-has-selector": `
<h4>「関係セレクタ」としての実力</h4>
<p>:has()は親選択だけではありません。<code>h2:has(+ p)</code>(直後に段落が続く見出し)、<code>form:has(input:invalid)</code>(エラーを含むフォーム)、<code>body:has(dialog[open])</code>(モーダル表示中のページ全体)など、<strong>離れた要素の状態を条件にできる</strong>のが本質です。</p>
<h4>JSが消えるパターン集</h4>
<ul>
<li>チェック状態で親の見た目を変える(この見本)</li>
<li>入力エラー時にラベルを赤くする</li>
<li>モーダルが開いている間、背景のスクロールを止める</li>
<li>子の枚数で親のレイアウトを変える <code>.grid:has(:nth-child(5))</code></li>
</ul>
<h4>注意点</h4>
<p>:has()の中に:has()は入れられません。また強力なぶんブラウザの照合コストは高めなので、<code>*:has(...)</code> のような広すぎる使い方は避けましょう。</p>`,

  "css-container-query": `
<h4>なぜ「部品の時代」に必須なのか</h4>
<p>同じカード部品が、広いメイン欄では横並び・狭いサイドバーでは縦積みになってほしい——メディアクエリは画面幅しか見ないのでこれができません。コンテナクエリなら部品が「自分の置かれた場所」に自律的に適応するので、<strong>どこに置いても壊れない部品</strong>が作れます。</p>
<h4>コンテナ専用単位</h4>
<p><code>cqw / cqh / cqi / cqb</code>(コンテナ幅・高さ等の%)という単位も使えます。「コンテナ幅の5%の文字サイズ」のような、部品内で完結する流体デザインが可能になります。</p>
<h4>スタイルクエリという進化形</h4>
<p><code>@container style(--theme: dark)</code> のように「祖先のCSS変数の値」を条件にできるスタイルクエリも、2026年5月に全主要ブラウザ対応(Baseline)になりました。寸法以外の条件分岐もCSSだけで書ける時代になりつつあります。</p>`,

  "css-modern-colors": `
<h4>oklchの3つの値</h4>
<p><code>oklch(0.72 0.17 340)</code> = 明度(0〜1)・彩度・色相(角度)。従来のHSLは「同じ明度のはずなのに黄色だけ眩しい」という人間の知覚とのズレがありましたが、OKLChは知覚的に均一。<strong>色相だけ回して統一感のあるパレットを作る</strong>のに最適です。</p>
<h4>color-mixの実務パターン</h4>
<ul>
<li>ホバー色: <code>color-mix(in oklch, var(--brand), black 15%)</code></li>
<li>淡い背景: <code>color-mix(in oklch, var(--brand), white 85%)</code></li>
<li>半透明: <code>color-mix(in srgb, var(--brand), transparent 50%)</code></li>
</ul>
<p>ブランド色を1つ決めれば、派生色がすべて自動計算——デザイントークンの管理が劇的に楽になります。</p>
<h4>さらに広い色域へ</h4>
<p>oklchはsRGBの外(Display P3など)の鮮やかな色も表現できます。近年のディスプレイの性能を引き出せる、将来性のある色指定です。</p>`,

  "css-scroll-animation": `
<h4>2種類のタイムライン</h4>
<p><code>scroll()</code> は「スクロール量そのもの」に連動(読了バー向き)。もう1つの <code>view()</code> は「対象要素が画面を横切る進行度」に連動し、IntersectionObserverで作っていた出現演出がCSSだけで書けます。<code>animation-timeline: view()</code> + <code>animation-range: entry 0% cover 40%</code> のように範囲指定も可能です。</p>
<h4>なぜJSより滑らかなのか</h4>
<p>JSのscrollイベントはメインスレッドで動くため、他の処理と競合するとカクつきます。CSSのスクロール連動はブラウザの合成スレッドで処理されるため、原理的にジャンクが起きにくいのです。</p>
<h4>2026年時点の使いどころ</h4>
<p>Firefoxがまだフラグ付きのため、「動かなくても内容が伝わる装飾」に限定するのが正解です。読了バーはその代表例——無くても困らず、あれば嬉しい。<code>@supports (animation-timeline: scroll())</code> で対応ブラウザだけに適用する書き方も安全です。</p>`,

  "css-gradient-text": `
<h4>仕組みを分解する</h4>
<p>①要素の背景にグラデーションを敷く → ②<code>background-clip: text</code> で背景の表示範囲を「文字の形」に切り抜く → ③<code>color: transparent</code> で文字自体を透明にして背景を見せる。「文字に色を塗る」のではなく「文字の形の窓から背景を見る」という発想です。</p>
<h4>キラッと演出の作り方</h4>
<p><code>background-size: 200%</code> で背景を2倍幅にし、<code>background-position</code> を端から端へアニメさせると、ハイライトが文字の上を通過します。ローディング中のスケルトンUIの「シマー」も同じ原理です。</p>
<h4>実務の注意点</h4>
<ul>
<li>Safari対応に <code>-webkit-background-clip: text</code> の併記を</li>
<li>透明文字はコピー選択時に見づらいことがある → <code>::selection</code> で選択色を指定すると親切</li>
<li>グラデが薄い色を含むとき、背景とのコントラスト(読みやすさ)に注意</li>
</ul>`,

  "css-clamp-fluid": `
<h4>推奨値の設計方法</h4>
<p>「画面320pxで16px、1200pxで32px にしたい」なら、その2点を通る一次関数を計算して <code>clamp(16px, 0.55rem + 1.8vw, 32px)</code> のように書きます。計算が面倒なら「Fluid Type Scale Calculator」等のジェネレータが定番ツールです。</p>
<h4>remを混ぜる理由</h4>
<p>vwだけの指定だと、ユーザーがブラウザの文字サイズ設定を大きくしても文字が大きくなりません(アクセシビリティ上の問題)。<code>0.5rem + 2vw</code> のようにremを足すと、ズーム設定にも画面幅にも反応する丁寧な実装になります。</p>
<h4>文字以外にも使える</h4>
<p>余白にも <code>padding: clamp(16px, 4vw, 48px)</code> のように使えます。セクションの上下余白を流体化すると、ブレークポイントの「余白の段差」が消えてデザインが滑らかになります。</p>`,

  "css-dark-mode": `
<h4>変数設計が9割</h4>
<p>ダークモードの本質は色の反転ではなく<strong>役割ベースの変数設計</strong>です。<code>--gray-100</code> のような「見た目の名前」ではなく <code>--bg-surface</code> <code>--text-main</code> のような「役割の名前」にしておくと、テーマ切り替えは値の差し替えだけで済みます。</p>
<h4>OS設定+手動切り替えの合わせ技</h4>
<p>実務の定番は「初期値はOSの設定(prefers-color-scheme)に従い、ユーザーが切り替えたらlocalStorageに保存して優先する」方式。<code>&lt;html data-theme="dark"&gt;</code> のような属性で管理すると、CSSは <code>[data-theme="dark"] { ... }</code> だけで済みます。</p>
<h4>ダークモードの配色のコツ</h4>
<ul>
<li>真っ黒(#000)より少し明るい紺・グレー(#121212等)が目に優しい</li>
<li>彩度の高い色は暗背景で眩しい → 少し薄める</li>
<li>影が見えなくなる → 明るめの枠線や面の色の差で階層を表現</li>
</ul>`,

  "css-nesting": `
<h4>Sassとの違い</h4>
<p>見た目はほぼSassですが、素のCSSネストは「ブラウザがそのまま解釈する」のが最大の違い(ビルド不要)。文字列連結の <code>&amp;-suffix</code>(例: &amp;__title)はできないなど、細かい仕様差はあります。</p>
<h4>&の便利パターン</h4>
<ul>
<li><code>&amp;:hover</code> / <code>&amp;.is-active</code> — 自分の状態違い</li>
<li><code>.dark &amp;</code> — 「.darkの中にいるときの自分」(親側の文脈で分岐!)</li>
<li><code>&amp; + &amp;</code> — 自分同士が並んだときの間隔</li>
</ul>
<h4>@mediaも入れ子にできる</h4>
<p>セレクタの中に <code>@media (max-width: 600px) { ... }</code> を直接書けます。「この部品のレスポンシブ対応がこの場所に全部ある」という書き方ができ、ファイル末尾のメディアクエリ地帯と往復する時代が終わりました。</p>`,

  "css-loading-spinner": `
<h4>なぜborderで円を描くのか</h4>
<p>正方形に <code>border-radius: 50%</code> で円になり、4辺のborderのうち1辺だけ色を変えると「欠けたリング」に見えます。これを回すだけ——画像もSVGも不要で、色やサイズがCSS変数で即変更できるのが強みです。</p>
<h4>steps()でコマ送りに</h4>
<p><code>animation-timing-function: steps(8)</code> にすると8コマのカクカク回転になり、レトロなOS風スピナーが作れます。滑らかさをあえて捨てる表現も引き出しに。</p>
<h4>「読み込み中」UIの使い分け</h4>
<ul>
<li>スピナー — 待ち時間が不明・短いとき</li>
<li>プログレスバー — 進捗が数値で分かるとき</li>
<li>スケルトンUI — コンテンツの形を先に見せたいとき(体感速度が最も速い)</li>
</ul>
<p>3秒を超える待ちにはスピナーより進捗表示が親切、と言われます。</p>`,

  "css-text-wave": `
<h4>display: inline-blockが必要な理由</h4>
<p>spanなどのインライン要素には transform が効きません(仕様です)。inline-blockにすると「行の中に置けるブロック」になり、transformもwidthも効くようになります。文字アニメの最初のつまずきポイントです。</p>
<h4>delayの間隔で表情が変わる</h4>
<p>0.05秒間隔ならさざ波、0.15秒なら大きなうねり。全文字の合計遅延がアニメ1周期を超えると波が途切れるので、「周期 ÷ 文字数」を目安に調整すると美しくつながります。</p>
<h4>JSでspan分割を自動化</h4>
<p>実務では文字ごとの手書きspanは現実的でないので、<code>text.split("")</code> で1文字ずつspanを生成し、<code>style.animationDelay = i * 0.08 + "s"</code> を振るのが定番です。日本語は結合文字の問題が少ないですが、絵文字を含む場合は <code>Intl.Segmenter</code> で分割すると安全です。</p>`,

  "css-infinite-marquee": `
<h4>-50%がループの鍵</h4>
<p>2セット並べた全体を「ちょうど1セット分=全体の50%」動かした瞬間、画面の見た目が開始時と完全に一致します。そこでループが先頭に戻っても、人間には切れ目が見えません。3セットなら-33.33%です。</p>
<h4>速度の決め方</h4>
<p>durationを固定すると、中身が増えるほど高速化してしまいます。「1秒あたり◯px」を保ちたいときは、JSで中身の幅を測ってdurationを計算するか、アイテム数に応じてCSS変数で調整します。</p>
<h4>丁寧な実装のポイント</h4>
<ul>
<li>2セット目には <code>aria-hidden="true"</code>(読み上げの重複防止)</li>
<li><code>prefers-reduced-motion</code> では停止か手動スクロールに</li>
<li>両端を <code>mask-image</code> のグラデーションでふわっと消すと高級感UP</li>
</ul>`,

  /* ---------- JS 基礎 ---------- */

  "js-click-counter": `
<h4>constとletの使い分け</h4>
<p>再代入しない変数(取得した要素など)は <code>const</code>、書き換わる値(countなど)は <code>let</code>。「基本const、必要なときだけlet」が現代の書き方です。<code>var</code> は古い仕様なので新しく書くコードでは使いません。</p>
<h4>アロー関数の読み方</h4>
<p><code>() =&gt; { ... }</code> は「引数なしで、この処理をする関数」。<code>addEventListener("click", 関数)</code> は「クリックされたらこの関数を呼んでね」という予約であり、その場では実行されない——この「あとで呼ばれる関数(コールバック)」の感覚がJS上達の壁その1です。</p>
<h4>textContentとinnerHTMLの違い</h4>
<p><code>textContent</code> は純粋な文字として扱い、<code>innerHTML</code> はHTMLとして解釈します。ユーザー入力を画面に出すときにinnerHTMLを使うと、悪意あるタグが実行される<strong>XSS脆弱性</strong>になります。文字を出すだけならtextContent、が安全の基本です。</p>`,

  "js-color-changer": `
<h4>ランダム選択の式を分解する</h4>
<p><code>Math.random()</code> → 0以上1未満 → 配列の長さを掛けると「0以上length未満の小数」→ <code>Math.floor()</code> で切り捨てると「0〜length-1の整数」。配列の添字がちょうど0始まりなので、これで全要素が等確率で選ばれます。</p>
<h4>style書き換えの命名規則</h4>
<p>CSSの <code>background-color</code> はJSでは <code>style.backgroundColor</code>(キャメルケース)になります。ハイフンが消えて次の単語が大文字に、という機械的な変換です。</p>
<h4>styleよりclassの付け替えが好まれる理由</h4>
<p>style直書きはCSSより優先されるため上書きが難しく、見た目の定義がJSに散らばります。実務では「CSSに .dark などのクラスを定義し、JSは <code>classList.toggle("dark")</code> で切り替えるだけ」にすると、見た目=CSS・振る舞い=JSの分業が守れます。今回のようにランダムな色そのものを計算する場合はstyle書き換えが適材です。</p>`,

  "js-input-mirror": `
<h4>inputとchangeの発火タイミング</h4>
<p><code>input</code> は1文字ごと、<code>change</code> はフォーカスが外れて値が確定したとき。リアルタイム反映はinput、確定後の検証はchange、と役割が違います。IME(日本語変換)中の途中経過も拾いたくない場合は <code>compositionend</code> イベントも組み合わせます。</p>
<h4>三項演算子を読めるようになろう</h4>
<p><code>条件 ? Aの値 : Bの値</code> は「条件が真ならA、偽ならB」を返す式。if文と違い「値を返す」ので、代入や表示の中に埋め込めます。短い分岐はこれで書くとスッキリします。</p>
<h4>この形が全ての原型</h4>
<p>「入力 → 加工 → 表示」は、検索のリアルタイム絞り込み、文字数制限付き投稿フォーム、価格計算機など、あらゆるインタラクティブUIの原型です。この30行を自力で書ければ、応用は組み合わせに過ぎません。</p>`,

  "js-clock-timer": `
<h4>setIntervalの落とし穴</h4>
<p>setIntervalは「だいたい」の間隔で、処理が重いと遅れが蓄積します。また止め忘れると裏で動き続けるため、戻り値のIDを <code>clearInterval(id)</code> で止めるのが作法です。ページを離れた要素のタイマーが動き続けるのは、SPAでよくあるメモリリークの原因です。</p>
<h4>より正確な時計にするには</h4>
<p>「毎秒+1」ではなく「毎回 new Date() で現在時刻を取り直す」のがこの見本の方式で、多少タイマーが遅れても表示は常に正確です。カウントダウンも同様に「目標時刻 - 現在時刻」を毎回計算するのが正解です。</p>
<h4>アニメにはrequestAnimationFrame</h4>
<p>滑らかな動き(60fps)を作りたいときは setInterval(fn, 16) ではなく <code>requestAnimationFrame</code> を使います。ブラウザの描画タイミングに同期し、非表示タブでは自動停止する、アニメ専用の仕組みです。</p>`,

  /* ---------- JS 応用 ---------- */

  "js-intersection-reveal": `
<h4>scrollイベント方式との違い</h4>
<p>旧来の方式は「スクロールのたびに全要素の位置を計算」するため、1秒に何十回も重い処理が走ります。IntersectionObserverはブラウザ内部の最適なタイミングで「交差した要素だけ」通知してくれるので、要素が何百あっても軽快です。</p>
<h4>オプションを使いこなす</h4>
<ul>
<li><code>threshold: 0.5</code> — 半分見えたら発火(0〜1、配列で複数指定も)</li>
<li><code>rootMargin: "0px 0px -20% 0px"</code> — 判定ラインを画面下20%手前に前倒し</li>
<li><code>observer.unobserve(el)</code> — 一度表示したら監視解除(再アニメ防止+省エネ)</li>
</ul>
<h4>画像の遅延読み込みにも</h4>
<p>同じ仕組みで「画面に近づいた画像だけ読み込む」遅延ロードも作れます(現在は <code>loading="lazy"</code> で足りる場面が多いですが、背景画像などでは今も現役)。「見えたら何かする」の万能スイッチとして覚えましょう。</p>`,

  "js-drag-card": `
<h4>Pointer Eventsが統一してくれたもの</h4>
<p>かつては mousedown/mousemove とtouchstart/touchmove を二重に書く必要がありました。Pointer Eventsはマウス・指・ペンを「ポインタ」として統一し、<code>e.pointerType</code> で種類も判別できます。今からドラッグを書くならこれ一択です。</p>
<h4>setPointerCaptureの魔法</h4>
<p>通常、ポインタが要素の外に出るとmoveイベントは届かなくなります。<code>setPointerCapture(pointerId)</code> は「このポインタの続報は離すまで全部この要素へ」という契約で、素早いドラッグの取り逃しが消えます。documentにリスナーを張る旧テクニックより簡潔です。</p>
<h4>touch-action: noneを忘れると</h4>
<p>スマホでは「指の移動=画面スクロール」がブラウザの既定動作なので、これを書かないとドラッグとスクロールが喧嘩してガタガタになります。ドラッグ対象にだけ指定するのがポイント(全体に指定するとスクロールできないページになってしまいます)。</p>`,

  "js-view-transition": `
<h4>ブラウザが裏でやっていること</h4>
<p>startViewTransitionが呼ばれると、①変更前の画面をスクリーンショット、②コールバックでDOM更新、③変更後との間をクロスフェード。<code>view-transition-name</code> が同じ要素同士は「同一人物」とみなされ、位置とサイズが補間されて滑らかに移動します。</p>
<h4>アニメのカスタマイズ</h4>
<p><code>::view-transition-old(名前)</code> / <code>::view-transition-new(名前)</code> という疑似要素に、普通のCSSアニメーションが書けます。フェードの時間を変える、スライドインにする、などデザインは自由自在です。</p>
<h4>ページをまたぐ遷移も</h4>
<p>同一オリジンのページ間遷移(MPA)でも <code>@view-transition { navigation: auto; }</code> を書くだけでクロスフェードできます(Chrome/Safari/Edge対応済み、2026年時点でFirefoxが追従中)。「SPAでないと滑らかな遷移ができない」時代が終わりつつあります。</p>`,

  "js-xray-card": `
<h4>fixedの座標系だけ特別</h4>
<p>background-attachmentの初期値 <code>scroll</code> では背景は要素に付いて動きますが、<code>fixed</code> だけは「ビューポート(画面)」に貼り付きます。要素がどこへ動いても背景の絵は画面座標に固定——この「要素と背景の座標系のズレ」こそが、のぞき窓に見える正体です。</p>
<h4>同じ原理の応用例</h4>
<ul>
<li>スクロールしても背景が動かないパララックス風セクション</li>
<li>文字の中に風景が固定される <code>background-clip: text</code> との合わせ技</li>
<li>複数の「窓」要素を置いて、1枚の絵をのぞかせるパズルUI</li>
</ul>
<h4>iOS Safariの回避策</h4>
<p>iOSではfixed背景が長年不安定です。本格対応するなら「背景用のfixed配置レイヤー + カード側は <code>clip-path</code> や <code>mask</code> で切り抜く」構成に置き換えます。効果は同じで、全環境で安定します。</p>`,

  "js-typewriter": `
<h4>状態機械として読む</h4>
<p>このコードは「打っている/消している」の2状態を <code>deleting</code> フラグで管理し、状態ごとに次の動作と速度を変える小さな状態機械(ステートマシン)です。「フラグ+分岐+次の予約」という構造は、ゲームのAIやUIの多段アニメでも同じ形が現れます。</p>
<h4>気持ちよさの調整ポイント</h4>
<ul>
<li>打つ速度(90ms)より消す速度(40ms)を速く — 実際のタイピングの感覚に合う</li>
<li>打ち終わりの「静止時間」(1000ms)が読ませ時間</li>
<li>速度に ±20ms の揺らぎを足すと人間らしさが出る</li>
</ul>
<h4>アクセシビリティの配慮</h4>
<p>読み上げソフトには1文字ずつの変化がノイズになるため、完成形のテキストを <code>aria-label</code> で持たせ、アニメ部分は <code>aria-hidden="true"</code> にするのが丁寧です。prefers-reduced-motion では最初から全文表示にする配慮も。</p>`,
};
