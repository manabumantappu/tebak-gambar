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
   DATA KANJI MAKANAN N5
===================== */
const soal = [
  {
    kanji: "食",
    baca: "たべる",
    romaji: "taberu",
    arti: "makan",
    opsi: ["minum", "makan", "memasak"]
  },
  {
    kanji: "水",
    baca: "みず",
    romaji: "mizu",
    arti: "air",
    opsi: ["susu", "air", "teh"]
  },
  {
    kanji: "米",
    baca: "こめ",
    romaji: "kome",
    arti: "beras",
    opsi: ["beras", "roti", "mie"]
  },
  {
    kanji: "魚",
    baca: "さかな",
    romaji: "sakana",
    arti: "ikan",
    opsi: ["ikan", "daging", "telur"]
  },
  {
    kanji: "肉",
    baca: "にく",
    romaji: "niku",
    arti: "daging",
    opsi: ["ikan", "sayur", "daging"]
  },
  {
    kanji: "野菜",
    baca: "やさい",
    romaji: "yasai",
    arti: "sayur",
    opsi: ["buah", "sayur", "nasi"]
  },
  {
    kanji: "果物",
    baca: "くだもの",
    romaji: "kudamono",
    arti: "buah",
    opsi: ["sayur", "buah", "ikan"]
  },
  {
    kanji: "パン",
    baca: "ぱん",
    romaji: "pan",
    arti: "roti",
    opsi: ["roti", "nasi", "mie"]
  },
  {
    kanji: "牛乳",
    baca: "ぎゅうにゅう",
    romaji: "gyuunyuu",
    arti: "susu",
    opsi: ["air", "teh", "susu"]
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
    <strong style="font-size:2.2rem">${s.kanji}</strong><br>
    ${s.baca} (${s.romaji})<br>
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
