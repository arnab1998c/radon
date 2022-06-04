const express = require('express');
// const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/movies', function (req, res) {

    let arr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(arr)
   
});

router.get('/movies/:indexNumber', function (req, res) {
    let arr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    if (req.params.indexNumber<arr.length) {
        res.send (arr[req.params.indexNumber])
    } else {
        res.send ("movies not found")
    }
})

router.get('/films', function (req, res) {
    let filmNames = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       res.send(filmNames)
       
})

router.get('/films/:filmid', function (req, res) {
    let filmNames = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       if (req.params.filmid<filmNames.length){
           res.send(filmNames[req.params.filmid-1])
       } else {
           res.send("no movies found")
       }

       
})





module.exports = router;
// adding this comment for no reason