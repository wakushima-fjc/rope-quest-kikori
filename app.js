// 【4. クイズデータ】
const quizData = {
    1: [
        { "q": "ロープ高所作業とは、高さ何メートル以上の箇所で行う作業を指すか？", "choices": ["1メートル以上", "2メートル以上", "3メートル以上", "5メートル以上"], "ans": 1, "exp": "高さが2メートル以上の箇所であって、作業床を設けることが困難なところで行う作業を指します [cite: 186, 192]。" },
        { "q": "ロープ高所作業で使用するメインロープやライフラインの必要引張強度はいくつか？", "choices": ["10.0kN以上", "11.5kN以上", "15.0kN以上", "19.0kN以上"], "ans": 3, "exp": "メインロープ、ライフラインは19.0kN以上の引張強度が必要です [cite: 210]。" },
        { "q": "カラビナや垂直用ハーネスに必要な引張強度はいくつか？", "choices": ["10.0kN以上", "11.5kN以上", "15.0kN以上", "19.0kN以上"], "ans": 1, "exp": "カラビナや垂直用ハーネス、接続器具（ディッセンダー等）は11.5kN以上の引張強度が必要です [cite: 211, 212, 213]。" },
        { "q": "スリングに必要な引張強度はいくつか？", "choices": ["10.0kN以上", "11.5kN以上", "15.0kN以上", "19.0kN以上"], "ans": 2, "exp": "スリング、及び傾斜用ハーネスのバックサイドベルトは15.0kN以上の引張強度が必要です [cite: 211, 212]。" },
        { "q": "クライミングロープによる樹上作業で、1本のロープの伸縮により昇降する技術（ダブルロープテクニック）の略称は？", "choices": ["DRT", "SRT", "ALT", "PPE"], "ans": 0, "exp": "DRT（ダブルロープテクニック）はループ状のロープを調整して昇降する、ワークポジショニングシステムに分類されます [cite: 255, 257, 284, 285]。" },
        { "q": "樹木点検（Tree Inspection）で確認する項目として「適切でない」ものはどれか？", "choices": ["根系のキノコや空洞", "幹の割れやツル絡み", "電線類や交通状況", "樹冠の枯枝やかかり枝"], "ans": 2, "exp": "電線類や交通状況は、樹木点検ではなく「作業場所の点検（Site Inspection）」の項目です [cite: 432, 433, 434, 436]。" },
        { "q": "作業中のコミュニケーションで、地上に危険物が落ちてくる緊急時のコマンドはどれか？", "choices": ["スタンドクリアー", "オールクリアー", "ヘッドエイク", "イン・ドロップゾーン"], "ans": 2, "exp": "「ヘッドエイク（Headache）」は、物が頭上に緊急に落ちてくる際の合図です。地上作業者は頭を伏せて逃げます [cite: 492]。" }
    ],
    2: [
        { "q": "現在、樹上作業で最も一般的に使用されるクライミングロープのストランド（編み込み）数は？", "choices": ["3ストランド", "12ストランド", "16ストランド", "24ストランド"], "ans": 2, "exp": "16ストランドロープが、現在樹上作業で最も一般的に使用されています [cite: 634, 635]。" },
        { "q": "芯（カーン）と外皮（マントル）からなる構造で、主に芯に強度があるロープを何と呼ぶか？", "choices": ["3つ撚りロープ", "カーンマントルロープ", "ワイヤーコアロープ", "スプリットテイル"], "ans": 1, "exp": "カーンマントルロープは芯と外皮からなり、外皮が芯を保護する構造です [cite: 652]。" },
        { "q": "樹上作業者がツリークライミング専用として一般的に使用するロープの伸び率特性はどれか？", "choices": ["スタティックロープ", "セミスタティックロープ", "ダイナミックロープ", "バンジーロープ"], "ans": 1, "exp": "樹上作業では一般的に、伸び率が中程度の「セミスタティックロープ」を使用します [cite: 654, 655]。" },
        { "q": "カラビナの正しい使用方向はどちらか？", "choices": ["メジャーアクシス（縦方向）", "マイナーアクシス（横方向）", "ゲートアクシス", "斜め方向"], "ans": 0, "exp": "カラビナは長軸方向（メジャーアクシス）で使用する必要があります。マイナーアクシスや曲げ荷重には弱いため注意が必要です [cite: 693, 701, 702]。" },
        { "q": "樹上作業で使用するカラビナのロック機能として推奨されるものはどれか？", "choices": ["ノンロック", "スクリューロック", "ダブルロック（3アクション）以上", "ワンロック"], "ans": 2, "exp": "樹上作業では、ダブルロック（3アクション2ロック）以上のオートロック機能を持つカラビナが推奨されます [cite: 700]。" },
        { "q": "ロープと樹木の摩擦を軽減し、同時に樹皮の損傷も軽減するギアの総称は？", "choices": ["アッセンダー", "フリクションセーバー", "ディッセンダー", "プルージックコード"], "ans": 1, "exp": "リングセーバーやロープセーバー等の「フリクションセーバー類」を設置し、摩擦を軽減する必要があります [cite: 723, 724]。" },
        { "q": "降下器（ディッセンダー）に関する安全要件として正しいものは？", "choices": ["メインロープが損傷しても保持機能を失わないこと", "軽量化のためプラスチック製であること", "登高にも使用できること", "引張強度が15.0kN以上であること"], "ans": 0, "exp": "ディッセンダーは11.5kNの引張荷重をかけた場合、メインロープの損傷等により保持機能を失わない必要があります [cite: 757]。" }
    ],
    3: [
        { "q": "ロープワークにおいて、結び目が解けるリスクを軽減するため、ロープの余端（エンド部分）はロープ径の何倍以上残す必要があるか？", "choices": ["2倍以上", "4倍以上", "6倍以上", "10倍以上"], "ans": 2, "exp": "ロープワークでは、余端（エンド部分）はロープ径の6倍以上の長さを残す必要があります [cite: 880]。" },
        { "q": "ロープの末端（エンド）からのすっぽ抜けや墜落を防止するために作成する結び目は？", "choices": ["スリップノット", "ストッパーノット（エンドノット）", "ガースヒッチ", "プルージックヒッチ"], "ans": 1, "exp": "ロープエンドには抜け止めのエンドノット（ストッパーノット）を作成します [cite: 881]。" },
        { "q": "悪天候による作業中止基準において、「強風」とは10分間の平均風速が毎秒何メートル以上か？", "choices": ["10m以上", "15m以上", "20m以上", "30m以上"], "ans": 0, "exp": "10分間の平均風速が毎秒10m以上の風を「強風」とし、作業を中止または中断する必要があります [cite: 1298]。" },
        { "q": "悪天候による作業中止基準において、「大雨」とは1回の降雨量が何ミリ以上か？", "choices": ["30mm以上", "50mm以上", "70mm以上", "100mm以上"], "ans": 1, "exp": "1回の降雨量が50mm以上の降雨を「大雨」とし、作業を中止する必要があります [cite: 1296]。" },
        { "q": "樹上作業を安全に行うために確保すべき推奨照度は何ルクス以上か？", "choices": ["50ルクス", "100ルクス", "150ルクス", "300ルクス"], "ans": 2, "exp": "枯れ枝の確認やロープの結束作業を安全に行うため、150ルクス以上の照度確保が推奨されています [cite: 1304]。" },
        { "q": "物体の落下による第三者の災害を防止するため、立入禁止区域を明示する場所はどこか？", "choices": ["セーフティゾーン", "ワークゾーン", "ドロップゾーン", "レストゾーン"], "ans": 2, "exp": "ドロップゾーン（Drop Zone）を明示化し、立入禁止箇所への進入ができない措置を講じます [cite: 1168, 1169]。" },
        { "q": "保護帽（ヘルメット）を選ぶ際、最も重要なポイントはどれか？", "choices": ["軽量であること", "明るい色であること", "自分の頭の形状（円形、楕円形など）に合っていること", "高価であること"], "ans": 2, "exp": "自分の頭の形状（Round Oval、Intermediate Ovalなど）に合ったものを使用し、あごひも等を適切に調節する必要があります [cite: 1331, 1335]。" }
    ]
};

