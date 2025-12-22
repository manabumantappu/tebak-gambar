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
   DATA SOAL NEGARA & BENDERA
===================== */
const soal = [
  {
    gambar: "images/bendera/indonesia.png",
    nama: "Indonesia",
    opsi: ["Indonesia", "Polandia", "Monako"],
    info: "Indonesia memiliki bendera Merah Putih."
  },
  {
    gambar: "images/bendera/jepang.png",
    nama: "Jepang",
    opsi: ["Jepang", "China", "Korea Selatan"],
    info: "Bendera Jepang disebut Hinomaru."
  },
  {
    gambar: "images/bendera/amerika.png",
    nama: "Amerika Serikat",
    opsi: ["Amerika Serikat", "Inggris", "Australia"],
    info: "Bendera Amerika memiliki bintang dan garis."
  },
  {
    gambar: "images/bendera/inggris.png",
    nama: "Inggris",
    opsi: ["Inggris", "Prancis", "Belanda"],
    info: "Bendera Inggris disebut Union Jack."
  },
  {
    gambar: "images/bendera/prancis.png",
    nama: "Prancis",
    opsi: ["Prancis", "Italia", "Belanda"],
    info: "Bendera Prancis berwarna biru, putih, dan merah."
  },
  {
    gambar: "images/bendera/jerman.png",
    nama: "Jerman",
    opsi: ["Jerman", "Belgia", "Austria"],
    info: "Bendera Jerman berwarna hitam, merah, dan kuning."
  },
  {
    gambar: "images/bendera/china.png",
    nama: "China",
    opsi: ["China", "Vietnam", "Korea Utara"],
    info: "Bendera China memiliki lima bintang."
  },
  {
    gambar: "images/bendera/australia.png",
    nama: "Australia",
    opsi: ["Australia", "Selandia Baru", "Inggris"],
    info: "Bendera Australia memiliki gambar bintang."
  },
  {
    gambar: "images/bendera/kanada.png",
    nama: "Kanada",
    opsi: ["Kanada", "Amerika Serikat", "Austria"],
    info: "Bendera Kanada memiliki daun maple."
  },
  {
    gambar: "images/bendera/brazil.png",
    nama: "Brasil",
    opsi: ["Brasil", "Argentina", "Kolombia"],
    info: "Bendera Brasil berwarna hijau dan kuning."
  },
{
  gambar: "images/bendera/korea-selatan.png",
  nama: "Korea Selatan",
  opsi: ["Korea Selatan", "Jepang", "China"],
  info: "Bendera Korea Selatan disebut Taegeukgi."
},
{
  gambar: "images/bendera/vietnam.png",
  nama: "Vietnam",
  opsi: ["Vietnam", "China", "Thailand"],
  info: "Bendera Vietnam berwarna merah dengan bintang kuning."
},
{
  gambar: "images/bendera/thailand.png",
  nama: "Thailand",
  opsi: ["Thailand", "Laos", "Kamboja"],
  info: "Bendera Thailand memiliki lima garis warna."
},
{
  gambar: "images/bendera/singapura.png",
  nama: "Singapura",
  opsi: ["Singapura", "Indonesia", "Malaysia"],
  info: "Bendera Singapura memiliki bulan sabit dan bintang."
},
{
  gambar: "images/bendera/malaysia.png",
  nama: "Malaysia",
  opsi: ["Malaysia", "Amerika Serikat", "Thailand"],
  info: "Bendera Malaysia memiliki garis merah putih dan bulan sabit."
},
{
  gambar: "images/bendera/filipina.png",
  nama: "Filipina",
  opsi: ["Filipina", "Chile", "Ceko"],
  info: "Bendera Filipina memiliki segitiga putih dengan matahari."
},
{
  gambar: "images/bendera/belanda.png",
  nama: "Belanda",
  opsi: ["Belanda", "Prancis", "Luxembourg"],
  info: "Bendera Belanda berwarna merah, putih, dan biru."
},
{
  gambar: "images/bendera/italia.png",
  nama: "Italia",
  opsi: ["Italia", "Prancis", "Irlandia"],
  info: "Bendera Italia berwarna hijau, putih, dan merah."
},
{
  gambar: "images/bendera/spanyol.png",
  nama: "Spanyol",
  opsi: ["Spanyol", "Portugal", "Meksiko"],
  info: "Bendera Spanyol berwarna merah dan kuning."
},
{
  gambar: "images/bendera/portugal.png",
  nama: "Portugal",
  opsi: ["Portugal", "Spanyol", "Brasil"],
  info: "Bendera Portugal berwarna hijau dan merah."
},
{
  gambar: "images/bendera/meksiko.png",
  nama: "Meksiko",
  opsi: ["Meksiko", "Brasil", "Kolombia"],
  info: "Bendera Meksiko memiliki gambar elang di tengah."
},
{
  gambar: "images/bendera/argentina.png",
  nama: "Argentina",
  opsi: ["Argentina", "Uruguay", "Brasil"],
  info: "Bendera Argentina berwarna biru muda dan putih."
},
{
  gambar: "images/bendera/kolombia.png",
  nama: "Kolombia",
  opsi: ["Kolombia", "Venezuela", "Ekuador"],
  info: "Bendera Kolombia berwarna kuning, biru, dan merah."
},
{
  gambar: "images/bendera/mesir.png",
  nama: "Mesir",
  opsi: ["Mesir", "Irak", "Suriah"],
  info: "Bendera Mesir berwarna merah, putih, dan hitam."
},
{
  gambar: "images/bendera/arab-saudi.png",
  nama: "Arab Saudi",
  opsi: ["Arab Saudi", "Pakistan", "Turki"],
  info: "Bendera Arab Saudi berwarna hijau dengan tulisan Arab."
},
{
  gambar: "images/bendera/turki.png",
  nama: "Turki",
  opsi: ["Turki", "Pakistan", "Tunisia"],
  info: "Bendera Turki memiliki bulan sabit dan bintang."
},
{
  gambar: "images/bendera/rusia.png",
  nama: "Rusia",
  opsi: ["Rusia", "Belanda", "Prancis"],
  info: "Bendera Rusia berwarna putih, biru, dan merah."
},
{
  gambar: "images/bendera/india.png",
  nama: "India",
  opsi: ["India", "Irlandia", "Niger"],
  info: "Bendera India memiliki roda biru di tengah."
},
{
  gambar: "images/bendera/pakistan.png",
  nama: "Pakistan",
  opsi: ["Pakistan", "Turki", "Arab Saudi"],
  info: "Bendera Pakistan berwarna hijau dengan bulan sabit."
},
{
  gambar: "images/bendera/afrika-selatan.png",
  nama: "Afrika Selatan",
  opsi: ["Afrika Selatan", "Kenya", "Zimbabwe"],
  info: "Bendera Afrika Selatan memiliki banyak warna."
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
  document.getElementById("pertanyaan").innerText = "Bendera negara apakah ini?";

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
    score >= 7 ? "🏆 PINTAR SEKALI!" :
    score >= 4 ? "🎉 HEBAT!" :
    "💪 TERUS BERLATIH";

  document.getElementById("pertanyaan").innerHTML = `
    Quiz Negara & Bendera Selesai!<br><br>
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
