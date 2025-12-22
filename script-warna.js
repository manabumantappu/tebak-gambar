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
   ACAK OPSI
===================== */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* =====================
   DATA SOAL WARNA (15)
===================== */
const soal = [
  { warna: "#e53935", nama: "Merah", opsi: ["Merah", "Biru", "Kuning"] },
  { warna: "#1e88e5", nama: "Biru", opsi: ["Hijau", "Biru", "Ungu"] },
  { warna: "#43a047", nama: "Hijau", opsi: ["Hijau", "Kuning", "Merah"] },
  { warna: "#fdd835", nama: "Kuning", opsi: ["Oranye", "Kuning", "Putih"] },
  { warna: "#fb8c00", nama: "Oranye", opsi: ["Merah", "Oranye", "Coklat"] },
  { warna: "#8e24aa", nama: "Ungu", opsi: ["Ungu", "Biru", "Hitam"] },
  { warna: "#6d4c41", nama: "Coklat", opsi: ["Coklat", "Hitam", "Merah"] },
  { warna: "#000000", nama: "Hitam", opsi: ["Hitam", "Abu-abu", "Biru"] },
  { warna: "#ffffff", nama: "Putih", opsi: ["Putih", "Kuning", "Abu-abu"] },
  { warna: "#9e9e9e", nama: "Abu-abu", opsi: ["Abu-abu", "Putih", "Hitam"] },
  { warna: "#00acc1", nama: "Toska", opsi: ["Biru", "Toska", "Hijau"] },
  { warna: "#ec407a", nama: "Pink", opsi: ["Pink", "Merah", "Ungu"] },
  { warna: "#5e35b1", nama: "Indigo", opsi: ["Ungu", "Indigo", "Biru"] },
  { warna: "#c0ca33", nama: "Lime", opsi: ["Hijau", "Kuning", "Lime"] },
  { warna: "#795548", nama: "Coklat Tua", opsi: ["Coklat", "Coklat Tua", "Hitam"] }
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
  document.getElementById("warnaBox").style.background = s.warna;
  document.getElementById("pertanyaan").innerText = "Warna apakah ini?";

  const areaJawaban = document.getElementById("jawaban");
  areaJawaban.innerHTML = "";

  const opsiAcak = [...s.opsi];
  shuffleArray(opsiAcak);

  opsiAcak.forEach((opsi) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = opsi;
    btn.onclick = () => jawab(opsi === s.nama);
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

  if (benar) {
    score++;
    scoreText.innerText = score;
    title.innerHTML = "⭐ BENAR!";
    text.innerHTML = "Hebat! Kamu mengenal warna 🎉";
    playBenar();
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = "Coba lagi ya 🌈";
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

  document.getElementById("pertanyaan").innerHTML = `
    Quiz Warna Selesai!<br><br>
    Skor: ${score} / ${soal.length}<br>
    <strong>${predikat}</strong>
  `;

  document.getElementById("warnaBox").style.display = "none";
  document.getElementById("jawaban").innerHTML =
    `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
}

/* =====================
   MULAI GAME
===================== */
tampilSoal();
window.addEventListener("click", unlockAudio, { once: true });
