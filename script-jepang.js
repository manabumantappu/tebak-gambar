let score = 0;
let indexSoal = 0;

function playBenar() {
  const a = document.getElementById("soundBenar");
  if (a) { a.currentTime = 0; a.play().catch(()=>{}); }
}
function playSalah() {
  const a = document.getElementById("soundSalah");
  if (a) { a.currentTime = 0; a.play().catch(()=>{}); }
}

const soal = [
  {
    gambar: "images/jepang/apple.png",
    jawaban: "りんご",
    opsi: ["りんご", "みかん", "バナナ"],
    info: "🍎 りんご (ringo) = apel"
  },
  {
    gambar: "images/jepang/dog.png",
    jawaban: "いぬ",
    opsi: ["ねこ", "いぬ", "とり"],
    info: "🐶 いぬ (inu) = anjing"
  },
  {
    gambar: "images/jepang/cat.png",
    jawaban: "ねこ",
    opsi: ["ねこ", "いぬ", "うま"],
    info: "🐱 ねこ (neko) = kucing"
  },
  {
    gambar: "images/jepang/car.png",
    jawaban: "くるま",
    opsi: ["でんしゃ", "くるま", "じてんしゃ"],
    info: "🚗 くるま (kuruma) = mobil"
  },
  {
    gambar: "images/jepang/tree.png",
    jawaban: "き",
    opsi: ["はな", "き", "やま"],
    info: "🌳 き (ki) = pohon"
  },
  {
    gambar: "images/jepang/sun.png",
    jawaban: "たいよう",
    opsi: ["つき", "ほし", "たいよう"],
    info: "☀️ たいよう (taiyou) = matahari"
  },
  {
    gambar: "images/jepang/moon.png",
    jawaban: "つき",
    opsi: ["たいよう", "つき", "ほし"],
    info: "🌙 つき (tsuki) = bulan"
  },
  {
    gambar: "images/jepang/rice.png",
    jawaban: "ごはん",
    opsi: ["パン", "ごはん", "めん"],
    info: "🍚 ごはん (gohan) = nasi"
  },
  {
    gambar: "images/jepang/child.png",
    jawaban: "こども",
    opsi: ["おとな", "こども", "せんせい"],
    info: "🧒 こども (kodomo) = anak"
  },
  {
    gambar: "images/jepang/house.png",
    jawaban: "いえ",
    opsi: ["がっこう", "いえ", "みせ"],
    info: "🏠 いえ (ie) = rumah"
  }
];

function tampilSoal() {
  document.getElementById("loading").style.display = "none";

  if (indexSoal >= soal.length) {
    document.getElementById("jawaban").innerHTML =
      `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
    return;
  }

  const s = soal[indexSoal];
  document.getElementById("gambar").src = s.gambar;
  document.getElementById("jawaban").innerHTML = "";

  s.opsi.forEach(op => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = op;
    btn.onclick = () => jawab(op === s.jawaban);
    document.getElementById("jawaban").appendChild(btn);
  });
}

function jawab(benar) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");

  if (benar) {
    score++;
    document.getElementById("score").innerText = score;
    title.innerText = "⭐ BENAR!";
    text.innerText = soal[indexSoal].info;
    playBenar();
  } else {
    title.innerText = "😅 SALAH";
    text.innerText = soal[indexSoal].info;
    playSalah();
  }

  popup.classList.remove("hidden");
  indexSoal++;
}

function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

document.addEventListener("DOMContentLoaded", tampilSoal);
