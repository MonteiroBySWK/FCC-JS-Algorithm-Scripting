function convertToRoman(num) {
    let rom = [['M'], ['C', 'CD', 'D', 'CM'], ['X', 'XL', 'L', 'XC'], ['I', 'IV','V','IX']]
    let newNum = ['', '', '', '']
    num = num.toString()
    while (num.length < 4) {
        num = '0' + num
    }
    let resposta = ''
    for(let i = 0; i < 4; i++) {
        switch(true) {
            case (num[i] < 4):
                for(let j = 1; j <= Number(num[i]); j++) {
                    newNum[i] += rom[i][0]
                }
                break
            case (num[i] == 4):
                newNum[i] += rom[i][1]
                break
            case (num[i] == 5):
                newNum[i] += rom[i][2]
                break
            case (num[i] < 9):
                newNum[i] += rom[i][2]
                for(let j = 6; j <= Number(num[i]); j++) {
                    newNum[i] += rom[i][0]
                }
                break
            case (num[i] == 9):
                newNum[i] += rom[i][3]
                break
        }

        if (num[i] !== '0') {
            resposta += newNum[i]
        }
    }
    return resposta
}

convertToRoman(99)