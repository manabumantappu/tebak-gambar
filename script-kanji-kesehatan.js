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
   DATA KANJI KESEHATAN (N5)
===================== */
const soal = [
  {
    kanji: "病",
    baca: "びょう",
    romaji: "byou",
    arti: "penyakit",
    opsi: ["obat", "penyakit", "rumah sakit"],
    benar: 1
  },
  {
    kanji: "体",
    baca: "からだ",
    romaji: "karada",
    arti: "tubuh",
    opsi: ["kepala", "tubuh", "tangan"],
    benar: 1
  },
  {
    kanji: "医",
    baca: "い",
    romaji: "i",
    arti: "dokter",
    opsi: ["obat", "dokter", "pasien"],
    benar: 1
  },
  {
    kanji: "者",
    baca: "もの",
    romaji: "mono",
    arti: "orang",
    opsi: ["orang", "penyakit", "dokter"],
    benar: 0
  },
  {
    kanji: "医者",
    baca: "いしゃ",
    romaji: "isha",
    arti: "dokter",
    opsi: ["dokter", "perawat", "pasien"],
    benar: 0
  },
  {
    kanji: "薬",
    baca: "くすり",
    romaji: "kusuri",
    arti: "obat",
    opsi: ["rumah sakit", "obat", "penyakit"],
    benar: 1
  },
  {
    kanji: "院",
    baca: "いん",
    romaji: "in",
    arti: "klinik / institusi",
    opsi: ["sekolah", "klinik", "rumah"],
    benar: 1
  },
  {
    kanji: "病院",
    baca: "びょういん",
    romaji: "byouin",
    arti: "rumah sakit",
    opsi: ["apotek", "rumah sakit", "sekolah"],
    benar: 1
  },
  {
    kanji: "元気",
    baca: "げんき",
    romaji: "genki",
    arti: "sehat",
    opsi: ["lelah", "sakit", "sehat"],
    benar: 2
  },
  {
    kanji: "痛",
    baca: "いた",
    romaji: "ita",
    arti: "sakit / nyeri",
    opsi: ["nyeri", "sembuh", "sehat"],
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
