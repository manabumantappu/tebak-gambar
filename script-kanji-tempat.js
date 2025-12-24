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
   DATA KANJI TEMPAT N5
===================== */
const soal = [
  {
    kanji: "学校",
    baca: "がっこう",
    romaji: "gakkou",
    arti: "sekolah",
    opsi: ["sekolah", "rumah", "toko"]
  },
  {
    kanji: "家",
    baca: "いえ",
    romaji: "ie",
    arti: "rumah",
    opsi: ["toko", "rumah", "sekolah"]
  },
  {
    kanji: "店",
    baca: "みせ",
    romaji: "mise",
    arti: "toko",
    opsi: ["kantor", "toko", "rumah"]
  },
  {
    kanji: "国",
    baca: "くに",
    romaji: "kuni",
    arti: "negara",
    opsi: ["kota", "desa", "negara"]
  },
  {
    kanji: "駅",
    baca: "えき",
    romaji: "eki",
    arti: "stasiun",
    opsi: ["terminal", "stasiun", "bandara"]
  },
  {
    kanji: "山",
    baca: "やま",
    romaji: "yama",
    arti: "gunung",
    opsi: ["laut", "gunung", "sungai"]
  },
  {
    kanji: "川",
    baca: "かわ",
    romaji: "kawa",
    arti: "sungai",
    opsi: ["danau", "sungai", "gunung"]
  },
  {
    kanji: "公園",
    baca: "こうえん",
    romaji: "kouen",
    arti: "taman",
    opsi: ["kebun", "taman", "sekolah"]
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
