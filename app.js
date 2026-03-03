alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute; // Correção: Ponto e vírgula adicionado
let tentativas = 1; // Correção: Variável para contar o número de tentativas

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao numeroSecreto
    if (chute == numeroSecreto) {
        alert('Parabéns! Você acertou o número secreto! Número de tentativas: ' + tentativas);
    } else {
        if (numeroSecreto > chute) {
            // Correção: Alterado de console.log para alert para o jogador ver a dica
            alert(`O número secreto é maior do que o chute (${chute}).`);
        } else {
            // Correção: Alterado de console.log para alert para o jogador ver a dica
            alert(`O número secreto é menor do que o chute (${chute}).`);
        }
        tentativas++; // Incrementa o número de tentativas
    }
}