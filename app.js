alert('Boas vindas ao jogo do número secreto!');
let numeroScreto = 29;
let chute = prompt('Escolha um númeor entre 1 e 100');

if (numeroScreto == chute) {
    alert('Parabéns, você acertou o número secreto!');
}else if (numeroScreto < chute) {
    alert('O número secreto é menor do que o número escolhido!');
}else if (numeroScreto > chute) {
    alert('O número secreto é maior do que o número escolhido!');
}