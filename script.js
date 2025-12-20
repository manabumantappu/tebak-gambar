function jawab(benar) {
  const soundBenar = document.getElementById("soundBenar");
  const soundSalah = document.getElementById("soundSalah");

  if (benar) {
    soundBenar.currentTime = 0;
    soundBenar.play();
    alert("🎉 BENAR! Pintar sekali!");
  } else {
    soundSalah.currentTime = 0;
    soundSalah.play();
    alert("😅 Salah, coba lagi ya!");
  }
}
