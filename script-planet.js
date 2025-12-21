let score = 0;
let indexSoal = 0;

/* =====================
   AUDIO (WEB AUDIO API) - FIX TOTAL
   (HANYA BAGIAN INI YANG DIUBAH)
===================== */
let audioCtx = null;
let soundBenar = null;
let soundSalah = null;
let audioReady = false;

// INIT + LOAD AUDIO (PASTI SELESAI SEBELUM DIPAKAI)
async function initAudio() {
  if (audioReady) return;

  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // LOAD FILE AUDIO (WAV / MP3 BEBAS)
  soundBenar = await loadSound("audio/benar.wav");
  soundSalah = await loadSound("audio/salah.wav");

  audioReady = true;
}

// LOAD 1 FILE AUDIO
async function loadSound(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return await audioCtx.decodeAudioData(arrayBuffer);
}

// MAIN AUDIO PLAYER
function playSound(buffer) {
  if (!audioReady || !buffer) return;

  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start(0);
}

/* =====================
   DATA QUIZ 8 PLANET
   (TIDAK DIUBAH)
===================== */
const soal = [
  {
    gambar: "images/merkurius.jpg",
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Merkurius", "Mars", "Venus"],
    benar: 0,
    info: "🔥 Merkurius adalah planet terdekat dari Matahari."
  },
  {
    gambar: "images/venus.jpg",
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Bumi", "Venus", "Jupiter"],
    benar: 1,
    info: "☁️ Venus adalah planet TERPANAS dengan awan tebal."
  },
  {
    gambar: "images/bumi.jpg",
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Mars", "Bumi", "Saturnus"],
    benar: 1,
    info: "🌍 Bumi adalah satu-satunya planet yang memiliki kehidupan."
  },
  {
    gambar: "images/mars.jpg",
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Jupiter", "Mars", "Merkurius"],
    benar: 1,
    info: "🔴 Mars dikenal sebagai Planet Merah."
  },
  {
    gambar: "images/jupiter.jpg",
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Saturnus", "Jupiter", "Neptunus"],
    benar: 1,
    info: "🌀 Jupiter adalah planet terbesar di Tata Surya."
  },
  {
    gambar: "images/saturnus.jpg",
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Saturnus", "Uranus", "Jupiter"],
    benar: 0,
    info: "💍 Saturnus terkenal dengan cincin yang indah."
  },
  {
    gambar: "images/uranus.jpg",
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Neptunus", "Uranus", "Saturnus"],
    benar: 1,
    info: "🧊 Uranus berputar miring dan sangat dingin."
  },
  {
    gambar: "images/neptunus.jpg",
    tanya: "🪐 Planet apakah ini?",
    opsi: ["Jupiter", "Uranus", "Neptunus"],
    benar: 2,
    info: "🌊 Neptunus adalah planet terjauh dan sangat dingin."
  },
   {
  gambar: "images/ceres.jpg", // ← ganti gambar kamu
  tanya: "🪐 Benda langit apakah ini?",
  opsi: ["Ceres", "Mars", "Pluto"],
  benar: 0,
  info: "🌑 Ceres adalah planet kerdil terbesar di sabuk asteroid."
},
   {
  gambar: "images/pluto.jpg",
  tanya: "🪐 Benda langit apakah ini?",
  opsi: ["Neptunus", "Pluto", "Makemake"],
  benar: 1,
  info: "❄️ Pluto adalah planet kerdil yang sangat dingin di tepi Tata Surya."
},
{
  gambar: "images/haumea.jpg",
  tanya: "🪐 Benda langit apakah ini?",
  opsi: ["Haumea", "Makemake", "Gonggong"],
  benar: 0,
  info: "🥚 Haumea berbentuk lonjong karena berputar sangat cepat."
},
   {
  gambar: "images/makemake.jpg",
  tanya: "🪐 Benda langit apakah ini?",
  opsi: ["Pluto", "Makemake", "Eris"],
  benar: 1,
  info: "🧊 Makemake adalah planet kerdil es di Sabuk Kuiper."
},
{
  gambar: "images/gonggong.jpg",
  tanya: "🪐 Benda langit apakah ini?",
  opsi: ["Eris", "Gonggong", "Sedna"],
  benar: 1,
  info: "🌌 Gonggong adalah planet kerdil jauh dengan orbit sangat panjang."
},
{
  gambar: "images/milkyway.jpg",
  tanya: "🌌 Ini adalah apa?",
  opsi: ["Nebula", "Galaksi Bima Sakti", "Planet"],
  benar: 1,
  info: "🌠 Bima Sakti adalah galaksi tempat Tata Surya kita berada."
},
{
  gambar: "images/andromeda.jpg",
  tanya: "🌌 Ini adalah apa?",
  opsi: ["Galaksi Andromeda", "Bintang", "Nebula"],
  benar: 0,
  info: "🚀 Galaksi Andromeda adalah galaksi besar terdekat dengan Bima Sakti."
},
   {
  gambar: "images/bulan.jpg",
  tanya: "🌕 Benda langit apakah ini?",
  opsi: ["Bulan", "Planet", "Bintang"],
  benar: 0,
  info: "🌕 Bulan adalah satelit alami Bumi."
},

{
  gambar: "images/io.jpg",
  tanya: "🟡 Benda langit apakah ini?",
  opsi: ["Io", "Bulan", "Mars"],
  benar: 0,
  info: "🌋 Io adalah bulan Jupiter dengan banyak gunung berapi aktif."
},
{
  gambar: "images/meteor.jpg",
  tanya: "☄️ Benda langit apakah ini?",
  opsi: ["Meteor", "Komet", "Planet"],
  benar: 0,
  info: "☄️ Meteor adalah batu angkasa yang terbakar saat masuk atmosfer Bumi."
},
{
  gambar: "images/matahari.jpg",
  tanya: "☀️ Benda langit apakah ini?",
  opsi: ["Planet", "Bulan", "Matahari"],
  benar: 2,
  info: "☀️ Matahari adalah bintang pusat Tata Surya."
},
{
  gambar: "images/komet.jpg",
  tanya: "☄️ Benda langit apakah ini?",
  opsi: ["Meteor", "Komet", "Asteroid"],
  benar: 1,
  info: "☄️ Komet adalah benda langit es yang memiliki ekor saat mendekati Matahari."
},
{
  gambar: "images/asteroid.jpg",
  tanya: "🪨 Benda langit apakah ini?",
  opsi: ["Asteroid", "Meteor", "Komet"],
  benar: 0,
  info: "🪨 Asteroid adalah batu angkasa yang mengorbit Matahari."
},
{
  gambar: "images/nebula.jpg",
  tanya: "🌫️ Ini adalah apa?",
  opsi: ["Nebula", "Galaksi", "Planet"],
  benar: 0,
  info: "🌫️ Nebula adalah awan gas dan debu tempat lahirnya bintang."
},
{
  gambar: "images/bintang.jpg",
  tanya: "🌟 Benda langit apakah ini?",
  opsi: ["Bintang", "Planet", "Bulan"],
  benar: 0,
  info: "🌟 Bintang memancarkan cahaya sendiri, berbeda dengan planet."
},
{
  gambar: "images/satelit.jpg",
  tanya: "🛰️ Benda apakah ini?",
  opsi: ["Satelit Buatan", "Planet", "Meteor"],
  benar: 0,
  info: "🛰️ Satelit buatan dibuat manusia untuk komunikasi dan pengamatan."
},
{
  gambar: "images/blackhole.jpg",
  tanya: "🌌 Ini adalah apa?",
  opsi: ["Lubang Hitam", "Planet", "Bintang"],
  benar: 0,
  info: "🕳️ Lubang hitam memiliki gravitasi sangat kuat."
},

];

/* =====================
   TAMPILKAN SOAL
   (TIDAK DIUBAH)
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
   (HANYA DITAMBAH async + await)
===================== */
async function jawab(benar) {
  await initAudio(); // 🔥 KUNCI: audio siap SEBELUM diputar

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
   (TIDAK DIUBAH)
===================== */
function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

/* =====================
   SELESAI + PREDIKAT
   (TIDAK DIUBAH)
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
   (TIDAK DIUBAH)
===================== */
tampilSoal();

/* =====================
   PRELOAD AUDIO SAAT KLIK PERTAMA
   (TAMBAHAN AMAN)
===================== */
window.addEventListener("click", async () => {
  await initAudio();
}, { once: true });
