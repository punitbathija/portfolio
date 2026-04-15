let reveal = document.getElementById("reveal");

reveal.addEventListener("click", function populateFact() {
  reveal.innerHTML = "Hello World";
  setInterval(() => {
    reveal.innerHTML = "Tap to reveal";
  }, 5000);
});


const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});
