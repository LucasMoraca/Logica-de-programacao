alert('Boas vindas ao jogo do número secreto!');

let chute = prompt('Escolha um númeor entre 1 e 10');
console.log(`O número escolhido foi ${chute}`);

let numeroScreto = 4;

console.log('Resultado da comparação:', chute == numeroScreto);

if (chute == numeroScreto) {
    alert('Parabéns! Você acertou o número secreto!');
} else {
    console.log('O número secreto era:', numeroScreto);
    alert('Que pena! Você errou o número secreto. Tente novamente!');
}

