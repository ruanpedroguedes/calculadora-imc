function calcularImc() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado')

    
    if (isNaN(altura) && isNaN(peso)) {
        resultado.innerHTML = "Sinto muito alguma informação foi digitada de forma errada";
    }


    const imc  = peso / (altura*altura);
    var categoria = "";

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
      } else if (imc < 25) {
        categoria = " Peso Normal";
      } else if (imc < 30) {
        categoria = "Acima do peso";
      } else {
        categoria = "Obesa";
      }
    
      resultado.innerHTML = "O seu IMC é: " + imc.toFixed(2) + " (" + categoria + ")";
}
