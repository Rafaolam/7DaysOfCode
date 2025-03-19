let number = null;
guess = null;

function sortNumber() {
  number = Math.floor(Math.random() * 10);
}

//guess = prompt('Qual é o número?');

function guessNumber() {
  
    i = 0;

    while (i < 3) {

        guess = prompt('Qual é o número?');

        if (isNaN(guess)) {
            alert('Digite um número válido');
            continue;
        }
        guess = Number(guess);

        if (guess === number) {
            console.log('Parabéns, você acertou!');
            return;
        } else if (guess > number) {
            console.log('O número é menor');
           // guess = prompt('Qual é o número?');
        } else {
            console.log('O número é maior');
           // guess = prompt('Qual é o número?');
        }
        i++;
        console.log(`O número chutado foi: ${guess}`);
    }
    if (i === 3) {
        console.log('Que pena, você perdeu!');
    }
    return guess;
}
sortNumber();
guessNumber();
console.log(`O número sorteado foi: ${number}`);
