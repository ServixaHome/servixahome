// Ganesh intro auto hide
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("ganesh-intro");
    const main = document.getElementById("main-site");

    if (intro) intro.style.display = "none";
    if (main) main.style.opacity = "1";
  }, 5000);
});
