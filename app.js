//alert('Boas vindas ao jogo do número secreto!');
////let numeroSecreto = parseInt(Math.random() * 10) + 1; // Correção: Adicionado parseInt para garantir que seja um número inteiro
//console.log(numeroSecreto);
//let chute; // Correção: Ponto e vírgula adicionado
//let tentativas = 1; // Correção: Variável para contar o número de tentativas

// enquanto o chute não for igual ao número secreto
//while (chute != numeroSecreto) {
    //chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao numeroSecreto
    //if (chute == numeroSecreto) {
        //break; // Correção: Adicionado break para sair do loop quando o jogador acertar
    //} else {
        //if (numeroSecreto > chute) {
            // Correção: Alterado de console.log para alert para o jogador ver a dica
            //alert(`O número secreto é maior do que o chute (${chute}).`);
        //} else {
            // Correção: Alterado de console.log para alert para o jogador ver a dica
            //alert(`O número secreto é menor do que o chute (${chute}).`);
        //}
        //tentativas++; // Incrementa o número de tentativas
    //}
//}
//if (tentativas > 1) {
    //alert('Parabéns! Você acertou o número secreto! Número de tentativas: ' + tentativas);
//} else {    
    //alert('Parabéns! Você acertou o número secreto na primeira tentativa!');
//}

alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }
