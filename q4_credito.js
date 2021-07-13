const prompt = require('prompt-sync')()

function main(){
    let emprestimo = Number(prompt('Informe o valor do empréstimo: '))
    const parcela = Number(prompt('Informe o valor da parcela: '))
    juros = 1
    mes = 1 
    stop = false

    while (emprestimo > 0 ){
        console.log('Saldo anterior: ${emprestimo.tofixed(2)}')
        emprestimo = emprestimo - parcela

        if (emprestimo < 0){
            emprestimo = parcela - emprestimo
            stop = true
        }
        juros = (emprestimo/ 100)
        emprestimo = emprestimo + juros

        console.log('Novo saldo: ',emprestimo.toFixed(2))
        console.log('Juros do mês: ', juros.toFixed(2))
        console.log('Parcela fixa: ', parcela.toFixed(2))
        mes++

        if (stop == true){
            break
        }
    }
    console.log('Ultima parcela: ', emprestimo.toFixed(2))
}
main()