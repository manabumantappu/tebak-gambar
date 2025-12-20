let score = 0;

function jawab(benar) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");
  const scoreText = document.getElementById("score");

  const soundBenar = document.getElementById("soundBenar");
  const soundSalah = document.getElementById("soundSalah");

  if (benar) {
    score++;
    scoreText.innerText = score;

    title.innerHTML = "⭐ BENAR!";
    text.innerHTML = `<span class="star">⭐</span><br>Hebat! Skormu bertambah 🎉`;
    soundBenar.currentTime = 0;
    soundBenar.play();
  } else {
    title.innerHTML = "😅 SALAH";
    text.innerHTML = "Tidak apa-apa, coba lagi ya 💪";
    soundSalah.currentTime = 0;
    soundSalah.play();
  }

  popup.classList.remove("hidden");
}

function tutupPopup() {
  document.getElementById("popup").classList.add("hidden");
}
