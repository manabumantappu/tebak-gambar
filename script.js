let score = 0;
let indexSoal = 0;

// ===== AUDIO (WEB AUDIO API) =====
let audioCtx;
let soundBenar, soundSalah;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    loadSounds();
  }
}

async function loadSounds() {
  soundBenar = await loadSound(
    "https://assets.mixkit.co/sfx/preview/mixkit-arcade-bonus-alert-767.mp3"
  );
  soundSalah = await loadSound(
    "https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3"
  );
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

// ===== DATA SOAL =====
const soal = [
  {
    gambar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Welding_machine.jpg",
    tanya: "Apa nama alat ini?",
    opsi: ["旋盤", "溶接機", "モーター"],
    benar: 1
  },
  {
    gambar: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Japanese_food_sushi.jpg",
    tanya: "Ini makanan apa?",
    opsi: ["ラーメン", "カレー", "すし"],
    benar: 2
  }
];

// ===== TAMPILKAN SOAL =====
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

// ===== JAWAB =====
function jawab(benar) {
  initAudio();

  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");
  const scoreText = document.getElementById("score");

  if (benar) {
    score++;
    scoreText.innerText = score;
    title.innerHTML = "⭐ BENAR!";
    text.innerHTML = "Hebat! +1 bintang 🎉";
    playSound(soundBenar);
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = "Coba lagi ya 💪";
    playSound(soundSalah);
  }

  popup.classList.remove("hidden");
  indexSoal++;
}

// ===== TUTUP POPUP → LANJUT =====
function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

// ===== SELESAI =====
function selesaiGame() {
  document.getElementById("pertanyaan").innerHTML =
    `🎉 Selesai!<br>Skor Akhir: ⭐ ${score} / ${soal.length}`;
  document.getElementById("gambar").style.display = "none";
  document.getElementById("jawaban").innerHTML =
    `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
}

// ===== MULAI GAME (INI YANG TADI KURANG) =====
tampilSoal();
