//Escrevendo as Classes de Um Jogo

let nomeHeroi = "Ricardo"
let IdadeHeroi = 29
let TipoHeroi = "Mago"
let acao

class AventuraHeroi{

constructor(nomeh,idadeh,tipoh){
this.nomeh = nomeh
this.idadeh = idadeh
this.tipoh = tipoh
this.ataque

}

atacar(){

if (this.tipoh == "Mago"){
    this.ataque ="Magia"
}else if (this.tipoh == "Guerreiro"){
    this.ataque ="Espada"
}else if (this.tipoh == "Monge"){
    this.ataque ="Artes Marciais"
}else if (this.tipoh == "Ninja"){
    this.ataque ="Shuriken"
}

//Imprmindo em tela de outra forma
//console.log("O ",this.tipoh," Atacou usando ",this.ataque)

console.log(`o ${this.tipoh} atacou usando ${this.ataque}`)

}

}

acao = new AventuraHeroi(nomeHeroi, IdadeHeroi, TipoHeroi)
acao.atacar()