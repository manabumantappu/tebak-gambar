/* =====================
   VISITOR COUNTER
   (Hitung per browser)
===================== */
const key = "quizTotalVisitor";
let count = localStorage.getItem(key);

if (!count) {
  count = 1;
} else {
  count = parseInt(count) + 1;
}

localStorage.setItem(key, count);
document.getElementById("visitorCount").innerText = count;

/* =====================
   SUARA KLIK MENU
===================== */
const clickSound = document.getElementById("clickSound");
const menuButtons = document.querySelectorAll(".menu-btn");

menuButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (!clickSound) return;
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
