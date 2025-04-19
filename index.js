let selectedRating = null;

const options = document.querySelectorAll(".circle");
const submitBtn = document.querySelector("button");
const mainContainer = document.querySelector(".main-container");

// rating options functionality

options.forEach((option, index) => {
  // handle mouse click
  option.addEventListener("click", () => {
    updateSelection(index);
  });

  // handle navigating with keyboard
  option.addEventListener("keydown", (e) => {
    let newIndex = index;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      newIndex = (index + 1) % options.length;
      options[newIndex].focus();
      e.preventDefault();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      newIndex = (index - 1 + options.length) % options.length;
      options[newIndex].focus();
      e.preventDefault();
    } else if (e.key === " " || e.key === "Enter") {
      updateSelection(index);
      e.preventDefault();
    }
  });
});

function updateSelection(selectedIndex) {
  options.forEach((option, index) => {
    option.classList.toggle("selected", index === selectedIndex);
    option.setAttribute("aria-checked", index === selectedIndex);
    option.setAttribute("tabindex", index === selectedIndex ? "0" : "-1");
  });

  selectedRating = options[selectedIndex].textContent;
  options[selectedIndex].focus();
}

// submit button functionality

submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    mainContainer.innerHTML = `
      <img src="images/result-card-img.svg" alt="mobile payment process" />
      <p class="result">You selected ${selectedRating} out of 5</p>
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
