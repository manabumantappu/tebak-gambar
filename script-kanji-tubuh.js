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
   DATA KANJI ANGGOTA TUBUH (N5)
===================== */
const soal = [
  {
    kanji: "頭",
    baca: "あたま",
    romaji: "atama",
    arti: "kepala",
    opsi: ["kepala", "tangan", "kaki"],
    benar: 0
  },
  {
    kanji: "目",
    baca: "め",
    romaji: "me",
    arti: "mata",
    opsi: ["hidung", "mata", "mulut"],
    benar: 1
  },
  {
    kanji: "口",
    baca: "くち",
    romaji: "kuchi",
    arti: "mulut",
    opsi: ["mulut", "mata", "telinga"],
    benar: 0
  },
  {
    kanji: "耳",
    baca: "みみ",
    romaji: "mimi",
    arti: "telinga",
    opsi: ["mata", "telinga", "hidung"],
    benar: 1
  },
  {
    kanji: "鼻",
    baca: "はな",
    romaji: "hana",
    arti: "hidung",
    opsi: ["mulut", "hidung", "mata"],
    benar: 1
  },
  {
    kanji: "手",
    baca: "て",
    romaji: "te",
    arti: "tangan",
    opsi: ["kaki", "tangan", "lengan"],
    benar: 1
  },
  {
    kanji: "足",
    baca: "あし",
    romaji: "ashi",
    arti: "kaki",
    opsi: ["tangan", "lutut", "kaki"],
    benar: 2
  },
  {
    kanji: "体",
    baca: "からだ",
    romaji: "karada",
    arti: "tubuh",
    opsi: ["kepala", "tubuh", "perut"],
    benar: 1
  },
  {
    kanji: "心",
    baca: "こころ",
    romaji: "kokoro",
    arti: "hati / perasaan",
    opsi: ["darah", "perut", "hati / perasaan"],
    benar: 2
  },
  {
    kanji: "背",
    baca: "せ",
    romaji: "se",
    arti: "punggung",
    opsi: ["perut", "dada", "punggung"],
    benar: 2
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
