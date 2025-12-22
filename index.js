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
/* =====================
   ANIMASI MASUK HALAMAN
===================== */
window.addEventListener("load", () => {
  const items = document.querySelectorAll(".animate");

  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 120); // muncul satu-satu
  });
});
