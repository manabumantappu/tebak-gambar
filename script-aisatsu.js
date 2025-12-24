let score = 0;
let indexSoal = 0;

/* =====================
   AUDIO
===================== */
function playBenar() {
  const a = document.getElementById("soundBenar");
  if (a) { a.currentTime = 0; a.play().catch(()=>{}); }
}
function playSalah() {
  const a = document.getElementById("soundSalah");
  if (a) { a.currentTime = 0; a.play().catch(()=>{}); }
}

/* =====================
   DATA SOAL AISATSU
===================== */
const soal = [
  {
    tanya: "「おはようございます」artinya?",
    opsi: ["Selamat pagi", "Selamat malam", "Terima kasih"],
    benar: "Selamat pagi",
    info: "🌅 おはようございます = Selamat pagi"
  },
  {
    tanya: "「こんにちは」digunakan saat?",
    opsi: ["Pagi", "Siang", "Malam"],
    benar: "Siang",
    info: "☀️ こんにちは = Selamat siang"
  },
  {
    tanya: "「こんばんは」artinya?",
    opsi: ["Selamat malam", "Selamat siang", "Sampai jumpa"],
    benar: "Selamat malam",
    info: "🌙 こんばんは = Selamat malam"
  },
  {
    tanya: "「ありがとう」artinya?",
    opsi: ["Maaf", "Terima kasih", "Permisi"],
    benar: "Terima kasih",
    info: "🙏 ありがとう = Terima kasih"
  },
  {
    tanya: "「すみません」digunakan untuk?",
    opsi: ["Meminta maaf / permisi", "Mengucap selamat", "Berpamitan"],
    benar: "Meminta maaf / permisi",
    info: "🙇 すみません = Maaf / Permisi"
  },
  {
    tanya: "「ごめんなさい」artinya?",
    opsi: ["Terima kasih", "Maaf", "Halo"],
    benar: "Maaf",
    info: "😢 ごめんなさい = Maaf (lebih sopan)"
  },
  {
    tanya: "「さようなら」artinya?",
    opsi: ["Sampai jumpa", "Terima kasih", "Halo"],
    benar: "Sampai jumpa",
    info: "👋 さようなら = Selamat tinggal"
  },
  {
    tanya: "「いってきます」diucapkan saat?",
    opsi: ["Pulang ke rumah", "Pergi dari rumah", "Makan"],
    benar: "Pergi dari rumah",
    info: "🚪 いってきます = Saya pergi dulu"
  },
  {
    tanya: "「ただいま」diucapkan saat?",
    opsi: ["Pulang ke rumah", "Berangkat", "Tidur"],
    benar: "Pulang ke rumah",
    info: "🏠 ただいま = Saya pulang"
  },
  {
    tanya: "「おやすみなさい」artinya?",
    opsi: ["Selamat pagi", "Selamat tidur", "Selamat datang"],
    benar: "Selamat tidur",
    info: "😴 おやすみなさい = Selamat tidur"
  }
];

/* =====================
   TAMPILKAN SOAL
===================== */
function tampilSoal() {
  if (indexSoal >= soal.length) {
    document.getElementById("pertanyaan").innerHTML =
      `🎉 Selesai!<br>Skor: ${score} / ${soal.length}`;
    document.getElementById("jawaban").innerHTML =
      `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
    return;
  }

  const s = soal[indexSoal];
  document.getElementById("pertanyaan").innerText = s.tanya;
  document.getElementById("jawaban").innerHTML = "";

  s.opsi.forEach(op => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = op;
    btn.onclick = () => jawab(op === s.benar);
    document.getElementById("jawaban").appendChild(btn);
  });
}

/* =====================
   JAWAB
===================== */
function jawab(benar) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");

  if (benar) {
    score++;
    document.getElementById("score").innerText = score;
    title.innerText = "⭐ BENAR!";
    playBenar();
  } else {
    title.innerText = "😅 SALAH";
    playSalah();
  }

  text.innerText = soal[indexSoal].info;
  popup.classList.remove("hidden");
  indexSoal++;
}

function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

document.addEventListener("DOMContentLoaded", tampilSoal);
