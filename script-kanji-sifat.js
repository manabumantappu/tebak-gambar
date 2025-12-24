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
   DATA KANJI SIFAT N5
===================== */
const soal = [
  {
    kanji: "大",
    baca: "おおきい",
    romaji: "ookii",
    arti: "besar",
    opsi: ["besar", "kecil", "baru"]
  },
  {
    kanji: "小",
    baca: "ちいさい",
    romaji: "chiisai",
    arti: "kecil",
    opsi: ["kecil", "besar", "panjang"]
  },
  {
    kanji: "多",
    baca: "おおい",
    romaji: "ooi",
    arti: "banyak",
    opsi: ["sedikit", "banyak", "lama"]
  },
  {
    kanji: "少",
    baca: "すくない",
    romaji: "sukunai",
    arti: "sedikit",
    opsi: ["banyak", "sedikit", "mahal"]
  },
  {
    kanji: "新",
    baca: "あたらしい",
    romaji: "atarashii",
    arti: "baru",
    opsi: ["lama", "baru", "murah"]
  },
  {
    kanji: "古",
    baca: "ふるい",
    romaji: "furui",
    arti: "lama",
    opsi: ["baru", "lama", "cepat"]
  },
  {
    kanji: "高",
    baca: "たかい",
    romaji: "takai",
    arti: "tinggi / mahal",
    opsi: ["rendah", "murah", "tinggi / mahal"]
  },
  {
    kanji: "安",
    baca: "やすい",
    romaji: "yasui",
    arti: "murah",
    opsi: ["mahal", "murah", "besar"]
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
