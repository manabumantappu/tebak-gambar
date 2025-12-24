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
