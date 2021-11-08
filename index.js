const express = require('express');

const app = express();

var options = { 
  root: __dirname+'/templates/'
}; 

function sendFile(filename, res) {
  return res.sendFile(filename, options)
}

function sendFileSpecial(filename, res, int) {
  res.status(int)
  return res.sendFile(filename, options)
}

app.get('/', (req, res) => {
  sendFile('index.html', res)
});

app.get('/home', (req, res) => {
  sendFile('index.html', res)
});

app.get('/contact', (req, res) => {
  sendFile('contact.html', res)
});

app.get('/style.css', (req, res) => {
  sendFile('style.css', res)
});



app.get('/img/logo.png', (req, res) => {
  sendFile('img/logo.png', res)
});

app.get('/favicon.png', (req, res) => {
  sendFile('favicon.png', res)
});


app.get('*', (req, res) => {
  sendFileSpecial('404.html', res, 404);
});

app.listen(3000, () => {
  console.log('server started');
});