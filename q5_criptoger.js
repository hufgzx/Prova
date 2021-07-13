const crypto = require("crypto")();
function main(){
const cipher = crypto.creatCipher(dados_criptografar.algoritmo);
const dados_criptografar = {
    algoritmo : "roger"
};

function truncar(){
var frase = prompt('Digite uma frase: ')
const split = frase.split(' ')
console.log(split)
}
truncar()
function inverter(){
    var frase = prompt('Digite sua frase: ')
    var inverter = document.getElementsByName("txt");
    valor = inverter.item(0).nodeValue.toString(frase).split("")
    normal = valor.reverse(frase).join("");
console.log(inverter)
}
inverter()
function vogais(str){
    string.includes("a", "e", "i", "o", "u")
    var vowelsCount = 0
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++){
        if (string.charAt(i) == "a"||string.charAt(i) == "e"|| string.charAt(i) == "i"|| string.charAt(i) == "o"|| string.charAt(i) == "u"){
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
vogais()
}
main()
