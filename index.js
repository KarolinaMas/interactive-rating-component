let selectetRating = null;

const options = document.querySelectorAll(".circle");
const submitBtn = document.querySelector("button");
const mainContainer = document.querySelector(".main-container");

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((op) => op.classList.remove("selected"));
    option.classList.add("selected");
    selectetRating = option.textContent;
  });
});

submitBtn.addEventListener("click", () => {
  if (selectetRating) {
    mainContainer.innerHTML = `
      <img src="images/result-card-img.svg" alt="mobile payment process" />
      <p class="result">You selected ${selectetRating} out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>`;
    mainContainer.classList.add("result-container");
  } else {
    alert("please select a rating number");
  }
});
