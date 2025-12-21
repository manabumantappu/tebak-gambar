let score = 0;
let indexSoal = 0;

/* =====================
   AUDIO (HTML AUDIO)
===================== */
let audioUnlocked = false;

function unlockAudio() {
  if (audioUnlocked) return;

  const a1 = document.getElementById("soundBenar");
  const a2 = document.getElementById("soundSalah");

  if (!a1 || !a2) return;

  a1.play().then(() => {
    a1.pause();
    a1.currentTime = 0;
    audioUnlocked = true;
  }).catch(() => {});
}

function playBenar() {
  const a = document.getElementById("soundBenar");
  if (!a) return;
  a.currentTime = 0;
  a.play();
}

function playSalah() {
  const a = document.getElementById("soundSalah");
  if (!a) return;
  a.currentTime = 0;
  a.play();
}

/* =====================
   FUNGSI ACAK OPSI
===================== */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/* =====================
   DATA SOAL ANGKA (1–15)
===================== */
const soal = [
  { angka: 1, tanya: "🔢 Angka 1 menunjukkan jumlah berapa?", opsi: ["1", "2", "3"], benar: 0, info: "1 berarti satu benda" },
  { angka: 2, tanya: "🔢 Angka 2 menunjukkan jumlah berapa?", opsi: ["1", "2", "4"], benar: 1, info: "2 berarti dua benda" },
  { angka: 3, tanya: "🔢 Angka 3 menunjukkan jumlah berapa?", opsi: ["3", "5", "2"], benar: 0, info: "3 berarti tiga benda" },
  { angka: 4, tanya: "🔢 Angka 4 menunjukkan jumlah berapa?", opsi: ["4", "3", "6"], benar: 0, info: "4 berarti empat benda" },
  { angka: 5, tanya: "🔢 Angka 5 menunjukkan jumlah berapa?", opsi: ["6", "5", "4"], benar: 1, info: "5 berarti lima benda" },
  { angka: 6, tanya: "🔢 Angka 6 menunjukkan jumlah berapa?", opsi: ["6", "8", "5"], benar: 0, info: "6 berarti enam benda" },
  { angka: 7, tanya: "🔢 Angka 7 menunjukkan jumlah berapa?", opsi: ["7", "6", "9"], benar: 0, info: "7 berarti tujuh benda" },
  { angka: 8, tanya: "🔢 Angka 8 menunjukkan jumlah berapa?", opsi: ["9", "8", "7"], benar: 1, info: "8 berarti delapan benda" },
  { angka: 9, tanya: "🔢 Angka 9 menunjukkan jumlah berapa?", opsi: ["9", "10", "8"], benar: 0, info: "9 berarti sembilan benda" },
  { angka: 10, tanya: "🔢 Angka 10 menunjukkan jumlah berapa?", opsi: ["10", "9", "8"], benar: 0, info: "10 berarti sepuluh benda" },
  { angka: 11, tanya: "🔢 Angka 11 menunjukkan jumlah berapa?", opsi: ["11", "10", "12"], benar: 0, info: "11 berarti sebelas benda" },
  { angka: 12, tanya: "🔢 Angka 12 menunjukkan jumlah berapa?", opsi: ["12", "11", "13"], benar: 0, info: "12 berarti dua belas benda" },
  { angka: 13, tanya: "🔢 Angka 13 menunjukkan jumlah berapa?", opsi: ["14", "13", "12"], benar: 1, info: "13 berarti tiga belas benda" },
  { angka: 14, tanya: "🔢 Angka 14 menunjukkan jumlah berapa?", opsi: ["14", "15", "13"], benar: 0, info: "14 berarti empat belas benda" },
  { angka: 15, tanya: "🔢 Angka 15 menunjukkan jumlah berapa?", opsi: ["16", "14", "15"], benar: 2, info: "15 berarti lima belas benda" }
];

/* =====================
   TAMPILKAN SOAL
===================== */
function tampilSoal() {
  document.getElementById("loading").style.display = "none";

  if (indexSoal >= soal.length) {
    selesaiGame();
    return;
  }

  const s = soal[indexSoal];
  document.getElementById("angka").innerText = s.angka;
  document.getElementById("pertanyaan").innerText = s.tanya;

  const areaJawaban = document.getElementById("jawaban");
  areaJawaban.innerHTML = "";

  const opsiAcak = [...s.opsi];
  shuffleArray(opsiAcak);

  opsiAcak.forEach((opsi) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = opsi;
    btn.onclick = () => jawab(opsi === s.opsi[s.benar]);
    areaJawaban.appendChild(btn);
  });
}

/* =====================
   JAWAB
===================== */
function jawab(benar) {
  unlockAudio();

  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");
  const scoreText = document.getElementById("score");

  const info = soal[indexSoal].info;

  if (benar) {
    score++;
    scoreText.innerText = score;
    title.innerHTML = "⭐ BENAR!";
    text.innerHTML = `🎉 Hebat!<br>${info}`;
    playBenar();
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = `💡 ${info}`;
    playSalah();
  }

  popup.classList.remove("hidden");
  indexSoal++;
}

/* =====================
   TUTUP POPUP → LANJUT
===================== */
function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

/* =====================
   SELESAI
===================== */
function selesaiGame() {
  let predikat =
    score >= 12 ? "🏆 PINTAR SEKALI!" :
    score >= 8 ? "🎉 HEBAT!" :
    "💪 TERUS BERLATIH";

  document.getElementById("angka").innerHTML = "🎉";
  document.getElementById("pertanyaan").innerHTML = `
    Quiz Angka Selesai!<br><br>
    Skor: ${score} / ${soal.length}<br>
    <strong>${predikat}</strong>
  `;

  document.getElementById("jawaban").innerHTML =
    `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
}

/* =====================
   MULAI GAME
===================== */
tampilSoal();
window.addEventListener("click", unlockAudio, { once: true });
