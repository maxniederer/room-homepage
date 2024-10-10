const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");

let sliderText = document.querySelector(".slider-text-holder").children;
let sliderImg = document.querySelector(".slider-img-holder").children;

let curr = 0;
let prev = 2;
let maxStates = 3;

leftButton.addEventListener("click", updateSlider);
rightButton.addEventListener("click", updateSlider);

function updateSlider() {
  prev = curr;
  curr = strictMod(curr + 1, maxStates);

  sliderText[prev].classList.add("hidden");
  sliderImg[prev].classList.add("hidden");
  sliderText[curr].classList.remove("hidden");
  sliderImg[curr].classList.remove("hidden");
}

// forces positive mod value
function strictMod(i, max) {
  return ((i % max) + max) % max;
}
