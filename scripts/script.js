// elements

const buttons = document.querySelectorAll(".btn");
const textArea = document.querySelector("textarea");

const deleteBtn = document.querySelector(".delete");
const shiftBtn = document.querySelector(".shift");
const spaceBtn = document.querySelector(".space");

let chars = [];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    textArea.value += btn.innerText;

    chars = textArea.value.split("");
  });
});

deleteBtn.addEventListener("click", () => {
  chars.pop();
  textArea.value = chars.join("");
});

spaceBtn.addEventListener("click", () => {
  chars.push(" ");
  textArea.value = chars.join("");
});

shiftBtn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.toggle("upper");
  });
});
