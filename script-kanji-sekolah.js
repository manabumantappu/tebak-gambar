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
   DATA KANJI AREA SEKOLAH (N5)
===================== */
const soal = [
  {
    kanji: "学校",
    baca: "がっこう",
    romaji: "gakkou",
    arti: "sekolah",
    opsi: ["rumah", "sekolah", "kantor"],
    benar: 1
  },
  {
    kanji: "教室",
    baca: "きょうしつ",
    romaji: "kyoushitsu",
    arti: "ruang kelas",
    opsi: ["perpustakaan", "ruang guru", "ruang kelas"],
    benar: 2
  },
  {
    kanji: "図書館",
    baca: "としょかん",
    romaji: "toshokan",
    arti: "perpustakaan",
    opsi: ["laboratorium", "perpustakaan", "kantin"],
    benar: 1
  },
  {
    kanji: "校門",
    baca: "こうもん",
    romaji: "koumon",
    arti: "gerbang sekolah",
    opsi: ["pintu kelas", "gerbang sekolah", "lapangan"],
    benar: 1
  },
  {
    kanji: "職員室",
    baca: "しょくいんしつ",
    romaji: "shokuinshitsu",
    arti: "ruang guru",
    opsi: ["ruang guru", "kelas", "kantin"],
    benar: 0
  },
  {
    kanji: "体育館",
    baca: "たいいくかん",
    romaji: "taiikukan",
    arti: "gedung olahraga",
    opsi: ["gedung olahraga", "perpustakaan", "kelas"],
    benar: 0
  },
  {
    kanji: "運動場",
    baca: "うんどうじょう",
    romaji: "undoujou",
    arti: "lapangan olahraga",
    opsi: ["kantin", "lapangan olahraga", "ruang kelas"],
    benar: 1
  },
  {
    kanji: "給食室",
    baca: "きゅうしょくしつ",
    romaji: "kyuushokushitsu",
    arti: "ruang makan sekolah",
    opsi: ["ruang makan sekolah", "kelas", "perpustakaan"],
    benar: 0
  },
  {
    kanji: "保健室",
    baca: "ほけんしつ",
    romaji: "hokenshitsu",
    arti: "UKS / ruang kesehatan",
    opsi: ["ruang kesehatan", "ruang guru", "kelas"],
    benar: 0
  },
  {
    kanji: "下足箱",
    baca: "げそくばこ",
    romaji: "gesokubako",
    arti: "loker sepatu",
    opsi: ["loker sepatu", "lemari buku", "meja"],
    benar: 0
  },
   // ===== PERALATAN & PERLENGKAPAN SEKOLAH =====
{
  kanji: "本",
  baca: "ほん",
  romaji: "hon",
  arti: "buku",
  opsi: ["buku", "pensil", "tas"],
  benar: 0
},
{
  kanji: "教科書",
  baca: "きょうかしょ",
  romaji: "kyoukasho",
  arti: "buku pelajaran",
  opsi: ["buku cerita", "buku pelajaran", "kamus"],
  benar: 1
},
{
  kanji: "鉛筆",
  baca: "えんぴつ",
  romaji: "enpitsu",
  arti: "pensil",
  opsi: ["pena", "penghapus", "pensil"],
  benar: 2
},
{
  kanji: "消しゴム",
  baca: "けしごむ",
  romaji: "keshigomu",
  arti: "penghapus",
  opsi: ["penghapus", "penggaris", "pensil"],
  benar: 0
},
{
  kanji: "ノート",
  baca: "のーと",
  romaji: "nooto",
  arti: "buku tulis",
  opsi: ["buku tulis", "buku gambar", "map"],
  benar: 0
},
{
  kanji: "鞄",
  baca: "かばん",
  romaji: "kaban",
  arti: "tas",
  opsi: ["tas", "sepatu", "topi"],
  benar: 0
},
{
  kanji: "机",
  baca: "つくえ",
  romaji: "tsukue",
  arti: "meja",
  opsi: ["kursi", "lemari", "meja"],
  benar: 2
},
{
  kanji: "椅子",
  baca: "いす",
  romaji: "isu",
  arti: "kursi",
  opsi: ["meja", "kursi", "papan tulis"],
  benar: 1
},
{
  kanji: "黒板",
  baca: "こくばん",
  romaji: "kokuban",
  arti: "papan tulis",
  opsi: ["papan tulis", "jendela", "pintu"],
  benar: 0
},
{
  kanji: "時計",
  baca: "とけい",
  romaji: "tokei",
  arti: "jam",
  opsi: ["kalender", "jam", "bel"],
  benar: 1
},
{
  kanji: "地図",
  baca: "ちず",
  romaji: "chizu",
  arti: "peta",
  opsi: ["peta", "poster", "bendera"],
  benar: 0
},
{
  kanji: "筆箱",
  baca: "ふでばこ",
  romaji: "fudebako",
  arti: "kotak pensil",
  opsi: ["kotak makan", "kotak pensil", "tas"],
  benar: 1
},
{
  kanji: "定規",
  baca: "じょうぎ",
  romaji: "jougi",
  arti: "penggaris",
  opsi: ["gunting", "penggaris", "pensil"],
  benar: 1
},
{
  kanji: "鋏",
  baca: "はさみ",
  romaji: "hasami",
  arti: "gunting",
  opsi: ["lem", "gunting", "penghapus"],
  benar: 1
},
{
  kanji: "紙",
  baca: "かみ",
  romaji: "kami",
  arti: "kertas",
  opsi: ["kertas", "buku", "papan"],
  benar: 0
}
];

/* =====================
   TAMPILKAN SOAL
===================== */
function tampilSoal() {
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

function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

document.addEventListener("DOMContentLoaded", tampilSoal);
