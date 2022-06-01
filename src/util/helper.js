const printDate = function () {
    console.log ("01.06.2022")
}

const printMonth = function () {
    console.log ("June")
}

const getBatchInfo = function () {
    console.log ("Roadon, W3D3, the topic for today is Nodejs module system")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo