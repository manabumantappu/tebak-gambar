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
   ACAK OPSI JAWABAN
===================== */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* =====================
   DATA SOAL BENTUK + INFO
===================== */
const soal = [
  {
    type: "circle",
    nama: "Lingkaran",
    opsi: ["Lingkaran", "Persegi", "Segitiga"],
    info: "Lingkaran tidak memiliki sudut."
  },
  {
    type: "square",
    nama: "Persegi",
    opsi: ["Persegi", "Lingkaran", "Segitiga"],
    info: "Persegi memiliki 4 sisi sama panjang."
  },
  {
    type: "triangle",
    nama: "Segitiga",
    opsi: ["Segitiga", "Persegi", "Lingkaran"],
    info: "Segitiga memiliki 3 sisi dan 3 sudut."
  },
  {
    type: "equilateral",
    nama: "Segitiga Sama Sisi",
    opsi: ["Segitiga Sama Sisi", "Segitiga", "Persegi"],
    info: "Segitiga sama sisi memiliki 3 sisi yang sama panjang."
  },
  {
    type: "rectangle",
    nama: "Persegi Panjang",
    opsi: ["Persegi Panjang", "Persegi", "Lingkaran"],
    info: "Persegi panjang memiliki 2 sisi panjang dan 2 sisi pendek."
  },
  {
    type: "oval",
    nama: "Oval",
    opsi: ["Oval", "Lingkaran", "Segitiga"],
    info: "Oval mirip lingkaran tetapi lebih panjang."
  },
  {
    type: "diamond",
    nama: "Belah Ketupat",
    opsi: ["Belah Ketupat", "Persegi", "Segitiga"],
    info: "Belah ketupat memiliki 4 sisi sama panjang."
  },
  {
    type: "star",
    nama: "Bintang",
    opsi: ["Bintang", "Lingkaran", "Segitiga"],
    info: "Bintang memiliki sudut runcing."
  },
  {
    type: "heart",
    nama: "Hati",
    opsi: ["Hati", "Oval", "Lingkaran"],
    info: "Bentuk hati sering melambangkan cinta."
  },
  {
    type: "pentagon",
    nama: "Segi Lima",
    opsi: ["Segi Lima", "Segi Empat", "Segitiga"],
    info: "Segi lima memiliki 5 sisi."
  },
  {
    type: "hexagon",
    nama: "Segi Enam",
    opsi: ["Segi Enam", "Segi Lima", "Lingkaran"],
    info: "Segi enam memiliki 6 sisi."
  },
  {
    type: "half-circle",
    nama: "Setengah Lingkaran",
    opsi: ["Setengah Lingkaran", "Oval", "Lingkaran"],
    info: "Setengah lingkaran adalah separuh lingkaran."
  },
  {
    type: "ring",
    nama: "Cincin",
    opsi: ["Cincin", "Lingkaran", "Oval"],
    info: "Cincin adalah lingkaran yang berlubang."
  },
  {
    type: "arrow",
    nama: "Panah",
    opsi: ["Panah", "Segitiga", "Belah Ketupat"],
    info: "Panah menunjukkan arah."
  }
];

/* =====================
   RENDER BENTUK (PNG)
===================== */
function renderShape(type) {
  const box = document.getElementById("shapeBox");
  box.innerHTML = "";

  const img = document.createElement("img");
  img.style.maxWidth = "200px";
  img.style.height = "auto";

  const images = {
    circle: "images/bentuk/lingkaran.png",
    square: "images/bentuk/persegi.png",
    triangle: "images/bentuk/segitiga.png",
    equilateral: "images/bentuk/segitiga-sama-sisi.png",
    rectangle: "images/bentuk/persegi-panjang.png",
    oval: "images/bentuk/oval.png",
    diamond: "images/bentuk/belah-ketupat.png",
    star: "images/bentuk/bintang.png",
    heart: "images/bentuk/hati.png",
    pentagon: "images/bentuk/segi-lima.png",
    hexagon: "images/bentuk/segi-enam.png",
    "half-circle": "images/bentuk/setengah-lingkaran.png",
    ring: "images/bentuk/cincin.png",
    arrow: "images/bentuk/panah.png"
  };

  img.src = images[type] || "";
  img.alt = "Bentuk";

  box.appendChild(img);
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
   JAWAB + INFO
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
    text.innerHTML = info;
    playBenar();
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = info;
    playSalah();
  }

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

/* =====================
   SELESAI
===================== */
function selesaiGame() {
  let predikat =
    score >= 10 ? "🏆 PINTAR SEKALI!" :
    score >= 6 ? "🎉 HEBAT!" :
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
