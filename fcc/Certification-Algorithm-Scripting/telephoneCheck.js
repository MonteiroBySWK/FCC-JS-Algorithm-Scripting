
function telephoneCheck(str) {
    const RegEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gi

    return RegEx.test(str)

}
console.log(telephoneCheck('1?\s?'))
