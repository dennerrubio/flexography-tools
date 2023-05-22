const display = document.querySelector("#calc-res");
document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.className === "calc-num") {
    addDisplay(el.value);
    display.focus();
  }

  if (el.className === "calc-clear") {
    display.value = "";
    display.focus();
  }

  if (el.className === "calc-erase") {
    display.value = display.value.slice(0, -1);
    display.focus();
  }

  if (el.className === "calc-eq") {
    resultado();
    display.focus();
  }
});

function addDisplay(msg) {
  return (display.value += msg);
}

function resultado() {
  if (display.value === "") {
    return (display.value = "");
  }
  let calculo = eval(display.value);
  display.value = calculo;
}

document.addEventListener("keyup", function (e) {
  const displayFoco = document.activeElement === display;
  if (e.key === "Enter" && displayFoco) resultado();
  if (e.key === "0" && displayFoco) display.value += 0;
  if (e.key === "1" && displayFoco) display.value += 1;
  if (e.key === "2" && displayFoco) display.value += 2;
  if (e.key === "3" && displayFoco) display.value += 3;
  if (e.key === "4" && displayFoco) display.value += 4;
  if (e.key === "5" && displayFoco) display.value += 5;
  if (e.key === "6" && displayFoco) display.value += 6;
  if (e.key === "7" && displayFoco) display.value += 7;
  if (e.key === "8" && displayFoco) display.value += 8;
  if (e.key === "9" && displayFoco) display.value += 9;
  if (e.key === "+" && displayFoco) display.value += "+";
  if (e.key === "-" && displayFoco) display.value += "-";
  if (e.key === "*" && displayFoco) display.value += "*";
  if (e.key === "/" && displayFoco) display.value += "/";
  if (e.key === "(" && displayFoco) display.value += "(";
  if (e.key === ")" && displayFoco) display.value += ")";
  if (e.key === "," && displayFoco) display.value += ".";
  if (e.key === "." && displayFoco) display.value += ".";

  if (e.key === "Delete" && displayFoco) {
    display.value = "";
    display.focus();
  }

  if (e.key === "Backspace" && displayFoco) {
    display.value = display.value.slice(0, -1);
    display.focus();
  }
});
