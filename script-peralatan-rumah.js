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
  { gambar:"images/rumah/jam.png", nama:"Jam Dinding", opsi:["Jam Dinding","Kalender","Televisi"], info:"Jam dinding menunjukkan waktu." }
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
