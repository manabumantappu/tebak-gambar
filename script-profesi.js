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
   DATA SOAL PROFESI (PNG)
===================== */
const soal = [
  {
    gambar: "images/profesi/dokter.png",
    nama: "Dokter",
    opsi: ["Dokter", "Perawat", "Guru"],
    info: "Dokter bertugas merawat orang sakit."
  },
  {
    gambar: "images/profesi/perawat.png",
    nama: "Perawat",
    opsi: ["Perawat", "Dokter", "Apoteker"],
    info: "Perawat membantu dokter merawat pasien."
  },
  {
    gambar: "images/profesi/guru.png",
    nama: "Guru",
    opsi: ["Guru", "Dosen", "Siswa"],
    info: "Guru mengajar murid di sekolah."
  },
  {
    gambar: "images/profesi/polisi.png",
    nama: "Polisi",
    opsi: ["Polisi", "Tentara", "Satpam"],
    info: "Polisi menjaga keamanan dan ketertiban."
  },
  {
    gambar: "images/profesi/pemadam.png",
    nama: "Pemadam Kebakaran",
    opsi: ["Pemadam Kebakaran", "Polisi", "Tentara"],
    info: "Pemadam kebakaran memadamkan api."
  },
  {
    gambar: "images/profesi/tentara.png",
    nama: "Tentara",
    opsi: ["Tentara", "Polisi", "Pemadam"],
    info: "Tentara menjaga keamanan negara."
  },
  {
    gambar: "images/profesi/pilot.png",
    nama: "Pilot",
    opsi: ["Pilot", "Pramugari", "Supir"],
    info: "Pilot menerbangkan pesawat."
  },
  {
    gambar: "images/profesi/supir.png",
    nama: "Supir",
    opsi: ["Supir", "Montir", "Pilot"],
    info: "Supir mengemudikan kendaraan."
  },
  {
    gambar: "images/profesi/koki.png",
    nama: "Koki",
    opsi: ["Koki", "Pelayan", "Penjual"],
    info: "Koki memasak makanan."
  },
  {
    gambar: "images/profesi/petani.png",
    nama: "Petani",
    opsi: ["Petani", "Nelayan", "Tukang Kebun"],
    info: "Petani menanam padi dan sayuran."
  },
  {
    gambar: "images/profesi/nelayan.png",
    nama: "Nelayan",
    opsi: ["Nelayan", "Petani", "Pelaut"],
    info: "Nelayan menangkap ikan di laut."
  },
  {
    gambar: "images/profesi/montir.png",
    nama: "Montir",
    opsi: ["Montir", "Supir", "Tukang Bangunan"],
    info: "Montir memperbaiki kendaraan."
  }
];

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
  document.getElementById("gambar").src = s.gambar;
  document.getElementById("pertanyaan").innerText = "Profesi apakah ini?";

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
    score >= 9 ? "🏆 PINTAR SEKALI!" :
    score >= 6 ? "🎉 HEBAT!" :
    "💪 TERUS BERLATIH";

  document.getElementById("pertanyaan").innerHTML = `
    Quiz Profesi Selesai!<br><br>
    Skor: ${score} / ${soal.length}<br>
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
window.addEventListener("click", unlockAudio, { once: true });
