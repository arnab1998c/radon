const express = require('express');
// const app = express()
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
    let arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"]
    let arrMonths1 = lodash.chunk(arrMonths, 3)
    console.log(arrMonths1)

    let arrOddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let arrOddNumbers1 = lodash.tail(arrOddNumbers)
    console.log(arrOddNumbers1)

    let arrContainsDuplicate = lodash.union([21, 22, 23], [23, 24, 25], [25, 26, 27], [27, 28, 29], [29, 30, 31])
    console.log(arrContainsDuplicate)

    let toObj = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    let toObj1 = lodash.fromPairs(toObj)
    console.log(toObj1)
   
    res.send('Here we go')
})

router.get('/sol1', function (req, res) {

    let arr= [1, 2, 3, 4, 5, 7, 8, 9]
    
    let arrTotal = 0
    for (let i=0; i<arr.length; i++){
         arrTotal = arrTotal + arr[i]
    }

    let len = arr.length + 1
    let consecTotal = len*(len+1)/2
    let missingNumber = consecTotal-arrTotal

    res.send({data: missingNumber})
})

router.get("/sol2", function(req, res){

    let anotherArr = [33, 34, 35, 37, 38]

    anotherArrSum = 0
    for(let i=0; i<anotherArr.length; i++){
        anotherArrSum = anotherArrSum + anotherArr[i]
    }

    let anotherLen = anotherArr.length + 1
    let firstNum = anotherArr[0]
    let lastNum = anotherArr[4]
    let anotherConsecSum = (firstNum+lastNum)*anotherLen/2
    let missingNum = anotherConsecSum - anotherArrSum

    res.send({data: missingNum})
})

module.exports = router;
// adding this comment for no reason