// 状態管理用オブジェクト
let state = {
    user: null, // {name, dob}
    progress: { 1: 0, 2: 0, 3: 0 },
    currentQuiz: {
        mode: null, // 'daily' or 'boss'
        chapter: null,
        questions: [],
        currentIndex: 0,
        score: 0,
        playerHp: 100,
        enemyHp: 100,
        maxPlayerHp: 100,
        maxEnemyHp: 100
    }
};

// DOM要素のキャッシュ
const views = {
    register: document.getElementById('view-register'),
    home: document.getElementById('view-home'),
    quiz: document.getElementById('view-quiz'),
    result: document.getElementById('view-result'),
    cert: document.getElementById('view-cert')
};

// アプリの初期化
function init() {
    loadState();
    if (state.user) {
        showView('home');
        updateHome();
    } else {
        showView('register');
    }
    setupEventListeners();
}

// LocalStorage への保存・読み込み
function saveState() {
    localStorage.setItem('ropeQuestState', JSON.stringify({
        user: state.user,
        progress: state.progress
    }));
}

function loadState() {
    const saved = localStorage.getItem('ropeQuestState');
    if (saved) {
        const parsed = JSON.parse(saved);
        state.user = parsed.user;
        state.progress = parsed.progress || {1:0, 2:0, 3:0};
    }
}

