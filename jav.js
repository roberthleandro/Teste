var tela = document.getElementById("tela")
let primeiroN = ""
let simbolo = ""
let novoCalculo = false

function clicar(valor){
    if (novoCalculo) {
        tela.value = '';
        novoCalculo = false;
      } 
    tela.value += valor;
  
}

function calc(valor){
n1 = Number(tela.value) 
simbolo = valor
tela.value = ""
}

function resultado(){
    let resultado;
    if (simbolo === '+') {
        resultado = n1 + Number(tela.value);
      } else if (simbolo === '-') {
        resultado = n1 - Number(tela.value);
      } else if (simbolo === '*') {
        resultado = n1 * Number(tela.value);
      } else if (simbolo === '/') {
        resultado = n1 / Number(tela.value);}
        else if (simbolo === '%') {
            resultado = (Number(tela.value) / 100) * n1;
      }
      else if (0 == 0) {
        resultado = valor
      }
    tela.value = resultado
    novoCalculo = true;
    n1 = resultado;
}

function clica(){
    tela.value = ""
    tela.value = "";
    n1 = 0;
    simbolo = "";
}

