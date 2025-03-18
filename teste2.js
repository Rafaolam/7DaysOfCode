let nome = null;
let idade = null;
let linguagem = null;
let resultado = null
let pergunta = null;

nome = prompt("Digite seu nome: ");
idade = prompt("Digite sua idade: ");
linguagem = prompt("Digite sua linguagem favorita: ");

resultado = alert(`Olá, ${nome}! Você tem ${idade} anos e sua linguagem favorita é ${linguagem}.`);


do{
    pergunta = prompt("Você gosta de estudar essa linguagem de programação?");

    if (pergunta == 1) {
        alert("Que legal! Continue estudando e se aprimorando!");
    }else if (pergunta == 2) {
        alert("Que pena! Mas não desista, continue estudando e se aprimorando!");
    } else  
        alert("Valor inválido. Responda com 1 para sim e 2 para não.");
} while (pergunta != 1 && pergunta != 2);

console.log(nome); 
console.log(idade);
console.log(linguagem);