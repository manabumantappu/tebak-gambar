function jawab(benar) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");

  const soundBenar = document.getElementById("soundBenar");
  const soundSalah = document.getElementById("soundSalah");

  if (benar) {
    title.innerHTML = "🎉 BENAR!";
    text.innerHTML = "Hebat sekali! Kamu pintar 🌟";
    soundBenar.currentTime = 0;
    soundBenar.play();
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = "Coba lagi ya, kamu pasti bisa!";
    soundSalah.currentTime = 0;
    soundSalah.play();
  }

  popup.classList.remove("hidden");
}

function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
}
