let score = 0;
let indexSoal = 0;

const soal = [
  { huruf: "あ", jawaban: "a", opsi: ["a", "i", "u"] },
  { huruf: "い", jawaban: "i", opsi: ["e", "i", "o"] },
  { huruf: "う", jawaban: "u", opsi: ["u", "a", "i"] },
  { huruf: "え", jawaban: "e", opsi: ["e", "o", "u"] },
  { huruf: "お", jawaban: "o", opsi: ["o", "a", "e"] }
];

function play(id){
  const a = document.getElementById(id);
  if(a){ a.currentTime=0; a.play().catch(()=>{}); }
}

function tampilSoal(){
  if(indexSoal >= soal.length){
    document.getElementById("jawaban").innerHTML =
      `<button class="btn" onclick="location.reload()">🔄 Main Lagi</button>`;
    return;
  }

  const s = soal[indexSoal];
  document.getElementById("huruf").innerText = s.huruf;
  document.getElementById("jawaban").innerHTML = "";

  s.opsi.forEach(o=>{
    const b=document.createElement("button");
    b.className="btn";
    b.innerText=o;
    b.onclick=()=>jawab(o===s.jawaban);
    document.getElementById("jawaban").appendChild(b);
  });
}

function jawab(benar){
  const title=document.getElementById("popupTitle");
  const text=document.getElementById("popupText");

  if(benar){
    score++;
    document.getElementById("score").innerText=score;
    title.innerText="⭐ BENAR!";
    text.innerText="Hebat!";
    play("soundBenar");
  }else{
    title.innerText="😅 SALAH";
    text.innerText="Coba lagi ya";
    play("soundSalah");
  }

  document.getElementById("popup").classList.remove("hidden");
  indexSoal++;
}

function tutupPopup(){
  document.getElementById("popup").classList.add("hidden");
  tampilSoal();
}

document.addEventListener("DOMContentLoaded", tampilSoal);
