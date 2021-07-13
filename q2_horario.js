const prompt = require('prompt-sync')()

function transformar_tempo(h,m,s){
    dt = time(h = 1, m = 5, s = 7)
    dt.isoformat(tiemespec = 'seconds')
}
function main(){
    console.log(' ## Tempo ')
    let horas = Number(prompt('Informe a hora: '))
    let minutos = Number(prompt('Informe o minuto: '))
    let segundos = Number(prompt('Informe o segundo: '))

    const resultado = transformar_tempo(horas, minutos, segundos);
    console.log('O resultado de horas e minutos para segundos é: ', resultado )
}
main()