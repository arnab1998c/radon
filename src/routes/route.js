const express = require('express');
const { append } = require('express/lib/response');
const externalModule = require('../logger/logger')
const externalModule1 = require('../util/helper')
const externalModule2 = require('../validator/formatter')
const lodash = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
   externalModule.welcome()
   externalModule1.printDate()
   externalModule1.printMonth()
   externalModule1.getBatchInfo()
   externalModule2.trim()
   externalModule2.lower()
   externalModule2.upper()

    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let arrMonths = lodash.chunk(["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"], 3)
    console.log(arrMonths)

    let arrOddNumbers = lodash.tail([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])
    console.log(arrOddNumbers)

    let arrContainsDuplicate = lodash.union([21, 22, 23], [23, 24, 25], [25, 26, 27], [27, 28, 29], [29, 30, 31])
    console.log(arrContainsDuplicate)

    let toObj = lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])
    console.log(toObj)
   
    res.send('Here we go')
})

module.exports = router;
// adding this comment for no reason