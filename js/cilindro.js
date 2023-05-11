const botao = document.querySelector("#orc-enviar3");
const container = document.querySelector("#cel-resultado");
const embalagem = document.querySelector("#cil-larg");
const cilindro = document.querySelector("#cil-value");

botao.addEventListener("click", function (e) {
  container.innerHTML = "";
  if (embalagem.value === "" || cilindro.value === "") {
    criarTexto("ERRO: Por favor preencher todos os campos acima.", 2);
  } else if (embalagem.value <= 0 || cilindro.value <= 0) {
    criarTexto(
      "ERRO: Por favor use apenas números positivos ou diferentes de zero.",
      2
    );
  } else if (embalagem.value > cilindro.value) {
    criarTexto("ERRO: A medida da embalagem é maior que o cilindro.", 2);
  } else {
    if (cilindro.value % embalagem.value === 0) {
      const resultado = calculo();
      criarTexto(`A embalagem cabe ${resultado} vezes no cilindro.`, 1);
    } else {
      const resultado = calculo();
      const resto = calculoResto();
      criarTexto(
        `A embalagem cabe ${resultado} vezes no cilindro, sobrando um espaço de ${resto}.`,
        1
      );
    }
  }
});

function criarTexto(msg, cor) {
  const texto = document.createElement("p");
  texto.innerHTML = msg;
  container.appendChild(texto);
  if (cor === 1) {
    container.classList.remove("fundovermelho");
    container.classList.add("fundolaranja");
  } else if (cor === 2) {
    container.classList.remove("fundolaranja");
    container.classList.add("fundovermelho");
  }
  texto.classList.add("textoresultado");
}

function calculo() {
  const resultado = cilindro.value / embalagem.value;
  return Math.floor(resultado);
}

function calculoResto() {
  return cilindro.value % embalagem.value;
}
