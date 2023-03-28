const express = require('express')
const path = require('path');
const fs = require("fs")

const app = express()
 
app.get('/', function (req, res) {
    fs.readFile('./src/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return;
        }
        
        fs.readFile('./src/styles.css', 'utf8', (err, cssData) => {
            const updateSylesFile = data.replace('<link rel="stylesheet" href="./styles.css">', `<style>${cssData}</style>`);


            fs.readFile('./src/script.js', 'utf8', (err, jsData) => {
                const updateScriptFile = updateSylesFile.replace('<script src="script.js"></script>', `<script>${jsData}</script>`);
                res.send(updateScriptFile)

            });
        });
    })
})

app.get('/detail', function (req, res) {
    fs.readFile('./src/detail.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return;
        }
        
        fs.readFile('./src/styles.css', 'utf8', (err, cssData) => {
            const updateSylesFile = data.replace('<link rel="stylesheet" href="./styles.css">', `<style>${cssData}</style>`);


            fs.readFile('./src/script.js', 'utf8', (err, jsData) => {
                const updateScriptFile = updateSylesFile.replace('<script src="script.js"></script>', `<script>${jsData}</script>`);
                res.send(updateScriptFile)

            });
        });
    })
})

// start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});