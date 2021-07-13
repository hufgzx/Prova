const prompt = require('prompt-sync')()

function main(){

    let parcela = 0
    let taxatotal = 0

    const valor_compra = Number(prompt('Informe o valor da compra: '))
    const receber_dias = Number(prompt('Informe quantidade de dias entre 2 e 31 dias: '))
    const forma_pagamento = prompt('Informe a forma de pagamento: ')
    const valor_liquido = (valor_compra - taxa_cobrada).toFixed(2)

function forma_pagamento(a_vista, a_prazo){
    for (let i = receber_dias; i = 31; i++){
        if (forma_pagamento = a_vista){
            taxa_cobrada = (0,02 + 0,40)

        } else if (forma_pagamento = a_prazo){
            taxa_cobrada_1 = (0,03 + 0,40)
        
        }
    }
}
for (let i = receber_dias; i = 14; i++){
    if (forma_pagamento = a_vista){
        taxacobrada2 = (0,03 + 0,40)

    } else if (forma_pagamento = a_prazo){
        taxacobrada3 = (0,04 + 0,40)
    
    }
    for (let i = receber_dias; i = 2; i++){
        if (forma_pagamento = a_vista){
            taxacobrada4 = 0,043 + 0,40
        
        } else if (forma_pagamento = a_prazo){
            taxacobrada5 = 0,05 + 0,40

        }
    }
    taxatotal = valor_compra * taxa_cobrada/100 + 0,40
}
function parcelado(){
    if (parcela != 0){
        taxatotal = taxatotal + (valor_compra/100) * parcela
    }
}
parcelado()

console.log('Valor da compra: ', valor_compra)
console.log('Valor liquido: ', valor_liquido)
console.log('Forma de pagamento: ', forma_pagamento)
console.log('Taxa cobrada: ', taxa_cobrada.toFixed(2))
console.log('Valor da taxa total: ', taxatotal.toFixed(2))
}
main()
