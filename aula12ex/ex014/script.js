function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>0 && hora<12) {
        img.src = 'fotomanha.png'
        window.document.body.style.background = '#c2a062'
    } else if (hora>=12 && hora<18) {
        img.src = 'fototarde.png'
        window.document.body.style.background = '#9e471a'
    } else if (hora>=18 && hora<24) {
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#032e67'
    }
}