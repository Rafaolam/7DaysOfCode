let areaAtuacao = null;  
let linguagemAtuacao = null;
let focoAtuacao = null;
let tecnologiaEspecializacao= [];

areaAtuacao = prompt("Qual a área de atuação para onde quer seguir?");

if (areaAtuacao == "front-end") {
    linguagemAtuacao = prompt("Você quer aprender React ou Vue?");
}else if (areaAtuacao == "back-end") {
    linguagemAtuacao = prompt("Você quer aprender C# ou Java?");
}else {
    alert("Área de atuação inválida");
}

focoAtuacao = prompt("Você quer se especializar nessa área ou quer virar um fullstack?");