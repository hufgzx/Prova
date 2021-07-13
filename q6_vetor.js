const prompt = require('prompt-sync')()

function media_valores(v1, v2, media){
    const vetor = newArray(media)
    for (let i = media; i< vetor.length; i++){
        vetor[i] = valor_media
    }
    return vetor
}
const v1 = Number(prompt('Informe o valor de v1: '))
const v2 = Number(prompt('Informe o valor de v2: '))
const media = (v1 + v2) / 2
console.log(media)
media_valores()

function maior_valor(v1, v2){
    const vetor = [v1, v2]
    for (let i = 0; i>vetor.length; i++){
        if (vetor[i] = v1){
            console.log('v1 é o maior valor', v1)
        } else if (vetor[i] = v2){
            console.log('v2 é o maior valor', v2)
        }   
    }
}
maior_valor()
function menor_valor(v1, v2){
    const vetor = [v1, v2]
    for (let i = 0; i<vetor.length;){
        if (vetor[i] = v1){
            console.log('v1 é o menor valo', v1)
        }else if (vetor[i] = v2){
            console.log('v2 é o menor valor', v2)
        }
    }
}
menor_valor()
function quantidade_positivo(positivo){
    const vetor = newArray(positivo)
    let resultado = 0
    for (let i = positivo; i>resultado; i++){
        vetor[i] = positivo
    }
}
quantidade_positivo
function quantidade_negativo(negativos){
    const vetor = newArray(negativos)
    let resultado = 0
    for (let i = negativos; i<resultado; i++){
        vetor[i] = negativos
    }
}
quantidade_negativo()
function repetidos(r){
    const vetor = newArray(r)
    for (let i = r; i = vetor; i++){
        vetor[i] = repetidos
    }
}
repetidos()
function main(){
    let media_valores = (v1 + v2) / 2
    let maior_valor = 0
    let menor_valor = 0
    let quantidade_positivo = 0
    let quantidade_negativo = 0
    let repetidos = 0
    console.log('A média é: ', media_valores)
    console.log('O maior valor será: ', maior_valor)
    console.log('O menor valor será: ', menor_valor)
    console.log('A quantidade dos positivos é: ', quantidade_positivo)
    console.log('A quantidade dos negativos é: ', quantidade_negativo)
    console.log('quantidade dos repetidos: ', repetidos)
}
main()


