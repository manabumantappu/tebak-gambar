let score = 0;
let indexSoal = 0;

/* ===== AUDIO ===== */
let audioUnlocked = false;
function unlockAudio() {
  if (audioUnlocked) return;
  const a = document.getElementById("soundBenar");
  if (!a) return;
  a.play().then(() => {
    a.pause(); a.currentTime = 0; audioUnlocked = true;
  }).catch(()=>{});
}
function playBenar(){ const a=document.getElementById("soundBenar"); if(a){a.currentTime=0;a.play();}}
function playSalah(){ const a=document.getElementById("soundSalah"); if(a){a.currentTime=0;a.play();}}

function shuffleArray(arr){
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
}

/* ===== DATA SOAL PERALATAN RUMAH ===== */
const soal = [
  { gambar:"images/rumah/tv.png", nama:"Televisi", opsi:["Televisi","Radio","Kipas"], info:"Televisi digunakan untuk menonton acara." },
  { gambar:"images/rumah/kulkas.png", nama:"Kulkas", opsi:["Kulkas","Oven","Lemari"], info:"Kulkas menyimpan makanan agar tetap dingin." },
  { gambar:"images/rumah/kompor.png", nama:"Kompor", opsi:["Kompor","Setrika","Rice Cooker"], info:"Kompor digunakan untuk memasak." },
  { gambar:"images/rumah/rice-cooker.png", nama:"Rice Cooker", opsi:["Rice Cooker","Panci","Oven"], info:"Rice cooker digunakan untuk memasak nasi." },
  { gambar:"images/rumah/blender.png", nama:"Blender", opsi:["Blender","Mixer","Kipas"], info:"Blender digunakan untuk menghaluskan makanan." },
  { gambar:"images/rumah/kipas.png", nama:"Kipas Angin", opsi:["Kipas Angin","AC","Mesin Cuci"], info:"Kipas angin membuat udara sejuk." },
  { gambar:"images/rumah/ac.png", nama:"AC", opsi:["AC","Kipas","Kulkas"], info:"AC membuat ruangan menjadi dingin." },
  { gambar:"images/rumah/mesin-cuci.png", nama:"Mesin Cuci", opsi:["Mesin Cuci","Kulkas","Oven"], info:"Mesin cuci digunakan untuk mencuci pakaian." },
  { gambar:"images/rumah/sapu.png", nama:"Sapu", opsi:["Sapu","Pel","Kemoceng"], info:"Sapu digunakan untuk membersihkan lantai." },
  { gambar:"images/rumah/setrika.png", nama:"Setrika", opsi:["Setrika","Kipas","Oven"], info:"Setrika digunakan untuk merapikan pakaian." },
  { gambar:"images/rumah/lampu.png", nama:"Lampu", opsi:["Lampu","Kipas","Televisi"], info:"Lampu digunakan untuk menerangi ruangan." },
  { gambar:"images/rumah/jam.png", nama:"Jam Dinding", opsi:["Jam Dinding","Kalender","Televisi"], info:"Jam dinding menunjukkan waktu." },

  { gambar:"images/rumah/alat-makan/piring.png", nama:"Piring", opsi:["Piring","Mangkok","Gelas"], info:"Piring digunakan untuk menaruh makanan." },
{ gambar:"images/rumah/alat-makan/sendok.png", nama:"Sendok", opsi:["Sendok","Garpu","Pisau"], info:"Sendok digunakan untuk makan dan mengaduk." },
{ gambar:"images/rumah/alat-makan/garpu.png", nama:"Garpu", opsi:["Garpu","Sendok","Pisau"], info:"Garpu digunakan untuk menusuk makanan." },
{ gambar:"images/rumah/alat-makan/pisau.png", nama:"Pisau", opsi:["Pisau","Sendok","Garpu"], info:"Pisau digunakan untuk memotong makanan." },
{ gambar:"images/rumah/alat-makan/gelas.png", nama:"Gelas", opsi:["Gelas","Cangkir","Botol"], info:"Gelas digunakan untuk minum." },
{ gambar:"images/rumah/alat-makan/cangkir.png", nama:"Cangkir", opsi:["Cangkir","Gelas","Mangkok"], info:"Cangkir digunakan untuk minum teh atau kopi." },

  { gambar:"images/rumah/kamar/tempat-tidur.png", nama:"Tempat Tidur", opsi:["Tempat Tidur","Sofa","Meja"], info:"Tempat tidur digunakan untuk tidur." },
{ gambar:"images/rumah/kamar/bantal.png", nama:"Bantal", opsi:["Bantal","Guling","Selimut"], info:"Bantal digunakan untuk alas kepala." },
{ gambar:"images/rumah/kamar/selimut.png", nama:"Selimut", opsi:["Selimut","Sprei","Gorden"], info:"Selimut digunakan untuk menghangatkan tubuh." },
{ gambar:"images/rumah/kamar/lemari.png", nama:"Lemari", opsi:["Lemari","Meja","Rak"], info:"Lemari digunakan untuk menyimpan pakaian." },
{ gambar:"images/rumah/kamar/meja-belajar.png", nama:"Meja Belajar", opsi:["Meja Belajar","Meja Makan","Lemari"], info:"Meja belajar digunakan untuk belajar." },
{ gambar:"images/rumah/kamar/lampu-meja.png", nama:"Lampu Meja", opsi:["Lampu Meja","Lampu Gantung","Kipas"], info:"Lampu meja digunakan saat belajar." },

  { gambar:"images/rumah/kamar-mandi/sabun.png", nama:"Sabun", opsi:["Sabun","Sampo","Pasta Gigi"], info:"Sabun digunakan untuk membersihkan tubuh." },
{ gambar:"images/rumah/kamar-mandi/sampo.png", nama:"Sampo", opsi:["Sampo","Sabun","Pasta Gigi"], info:"Sampo digunakan untuk mencuci rambut." },
{ gambar:"images/rumah/kamar-mandi/sikat-gigi.png", nama:"Sikat Gigi", opsi:["Sikat Gigi","Sendok","Sisir"], info:"Sikat gigi digunakan untuk membersihkan gigi." },
{ gambar:"images/rumah/kamar-mandi/pasta-gigi.png", nama:"Pasta Gigi", opsi:["Pasta Gigi","Sabun","Krim"], info:"Pasta gigi digunakan saat menggosok gigi." },
{ gambar:"images/rumah/kamar-mandi/handuk.png", nama:"Handuk", opsi:["Handuk","Keset","Selimut"], info:"Handuk digunakan untuk mengeringkan tubuh." },
{ gambar:"images/rumah/kamar-mandi/gayung.png", nama:"Gayung", opsi:["Gayung","Ember","Botol"], info:"Gayung digunakan untuk mengambil air." },

{ gambar:"images/rumah/mainan/bola.png", nama:"Bola", opsi:["Bola","Balon","Kelereng"], info:"Bola digunakan untuk bermain." },
{ gambar:"images/rumah/mainan/boneka.png", nama:"Boneka", opsi:["Boneka","Robot","Mobil Mainan"], info:"Boneka adalah mainan berbentuk orang atau hewan." },
{ gambar:"images/rumah/mainan/mobil-mainan.png", nama:"Mobil Mainan", opsi:["Mobil Mainan","Motor","Truk"], info:"Mobil mainan sering dimainkan anak-anak." },
{ gambar:"images/rumah/mainan/puzzle.png", nama:"Puzzle", opsi:["Puzzle","Buku","Balok"], info:"Puzzle melatih kecerdasan anak." },
{ gambar:"images/rumah/mainan/balok.png", nama:"Balok", opsi:["Balok","Puzzle","Lego"], info:"Balok digunakan untuk menyusun bentuk." },
{ gambar:"images/rumah/mainan/lego.png", nama:"Lego", opsi:["Lego","Balok","Puzzle"], info:"Lego adalah mainan bongkar pasang." }
];

