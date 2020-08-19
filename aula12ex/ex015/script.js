function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        res.innerHTML = `<p>Ano inserido inválido</p>`
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `<p>Idade calculada: ${idade}</p>`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade>0 && idade<10) {
                //criança
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade>=10 && idade<21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade>=21 && idade<65) {
                //adulto
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade>=65) {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade>0 && idade<10) {
                //criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade>=10 && idade<21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade>=21 && idade<65) {
                //adulto
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade>=65) {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        //res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com idade ${idade} anos.</p>`
        res.appendChild(img)
    }
}