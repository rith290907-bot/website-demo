const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yayy ចឹងចូលមក!";
  gif.src =
    "https://i.pinimg.com/originals/0b/61/ed/0b61ed998bc2aeb91c2bc60f786959b6.gif";
});
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect;
  const maxX = window.width - noBtnRect.width;
  const maxY = window.height - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY = "px";
});
