function rot13(str) {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ/ .!?'
    let secret = ''
    for(let i = 0; i < str.length ; i++) {
        let correcao = alfabeto.indexOf(str[i]) - 13
        if (correcao < 0) {
            correcao = 26 + correcao
        } else if (alfabeto.indexOf(str[i]) > 26) {
            correcao = alfabeto.indexOf(str[i])
        }
        secret += alfabeto[correcao]
    }
    console.log(secret)
    return secret
}

rot13('SERR CVMMN!')