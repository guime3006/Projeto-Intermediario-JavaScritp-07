alert("Seja-Bem Vindo")

alert("O Scritp irar retorna a Raiz Quadrada do Número digitado")

let userNumber = prompt(`Por Favor Digite um Número: `)

console.log(`Nu : ${userNumber}`)

function recebeNumberConverteCalcule(){

    userNumber = Number(userNumber)

    let calculo = userNumber ** 0.5

    console.log(`Calcule: ${userNumber} ** 0.5 = ${calculo.toFixed(2)}`)

    return calculo.toFixed(2)
}

document.getElementById("resultado").innerHTML = `A Raiz quadrada de <b>${userNumber}</b> é : ${recebeNumberConverteCalcule()}`
