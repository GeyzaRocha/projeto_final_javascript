/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases usando uma estrutura de condição:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
  
    let mensagem = "";
    // evite mexer no código acima!

    let media = (nota1+ nota2 + nota3 + nota4)/4;
    if (nota1 == 0 || nota2 == 0 || nota3 == 0 || nota4 == 0) {
      mensagem = ("Infelizmente você zerou a prova :(")
    }

    if ((nota1 >= 0.1 && nota1 <= 3) || (nota2 >= 0.1 && nota2 <= 3) || (nota3 >= 0.1 && nota3 <= 3) || (nota4 >= 0.1 && nota4 <= 3)) {
      mensagem = `Caramba, deu ruim, você obteve média ${media}. Estude mais e tente novamente!`;
    }
  
    if ((nota1 >= 3.1 && nota1 <= 5.9) || (nota2 >= 3.1 && nota2 <= 5.9) || (nota3 >= 3.1 && nota3 <= 5.9) || (nota4 >= 3.1 && nota4 <= 5.9)) {
      mensagem = `Você obteve media ${media}! Falta pouco para a média.`
    }

    if ((nota1 >= 6 && nota1 <= 7) || (nota2 >= 6 && nota2 <= 7) || (nota3 >= 6 && nota3 <= 7) || (nota4 >= 6 && nota4 <= 7)) {
      mensagem = `Você está na média com ${media}.`
    }

    if ((nota1 >= 7.1 && nota1 <= 9.9) || (nota2 >= 7.1 && nota2 <= 9.9) || (nota3 >= 7.1 && nota3 <= 9.9) || (nota4 >= 7.1 && nota4 <= 9.9)) {
      mensagem = `Notão! Sua média é ${media}!.`
    }

    if (nota1 === 10 && nota2 === 10 && nota3 === 10 && nota4 === 10) {
      mensagem = "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média";
    }



    // Evite mexer na linha de código abaixo!
    document.getElementById("situacaoAluno").innerHTML = mensagem;
}   