let itemvet = []

/* Uma outra maneira de fazer a validação no input, podemos colocar 2 functions validadoras ao invés de usar 1 if dentro de outro.
    function isNumber(n) {
        if (n>0 && n<=100) {
            return true
        } else {
            return false
        }
    }

    function inLista(n, l) {
        if (l.indexOf(n) != -1) {
            return true
        } else {
            return false
        }
    }

    if (isNumber(num) && inLista(num, itemvet)) {

    }
*/


function adicionar() {
    let num = Number(window.document.getElementById('txtn').value)
    let sel = window.document.getElementById('txtval')
    let resultado = window.document.getElementById('res')
    let msg = window.document.getElementById('msg')

    if (itemvet.indexOf(num) == -1) {
        if (num>0 && num<=100) {
            let item = window.document.createElement('option')
            item.text = `Valor ${num}`
            sel.appendChild(item)
            itemvet.push(num)
            resultado.innerHTML = itemvet
            msg.innerHTML = ''
        } else {
            msg.innerHTML = 'Valor inválido, tente digitar um valor entre 1 e 100.'
        }
    } else {
        msg.innerHTML = 'Valor repetido, adicione outro valor.'
    }
    window.document.getElementById('txtn').value = ''   //Quando for declarar a variavel, declarar sem o value. Para poder usar os métodos e atributos sem problemas.
    window.document.getElementById('txtn').focus()      //Quando for declarar a variavel, declarar sem conversão. Para poder usar os métodos e atributos sem problemas.
}

function calcular() {
    if (itemvet.length == 0) {
        msg.innerHTML = 'Adicionar algum valor antes de finalizar.'
    } else {
        let totalvet = 0
        for (let pos in itemvet) {
            totalvet += itemvet[pos]
        }

        let media = totalvet / Number(itemvet.length)

        msg.innerHTML = `<p>Ao todo, temos ${itemvet.length} números cadastrados.</p>` + `<p>O maior valor informado foi ${Math.max.apply(Math, itemvet)}</p>` + `O menor valor informado foi ${Math.min.apply(Math, itemvet)}.`
            + `<p>Somando todos os valores, temos ${totalvet}</p>` + `A média dos valores digitados é ${media}`
    }
}