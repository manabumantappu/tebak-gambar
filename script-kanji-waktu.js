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
   DATA KANJI WAKTU N5
===================== */
const soal = [
  {
    kanji: "日",
    baca: "ひ / にち",
    romaji: "hi / nichi",
    arti: "hari / matahari",
    opsi: ["hari", "bulan", "tahun"],
    benar: 0
  },
  {
    kanji: "月",
    baca: "つき / げつ",
    romaji: "tsuki / getsu",
    arti: "bulan",
    opsi: ["minggu", "bulan", "tahun"],
    benar: 1
  },
  {
    kanji: "年",
    baca: "とし / ねん",
    romaji: "toshi / nen",
    arti: "tahun",
    opsi: ["tahun", "hari", "jam"],
    benar: 0
  },
  {
    kanji: "時",
    baca: "じ",
    romaji: "ji",
    arti: "jam / waktu",
    opsi: ["menit", "jam", "hari"],
    benar: 1
  },
  {
    kanji: "分",
    baca: "ふん / ぷん",
    romaji: "fun / pun",
    arti: "menit",
    opsi: ["detik", "jam", "menit"],
    benar: 2
  },
  {
    kanji: "週",
    baca: "しゅう",
    romaji: "shuu",
    arti: "minggu",
    opsi: ["bulan", "minggu", "tahun"],
    benar: 1
  },
  {
    kanji: "今",
    baca: "いま",
    romaji: "ima",
    arti: "sekarang",
    opsi: ["kemarin", "besok", "sekarang"],
    benar: 2
  },
  {
    kanji: "先",
    baca: "さき",
    romaji: "saki",
    arti: "sebelum / dulu",
    opsi: ["sekarang", "sebelum", "nanti"],
    benar: 1
  },
  {
    kanji: "毎",
    baca: "まい",
    romaji: "mai",
    arti: "setiap",
    opsi: ["kadang", "setiap", "jarang"],
    benar: 1
  },
   // ===== TAMBAHAN SOAL WAKTU N5 =====
{
  kanji: "今朝",
  baca: "けさ",
  romaji: "kesa",
  arti: "pagi ini",
  opsi: ["pagi ini", "malam ini", "besok pagi"],
  benar: 0
},
{
  kanji: "今晩",
  baca: "こんばん",
  romaji: "konban",
  arti: "malam ini",
  opsi: ["kemarin malam", "malam ini", "besok malam"],
  benar: 1
},
{
  kanji: "今日",
  baca: "きょう",
  romaji: "kyou",
  arti: "hari ini",
  opsi: ["kemarin", "hari ini", "besok"],
  benar: 1
},
{
  kanji: "昨日",
  baca: "きのう",
  romaji: "kinou",
  arti: "kemarin",
  opsi: ["kemarin", "hari ini", "besok"],
  benar: 0
},
{
  kanji: "明日",
  baca: "あした",
  romaji: "ashita",
  arti: "besok",
  opsi: ["hari ini", "besok", "lusa"],
  benar: 1
},
{
  kanji: "朝",
  baca: "あさ",
  romaji: "asa",
  arti: "pagi",
  opsi: ["pagi", "siang", "malam"],
  benar: 0
},
{
  kanji: "昼",
  baca: "ひる",
  romaji: "hiru",
  arti: "siang",
  opsi: ["pagi", "siang", "malam"],
  benar: 1
},
{
  kanji: "夜",
  baca: "よる",
  romaji: "yoru",
  arti: "malam",
  opsi: ["pagi", "siang", "malam"],
  benar: 2
},
{
  kanji: "先週",
  baca: "せんしゅう",
  romaji: "senshuu",
  arti: "minggu lalu",
  opsi: ["minggu ini", "minggu lalu", "minggu depan"],
  benar: 1
},
{
  kanji: "来週",
  baca: "らいしゅう",
  romaji: "raishuu",
  arti: "minggu depan",
  opsi: ["minggu lalu", "minggu ini", "minggu depan"],
  benar: 2
},
{
  kanji: "今月",
  baca: "こんげつ",
  romaji: "kongetsu",
  arti: "bulan ini",
  opsi: ["bulan lalu", "bulan ini", "bulan depan"],
  benar: 1
},
{
  kanji: "来月",
  baca: "らいげつ",
  romaji: "raigetsu",
  arti: "bulan depan",
  opsi: ["bulan lalu", "bulan ini", "bulan depan"],
  benar: 2
},
{
  kanji: "午前",
  baca: "ごぜん",
  romaji: "gozen",
  arti: "pagi (AM)",
  opsi: ["pagi (AM)", "siang", "malam"],
  benar: 0
},
{
  kanji: "午後",
  baca: "ごご",
  romaji: "gogo",
  arti: "sore (PM)",
  opsi: ["pagi", "sore (PM)", "malam"],
  benar: 1
},
{
  kanji: "半",
  baca: "はん",
  romaji: "han",
  arti: "setengah",
  opsi: ["setengah", "jam", "menit"],
  benar: 0
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

  s.opsi.forEach((op, i) => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerText = op;
  btn.onclick = () => jawab(i === s.benar);
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
    <strong style="font-size:2.2rem">${s.kanji}</strong><br>
    ${s.baca} (${s.romaji})<br>
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
