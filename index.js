let selectetRating = null;

const options = document.querySelectorAll(".circle");

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((op) => op.classList.remove("selected"));
    option.classList.add("selected");
    selectetRating = option.textContent;
  });
});
