let score = 0;
let indexSoal = 0;
let currentLevel = 1;

/* =====================
   DATA KATAKANA PER LEVEL
===================== */
const levels = {
  1: [
    { huruf: "ア", jawaban: "a" },
    { huruf: "イ", jawaban: "i" },
    { huruf: "ウ", jawaban: "u" },
    { huruf: "エ", jawaban: "e" },
    { huruf: "オ", jawaban: "o" }
  ],
  2: [
    { huruf: "カ", jawaban: "ka" },
    { huruf: "キ", jawaban: "ki" },
    { huruf: "ク", jawaban: "ku" },
    { huruf: "ケ", jawaban: "ke" },
    { huruf: "コ", jawaban: "ko" }
  ],
  3: [
    { huruf: "サ", jawaban: "sa" },
    { huruf: "シ", jawaban: "shi" },
    { huruf: "ス", jawaban: "su" },
    { huruf: "セ", jawaban: "se" },
    { huruf: "ソ", jawaban: "so" }
  ],
  4: [
    { huruf: "タ", jawaban: "ta" },
    { huruf: "チ", jawaban: "chi" },
    { huruf: "ツ", jawaban: "tsu" },
    { huruf: "テ", jawaban: "te" },
    { huruf: "ト", jawaban: "to" },
    { huruf: "ナ", jawaban: "na" },
    { huruf: "ニ", jawaban: "ni" },
    { huruf: "ヌ", jawaban: "nu" },
    { huruf: "ネ", jawaban: "ne" },
    { huruf: "ノ", jawaban: "no" }
  ],
  5: [
    { huruf: "ハ", jawaban: "ha" },
    { huruf: "ヒ", jawaban: "hi" },
    { huruf: "フ", jawaban: "fu" },
    { huruf: "ヘ", jawaban: "he" },
    { huruf: "ホ", jawaban: "ho" },
    { huruf: "マ", jawaban: "ma" },
    { huruf: "ミ", jawaban: "mi" },
    { huruf: "ム", jawaban: "mu" },
    { huruf: "メ", jawaban: "me" },
    { huruf: "モ", jawaban: "mo" },
    { huruf: "ヤ", jawaban: "ya" },
    { huruf: "ユ", jawaban: "yu" },
    { huruf: "ヨ", jawaban: "yo" },
    { huruf: "ラ", jawaban: "ra" },
    { huruf: "リ", jawaban: "ri" },
    { huruf: "ル", jawaban: "ru" },
    { huruf: "レ", jawaban: "re" },
    { huruf: "ロ", jawaban: "ro" },
    { huruf: "ワ", jawaban: "wa" },
    { huruf: "ヲ", jawaban: "wo" },
    { huruf: "ン", jawaban: "n" }
  ]
};

let soal = levels[currentLevel];

/* =====================
   OPSI JAWABAN
===================== */
const pool = [
  "a","i","u","e","o","ka","ki","ku","ke","ko",
  "sa","shi","su","se","so","ta","chi","tsu","te","to",
  "na","ni","nu","ne","no","ha","hi","fu","he","ho",
  "ma","mi","mu","me","mo","ya","yu","yo",
  "ra","ri","ru","re","ro","wa","wo","n"
];

function getOptions(correct) {
  const opts = [correct];
  while (opts.length < 3) {
    const r = pool[Math.floor(Math.random() * pool.length)];
    if (!opts.includes(r)) opts.push(r);
  }
  return opts.sort(() => Math.random() - 0.5);
}

/* =====================
   TAMPILKAN SOAL
===================== */
function tampilSoal() {
  if (indexSoal >= soal.length) {
    naikLevel();
    return;
  }

  document.getElementById("levelText").innerText = `Level ${currentLevel}`;
  const s = soal[indexSoal];
  document.getElementById("huruf").innerText = s.huruf;
  document.getElementById("jawaban").innerHTML = "";

  getOptions(s.jawaban).forEach(op => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = op;
    btn.onclick = () => jawab(op === s.jawaban);
    document.getElementById("jawaban").appendChild(btn);
  });
}

/* =====================
   JAWAB
===================== */
function jawab(benar) {
  if (benar) {
    score++;
    document.getElementById("score").innerText = score;
  }
  indexSoal++;
  tampilSoal();
}

/* =====================
   NAIK LEVEL
===================== */
function naikLevel() {
  if (currentLevel < 5) {
    currentLevel++;
    soal = levels[currentLevel];
    indexSoal = 0;
    tampilSoal();
  } else {
    document.getElementById("huruf").innerText = "🎉";
    document.getElementById("jawaban").innerHTML = `
      <h3>Semua Katakana Selesai!</h3>
      <p>Skor: ${score}</p>
      <button class="btn" onclick="location.reload()">🔄 Main Lagi</button>
    `;
  }
}

document.addEventListener("DOMContentLoaded", tampilSoal);
