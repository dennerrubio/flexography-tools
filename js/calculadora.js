const display = document.querySelector("#calc-res");
document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.className === "calc-num") {
    addDisplay(el.value);
  }

  if (el.className === "calc-clear") {
    display.value = "";
  }

  if (el.className === "calc-erase") {
    display.value = display.value.slice(0, -1);
  }

  if (el.className === "calc-eq") {
    let calculo = eval(display.value);
    display.value = calculo;
  }
  
});

function addDisplay(msg) {
  return (display.value += msg);
}
