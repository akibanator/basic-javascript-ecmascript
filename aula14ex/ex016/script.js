function mudarTitulo() {
    var txtTitulo = window.document.getElementById('txth1')
    txtTitulo.innerHTML = 'Vamos contar'
    //window.document.getElementById('res').innerHTML = txtTitulo
}

function contar() {
    var inicio = Number(window.document.getElementById('txtini').value)
    var fim = Number(window.document.getElementById('txtfim').value)
    var passo = Number(window.document.getElementById('txtpas').value)

    var resultado = window.document.getElementById('res')

    //resultado.innerHTML = inicio = inicio + fim

    if (inicio>0 && fim>inicio && passo>0 && passo<(fim-inicio)) {
        //resultado.innerHTML = 'Entrou no 1'
        var msg = ''
        for (var c = inicio; c <= fim; c+=passo) {
            msg += ' ' + c + ` &#128073 `
        }
        resultado.innerHTML = msg + ' &#128080'
    } else if (inicio>0 && inicio>fim && passo>0 && passo<(inicio-fim)) {
        //resultado.innerHTML = 'Entrou no 2'
        var msg = ''
        for (var c = inicio; c >= fim; c-=passo) {
            msg += ' ' + c + ` &#128073 `
        }
    } else {
        resultado.innerHTML = 'Número inválido, tente novamente'
    }
    resultado.innerHTML = msg + ' &#128080'
}

window.onload = function() {
    mudarTitulo()
}