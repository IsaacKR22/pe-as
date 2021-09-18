let peca1 = [546, "suspençâo"];
let peca2 = [99, "farol"];
let peca3 = [110, "pistâo"];
let peca4 = [110, "banco"];
let peca5 = [5993, "chassi"];
let peca6 = [100, "grade"];
let peca7 = [642, "EG"];
let peca8 = [456, "AE"];
let peca9 = [500, "roda"];
let peca10 = [322, "porta"];
let peca11 = [140, "freio"];

let listaPecas = [peca1, peca2, peca3, peca4, peca5, peca6, peca7, peca8, peca9,peca10, peca11];
let listaPesos = [peca1[0], peca2[0], peca3[0], peca4[0], peca5[0], peca6[0], peca7[0], peca8[0], peca9[0], peca10[0], peca11[0]];
let listaNomes = [peca1[1], peca2[1], peca3[1], peca4[1], peca5[1], peca6[1], peca7[1], peca8[1], peca9[1], peca10[1], peca11[1]]



for(let contador = 0; contador < listaPecas.length;contador++){
    console.log("NOME " + listaNomes[contador] + " - quantidade de peças:" +listaPecas.length);

}
if(listaPecas.length >10){
    console.log("Cadastro inválido pois excedeu o limite de 10 peças");
}   
if(listaPesos.length <99){
    console.log("cadastro invalido pois é menor que o limite de peso")
}else{console.log("cadastro realizado")}