const trim = function () {
    const string = "     FunctionUp     "
    console.log (string.trim())
}

const changetoLowerCase = function() {
    const string = "FUNCTIONUP"
    console.log (string.toLowerCase())
}

const changeToUpperCase = function() {
    const string = "functionup"
    console.log(string.toUpperCase())
}

module.exports.trim = trim
module.exports.lower = changetoLowerCase
module.exports.upper = changeToUpperCase