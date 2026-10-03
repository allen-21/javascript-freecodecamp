const btns = document.querySelectorAll(".emoji-btn");

function updateCount(button) {
  const countEl = button.querySelector(".count");
  const currCount = Number(countEl.textContent.split("/")[0]);

  if (currCount < 10) {
    const newCount = currCount + 1;
    countEl.textContent = `${newCount}/10`;
  }
}

happyBtn.addEventListener("click", () => {
  updateCount(happyBtn);
});

confusedBtn.addEventListener("click", () => {
  updateCount(confusedBtn);
});

sadBtn.addEventListener("click", () => {
  updateCount(sadBtn);
});

lovingBtn.addEventListener("click", () => {
  updateCount(lovingBtn);
});