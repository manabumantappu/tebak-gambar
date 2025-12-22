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
   DATA SOAL KENDARAAN (SEMUA PNG)
===================== */
const soal = [
  {
    gambar: "images/kendaraan/darat/mobil.png",
    nama: "Mobil",
    opsi: ["Mobil", "Motor", "Bus"],
    info: "Mobil adalah kendaraan darat beroda empat."
  },
  {
    gambar: "images/kendaraan/darat/motor.png",
    nama: "Motor",
    opsi: ["Motor", "Sepeda", "Mobil"],
    info: "Motor adalah kendaraan roda dua bermesin."
  },
  {
    gambar: "images/kendaraan/darat/bus.png",
    nama: "Bus",
    opsi: ["Bus", "Truk", "Mobil"],
    info: "Bus digunakan untuk mengangkut banyak penumpang."
  },
  {
    gambar: "images/kendaraan/darat/truk.png",
    nama: "Truk",
    opsi: ["Truk", "Bus", "Mobil"],
    info: "Truk digunakan untuk mengangkut barang."
  },
  {
    gambar: "images/kendaraan/darat/sepeda.png",
    nama: "Sepeda",
    opsi: ["Sepeda", "Motor", "Mobil"],
    info: "Sepeda dikayuh dengan tenaga manusia."
  },
  {
    gambar: "images/kendaraan/darat/kereta.png",
    nama: "Kereta Api",
    opsi: ["Kereta Api", "Bus", "Truk"],
    info: "Kereta api berjalan di atas rel."
  },
  {
    gambar: "images/kendaraan/laut/kapal.png",
    nama: "Kapal",
    opsi: ["Kapal", "Perahu", "Pesawat"],
    info: "Kapal digunakan untuk berlayar di laut."
  },
  {
    gambar: "images/kendaraan/laut/perahu.png",
    nama: "Perahu",
    opsi: ["Perahu", "Kapal", "Bus"],
    info: "Perahu digunakan di sungai atau laut."
  },
  {
    gambar: "images/kendaraan/laut/kapal-selam.png",
    nama: "Kapal Selam",
    opsi: ["Kapal Selam", "Kapal", "Perahu"],
    info: "Kapal selam dapat menyelam ke bawah laut."
  },
  {
    gambar: "images/kendaraan/udara/pesawat.png",
    nama: "Pesawat",
    opsi: ["Pesawat", "Helikopter", "Roket"],
    info: "Pesawat terbang di udara."
  },
  {
    gambar: "images/kendaraan/udara/helikopter.png",
    nama: "Helikopter",
    opsi: ["Helikopter", "Pesawat", "Drone"],
    info: "Helikopter bisa terbang vertikal."
  },
  {
    gambar: "images/kendaraan/udara/balon-udara.png",
    nama: "Balon Udara",
    opsi: ["Balon Udara", "Pesawat", "Helikopter"],
    info: "Balon udara terbang dengan udara panas."
  },
  {
    gambar: "images/kendaraan/udara/roket.png",
    nama: "Roket",
    opsi: ["Roket", "Pesawat", "Helikopter"],
    info: "Roket digunakan untuk ke luar angkasa."
  },
  {
    gambar: "images/kendaraan/udara/drone.png",
    nama: "Drone",
    opsi: ["Drone", "Helikopter", "Pesawat"],
    info: "Drone dikendalikan dari jarak jauh."
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
  document.getElementById("pertanyaan").innerText = "Kendaraan apakah ini?";

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
    Quiz Kendaraan Selesai!<br><br>
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
