const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 80;

dataFromFile = fs.readFileSync('data.txt', 'utf-8');

// serving static files
app.use('/static', express.static('static'));

// set template engine as pug
app.set('view engine', 'pug');

// set the views directory
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res)=>{
    res.status(200).render('index');
})
app.get("/show", (req, res)=>{
    res.status(200).render('show', {title: "Display Data", data: dataFromFile});
})

app.listen(port, ()=>{
    console.log("Server started successfully at port 80");
})