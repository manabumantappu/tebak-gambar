let score = 0;
let indexSoal = 0;

/* =====================================================
   AUDIO (HTML AUDIO)
   Digunakan agar suara bisa diputar setelah interaksi user
===================================================== */
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

/* =====================================================
   FUNGSI ACAK ARRAY (PENTING)
   Fungsi ini digunakan untuk mengacak posisi jawaban
   supaya jawaban benar TIDAK selalu di posisi yang sama
===================================================== */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/* =====================================================
   DATA SOAL ALPHABET A–Z
   ⚠️ DATA TIDAK DIUBAH
   Jawaban benar tetap ditentukan oleh index "benar"
===================================================== */
const soal = [
  { huruf: "A", tanya: "🔤 Huruf A untuk kata apa?", opsi: ["Apple", "Ball", "Cat"], benar: 0, info: "🍎 A untuk Apple" },
  { huruf: "B", tanya: "🔤 Huruf B untuk kata apa?", opsi: ["Dog", "Ball", "Apple"], benar: 1, info: "⚽ B untuk Ball" },
  { huruf: "C", tanya: "🔤 Huruf C untuk kata apa?", opsi: ["Cat", "Apple", "Ball"], benar: 0, info: "🐱 C untuk Cat" },
  { huruf: "D", tanya: "🔤 Huruf D untuk kata apa?", opsi: ["Duck", "Cat", "Ball"], benar: 0, info: "🦆 D untuk Duck" },
  { huruf: "E", tanya: "🔤 Huruf E untuk kata apa?", opsi: ["Elephant", "Apple", "Dog"], benar: 0, info: "🐘 E untuk Elephant" },
  { huruf: "F", tanya: "🔤 Huruf F untuk kata apa?", opsi: ["Fish", "Cat", "Ball"], benar: 0, info: "🐟 F untuk Fish" },
  { huruf: "G", tanya: "🔤 Huruf G untuk kata apa?", opsi: ["Goat", "Fish", "Elephant"], benar: 0, info: "🐐 G untuk Goat" },
  { huruf: "H", tanya: "🔤 Huruf H untuk kata apa?", opsi: ["Horse", "Duck", "Cat"], benar: 0, info: "🐴 H untuk Horse" },
  { huruf: "I", tanya: "🔤 Huruf I untuk kata apa?", opsi: ["Ice", "Apple", "Ball"], benar: 0, info: "🧊 I untuk Ice" },
  { huruf: "J", tanya: "🔤 Huruf J untuk kata apa?", opsi: ["Juice", "Apple", "Fish"], benar: 0, info: "🧃 J untuk Juice" },
  { huruf: "K", tanya: "🔤 Huruf K untuk kata apa?", opsi: ["Kite", "Cat", "Ball"], benar: 0, info: "🪁 K untuk Kite" },
  { huruf: "L", tanya: "🔤 Huruf L untuk kata apa?", opsi: ["Lion", "Dog", "Cat"], benar: 0, info: "🦁 L untuk Lion" },
  { huruf: "M", tanya: "🔤 Huruf M untuk kata apa?", opsi: ["Monkey", "Cat", "Dog"], benar: 0, info: "🐵 M untuk Monkey" },
  { huruf: "N", tanya: "🔤 Huruf N untuk kata apa?", opsi: ["Nest", "Apple", "Ball"], benar: 0, info: "🪺 N untuk Nest" },
  { huruf: "O", tanya: "🔤 Huruf O untuk kata apa?", opsi: ["Orange", "Apple", "Ball"], benar: 0, info: "🍊 O untuk Orange" },
  { huruf: "P", tanya: "🔤 Huruf P untuk kata apa?", opsi: ["Penguin", "Cat", "Dog"], benar: 0, info: "🐧 P untuk Penguin" },
  { huruf: "Q", tanya: "🔤 Huruf Q untuk kata apa?", opsi: ["Queen", "Cat", "Dog"], benar: 0, info: "👑 Q untuk Queen" },
  { huruf: "R", tanya: "🔤 Huruf R untuk kata apa?", opsi: ["Rabbit", "Cat", "Dog"], benar: 0, info: "🐰 R untuk Rabbit" },
  { huruf: "S", tanya: "🔤 Huruf S untuk kata apa?", opsi: ["Sun", "Cat", "Dog"], benar: 0, info: "☀️ S untuk Sun" },
  { huruf: "T", tanya: "🔤 Huruf T untuk kata apa?", opsi: ["Tiger", "Cat", "Dog"], benar: 0, info: "🐯 T untuk Tiger" },
  { huruf: "U", tanya: "🔤 Huruf U untuk kata apa?", opsi: ["Umbrella", "Apple", "Ball"], benar: 0, info: "☂️ U untuk Umbrella" },
  { huruf: "V", tanya: "🔤 Huruf V untuk kata apa?", opsi: ["Van", "Cat", "Dog"], benar: 0, info: "🚐 V untuk Van" },
  { huruf: "W", tanya: "🔤 Huruf W untuk kata apa?", opsi: ["Whale", "Cat", "Dog"], benar: 0, info: "🐳 W untuk Whale" },
  { huruf: "X", tanya: "🔤 Huruf X untuk kata apa?", opsi: ["Xylophone", "Cat", "Dog"], benar: 0, info: "🎵 X untuk Xylophone" },
  { huruf: "Y", tanya: "🔤 Huruf Y untuk kata apa?", opsi: ["Yoyo", "Cat", "Dog"], benar: 0, info: "🪀 Y untuk Yoyo" },
  { huruf: "Z", tanya: "🔤 Huruf Z untuk kata apa?", opsi: ["Zebra", "Cat", "Dog"], benar: 0, info: "🦓 Z untuk Zebra" }
];

/* =====================================================
   TAMPILKAN SOAL
   👉 OPSI JAWABAN DIACAK DI SINI
===================================================== */
function tampilSoal() {
  document.getElementById("loading").style.display = "none";

  if (indexSoal >= soal.length) {
    selesaiGame();
    return;
  }

  const s = soal[indexSoal];
  document.getElementById("huruf").innerText = s.huruf;
  document.getElementById("pertanyaan").innerText = s.tanya;

  const areaJawaban = document.getElementById("jawaban");
  areaJawaban.innerHTML = "";

  // 🔑 SALIN OPSI AGAR DATA ASLI TIDAK BERUBAH
  const opsiAcak = [...s.opsi];

  // 🔀 ACAK URUTAN OPSI
  shuffleArray(opsiAcak);

  opsiAcak.forEach((opsi) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = opsi;

    // ✅ CEK BERDASARKAN ISI TEKS, BUKAN POSISI
    btn.onclick = () => jawab(opsi === s.opsi[s.benar]);

    areaJawaban.appendChild(btn);
  });
}

/* =====================================================
   JAWAB
===================================================== */
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

/* =====================================================
   TUTUP POPUP → LANJUT
===================================================== */
function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

/* =====================================================
   SELESAI
===================================================== */
function selesaiGame() {
  let predikat =
    score >= 20 ? "🏆 PINTAR SEKALI!" :
    score >= 14 ? "🎉 HEBAT!" :
    "💪 TERUS BERLATIH";

  document.getElementById("huruf").innerHTML = "🎉";
  document.getElementById("pertanyaan").innerHTML = `
    Quiz Alphabet Selesai!<br><br>
    Skor: ${score} / ${soal.length}<br>
    <strong>${predikat}</strong>
  `;

  document.getElementById("jawaban").innerHTML =
    `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
}

/* =====================================================
   MULAI GAME
===================================================== */
tampilSoal();
window.addEventListener("click", unlockAudio, { once: true });
