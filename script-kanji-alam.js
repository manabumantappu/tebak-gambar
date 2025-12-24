let score = 0;
let indexSoal = 0;

/* =====================
   AUDIO
===================== */
function playBenar() {
  const a = document.getElementById("soundBenar");
  if (a) { a.currentTime = 0; a.play().catch(()=>{}); }
}
function playSalah() {
  const a = document.getElementById("soundSalah");
  if (a) { a.currentTime = 0; a.play().catch(()=>{}); }
}

/* =====================
   DATA KANJI N5 - ALAM
===================== */
const soal = [
  {
    kanji: "日",
    furigana: "にち",
    romaji: "nichi / hi",
    arti: "matahari",
    opsi: ["matahari", "bulan", "air"]
  },
  {
    kanji: "月",
    furigana: "つき",
    romaji: "tsuki",
    arti: "bulan",
    opsi: ["bulan", "api", "gunung"]
  },
  {
    kanji: "水",
    furigana: "みず",
    romaji: "mizu",
    arti: "air",
    opsi: ["air", "api", "tanah"]
  },
  {
    kanji: "火",
    furigana: "ひ",
    romaji: "hi",
    arti: "api",
    opsi: ["angin", "api", "air"]
  },
  {
    kanji: "木",
    furigana: "き",
    romaji: "ki",
    arti: "pohon",
    opsi: ["pohon", "gunung", "sungai"]
  },
  {
    kanji: "山",
    furigana: "やま",
    romaji: "yama",
    arti: "gunung",
    opsi: ["laut", "gunung", "langit"]
  },
  {
    kanji: "川",
    furigana: "かわ",
    romaji: "kawa",
    arti: "sungai",
    opsi: ["danau", "hutan", "sungai"]
  },
   // ===== KANJI ALAM LANJUTAN =====
{
  kanji: "森",
  baca: "もり",
  romaji: "mori",
  arti: "hutan",
  opsi: ["hutan", "gunung", "laut"],
  benar: 0
},
{
  kanji: "林",
  baca: "はやし",
  romaji: "hayashi",
  arti: "rimba / pepohonan",
  opsi: ["pepohonan", "sungai", "langit"],
  benar: 0
},
{
  kanji: "雲",
  baca: "くも",
  romaji: "kumo",
  arti: "awan",
  opsi: ["awan", "angin", "hujan"],
  benar: 0
},
{
  kanji: "土",
  baca: "つち",
  romaji: "tsuchi",
  arti: "tanah",
  opsi: ["tanah", "air", "api"],
  benar: 0
},
{
  kanji: "石",
  baca: "いし",
  romaji: "ishi",
  arti: "batu",
  opsi: ["pasir", "batu", "gunung"],
  benar: 1
},
{
  kanji: "砂",
  baca: "すな",
  romaji: "suna",
  arti: "pasir",
  opsi: ["tanah", "pasir", "batu"],
  benar: 1
},
{
  kanji: "晴",
  baca: "はれ",
  romaji: "hare",
  arti: "cerah",
  opsi: ["hujan", "cerah", "mendung"],
  benar: 1
},
{
  kanji: "雨",
  baca: "あめ",
  romaji: "ame",
  arti: "hujan",
  opsi: ["angin", "salju", "hujan"],
  benar: 2
},
{
  kanji: "雪",
  baca: "ゆき",
  romaji: "yuki",
  arti: "salju",
  opsi: ["hujan", "salju", "es"],
  benar: 1
},
{
  kanji: "星",
  baca: "ほし",
  romaji: "hoshi",
  arti: "bintang",
  opsi: ["bulan", "matahari", "bintang"],
  benar: 2
}
];

/* =====================
   TAMPILKAN SOAL
===================== */
function tampilSoal() {
  document.getElementById("loading").style.display = "none";

  if (indexSoal >= soal.length) {
    document.getElementById("kanji").innerText = "🎉";
    document.getElementById("pertanyaan").innerHTML =
      `Selesai!<br>Skor: ${score} / ${soal.length}`;
    document.getElementById("jawaban").innerHTML =
      `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
    return;
  }

  const s = soal[indexSoal];
  document.getElementById("kanji").innerText = s.kanji;
  document.getElementById("jawaban").innerHTML = "";

  s.opsi.forEach(op => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = op;
    btn.onclick = () => jawab(op === s.arti);
    document.getElementById("jawaban").appendChild(btn);
  });
}

/* =====================
   JAWAB
===================== */
function jawab(benar) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");
  const s = soal[indexSoal];

  if (benar) {
    score++;
    document.getElementById("score").innerText = score;
    title.innerText = "⭐ BENAR!";
    playBenar();
  } else {
    title.innerText = "😅 SALAH";
    playSalah();
  }

  text.innerHTML = `
    <strong style="font-size:2rem">${s.kanji}</strong><br>
    ${s.furigana} (${s.romaji})<br>
    artinya: <b>${s.arti}</b>
  `;

  popup.classList.remove("hidden");
  indexSoal++;
}

/* =====================
   TUTUP POPUP
===================== */
function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

document.addEventListener("DOMContentLoaded", tampilSoal);
