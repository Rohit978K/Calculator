const input = document.getElementById("input");

const button = document.querySelectorAll("button");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnVal = e.target.textContent;
    if (btnVal === "AC") {
      input.innerText = "";
    } else if (btnVal === "DEL") {
      input.innerText = input.innerText.slice(0, -1);
    } else if (btnVal === "=") {
      input.innerText = eval(input.innerText);
    } else {
      input.innerText += btnVal;
    }
    input.scrollLeft = input.scrollWidth;
  });
});