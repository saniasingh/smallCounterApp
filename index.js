const plus = document.getElementById("plusBtn");
const minus = document.getElementById("minusBtn");
const displayCount = document.getElementById("count");
const resetBtn = document.getElementById("reset");
const countFactor = document.getElementById("inputNumber");

// let number = 1;

plus.addEventListener("click", () => {
  //   console.log("Plus button got pressed!");
//   number++;
  const countValue = parseInt(displayCount.innerText)
  const changeByValue = parseInt(countFactor.value);
  displayCount.innerText = countValue + changeByValue;
});

minus.addEventListener("click", () => {
    const countValue = parseInt(displayCount.innerText)
    const changeByValue = parseInt(countFactor.value);
    displayCount.innerText = countValue - changeByValue;
});

resetBtn.addEventListener("click", () => {
  displayCount.innerText = 0;
});
