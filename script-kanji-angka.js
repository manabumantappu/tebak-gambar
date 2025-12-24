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
   DATA KANJI ANGKA N5
===================== */
const soal = [
  { kanji: "一", baca: "いち", romaji: "ichi", arti: "1", opsi: ["1","2","3"] },
  { kanji: "二", baca: "に", romaji: "ni", arti: "2", opsi: ["2","3","4"] },
  { kanji: "三", baca: "さん", romaji: "san", arti: "3", opsi: ["1","3","5"] },
  { kanji: "四", baca: "よん", romaji: "yon", arti: "4", opsi: ["4","5","6"] },
  { kanji: "五", baca: "ご", romaji: "go", arti: "5", opsi: ["3","5","7"] },
  { kanji: "六", baca: "ろく", romaji: "roku", arti: "6", opsi: ["6","7","8"] },
  { kanji: "七", baca: "なな", romaji: "nana", arti: "7", opsi: ["7","8","9"] },
  { kanji: "八", baca: "はち", romaji: "hachi", arti: "8", opsi: ["6","8","9"] },
  { kanji: "九", baca: "きゅう", romaji: "kyuu", arti: "9", opsi: ["7","9","10"] },
  { kanji: "十", baca: "じゅう", romaji: "juu", arti: "10", opsi: ["8","10","12"] },
  { kanji: "百", baca: "ひゃく", romaji: "hyaku", arti: "100", opsi: ["10","100","1000"] },
  { kanji: "千", baca: "せん", romaji: "sen", arti: "1000", opsi: ["100","1000","10000"] }
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
