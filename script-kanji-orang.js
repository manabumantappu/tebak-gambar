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
   DATA KANJI N5 - ORANG
===================== */
const soal = [
  {
    kanji: "人",
    furigana: "ひと",
    romaji: "hito",
    arti: "orang",
    opsi: ["orang", "anak", "ayah"]
  },
  {
    kanji: "男",
    furigana: "おとこ",
    romaji: "otoko",
    arti: "laki-laki",
    opsi: ["perempuan", "laki-laki", "anak"]
  },
  {
    kanji: "女",
    furigana: "おんな",
    romaji: "onna",
    arti: "perempuan",
    opsi: ["laki-laki", "perempuan", "ibu"]
  },
  {
    kanji: "子",
    furigana: "こ",
    romaji: "ko",
    arti: "anak",
    opsi: ["anak", "ibu", "ayah"]
  },
  {
    kanji: "母",
    furigana: "はは",
    romaji: "haha",
    arti: "ibu",
    opsi: ["ayah", "ibu", "kakak"]
  },
  {
    kanji: "父",
    furigana: "ちち",
    romaji: "chichi",
    arti: "ayah",
    opsi: ["ibu", "anak", "ayah"]
  },
  {
    kanji: "友",
    furigana: "とも",
    romaji: "tomo",
    arti: "teman",
    opsi: ["keluarga", "guru", "teman"]
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
      `Selesai!<br>Skor: ${score} / ${soal.length}`;
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
    btn.onclick = () => jawab(op === s.arti);
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
  const s = soal[indexSoal];

  if (benar) {
    score++;
    document.getElementById("score").innerText = score;
    title.innerText = "⭐ BENAR!";
    playBenar();
  } else {
    title.innerText = "😅 SALAH";
    playSalah();
  }

  text.innerHTML = `
    <strong style="font-size:2rem">${s.kanji}</strong><br>
    ${s.furigana} (${s.romaji})<br>
    artinya: <b>${s.arti}</b>
  `;

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
