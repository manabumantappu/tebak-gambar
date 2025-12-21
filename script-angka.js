let score = 0;
let indexSoal = 0;

/* =====================================================
   AUDIO (HTML AUDIO)
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
   FUNGSI ACAK OPSI JAWABAN
===================================================== */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/* =====================================================
   DATA SOAL HITUNG GAMBAR
   jumlah = jawaban benar
===================================================== */
const soal = [
  {
    gambar: "images/angka/apel-3.png",
    tanya: "🍎 Ada berapa jumlah apel di gambar ini?",
    jumlah: 3
  },
  {
    gambar: "images/angka/bola-4.png",
    tanya: "⚽ Ada berapa jumlah bola di gambar ini?",
    jumlah: 4
  },
  {
    gambar: "images/angka/ikan-2.png",
    tanya: "🐟 Ada berapa jumlah ikan di gambar ini?",
    jumlah: 2
  },
  {
    gambar: "images/angka/bintang-6.png",
    tanya: "⭐ Ada berapa jumlah bintang di gambar ini?",
    jumlah: 6
  },
  {
    gambar: "images/angka/apel-5.png",
    tanya: "🍎 Ada berapa jumlah apel di gambar ini?",
    jumlah: 5
  },
   {
  gambar: "images/angka/jeruk-4.png",
  tanya: "🍊 Ada berapa jumlah jeruk di gambar ini?",
  jumlah: 4
},
{
  gambar: "images/angka/pisang-6.png",
  tanya: "🍌 Ada berapa jumlah pisang di gambar ini?",
  jumlah: 6
},
{
  gambar: "images/angka/mobil-3.png",
  tanya: "🚗 Ada berapa jumlah mobil di gambar ini?",
  jumlah: 3
},
{
  gambar: "images/angka/balon-5.png",
  tanya: "🎈 Ada berapa jumlah balon di gambar ini?",
  jumlah: 5
},
{
  gambar: "images/angka/kue-8.png",
  tanya: "🧁 Ada berapa jumlah kue di gambar ini?",
  jumlah: 8
},
{
  gambar: "images/angka/bunga-7.png",
  tanya: "🌸 Ada berapa jumlah bunga di gambar ini?",
  jumlah: 7
},
{
  gambar: "images/angka/bola-9.png",
  tanya: "⚽ Ada berapa jumlah bola di gambar ini?",
  jumlah: 9
},
{
  gambar: "images/angka/ikan-10.png",
  tanya: "🐟 Ada berapa jumlah ikan di gambar ini?",
  jumlah: 10
},
{
  gambar: "images/angka/buku-6.png",
  tanya: "📚 Ada berapa jumlah buku di gambar ini?",
  jumlah: 6
},
{
  gambar: "images/angka/es-krim-4.png",
  tanya: "🍦 Ada berapa jumlah es krim di gambar ini?",
  jumlah: 4
},
{
  gambar: "images/angka/pohon-5.png",
  tanya: "🌳 Ada berapa jumlah pohon di gambar ini?",
  jumlah: 5
},
{
  gambar: "images/angka/bintang-9.png",
  tanya: "⭐ Ada berapa jumlah bintang di gambar ini?",
  jumlah: 9
},
{
  gambar: "images/angka/ayam-7.png",
  tanya: "🐔 Ada berapa jumlah ayam di gambar ini?",
  jumlah: 7
},
{
  gambar: "images/angka/sepatu-2.png",
  tanya: "👟 Ada berapa jumlah sepatu di gambar ini?",
  jumlah: 2
},
{
  gambar: "images/angka/pensil-8.png",
  tanya: "✏️ Ada berapa jumlah pensil di gambar ini?",
  jumlah: 8
}
];

/* =====================================================
   TAMPILKAN SOAL
===================================================== */
function tampilSoal() {
  document.getElementById("loading").style.display = "none";

  if (indexSoal >= soal.length) {
    selesaiGame();
    return;
  }

  const s = soal[indexSoal];

  document.getElementById("gambar").src = s.gambar;
  document.getElementById("pertanyaan").innerText = s.tanya;

  const areaJawaban = document.getElementById("jawaban");
  areaJawaban.innerHTML = "";

  // BUAT OPSI (BENAR + 2 SALAH)
  let opsi = [
    s.jumlah,
    s.jumlah + 1,
    Math.max(1, s.jumlah - 1)
  ];

  // ACAK OPSI
  shuffleArray(opsi);

  opsi.forEach((opsiAngka) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = opsiAngka;

    btn.onclick = () => jawab(opsiAngka === s.jumlah);

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

  if (benar) {
    score++;
    scoreText.innerText = score;
    title.innerHTML = "⭐ BENAR!";
    text.innerHTML = "Hebat! Kamu pintar menghitung 🎉";
    playBenar();
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = "Coba hitung lagi ya 👀";
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
    score >= 4 ? "🏆 PINTAR SEKALI!" :
    score >= 2 ? "🎉 HEBAT!" :
    "💪 TERUS BERLATIH";

  document.getElementById("pertanyaan").innerHTML = `
    Quiz Angka Selesai!<br><br>
    Skor: ${score} / ${soal.length}<br>
    <strong>${predikat}</strong>
  `;

  document.getElementById("gambar").style.display = "none";
  document.getElementById("jawaban").innerHTML =
    `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
}

/* =====================================================
   MULAI GAME
===================================================== */
tampilSoal();
window.addEventListener("click", unlockAudio, { once: true });
