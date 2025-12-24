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
   DATA KANJI TRANSPORTASI
===================== */
const soal = [
  {
    kanji: "車",
    baca: "くるま",
    romaji: "kuruma",
    arti: "mobil",
    opsi: ["mobil", "sepeda", "kereta"]
  },
  {
    kanji: "電車",
    baca: "でんしゃ",
    romaji: "densha",
    arti: "kereta",
    opsi: ["bus", "kereta", "mobil"]
  },
  {
    kanji: "自転車",
    baca: "じてんしゃ",
    romaji: "jitensha",
    arti: "sepeda",
    opsi: ["sepeda", "motor", "mobil"]
  },
  {
    kanji: "バス",
    baca: "ばす",
    romaji: "basu",
    arti: "bus",
    opsi: ["bus", "kereta", "taksi"]
  },
  {
    kanji: "駅",
    baca: "えき",
    romaji: "eki",
    arti: "stasiun",
    opsi: ["terminal", "bandara", "stasiun"]
  },
  {
    kanji: "飛行機",
    baca: "ひこうき",
    romaji: "hikouki",
    arti: "pesawat",
    opsi: ["kapal", "pesawat", "kereta"]
  },
  {
    kanji: "船",
    baca: "ふね",
    romaji: "fune",
    arti: "kapal",
    opsi: ["kapal", "pesawat", "bus"]
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
