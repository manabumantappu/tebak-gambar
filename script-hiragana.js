let score = 0;
let indexSoal = 0;
let currentLevel = 1;

/* =====================
   DATA HIRAGANA PER LEVEL
===================== */
const levels = {
  1: [
    { huruf: "あ", jawaban: "a" },
    { huruf: "い", jawaban: "i" },
    { huruf: "う", jawaban: "u" },
    { huruf: "え", jawaban: "e" },
    { huruf: "お", jawaban: "o" }
  ],
  2: [
    { huruf: "か", jawaban: "ka" },
    { huruf: "き", jawaban: "ki" },
    { huruf: "く", jawaban: "ku" },
    { huruf: "け", jawaban: "ke" },
    { huruf: "こ", jawaban: "ko" }
  ],
  3: [
    { huruf: "さ", jawaban: "sa" },
    { huruf: "し", jawaban: "shi" },
    { huruf: "す", jawaban: "su" },
    { huruf: "せ", jawaban: "se" },
    { huruf: "そ", jawaban: "so" }
  ],
  4: [
    { huruf: "た", jawaban: "ta" },
    { huruf: "ち", jawaban: "chi" },
    { huruf: "つ", jawaban: "tsu" },
    { huruf: "て", jawaban: "te" },
    { huruf: "と", jawaban: "to" },
    { huruf: "な", jawaban: "na" },
    { huruf: "に", jawaban: "ni" },
    { huruf: "ぬ", jawaban: "nu" },
    { huruf: "ね", jawaban: "ne" },
    { huruf: "の", jawaban: "no" }
  ],
  5: [
    { huruf: "は", jawaban: "ha" },
    { huruf: "ひ", jawaban: "hi" },
    { huruf: "ふ", jawaban: "fu" },
    { huruf: "へ", jawaban: "he" },
    { huruf: "ほ", jawaban: "ho" },
    { huruf: "ま", jawaban: "ma" },
    { huruf: "み", jawaban: "mi" },
    { huruf: "む", jawaban: "mu" },
    { huruf: "め", jawaban: "me" },
    { huruf: "も", jawaban: "mo" },
    { huruf: "や", jawaban: "ya" },
    { huruf: "ゆ", jawaban: "yu" },
    { huruf: "よ", jawaban: "yo" },
    { huruf: "ら", jawaban: "ra" },
    { huruf: "り", jawaban: "ri" },
    { huruf: "る", jawaban: "ru" },
    { huruf: "れ", jawaban: "re" },
    { huruf: "ろ", jawaban: "ro" },
    { huruf: "わ", jawaban: "wa" },
    { huruf: "を", jawaban: "wo" },
    { huruf: "ん", jawaban: "n" }
  ]
};

let soal = levels[currentLevel];

/* =====================
   GENERATE OPSI
===================== */
function getOptions(correct) {
  const pool = ["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so",
    "ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","fu","he","ho",
    "ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","wo","n"];

  const options = [correct];
  while (options.length < 3) {
    const r = pool[Math.floor(Math.random() * pool.length)];
    if (!options.includes(r)) options.push(r);
  }
  return options.sort(() => Math.random() - 0.5);
}

/* =====================
   TAMPILKAN SOAL
===================== */
function tampilSoal() {
  if (indexSoal >= soal.length) {
    naikLevel();
    return;
  }

  const s = soal[indexSoal];
  document.getElementById("huruf").innerText = s.huruf;
  document.getElementById("jawaban").innerHTML = "";

  getOptions(s.jawaban).forEach(op => {
    const b = document.createElement("button");
    b.className = "btn";
    b.innerText = op;
    b.onclick = () => jawab(op === s.jawaban);
    document.getElementById("jawaban").appendChild(b);
  });
}

/* =====================
   JAWAB
===================== */
function jawab(benar) {
  if (benar) score++;
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
    document.getElementById("jawaban").innerHTML =
      `<h3>🎉 Semua Hiragana Selesai!</h3>
       <button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
  }
}

document.addEventListener("DOMContentLoaded", tampilSoal);
