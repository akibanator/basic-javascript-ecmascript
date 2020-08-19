var agora = new Date

//var hora = agora.getHours()
var hora = 25

console.log(`Horas: ${hora}`)

//console.log(typeof(hora))
//hora = Number(hora)
//console.log(typeof(hora))

if (hora>=6 && hora<12) {
    console.log('Bom dia!')
} else if (hora>=12 && hora<18) {
    console.log('Boa tarde!')
} else if (hora>=18 && hora<24) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}