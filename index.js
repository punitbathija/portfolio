let reveal = document.getElementById("reveal");

reveal.addEventListener("click", function populateFact() {
  reveal.innerHTML = "Hello World";
  setInterval(() => {
    reveal.innerHTML = "Tap to reveal";
  }, 5000);
});
