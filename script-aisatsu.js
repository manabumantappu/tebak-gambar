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
  },
   // ===== TAMBAHAN SOAL AISATSU =====
{
  tanya: "「はじめまして」digunakan saat?",
  opsi: ["Bertemu pertama kali", "Berpisah", "Makan"],
  benar: 0,
  info: "🤝 はじめまして = Senang bertemu dengan Anda (pertama kali)"
},
{
  tanya: "「どうぞよろしく」artinya?",
  opsi: ["Tolong dijaga", "Mohon kerja samanya", "Silakan duduk"],
  benar: 1,
  info: "🙏 どうぞよろしく = Mohon kerja samanya"
},
{
  tanya: "「いただきます」diucapkan saat?",
  opsi: ["Selesai makan", "Mulai makan", "Masuk rumah"],
  benar: 1,
  info: "🍽️ いただきます = Diucapkan sebelum makan"
},
{
  tanya: "「ごちそうさまでした」diucapkan saat?",
  opsi: ["Sebelum makan", "Sesudah makan", "Pagi hari"],
  benar: 1,
  info: "😋 ごちそうさまでした = Terima kasih atas makanannya"
},
{
  tanya: "「いらっしゃいませ」biasanya diucapkan oleh?",
  opsi: ["Tamu", "Guru", "Penjual"],
  benar: 2,
  info: "🏪 いらっしゃいませ = Selamat datang (di toko/restoran)"
},
{
  tanya: "「おかえりなさい」diucapkan saat?",
  opsi: ["Pergi dari rumah", "Pulang ke rumah", "Tidur"],
  benar: 1,
  info: "🏠 おかえりなさい = Selamat datang kembali"
},
{
  tanya: "「いってらっしゃい」diucapkan saat?",
  opsi: ["Seseorang pergi", "Seseorang pulang", "Makan"],
  benar: 0,
  info: "👋 いってらっしゃい = Hati-hati di jalan"
},
{
  tanya: "「すごい！」artinya?",
  opsi: ["Biasa saja", "Hebat!", "Sedih"],
  benar: 1,
  info: "✨ すごい！ = Hebat! / Keren!"
},
{
  tanya: "「だいじょうぶ」artinya?",
  opsi: ["Tidak apa-apa", "Sakit", "Marah"],
  benar: 0,
  info: "👌 だいじょうぶ = Tidak apa-apa"
},
{
  tanya: "「おつかれさま」biasanya diucapkan saat?",
  opsi: ["Bertemu pagi", "Setelah bekerja/belajar", "Saat tidur"],
  benar: 1,
  info: "💼 おつかれさま = Terima kasih atas kerja kerasnya"
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
