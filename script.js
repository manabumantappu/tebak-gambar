let score = 0;
let indexSoal = 0;

/* =====================
   AUDIO (WEB AUDIO API)
===================== */
let audioCtx;
let soundBenar, soundSalah;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    loadSounds();
  }
}

// 🔊 GANTI DI SINI (SUARA MP3 KAMU)
async function loadSounds() {
  soundBenar = await loadSound("audio/benar.wav"); // suara benar
  soundSalah = await loadSound("audio/salah.wav"); // suara salah
}

async function loadSound(url) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  return await audioCtx.decodeAudioData(buffer);
}

function playSound(buffer) {
  if (!audioCtx || !buffer) return;
  if (audioCtx.state === "suspended") audioCtx.resume();

  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start(0);
}

/* =====================
   DATA QUIZ 8 PLANET
===================== */
const soal = [
  {
    gambar: "images/merkurius.jpg", // ← GANTI DI SINI
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Merkurius", "Mars", "Venus"],
    benar: 0,
    info: "🔥 Merkurius adalah planet terdekat dari Matahari."
  },
  {
    gambar: "images/venus.jpg", // ← GANTI DI SINI
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Bumi", "Venus", "Jupiter"],
    benar: 1,
    info: "☁️ Venus adalah planet TERPANAS dengan awan tebal."
  },
  {
    gambar: "images/bumi.jpg", // ← GANTI DI SINI
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Mars", "Bumi", "Saturnus"],
    benar: 1,
    info: "🌍 Bumi adalah satu-satunya planet yang memiliki kehidupan."
  },
  {
    gambar: "images/mars.jpg", // ← GANTI DI SINI
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Jupiter", "Mars", "Merkurius"],
    benar: 1,
    info: "🔴 Mars dikenal sebagai Planet Merah."
  },
  {
    gambar: "images/jupiter.jpg", // ← GANTI DI SINI
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Saturnus", "Jupiter", "Neptunus"],
    benar: 1,
    info: "🌀 Jupiter adalah planet terbesar di Tata Surya."
  },
  {
    gambar: "images/saturnus.jpg", // ← GANTI DI SINI
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Saturnus", "Uranus", "Jupiter"],
    benar: 0,
    info: "💍 Saturnus terkenal dengan cincin yang indah."
  },
  {
    gambar: "images/uranus.jpg", // ← GANTI DI SINI
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Neptunus", "Uranus", "Saturnus"],
    benar: 1,
    info: "🧊 Uranus berputar miring dan sangat dingin."
  },
  {
    gambar: "images/neptunus.jpg", // ← GANTI DI SINI
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Jupiter", "Uranus", "Neptunus"],
    benar: 2,
    info: "🌊 Neptunus adalah planet terjauh dan sangat dingin."
  }
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
  initAudio();

  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");
  const scoreText = document.getElementById("score");

  const infoPlanet = soal[indexSoal].info;

  if (benar) {
    score++;
    scoreText.innerText = score;
    title.innerHTML = "⭐ BENAR!";
    text.innerHTML = `🎉 Hebat!<br><br>${infoPlanet}`;
    playSound(soundBenar);
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = `💡 Info Planet:<br><br>${infoPlanet}`;
    playSound(soundSalah);
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

  if (score >= 7) {
    predikat = "🏆 PINTAR SEKALI!";
    emoji = "⭐⭐⭐";
  } else if (score >= 5) {
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
