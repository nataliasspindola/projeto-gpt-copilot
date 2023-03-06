const animais = ["gato", "cachorro", "hipopotamo", "papagaio", "avestruz", "camundongo"];
const frutas = ["banana", "abacaxi", "morango", "uva", "maracuja", "laranja"];
const cores = ["azul", "vermelho", "amarelo", "verde", "roxo", "laranja"];

const palavras = [...animais, ...frutas, ...cores];

const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
const letrasErradas = [];
const letrasCorretas = [];

document.addEventListener("DOMContentLoaded", () => {
  const letraForm = document.querySelector("#letra-form");
  mostrarDica(palavraSecreta);
  letraForm.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const letraInput = document.querySelector("#letra-input");
    const letra = letraInput.value.trim().toLowerCase();
    letraInput.value = "";
    if (letra.length === 1 && /^[a-z]$/.test(letra)) {
      if (letrasErradas.includes(letra) || letrasCorretas.includes(letra)) {
        mostrarAvisoLetraRepetida();
      } else {
        if (palavraSecreta.includes(letra)) {
          letrasCorretas.push(letra);
        } else {
          letrasErradas.push(letra);
        }
      }
      atualizarJogo();
    }
  });
});

function mostrarDica(palavra) {
  const dicaContainer = document.querySelector("#dica-container");
  
  if (animais.includes(palavra)) {
    dicaContainer.innerHTML = "A palavra secreta é um animal!";
  } else if (frutas.includes(palavra)) {
    dicaContainer.innerHTML = "A palavra secreta é uma fruta!";
  } else if (cores.includes(palavra)) {
    dicaContainer.innerHTML = "A palavra secreta é uma cor!";
  } else {
    dicaContainer.innerHTML = "Não sei a que grupo pertence a palavra secreta!";
  }
}

function atualizarJogo() {
  mostrarLetrasErradas();
  mostrarLetrasCertas();
  desenharForca();
  checarJogo();
}

function mostrarLetrasErradas() {
  const div = document.querySelector(".letras-erradas-container");
  div.innerHTML = "<h3>Letras erradas</h3>";
  letrasErradas.forEach((letra) => {
    div.innerHTML += `<span>${letra}</span>`;
  });
}

function mostrarLetrasCertas() {
  const container = document.querySelector(".palavra-secreta-container");
  container.innerHTML = "";
  palavraSecreta.split("").forEach((letra) => {
    if (letrasCorretas.includes(letra)) {
      container.innerHTML += `<span>${letra}</span>`;
    } else {
      container.innerHTML += `<span>_</span>`;
    }
  });
}

function checarJogo() {
  let mensagem = "";
  const container = document.querySelector(".palavra-secreta-container");
  const partesCorpo = document.querySelectorAll(".forca-parte");

  if (letrasErradas.length === partesCorpo.length) {

    alert(mensagem = "Fim de jogo! Você perdeu!");
  }

  if (palavraSecreta === container.innerText) {
    alert(mensagem = "Parabéns! Você ganhou!");
  }
}

function desenharForca() {
  const partesCorpo = document.querySelectorAll(".forca-parte");
  for (let i = 0; i < letrasErradas.length; i++) {
    partesCorpo[i].style.display = "block";
  }
}

function mostrarAvisoLetraRepetida() {
  const aviso = document.querySelector(".aviso-palavra-repetida");
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 1000);
}

function isLetra(codigo) {
  return codigo >= 65 && codigo <= 90;
}

function reiniciarJogo() {
  window.location.reload();
}
