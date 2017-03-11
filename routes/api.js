const express = require('express');
const fs = require('fs');
const Api = express.Router();

//load mongo model
const {Album} = require('../models/album');

Api.post('/new_album', (req, res) => {
    const newAlbum = new Album(parsed[i]);
    newAlbum.save()
        .then(function(res){
            console.log("album has been saved");
        })
        .catch(function(err){
            console.log(err);
        });
});

Api.get('/getAlbums', (req, res) => {
    Album.find().exec()
        .then((data)=>{
            res.json(data);
        })
        .catch(()=>{
            res.status(500).json("Error fetching albums");
        })
});

Api.get('/getAlbum', (req, res) => {
    console.log("request");
    console.log(req);
    // Album.findById(req.id).exec()
    //     .then((data)=>{
    //         res.json(data);
    //     })
    //     .catch(()=>{
    //         res.status(500).json("Error fetching albums");
    //     });
});

module.exports = Api;