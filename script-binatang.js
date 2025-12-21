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
   DATA SOAL BINATANG
===================== */
const soal = [
  {
    gambar: "images/binatang/harimau.jpg",
    tanya: "🐯 Binatang apakah ini?",
    opsi: ["Singa", "Harimau", "Macan Tutul"],
    benar: 1,
    info: "🐯 Harimau adalah kucing besar pemakan daging."
  },
  {
    gambar: "images/binatang/gajah.jpg",
    tanya: "🐘 Binatang apakah ini?",
    opsi: ["Badak", "Gajah", "Kuda Nil"],
    benar: 1,
    info: "🐘 Gajah adalah hewan darat terbesar di dunia."
  },
  {
    gambar: "images/binatang/singa.jpg",
    tanya: "🦁 Binatang apakah ini?",
    opsi: ["Singa", "Harimau", "Serigala"],
    benar: 0,
    info: "🦁 Singa dikenal sebagai raja hutan."
  },
  {
    gambar: "images/binatang/jerapah.jpg",
    tanya: "🦒 Binatang apakah ini?",
    opsi: ["Kuda", "Jerapah", "Zebra"],
    benar: 1,
    info: "🦒 Jerapah memiliki leher paling panjang."
  },
  {
    gambar: "images/binatang/panda.jpg",
    tanya: "🐼 Binatang apakah ini?",
    opsi: ["Beruang", "Panda", "Koala"],
    benar: 1,
    info: "🐼 Panda suka makan bambu."
  },
  {
    gambar: "images/binatang/elang.jpg",
    tanya: "🦅 Binatang apakah ini?",
    opsi: ["Elang", "Burung Hantu", "Rajawali"],
    benar: 0,
    info: "🦅 Elang adalah burung pemangsa."
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
