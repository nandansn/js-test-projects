let textEl = document.querySelector("input#name");

textEl.addEventListener("keyup", function (e) {
  e.preventDefault();
  let pEl = document.querySelector("p#display");
  pEl.textContent = e.target.value;
});
