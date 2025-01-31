alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log ('o numero secreto é ' + numeroSecreto);
let chute 
let tentativas = 1;
while (chute != numeroSecreto) { 
    chute = prompt (`escolha um número entre 1 e ${numeroMaximo}`);
    console.log(`voçê recebeu o valor ${chute}`)
    if ( numeroSecreto == chute ) {
       break
    } else {
        if (chute > numeroSecreto) {
            alert (' o número secreto é menor que ' + chute );
        }
           else {
             alert(' o número secreto é maior que ' + chute);
        }
        // tentativas++ adiciona 1 ao número de tentativas tentativas = tentativas + 1
        tentativas++;
    }
}
let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert (` Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa} `);
// if (tentativas > 1) {
// alert (` Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas `);
// } else {alert (` Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas `);
// } 