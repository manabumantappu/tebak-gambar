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
   DATA SOAL KANJI DASAR
===================== */
const soal = [
  {
    kanji: "日",
    jawaban: "matahari / hari",
    opsi: ["bulan", "air", "matahari / hari"],
    info: "日 (nichi / hi) = matahari, hari"
  },
  {
    kanji: "月",
    jawaban: "bulan",
    opsi: ["bulan", "matahari", "api"],
    info: "月 (tsuki / getsu) = bulan"
  },
  {
    kanji: "水",
    jawaban: "air",
    opsi: ["api", "air", "tanah"],
    info: "水 (mizu) = air"
  },
  {
    kanji: "火",
    jawaban: "api",
    opsi: ["api", "air", "angin"],
    info: "火 (hi) = api"
  },
  {
    kanji: "木",
    jawaban: "pohon",
    opsi: ["gunung", "pohon", "air"],
    info: "木 (ki) = pohon"
  },
  {
    kanji: "山",
    jawaban: "gunung",
    opsi: ["sungai", "gunung", "langit"],
    info: "山 (yama) = gunung"
  },
  {
    kanji: "川",
    jawaban: "sungai",
    opsi: ["laut", "danau", "sungai"],
    info: "川 (kawa) = sungai"
  },
  {
    kanji: "人",
    jawaban: "orang",
    opsi: ["anak", "orang", "guru"],
    info: "人 (hito) = orang"
  },
  {
    kanji: "口",
    jawaban: "mulut",
    opsi: ["telinga", "mata", "mulut"],
    info: "口 (kuchi) = mulut"
  },
  {
    kanji: "目",
    jawaban: "mata",
    opsi: ["hidung", "mata", "mulut"],
    info: "目 (me) = mata"
  }
];

/* =====================
   TAMPILKAN SOAL
===================== */
function tampilSoal() {
  document.getElementById("loading").style.display = "none";

  if (indexSoal >= soal.length) {
    document.getElementById("kanji").innerText = "🎉";
    document.getElementById("pertanyaan").innerHTML =
      `Quiz selesai!<br>Skor: ${score} / ${soal.length}`;
    document.getElementById("jawaban").innerHTML =
      `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
    return;
  }

  const s = soal[indexSoal];
  document.getElementById("kanji").innerText = s.kanji;
  document.getElementById("jawaban").innerHTML = "";

  s.opsi.forEach(op => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = op;
    btn.onclick = () => jawab(op === s.jawaban);
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

/* =====================
   TUTUP POPUP
===================== */
function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

document.addEventListener("DOMContentLoaded", tampilSoal);
