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
   DATA SOAL BENTUK (15)
===================== */
const soal = [
  { type: "circle", nama: "Lingkaran", opsi: ["Lingkaran", "Persegi", "Segitiga"] },
  { type: "square", nama: "Persegi", opsi: ["Persegi", "Lingkaran", "Segitiga"] },
  { type: "triangle", nama: "Segitiga", opsi: ["Segitiga", "Persegi", "Lingkaran"] },
  { type: "rectangle", nama: "Persegi Panjang", opsi: ["Persegi Panjang", "Persegi", "Lingkaran"] },
  { type: "oval", nama: "Oval", opsi: ["Oval", "Lingkaran", "Segitiga"] },
  { type: "diamond", nama: "Belah Ketupat", opsi: ["Belah Ketupat", "Persegi", "Segitiga"] },
  { type: "star", nama: "Bintang", opsi: ["Bintang", "Lingkaran", "Segitiga"] },
  { type: "heart", nama: "Hati", opsi: ["Hati", "Oval", "Lingkaran"] },
  { type: "pentagon", nama: "Segi Lima", opsi: ["Segi Lima", "Segi Empat", "Segitiga"] },
  { type: "hexagon", nama: "Segi Enam", opsi: ["Segi Enam", "Segi Lima", "Lingkaran"] },
  { type: "crescent", nama: "Bulan Sabit", opsi: ["Bulan Sabit", "Oval", "Lingkaran"] },
  { type: "cross", nama: "Tanda Plus", opsi: ["Tanda Plus", "Segitiga", "Persegi"] },
  { type: "trapezoid", nama: "Trapesium", opsi: ["Trapesium", "Persegi", "Segitiga"] },
  { type: "parallelogram", nama: "Jajar Genjang", opsi: ["Jajar Genjang", "Persegi", "Belah Ketupat"] },
  { type: "arrow", nama: "Panah", opsi: ["Panah", "Segitiga", "Belah Ketupat"] }
];

/* =====================
   RENDER BENTUK
===================== */
function renderShape(type) {
  const box = document.getElementById("shapeBox");
  box.innerHTML = "";
  box.style.background = "transparent";

  const el = document.createElement("div");
  el.style.width = "160px";
  el.style.height = "160px";
  el.style.background = "#42a5f5";

  switch (type) {
    case "circle":
      el.style.borderRadius = "50%";
      break;
    case "square":
      break;
    case "rectangle":
      el.style.width = "180px";
      el.style.height = "120px";
      break;
    case "oval":
      el.style.width = "180px";
      el.style.height = "120px";
      el.style.borderRadius = "50%";
      break;
    case "triangle":
      el.style.width = "0";
      el.style.height = "0";
      el.style.borderLeft = "80px solid transparent";
      el.style.borderRight = "80px solid transparent";
      el.style.borderBottom = "140px solid #42a5f5";
      el.style.background = "transparent";
      break;
    case "diamond":
      el.style.transform = "rotate(45deg)";
      break;
    case "star":
      el.innerText = "⭐";
      el.style.fontSize = "7rem";
      el.style.background = "transparent";
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      break;
    case "heart":
      el.innerText = "❤️";
      el.style.fontSize = "7rem";
      el.style.background = "transparent";
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      break;
    case "pentagon":
      el.innerText = "⬟";
      el.style.fontSize = "7rem";
      el.style.background = "transparent";
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      break;
    case "hexagon":
      el.innerText = "⬢";
      el.style.fontSize = "7rem";
      el.style.background = "transparent";
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      break;
    case "crescent":
      el.innerText = "🌙";
      el.style.fontSize = "7rem";
      el.style.background = "transparent";
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      break;
    case "cross":
      el.innerText = "➕";
      el.style.fontSize = "7rem";
      el.style.background = "transparent";
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      break;
    case "trapezoid":
      el.innerText = "⏢";
      el.style.fontSize = "7rem";
      el.style.background = "transparent";
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      break;
    case "parallelogram":
      el.innerText = "▱";
      el.style.fontSize = "7rem";
      el.style.background = "transparent";
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      break;
    case "arrow":
      el.innerText = "➡️";
      el.style.fontSize = "7rem";
      el.style.background = "transparent";
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      break;
  }

  box.appendChild(el);
}

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
  renderShape(s.type);

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
    text.innerHTML = "Hebat! Kamu mengenal bentuk 🎉";
    playBenar();
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = "Coba lagi ya 🔍";
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
    Quiz Bentuk Selesai!<br><br>
    Skor: ${score} / ${soal.length}<br>
    <strong>${predikat}</strong>
  `;

  document.getElementById("shapeBox").style.display = "none";
  document.getElementById("jawaban").innerHTML =
    `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
}

/* =====================
   MULAI GAME
===================== */
tampilSoal();
window.addEventListener("click", unlockAudio, { once: true });
