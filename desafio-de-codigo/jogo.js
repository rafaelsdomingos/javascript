
let vetor1 = ["Ataque", "Pedra", "Pedra", "Papel", "Ataque", "Papel", "Papel", "Pedra", "Ataque"]
let vetor2 = [ "Pedra", "Ataque", "Papel", "Pedra", "Papel", "Ataque", "Papel", "Pedra", "Ataque" ]

let N = 9;
let jogador1, jogador2;

for (let i = 0; i < N; i++) {
    jogador1 = vetor1[i];
    jogador2 = vetor2[i];
    		
//TODO: Complete os espaços em branco com uma possível solução para o desafio

    if      ( jogador1.toUpperCase() === "ATAQUE"  &&  jogador2.toUpperCase() === "ATAQUE" ) console.log("Aniquilacao mutua");
    else if ( jogador1.toUpperCase() === "PAPEL"   &&  jogador2.toUpperCase() === "PAPEL"  ) console.log("Ambos venceram");
    else if ( jogador1.toUpperCase() === "ATAQUE"  &&  jogador2.toUpperCase() === "PEDRA"  ) console.log("Jogador 1 venceu");
    else if ( jogador1.toUpperCase() === "PEDRA"   &&  jogador2.toUpperCase() === "ATAQUE" ) console.log("Jogador 2 venceu");
    else if ( jogador1.toUpperCase() === "PEDRA"   &&  jogador2.toUpperCase() === "PAPEL"  ) console.log("Jogador 1 venceu");
    else if ( jogador1.toUpperCase() === "PAPEL"   &&  jogador2.toUpperCase() === "PEDRA"  ) console.log("Jogador 2 venceu");
    else console.log("Sem ganhador");
    
}