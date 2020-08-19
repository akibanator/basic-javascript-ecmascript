var inicio = 10
var fim =   1
var passo = 1

console.log('teste')
if (inicio>0 && inicio>fim && passo>0 && passo<(inicio-fim)) {
    console.log('Teste')
    var msg = ''
    for (var c = inicio; c >= fim; c-=passo) {
        msg += ' ' + c + ` &#128073 `
    }
}

console.log(msg)

console.log(inicio.toString().length)