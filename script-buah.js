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
   DATA SOAL BUAH
===================== */
const soal = [
  {
    gambar: "images/buah/apel.jpg",
    tanya: "🍎 Buah apakah ini?",
    opsi: ["Apel", "Jeruk", "Tomat"],
    benar: 0,
    info: "🍎 Apel adalah buah yang manis dan sehat."
  },
  {
    gambar: "images/buah/pisang.jpg",
    tanya: "🍌 Buah apakah ini?",
    opsi: ["Mangga", "Pisang", "Pepaya"],
    benar: 1,
    info: "🍌 Pisang kaya energi dan mudah dicerna."
  },
  {
    gambar: "images/buah/jeruk.jpg",
    tanya: "🍊 Buah apakah ini?",
    opsi: ["Jeruk", "Lemon", "Apel"],
    benar: 0,
    info: "🍊 Jeruk kaya vitamin C."
  },
  {
    gambar: "images/buah/mangga.jpg",
    tanya: "🥭 Buah apakah ini?",
    opsi: ["Pepaya", "Mangga", "Nanas"],
    benar: 1,
    info: "🥭 Mangga rasanya manis dan segar."
  },
  {
    gambar: "images/buah/anggur.jpg",
    tanya: "🍇 Buah apakah ini?",
    opsi: ["Anggur", "Blueberry", "Ceri"],
    benar: 0,
    info: "🍇 Anggur tumbuh bergerombol."
  },
  {
    gambar: "images/buah/stroberi.jpg",
    tanya: "🍓 Buah apakah ini?",
    opsi: ["Raspberry", "Ceri", "Stroberi"],
    benar: 2,
    info: "🍓 Stroberi berwarna merah dan rasanya asam-manis."
  },
  {
    gambar: "images/buah/apel.jpg",
    tanya: "🍎 Buah apakah ini?",
    opsi: ["Apel", "Jeruk", "Tomat"],
    benar: 0,
    info: "🍎 Apel adalah buah yang manis dan sehat."
  },
  {
    gambar: "images/buah/pisang.jpg",
    tanya: "🍌 Buah apakah ini?",
    opsi: ["Mangga", "Pisang", "Pepaya"],
    benar: 1,
    info: "🍌 Pisang kaya energi dan mudah dicerna."
  },
  {
    gambar: "images/buah/jeruk.jpg",
    tanya: "🍊 Buah apakah ini?",
    opsi: ["Jeruk", "Lemon", "Apel"],
    benar: 0,
    info: "🍊 Jeruk kaya vitamin C."
  },
  {
    gambar: "images/buah/mangga.jpg",
    tanya: "🥭 Buah apakah ini?",
    opsi: ["Pepaya", "Mangga", "Nanas"],
    benar: 1,
    info: "🥭 Mangga rasanya manis dan segar."
  },
  {
    gambar: "images/buah/anggur.jpg",
    tanya: "🍇 Buah apakah ini?",
    opsi: ["Anggur", "Blueberry", "Ceri"],
    benar: 0,
    info: "🍇 Anggur tumbuh bergerombol."
  },
  {
    gambar: "images/buah/stroberi.jpg",
    tanya: "🍓 Buah apakah ini?",
    opsi: ["Raspberry", "Ceri", "Stroberi"],
    benar: 2,
    info: "🍓 Stroberi berwarna merah dan rasanya asam-manis."
  },
  {
    gambar: "images/buah/semangka.jpg",
    tanya: "🍉 Buah apakah ini?",
    opsi: ["Melon", "Pepaya", "Semangka"],
    benar: 2,
    info: "🍉 Semangka banyak mengandung air."
  },
  {
    gambar: "images/buah/melon.jpg",
    tanya: "🍈 Buah apakah ini?",
    opsi: ["Melon", "Semangka", "Pir"],
    benar: 0,
    info: "🍈 Melon rasanya manis dan segar."
  },
  {
    gambar: "images/buah/nanas.jpg",
    tanya: "🍍 Buah apakah ini?",
    opsi: ["Durian", "Nanas", "Mangga"],
    benar: 1,
    info: "🍍 Nanas memiliki rasa manis dan asam."
  },
  {
    gambar: "images/buah/pir.jpg",
    tanya: "🍐 Buah apakah ini?",
    opsi: ["Apel", "Pir", "Mangga"],
    benar: 1,
    info: "🍐 Pir berbentuk seperti lonceng."
  },
  {
    gambar: "images/buah/pepaya.jpg",
    tanya: "🍈 Buah apakah ini?",
    opsi: ["Pepaya", "Melon", "Mangga"],
    benar: 0,
    info: "🍈 Pepaya baik untuk pencernaan."
  },
  {
    gambar: "images/buah/durian.jpg",
    tanya: "🥥 Buah apakah ini?",
    opsi: ["Nangka", "Durian", "Kelapa"],
    benar: 1,
    info: "🥥 Durian dikenal sebagai raja buah."
  },
  {
    gambar: "images/buah/nangka.jpg",
    tanya: "🍈 Buah apakah ini?",
    opsi: ["Cempedak", "Nangka", "Durian"],
    benar: 1,
    info: "🍈 Nangka berukuran besar dan beraroma kuat."
  },
  {
    gambar: "images/buah/kelapa.jpg",
    tanya: "🥥 Buah apakah ini?",
    opsi: ["Kelapa", "Durian", "Alpukat"],
    benar: 0,
    info: "🥥 Kelapa memiliki air yang segar."
  },
  {
    gambar: "images/buah/alpukat.jpg",
    tanya: "🥑 Buah apakah ini?",
    opsi: ["Alpukat", "Pir", "Mangga"],
    benar: 0,
    info: "🥑 Alpukat kaya lemak sehat."
  },
];

/* =====================
   TAMPILKAN SOAL
===================== */
function tampilSoal() {
  if (indexSoal >= soal.length) {
    selesaiGame();
    return;
  }

  const s = soal[indexSoal];
  document.getElementById("gambar").src = s.gambar;
  document.getElementById("pertanyaan").innerText = s.tanya;

  const areaJawaban = document.getElementById("jawaban");
  areaJawaban.innerHTML = "";

  s.opsi.forEach((opsi, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = opsi;
    btn.onclick = () => jawab(i === s.benar);
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
    text.innerHTML = `🎉 Hebat!<br><br>${info}`;
    playBenar();
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = `💡 Info:<br><br>${info}`;
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
   SELESAI + PREDIKAT
===================== */
function selesaiGame() {
  let predikat = "";
  let emoji = "";

  if (score >= 5) {
    predikat = "🏆 PINTAR SEKALI!";
    emoji = "⭐⭐⭐";
  } else if (score >= 3) {
    predikat = "🎉 HEBAT!";
    emoji = "⭐⭐";
  } else {
    predikat = "💪 PERLU LATIHAN LAGI";
    emoji = "⭐";
  }

  document.getElementById("pertanyaan").innerHTML = `
    🎉 Quiz Selesai!<br><br>
    Skor Akhir: ${score} / ${soal.length}<br>
    ${emoji}<br>
    <strong>${predikat}</strong>
  `;

  document.getElementById("gambar").style.display = "none";
  document.getElementById("jawaban").innerHTML =
    `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
}

/* =====================
   MULAI GAME
===================== */
tampilSoal();

// UNLOCK AUDIO SAAT KLIK PERTAMA
window.addEventListener("click", unlockAudio, { once: true });
