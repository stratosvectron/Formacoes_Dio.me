// Código para o desafio da Calculadora de Partidas Rankeadas

let vitorias_heroi = 50
let derrotas_heroi = 20


function calc_rankeadas(numero_vitorias,numero_derrotas){

    saldo_heroi = numero_vitorias - numero_derrotas

    return saldo_heroi


}

function calc_nivel(saldo_vitorias){

    if(saldo_vitorias <10){
       rank = "Ferro" 
    }else if(saldo_vitorias>=11 && saldo_vitorias <=20)
    {
        rank = "Bronze"
    }else if(saldo_vitorias >=21 && saldo_vitorias<=50){
        rank ="Prata"
    }else if(saldo_vitorias >=51 && saldo_vitorias<=80){
        rank ="Ouro"
    }else if(saldo_vitorias >=81 && saldo_vitorias<=90){
        rank ="Diamante"
    }else if(saldo_vitorias >=91 && saldo_vitorias<=100){
        rank ="Lendario"
    }else{
        rank ="Imortal"
    }

    return rank

}    

calc_rankeadas (vitorias_heroi,derrotas_heroi)
calc_nivel(vitorias_heroi)

console.log("O Herói tem de saldo de:", saldo_heroi," vitorias", "e está no nível de: ",rank)

