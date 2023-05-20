const container2 = document.querySelector("#cel-resultado2");

const largura = document.querySelector("#orc-larg");
const altura = document.querySelector("#orc-alt");
const adicional = document.querySelector("#orc-add");
const fator = document.querySelector("#orc-fator");
const jogos = document.querySelector("#orc-jogos");
const enviar3 = document.querySelector("#orc-enviar");

const valor = document.querySelector("#orc-valor");
const enviar2 = document.querySelector("#orc-enviar2");

const excluirUltimo = document.querySelector("#orc-del-last");
const excluirTudo = document.querySelector("#orc-del");
const finalizar = document.querySelector("#orc-finalizar");
const containerTexto = document.querySelector("#textoarray");
let arrayNum = [];
let arrayTexto = [];

enviar2.addEventListener("click", function (e) {
  enviarOrc2();
});

enviar3.addEventListener("click", function (e) {
  enviarOrc1();
});

document.addEventListener("keyup", function (e) {
  const larguraFoco = document.activeElement === largura;
  const alturaFoco = document.activeElement === altura;
  const extraFoco = document.activeElement === adicional;
  const jogosFoco = document.activeElement === jogos;
  const valorFoco = document.activeElement === valor;
  if (e.key === "Enter") {
    if (larguraFoco || alturaFoco || extraFoco || jogosFoco) {
      enviarOrc1();
    }
    if (valorFoco) {
      enviarOrc2();
    }
  }
});

excluirUltimo.addEventListener("click", function (e) {
  arrayNum.pop();
  arrayTexto.pop();
  showValor();
});

excluirTudo.addEventListener("click", function (e) {
  arrayNum = [];
  arrayTexto = [];
  showValor();
});

finalizar.addEventListener("click", function (e) {
  let total = 0;
  for (var i in arrayNum) {
    total += Number(arrayNum[i]);
  }
  arrayNum = [];
  arrayTexto = [];
  showValor();
  if (total === 0) {
    container2.innerHTML = "";
  } else {
    criarTexto2(`O orçamento final ficou em R$${total.toFixed(2)} reais.`, 1);
  }
});

function enviarOrc1() {
  container2.innerHTML = "";
  if (
    largura.value === "" ||
    largura.value <= 0 ||
    altura.value === "" ||
    altura.value <= 0 ||
    adicional.value < 0 ||
    jogos.value === "" ||
    jogos.value <= 0
  ) {
    criarTexto2(
      `ERRO: Preencha todos os campos com algum valor maior que zero.`,
      2
    );
  } else {
    const resultado = calculoOrcamento();
    addValor(Number(resultado));
    largura.value = "";
    altura.value = "";
    adicional.value = "";
    jogos.value = "";
    largura.focus();
  }
}

function enviarOrc2() {
  container2.innerHTML = "";
  if (valor.value === "" || valor.value <= 0) {
    criarTexto2("ERRO: Preencha o campo com algum valor maior que zero.", 2);
  } else {
    const valorAdd = Number(valor.value);
    addValor(valorAdd);
    valor.value = "";
    valor.focus();
  }
}

function criarTexto2(msg, cor) {
  const texto = document.createElement("p");
  texto.innerHTML = msg;
  container2.appendChild(texto);
  if (cor === 1) {
    container2.classList.remove("fundovermelho");
    container2.classList.add("fundolaranja");
  } else if (cor === 2) {
    container2.classList.remove("fundolaranja");
    container2.classList.add("fundovermelho");
  }
  texto.classList.add("textoresultado");
}

function addValor(valor) {
  arrayNum.push(valor);
  arrayTexto.push(`Você adicionou R$${valor.toFixed(2)} ao orçamento. <br>`);
  showValor();
}

function showValor() {
  const arrayTextoString = arrayTexto.join(" ");
  containerTexto.innerHTML = arrayTextoString;
}

function calculoOrcamento() {
  if (!adicional) {
    adicional.value = 0;
  }
  const larg = Number(largura.value);
  const alt = Number(altura.value);
  const add = Number(adicional.value);
  const fat = Number(fator.value);
  const jog = Number(jogos.value);
  const conta1 = (larg + add) * (alt + add);
  const conta2 = conta1 * fat;
  return conta2 * jog;
}
