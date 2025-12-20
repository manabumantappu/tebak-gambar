let score = 0;

function jawab(benar) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");
  const scoreText = document.getElementById("score");

  const soundBenar = document.getElementById("soundBenar");
  const soundSalah = document.getElementById("soundSalah");

  if (benar) {
    score++;
    scoreText.innerText = score;

    title.innerHTML = "⭐ BENAR!";
    text.innerHTML = `<span class="star">⭐</span><br>Hebat! Skormu bertambah 🎉`;
    soundBenar.currentTime = 0;
    soundBenar.play();
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = "Tidak apa-apa, coba lagi ya 💪";
    soundSalah.currentTime = 0;
    soundSalah.play();
  }

  popup.classList.remove("hidden");
}

function aktifkanAudio() {
  const a = document.getElementById("soundBenar");
  if (!a) return;

  a.play().then(() => {
    a.pause();
    a.currentTime = 0;
  }).catch(() => {});
}

function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
}

let score = 0;
let audioCtx;
let soundBenar, soundSalah;

/* =========================
   INIT AUDIO (WEB AUDIO API)
========================= */
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    loadSounds();
  }
}

/* LOAD SOUND */
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

/* PLAY SOUND */
function playSound(buffer) {
  if (!audioCtx || !buffer) return;

  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start(0);
}

/* =========================
   GAME LOGIC
========================= */
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
    text.innerHTML = `<span class="star">⭐</span><br>Hebat! Skormu bertambah 🎉`;
    playSound(soundBenar);
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = "Tidak apa-apa, coba lagi ya 💪";
    playSound(soundSalah);
  }

  popup.classList.remove("hidden");
}

function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
}
