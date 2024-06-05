import questoes from "./perguntas.js";

const elementoPergunta = document.querySelector(".texto-pergunta");
const elementoRespostas = document.querySelector(".opcoes-resposta");
const contadorElemento = document.querySelector(".contador-pergunta");
const mensagemFinal = document.querySelector(".mensagem-final");
const conteudoQuiz = document.querySelector(".container-quiz");
const telaFinal = document.querySelector(".tela-fim");
const botaoReiniciar = document.querySelector(".tela-fim button");

let indiceQuestaoAtual = 0;
let totalAcertos = 0;

botaoReiniciar.addEventListener("click", reiniciarQuiz);

function reiniciarQuiz() {
  conteudoQuiz.style.display = "flex";
  telaFinal.style.display = "none";
  indiceQuestaoAtual = 0;
  totalAcertos = 0;
  exibirQuestao();
}

function verificarResposta(evento) {
  const respostaSelecionada = evento.target;
  const respostaCorreta = respostaSelecionada.getAttribute("data-correta") === "true";
  if (respostaCorreta) {
    totalAcertos++;
  }
  proximaQuestao();
}

function proximaQuestao() {
  if (indiceQuestaoAtual < questoes.length - 1) {
    indiceQuestaoAtual++;
    exibirQuestao();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  mensagemFinal.textContent = `Você acertou ${totalAcertos} de ${questoes.length} questões!`;
  conteudoQuiz.style.display = "none";
  telaFinal.style.display = "flex";
}

function exibirQuestao() {
  contadorElemento.textContent = `${indiceQuestaoAtual + 1}/${questoes.length}`;
  const questaoAtual = questoes[indiceQuestaoAtual];
  elementoPergunta.textContent = questaoAtual.pergunta;
  elementoRespostas.innerHTML = "";
  
  questaoAtual.respostas.forEach((resposta, index) => {
    const botaoResposta = document.createElement("button");
    botaoResposta.classList.add("botao-resposta");
    botaoResposta.setAttribute("data-correta", resposta.correct);
    botaoResposta.textContent = resposta.option;
    botaoResposta.addEventListener("click", verificarResposta);
    elementoRespostas.appendChild(botaoResposta);
  });
}

exibirQuestao();