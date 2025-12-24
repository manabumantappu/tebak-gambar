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
   DATA KANJI BENDA RUMAH (N5)
===================== */
const soal = [
  {
    kanji: "家",
    baca: "いえ",
    romaji: "ie",
    arti: "rumah",
    opsi: ["rumah", "sekolah", "toko"],
    benar: 0
  },
  {
    kanji: "門",
    baca: "もん",
    romaji: "mon",
    arti: "gerbang",
    opsi: ["pintu", "gerbang", "jendela"],
    benar: 1
  },
  {
    kanji: "戸",
    baca: "と",
    romaji: "to",
    arti: "pintu",
    opsi: ["jendela", "atap", "pintu"],
    benar: 2
  },
  {
    kanji: "窓",
    baca: "まど",
    romaji: "mado",
    arti: "jendela",
    opsi: ["pintu", "jendela", "lantai"],
    benar: 1
  },
  {
    kanji: "部屋",
    baca: "へや",
    romaji: "heya",
    arti: "kamar",
    opsi: ["dapur", "kamar", "toilet"],
    benar: 1
  },
  {
    kanji: "机",
    baca: "つくえ",
    romaji: "tsukue",
    arti: "meja",
    opsi: ["kursi", "lemari", "meja"],
    benar: 2
  },
  {
    kanji: "椅子",
    baca: "いす",
    romaji: "isu",
    arti: "kursi",
    opsi: ["meja", "kursi", "kasur"],
    benar: 1
  },
  {
    kanji: "台所",
    baca: "だいどころ",
    romaji: "daidokoro",
    arti: "dapur",
    opsi: ["kamar mandi", "dapur", "ruang tamu"],
    benar: 1
  },
  {
    kanji: "風呂",
    baca: "ふろ",
    romaji: "furo",
    arti: "kamar mandi",
    opsi: ["dapur", "kamar", "kamar mandi"],
    benar: 2
  },
  {
    kanji: "電気",
    baca: "でんき",
    romaji: "denki",
    arti: "listrik / lampu",
    opsi: ["air", "lampu", "api"],
    benar: 1
  }
];

/* =====================
   TAMPILKAN SOAL
===================== */
function tampilSoal() {
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

  s.opsi.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = op;
    btn.onclick = () => jawab(i === s.benar);
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

function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

document.addEventListener("DOMContentLoaded", tampilSoal);
