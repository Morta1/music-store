const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    fs.readFile('./views/index.html', 'utf8', (err, content) => {
        if (err) {throw err;}
        else{
            res.send(content);
        }
    });
});

module.exports = router;