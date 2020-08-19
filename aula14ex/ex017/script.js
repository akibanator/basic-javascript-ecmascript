window.onload = function() {
    mudarTitulo()
}

function mudarTitulo() {
    var tituloh1 =  window.document.getElementById('txttit')
    tituloh1.innerHTML = 'Tabuada'
}

function gerar() {
    var numero = window.document.getElementById('txtNum').value
    var textoRes = window.document.getElementById('txtres')

    var textTab = ''
    var resMult
    if (numero.toString().length > 0) {
        for (var c = 1; c <= 10; c++) {
            resMult = numero * c
            textTab += `${numero} x ${c} = ${resMult} \n`
        }
    } else {
        textoRes.innerHTML = 'Por favor. digite um número'
    }

    textoRes.innerHTML = textTab
}