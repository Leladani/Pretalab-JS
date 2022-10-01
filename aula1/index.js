function validarVoto(idade){
    if (idade >= 18 && idade < 70 ) {
        console.log('Voce deve votar e o voto e obrigatorio')
    } else if (idade >= 16 && idade < 18 || idade >=70 ) {
        console.log('Voce pode votar, mas nao e obrigatorio')
    } else {
        console.log('Voce nao pode votar')
    }
}

function somar (num1, num2) {
    const resultado = num1 + num2
    console.log(resultado)
}

function bemVinda(nome, idade) {
    console.log("Bem-vinda, " + nome + ". Parabens pelos " + idade + " anos!")
}

bemVinda('Dani', '44')
validarVoto(63)