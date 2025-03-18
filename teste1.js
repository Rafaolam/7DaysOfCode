let valor1 = 1;
let valor2 = 2;

if (valor1 === valor2){
    console.log("Valores iguais e do mesmo tipo");
}if  (valor1 == valor2 && valor1 !== valor2){
    console.log("Valores iguais mas não do mesmo tipo");
}if (typeof(valor1) !== typeof(valor2) && valor1 != valor2){
    console.log("Valores diferentes e de tipos diferentes");
} else {
    console.log("Valores diferentes e do mesmo tipo");
}