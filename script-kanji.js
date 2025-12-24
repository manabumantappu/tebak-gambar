let indexSoal = 0;
let benarTotal = 0;

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
   DATA TRY OUT KANJI N5
   (GABUNGAN SEMUA)
===================== */
const bankSoal = [
  // ORANG
  { kanji: "人", baca: "ひと", arti: "orang", opsi: ["orang","anak","guru"] },
  { kanji: "男", baca: "おとこ", arti: "laki-laki", opsi: ["perempuan","laki-laki","anak"] },
  { kanji: "女", baca: "おんな", arti: "perempuan", opsi: ["perempuan","ibu","anak"] },

  // ANGKA
  { kanji: "一", baca: "いち", arti: "1", opsi: ["1","2","3"] },
  { kanji: "三", baca: "さん", arti: "3", opsi: ["2","3","4"] },
  { kanji: "十", baca: "じゅう", arti: "10", opsi: ["5","10","20"] },

  // WAKTU
  { kanji: "日", baca: "ひ", arti: "hari", opsi: ["hari","bulan","tahun"] },
  { kanji: "月", baca: "つき", arti: "bulan", opsi: ["minggu","bulan","tahun"] },

  // TEMPAT
  { kanji: "学校", baca: "がっこう", arti: "sekolah", opsi: ["rumah","sekolah","toko"] },
  { kanji: "家", baca: "いえ", arti: "rumah", opsi: ["rumah","taman","stasiun"] },
  { kanji: "駅", baca: "えき", arti: "stasiun", opsi: ["bandara","stasiun","terminal"] },

  // TRANSPORTASI
  { kanji: "車", baca: "くるま", arti: "mobil", opsi: ["mobil","sepeda","bus"] },
  { kanji: "電車", baca: "でんしゃ", arti: "kereta", opsi: ["bus","kereta","mobil"] },

  // SIFAT
  { kanji: "大", baca: "おおきい", arti: "besar", opsi: ["besar","kecil","baru"] },
  { kanji: "小", baca: "ちいさい", arti: "kecil", opsi: ["besar","kecil","tinggi"] },
  { kanji: "新", baca: "あたらしい", arti: "baru", opsi: ["lama","baru","murah"] },
  { kanji: "安", baca: "やすい", arti: "murah", opsi: ["mahal","murah","tinggi"] }
];

/* =====================
   ACAK & BATASI SOAL
===================== */
const soal = bankSoal.sort(() => 0.5 - Math.random()).slice(0, 20);

document.getElementById("total").innerText = soal.length;

/* =====================
   TAMPILKAN SOAL
===================== */
function tampilSoal() {
  document.getElementById("loading").style.display = "none";

  if (indexSoal >= soal.length) {
    selesaiUjian();
    return;
  }

  const s = soal[indexSoal];
  document.getElementById("kanji").innerText = s.kanji;
  document.getElementById("nomor").innerText = indexSoal + 1;

  const area = document.getElementById("jawaban");
  area.innerHTML = "";

  s.opsi.forEach(op => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = op;
    btn.onclick = () => jawab(op === s.arti, s);
    area.appendChild(btn);
  });
}

/* =====================
   JAWAB
===================== */
function jawab(isBenar, s) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");

  if (isBenar) {
    benarTotal++;
    title.innerText = "⭐ BENAR";
    playBenar();
  } else {
    title.innerText = "❌ SALAH";
    playSalah();
  }

  text.innerHTML = `
    <strong style="font-size:2rem">${s.kanji}</strong><br>
    ${s.baca}<br>
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

/* =====================
   HASIL AKHIR
===================== */
function selesaiUjian() {
  const nilai = Math.round((benarTotal / soal.length) * 100);
  const lulus = nilai >= 70;

  document.getElementById("kanji").innerText = "🎉";
  document.getElementById("pertanyaan").innerHTML = `
    <strong>Hasil Try Out Kanji N5</strong><br><br>
    Benar: ${benarTotal} / ${soal.length}<br>
    Nilai: ${nilai}%<br>
    Status: <b>${lulus ? "✅ LULUS" : "❌ BELUM LULUS"}</b>
  `;

  document.getElementById("jawaban").innerHTML = `
    <button class="btn" onclick="location.reload()">🔄 Ulangi Try Out</button>
    <a href="kanji.html" class="btn">📚 Kembali ke Kanji</a>
  `;
}

document.addEventListener("DOMContentLoaded", tampilSoal);
