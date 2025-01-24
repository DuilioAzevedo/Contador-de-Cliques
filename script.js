const conteiner = document.getElementById("conteiner");
const botaoContar = document.getElementById("botaoContar");
let contador = 0;


botaoContar.addEventListener("click", function() {
  contador= contador+1;
  const valor = document.getElementById("valor");
  valor.textContent = contador;

});