// ビューの切り替え
function showView(viewId) {
    Object.values(views).forEach(v => v.classList.add('hidden'));
    views[viewId].classList.remove('hidden');
}

// イベントリスナーの登録
function setupEventListeners() {
    // ユーザー登録処理
    document.getElementById('btn-register').addEventListener('click', () => {
        const name = document.getElementById('reg-name').value.trim();
        const dob = document.getElementById('reg-dob').value;
        if (name && dob) {
            state.user = { name, dob };
            saveState();
            showView('home');
            updateHome();
        } else {
            alert('見習いきこりよ、氏名と生年月日を正しく入力するのだ。');
        }
    });

    // データリセット（デバッグ・やり直し用）
    document.getElementById('btn-reset').addEventListener('click', () => {
        if(confirm('冒険の記録（進捗データ）をすべてリセットします。よろしいですか？')) {
            localStorage.removeItem('ropeQuestState');
            location.reload();
        }
    });

    // デイリークエストの開始ボタン
    document.querySelectorAll('.btn-daily').forEach(btn => {
        btn.addEventListener('click', (e) => {
            startQuiz(parseInt(e.target.dataset.c), 'daily');
        });
    });

    // ボスバトルの開始ボタン
    document.querySelectorAll('.btn-boss').forEach(btn => {
        btn.addEventListener('click', (e) => {
            startQuiz(parseInt(e.target.dataset.c), 'boss');
        });
    });

    // 解説ダイアログを閉じて次の問題へ
    document.getElementById('btn-next-q').addEventListener('click', () => {
        document.getElementById('modal-explanation').classList.add('hidden');
        state.currentQuiz.currentIndex++;
        renderQuestion();
    });

    // リザルト画面からホームへ戻る
    document.getElementById('btn-finish-quiz').addEventListener('click', () => {
        showView('home');
        updateHome();
    });

    // 修了証の発行画面へ
    document.getElementById('btn-show-cert').addEventListener('click', () => {
        showView('cert');
        // フォントの読み込みを待ってから描画するための微小なタイムアウト
        setTimeout(generateCertificate, 100);
    });

    // 修了証画面からホームへ戻る
    document.getElementById('btn-cert-home').addEventListener('click', () => {
        showView('home');
        updateHome();
    });

    // 修了証の画像ダウンロード
    document.getElementById('btn-download-cert').addEventListener('click', () => {
        const canvas = document.getElementById('cert-canvas');
        const link = document.createElement('a');
        link.download = `ロープ高所作業修了証_${state.user.name}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

// ホーム画面の表示更新
function updateHome() {
    document.getElementById('home-player-name').textContent = `冒険者: ${state.user.name}`;
    
    [1, 2, 3].forEach(c => {
        const prog = state.progress[c];
        document.getElementById(`prog-c${c}`).textContent = prog;
        const bossBtn = document.querySelector(`.btn-boss[data-c="${c}"]`);
        
        // 50問以上回答していればボスバトルを解放
        if (prog >= 50) {
            bossBtn.classList.remove('hidden');
        } else {
            bossBtn.classList.add('hidden');
        }
    });
}

// クイズ開始のロジック
function startQuiz(chapter, mode) {
    const pool = quizData[chapter];
    const qCount = mode === 'daily' ? 10 : 30; // デイリーは10問、ボスは30問
    
    // ランダムに出題をピックアップ（重複を許容して学習効果を高める）
    let selectedQuestions = [];
    for(let i=0; i<qCount; i++) {
        const randIdx = Math.floor(Math.random() * pool.length);
        selectedQuestions.push({...pool[randIdx]});
    }

    state.currentQuiz = {
        mode: mode,
        chapter: chapter,
        questions: selectedQuestions,
        currentIndex: 0,
        score: 0,
        maxEnemyHp: qCount,
        enemyHp: qCount,
        maxPlayerHp: 10,
        playerHp: 10
    };

    // ボス戦は30問中、10回ミス（残りHP0）でゲームオーバーになる設定（21問正解必要）
    if(mode === 'boss') {
        state.currentQuiz.maxPlayerHp = 10;
        state.currentQuiz.playerHp = 10;
    }

    setupQuizUI();
    showView('quiz');
    renderQuestion();
}

// クイズ画面のUIセットアップ
function setupQuizUI() {
    const { mode, chapter } = state.currentQuiz;
    const playerStatus = document.getElementById('player-status');
    const enemyName = document.getElementById('enemy-name');
    const treeSprite = document.getElementById('tree');

    if (mode === 'daily') {
        playerStatus.classList.add('hidden'); // デイリーはプレイヤーHP非表示
        enemyName.textContent = `第${chapter}章の木`;
        treeSprite.textContent = '🌲'; // 普通の木
    } else {
        playerStatus.classList.remove('hidden'); // ボス戦はプレイヤーHP表示
        enemyName.textContent = `第${chapter}章のヌシ`;
        treeSprite.textContent = '🌳'; // ボスの木
    }
    updateHPBar('enemy');
    if(mode === 'boss') updateHPBar('player');
}

// HPバーの更新
function updateHPBar(target) {
    const hp = state.currentQuiz[`${target}Hp`];
    const maxHp = state.currentQuiz[`max${target.charAt(0).toUpperCase() + target.slice(1)}Hp`];
    const percent = Math.max(0, (hp / maxHp) * 100);
    const bar = document.getElementById(`hp-${target}`);
    bar.style.width = `${percent}%`;
    
    // HPに応じて色を変更
    if(percent > 50) bar.style.background = 'var(--hp-green)';
    else if(percent > 20) bar.style.background = 'var(--highlight)'; // 黄色
    else bar.style.background = 'var(--hp-red)';
}

// 1問分のレンダリング
function renderQuestion() {
    const { questions, currentIndex, mode } = state.currentQuiz;
    
    // 全問終了、またはボス戦でHPが尽きたら終了
    if (currentIndex >= questions.length || (mode === 'boss' && state.currentQuiz.playerHp <= 0)) {
        finishQuiz();
        return;
    }

    const q = questions[currentIndex];
    document.getElementById('q-counter').textContent = `Q ${currentIndex + 1}/${questions.length}`;
    document.getElementById('q-text').textContent = q.q;

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    // 選択肢ボタンの生成
    q.choices.forEach((choiceText, index) => {
        const btn = document.createElement('button');
        btn.textContent = choiceText;
        btn.addEventListener('click', () => handleAnswer(index));
        choicesContainer.appendChild(btn);
    });
}

// 回答処理
function handleAnswer(selectedIndex) {
    const { questions, currentIndex, mode } = state.currentQuiz;
    const q = questions[currentIndex];
    const isCorrect = selectedIndex === q.ans;
    
    const kikori = document.getElementById('kikori');
    const tree = document.getElementById('tree');
    const expModal = document.getElementById('modal-explanation');
    const expResult = document.getElementById('exp-result');
    const expText = document.getElementById('exp-text');

    if (isCorrect) {
        state.currentQuiz.score++;
        state.currentQuiz.enemyHp--;
        updateHPBar('enemy');
        
        // 正解時のアニメーション（きこりが木を切る）
        kikori.classList.add('anim-attack');
        setTimeout(() => kikori.classList.remove('anim-attack'), 300);
        setTimeout(() => {
            tree.classList.add('anim-damage');
            setTimeout(() => tree.classList.remove('anim-damage'), 400);
        }, 150);

        expResult.textContent = '正解！';
        expResult.style.color = 'var(--hp-green)';
    } else {
        // 不正解時の処理
        if (mode === 'boss') {
            state.currentQuiz.playerHp--;
            updateHPBar('player');
            // ボスの攻撃を受けるアニメーション
            kikori.classList.add('anim-damage');
            setTimeout(() => kikori.classList.remove('anim-damage'), 400);
        } else {
            // デイリーでのミス（空振り）
            kikori.classList.add('anim-damage');
            setTimeout(() => kikori.classList.remove('anim-damage'), 400);
        }
        expResult.textContent = '不正解...';
        expResult.style.color = 'var(--hp-red)';
    }

    expText.textContent = q.exp;
    
    // アニメーションを見せるため、少し遅延させて解説ダイアログを表示
    setTimeout(() => {
        expModal.classList.remove('hidden');
    }, 800);
}

// クイズのリザルト画面表示
function finishQuiz() {
    const { mode, chapter, score, questions } = state.currentQuiz;
    
    // デイリークエストの場合、進捗を保存
    if (mode === 'daily') {
        state.progress[chapter] = Math.min(50, state.progress[chapter] + questions.length);
        saveState();
    }

    const resMsg = document.getElementById('result-message');
    const resScore = document.getElementById('result-score');
    const btnShowCert = document.getElementById('btn-show-cert');
    
    btnShowCert.classList.add('hidden');

    if (mode === 'daily') {
        resMsg.textContent = 'デイリークエスト完了！木を切り倒した！';
        resScore.textContent = `正解数: ${score} / ${questions.length}`;
        resMsg.style.color = 'var(--text-color)';
    } else if (mode === 'boss') {
        if (score >= 21) {
            resMsg.textContent = '見事、ヌシを倒した！合格！';
            resMsg.style.color = 'var(--highlight)';
            resScore.textContent = `正解数: ${score} / ${questions.length}`;
            btnShowCert.classList.remove('hidden'); // 合格証ボタンを表示
        } else {
            resMsg.textContent = 'ヌシの力に屈した...不合格';
            resMsg.style.color = 'var(--hp-red)';
            resScore.textContent = `正解数: ${score} / ${questions.length} (合格ライン: 21問)`;
        }
    }

    showView('result');
}

// HTML5 Canvasを用いた修了証の動的描画
function generateCertificate() {
    const canvas = document.getElementById('cert-canvas');
    const ctx = canvas.getContext('2d');
    
    // 背景の塗りつぶし（レトロな羊皮紙風の色）
    ctx.fillStyle = '#fdf6e3';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 二重の飾り枠
    ctx.strokeStyle = '#8b4513'; // 茶色
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    // タイトル
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.font = 'bold 36px "DotGothic16", sans-serif';
    ctx.fillText('ロープ高所作業（樹上作業）特別教育', canvas.width / 2, 100);
    ctx.fillText('学科修了証', canvas.width / 2, 160);

    // 氏名・生年月日
    ctx.textAlign = 'left';
    ctx.font = '24px "DotGothic16", sans-serif';
    ctx.fillText(`氏名: ${state.user.name} 様`, 100, 260);
    ctx.fillText(`生年月日: ${state.user.dob}`, 100, 310);

    // 証明文
    ctx.font = '20px "DotGothic16", sans-serif';
    ctx.fillText('あなたは、当ギルドにおけるロープ高所作業に関する', 100, 390);
    ctx.fillText('必要な学科知識を修得したことを証します。', 100, 430);

    // 日付
    const today = new Date();
    const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
    ctx.textAlign = 'right';
    ctx.fillText(`認定日: ${dateStr}`, canvas.width - 100, 500);
    
    // 発行者
    ctx.fillText('見習いきこり育成ギルド', canvas.width - 100, 540);
    
    // ハンコ風の装飾
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(canvas.width - 160, 520, 35, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#ff0000';
    ctx.textAlign = 'center';
    ctx.font = '16px "DotGothic16", sans-serif';
    ctx.fillText('ギルド', canvas.width - 160, 515);
    ctx.fillText('公認', canvas.width - 160, 535);
}

// アプリケーション起動
window.onload = init;