/* ===== TAMPILKAN SOAL ===== */
function tampilSoal(){
  document.getElementById("loading").style.display="none";
  if(indexSoal>=soal.length){ selesaiGame(); return; }

  const s=soal[indexSoal];
  document.getElementById("gambar").src=s.gambar;

  const area=document.getElementById("jawaban");
  area.innerHTML="";
  const opsi=[...s.opsi];
  shuffleArray(opsi);

  opsi.forEach(o=>{
    const btn=document.createElement("button");
    btn.className="btn";
    btn.innerText=o;
    btn.onclick=()=>jawab(o===s.nama);
    area.appendChild(btn);
  });
}

/* ===== JAWAB ===== */
function jawab(benar){
  unlockAudio();
  const title=document.getElementById("popupTitle");
  const text=document.getElementById("popupText");

  if(benar){
    score++;
    document.getElementById("score").innerText=score;
    title.innerHTML="⭐ BENAR!";
    playBenar();
  } else {
    title.innerHTML="😅 SALAH";
    playSalah();
  }
  text.innerHTML=soal[indexSoal].info;
  document.getElementById("popup").classList.remove("hidden");
  indexSoal++;
}

function tutupPopup(){
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

function selesaiGame(){
  document.getElementById("pertanyaan").innerHTML=`
    Quiz Selesai!<br>
    Skor: ${score} / ${soal.length}
  `;
  document.getElementById("gambar").style.display="none";
  document.getElementById("jawaban").innerHTML=
    `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
}

tampilSoal();
window.addEventListener("click", unlockAudio, { once:true });
