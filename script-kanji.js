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
   DATA SOAL KANJI (DENGAN FURIGANA)
===================== */
const soal = [
  {
    kanji: "日",
    furigana: "にち",
    romaji: "nichi / hi",
    arti: "matahari / hari",
    opsi: ["bulan", "air", "matahari / hari"]
  },
  {
    kanji: "月",
    furigana: "つき",
    romaji: "tsuki",
    arti: "bulan",
    opsi: ["bulan", "matahari", "api"]
  },
  {
    kanji: "水",
    furigana: "みず",
    romaji: "mizu",
    arti: "air",
    opsi: ["api", "air", "tanah"]
  },
  {
    kanji: "火",
    furigana: "ひ",
    romaji: "hi",
    arti: "api",
    opsi: ["api", "air", "angin"]
  },
  {
    kanji: "木",
    furigana: "き",
    romaji: "ki",
    arti: "pohon",
    opsi: ["gunung", "pohon", "air"]
  },
  {
    kanji: "山",
    furigana: "やま",
    romaji: "yama",
    arti: "gunung",
    opsi: ["sungai", "gunung", "langit"]
  },
  {
    kanji: "川",
    furigana: "かわ",
    romaji: "kawa",
    arti: "sungai",
    opsi: ["laut", "danau", "sungai"]
  },
  {
    kanji: "人",
    furigana: "ひと",
    romaji: "hito",
    arti: "orang",
    opsi: ["anak", "orang", "guru"]
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
