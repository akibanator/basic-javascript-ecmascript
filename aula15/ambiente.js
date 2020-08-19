var num = [5, 8, 9 ,3]
num.push(1)
num[3] = 6
num.push(7)
console.log(`O vetor tem ${num.length} elementos.`)
num.sort()

console.log(num)

console.log(`Nosso é o ${num}`)

console.log(`O primeiro valor do valor é ${num[0]}`)

for (let pos=0;pos<num.length;pos++) {
    console.log(num[pos])
}